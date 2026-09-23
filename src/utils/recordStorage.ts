import type { PersonalRecord } from '../types/record'

const DATABASE = 'caderno-digital-registros'
const STORE = 'registros'
let connection: Promise<IDBDatabase> | undefined

function openDatabase(): Promise<IDBDatabase> {
  if (connection) return connection
  connection = new Promise((resolve, reject) => {
    if (!globalThis.indexedDB) {
      reject(new Error('O armazenamento local não está disponível neste navegador.'))
      return
    }
    const request = indexedDB.open(DATABASE, 1)
    let blocked = false
    request.onupgradeneeded = () => {
      const db = request.result
      if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE, { keyPath: 'id' })
    }
    request.onsuccess = () => {
      if (blocked) { request.result.close(); return }
      request.result.onversionchange = () => { request.result.close(); connection = undefined }
      resolve(request.result)
    }
    request.onerror = () => reject(request.error)
    request.onblocked = () => {
      blocked = true
      reject(new Error('Feche outras abas do Caderno e tente abrir os registros novamente.'))
    }
  })
  connection.catch(() => { connection = undefined })
  return connection
}

function isRecord(value: unknown): value is PersonalRecord {
  if (!value || typeof value !== 'object') return false
  const item = value as Partial<PersonalRecord>
  return item.version === 1 && typeof item.id === 'string' &&
    (item.mode === 'free' || item.mode === 'guided') && typeof item.title === 'string' &&
    typeof item.text === 'string' && typeof item.createdAt === 'string' &&
    Number.isFinite(Date.parse(item.createdAt)) && typeof item.updatedAt === 'string' &&
    Number.isFinite(Date.parse(item.updatedAt)) && !!item.answers && typeof item.answers === 'object' &&
    !Array.isArray(item.answers) && Object.values(item.answers).every(answer => typeof answer === 'string')
}

export async function listRecords(): Promise<PersonalRecord[]> {
  const db = await openDatabase()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readonly')
    const request = tx.objectStore(STORE).getAll()
    tx.oncomplete = () => {
      const records: unknown[] = request.result
      if (!records.every(isRecord)) {
        reject(new Error('Há um registro em formato não reconhecido. Os dados foram preservados; não limpe o navegador.'))
        return
      }
      resolve(records.sort((a, b) => b.createdAt.localeCompare(a.createdAt) || b.id.localeCompare(a.id)))
    }
    tx.onerror = () => reject(tx.error)
    tx.onabort = () => reject(tx.error)
  })
}

// The comparison and write share one transaction, preventing stale tabs from overwriting records.
async function mutateRecord(id: string, expectedUpdatedAt: string | null, record?: PersonalRecord) {
  const db = await openDatabase()
  return new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite')
    const store = tx.objectStore(STORE)
    const request = store.get(id)
    let conflict = false
    let failure: unknown
    request.onsuccess = () => {
      const previous = request.result as PersonalRecord | undefined
      if ((previous?.updatedAt ?? null) !== expectedUpdatedAt) {
        conflict = true
        tx.abort()
        return
      }
      try {
        if (record) store.put(record)
        else store.delete(id)
      } catch (error) { failure = error; tx.abort() }
    }
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
    tx.onabort = () => reject(conflict
      ? new Error('Este registro foi alterado ou excluído em outra aba. Sua escrita permanece aqui. Você pode baixar o texto atual em PDF antes de voltar à lista e reabrir a versão salva.')
      : failure ?? tx.error)
  })
}

export function saveRecord(record: PersonalRecord, expectedUpdatedAt: string | null) {
  return mutateRecord(record.id, expectedUpdatedAt, record)
}

export function deleteRecord(record: PersonalRecord) {
  return mutateRecord(record.id, record.updatedAt)
}

export function storageError(error: unknown) {
  if (error instanceof DOMException && error.name === 'QuotaExceededError') {
    return 'O navegador está sem espaço para salvar. Sua escrita permanece nesta tela: baixe uma cópia em PDF antes de sair e libere espaço para tentar novamente.'
  }
  if (error instanceof Error && error.message && !(error instanceof DOMException)) return error.message
  return 'Não foi possível acessar ou salvar os registros neste navegador. Verifique as permissões de armazenamento e tente novamente. Sua escrita permanece nesta tela; você também pode baixar uma cópia em PDF.'
}
