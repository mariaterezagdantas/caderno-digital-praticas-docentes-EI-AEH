import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useBeforeUnload, useBlocker } from 'react-router-dom'
import { ArrowLeft, ArrowRight, BookOpen, Download, NotebookPen, PenLine, Printer, ShieldCheck, Trash2 } from 'lucide-react'
import { Button, Container } from '../../components/atoms'
import { Breadcrumbs } from '../../components/molecules'
import { recordModeLabel, recordPrompts } from '../../data/recordPrompts'
import { paths } from '../../routes/paths'
import type { PersonalRecord, RecordDraft, RecordMode } from '../../types/record'
import { deleteRecord, listRecords, saveRecord, storageError } from '../../utils/recordStorage'
import { ConfirmDialog } from './ConfirmDialog'
import { RecordContent, RecordDates } from './RecordContent'
import styles from './Registros.module.css'

type Screen = 'list' | 'choose' | 'edit' | 'view'
const blankDraft = (mode: RecordMode): RecordDraft => ({ mode, title: '', text: '', answers: {} })
const draftOf = (record: PersonalRecord): RecordDraft => ({ mode: record.mode, title: record.title, text: record.text, answers: { ...record.answers } })

export function RegistrosPage() {
  const [records, setRecords] = useState<PersonalRecord[]>([])
  const [screen, setScreen] = useState<Screen>('list')
  const [selected, setSelected] = useState<PersonalRecord | null>(null)
  const [draft, setDraft] = useState<RecordDraft>(blankDraft('free'))
  const [initialDraft, setInitialDraft] = useState('')
  const [loading, setLoading] = useState(true)
  const [available, setAvailable] = useState(false)
  const [busy, setBusy] = useState(false)
  const [exporting, setExporting] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null)
  const heading = useRef<HTMLHeadingElement>(null)
  const previousScreen = useRef(screen)
  const dirty = screen === 'edit' && JSON.stringify(draft) !== initialDraft
  const blocker = useBlocker(dirty || busy)

  const refresh = useCallback(async () => {
    setLoading(true)
    try {
      setRecords(await listRecords())
      setAvailable(true)
      setError('')
    } catch (reason) {
      setAvailable(false)
      setError(storageError(reason))
    } finally { setLoading(false) }
  }, [])

  useEffect(() => { void refresh() }, [refresh])
  useEffect(() => {
    const previous = document.title
    document.title = 'Meu Espaço de Registros | Caderno Digital'
    return () => { document.title = previous }
  }, [])
  useEffect(() => {
    const update = () => { if (document.visibilityState === 'visible' && screen === 'list') void refresh() }
    document.addEventListener('visibilitychange', update)
    return () => document.removeEventListener('visibilitychange', update)
  }, [refresh, screen])
  useEffect(() => {
    if (previousScreen.current === screen) return
    previousScreen.current = screen
    heading.current?.focus()
    heading.current?.scrollIntoView({ block: 'start', behavior: 'instant' })
  }, [screen])
  useBeforeUnload(useCallback((event: BeforeUnloadEvent) => {
    if (dirty || busy) { event.preventDefault(); event.returnValue = '' }
  }, [dirty, busy]))

  function transition(action: () => void) {
    if (busy) return
    if (dirty) setPendingAction(() => action)
    else action()
  }
  function backToList() {
    setScreen('list'); setSelected(null); setMessage(''); setError(''); void refresh()
  }
  function start(mode: RecordMode) {
    const next = blankDraft(mode)
    setDraft(next); setInitialDraft(JSON.stringify(next)); setSelected(null)
    setError(''); setMessage(''); setScreen('edit')
  }
  function open(record: PersonalRecord) {
    setSelected(record); setScreen('view'); setError(''); setMessage('')
  }
  function edit() {
    if (!selected) return
    const next = draftOf(selected)
    setDraft(next); setInitialDraft(JSON.stringify(next)); setScreen('edit'); setMessage('')
  }
  function currentRecord(): PersonalRecord {
    const now = new Date().toISOString()
    return {
      ...draft, id: selected?.id ?? crypto.randomUUID(), version: 1,
      title: draft.title.trim() || 'Registro sem título',
      createdAt: selected?.createdAt ?? now,
      updatedAt: selected ? new Date(Math.max(Date.now(), Date.parse(selected.updatedAt) + 1)).toISOString() : now,
    }
  }
  async function save() {
    if (busy) return
    if (selected && !dirty) { setScreen('view'); return }
    setBusy(true); setError(''); setMessage('')
    try {
      const record = currentRecord()
      await saveRecord(record, selected?.updatedAt ?? null)
      setRecords(previous => [record, ...previous.filter(item => item.id !== record.id)].sort((a, b) => b.createdAt.localeCompare(a.createdAt)))
      setSelected(record); setInitialDraft(JSON.stringify(draft)); setScreen('view')
      setMessage('Registro salvo neste navegador. Você pode retomá-lo quando quiser.')
    } catch (reason) { setError(storageError(reason)) }
    finally { setBusy(false) }
  }
  async function remove() {
    if (!selected || busy) return
    setConfirmDelete(false); setBusy(true); setError('')
    try {
      await deleteRecord(selected)
      setRecords(previous => previous.filter(item => item.id !== selected.id))
      setSelected(null); setScreen('list'); setMessage('Registro excluído deste navegador.')
    } catch (reason) { setError(storageError(reason)) }
    finally { setBusy(false) }
  }
  async function download(items: PersonalRecord[]) {
    if (exporting) return
    setExporting(true); setError(''); setMessage('Preparando o PDF neste dispositivo…')
    try {
      const { downloadRecordsPdf } = await import('../../utils/recordPdf')
      await downloadRecordsPdf(items)
      setMessage('PDF preparado. Consulte os downloads do navegador.')
    } catch { setMessage(''); setError('Não foi possível gerar o PDF. Os registros foram preservados. Tente novamente ou use Imprimir.') }
    finally { setExporting(false) }
  }
  function print() {
    document.body.dataset.printPersonalRecord = 'true'
    const cleanup = () => { delete document.body.dataset.printPersonalRecord; window.removeEventListener('afterprint', cleanup) }
    window.addEventListener('afterprint', cleanup)
    window.print()
  }

  const screenTitle = screen === 'list' ? 'Meus registros' : screen === 'choose' ? 'Como você gostaria de escrever?' : screen === 'edit' ? `${selected ? 'Editar registro' : 'Novo registro'} · ${recordModeLabel[draft.mode]}` : 'Retomar meu registro'

  return <div className={styles.page}>
    <header className={styles.introduction}>
      <Container size="lg">
        <Breadcrumbs items={[{ label: 'Meu Espaço de Registros' }]} />
        <p className={styles.eyebrow}><NotebookPen size={20} aria-hidden="true" /> Consultar → Refletir → Registrar → Retomar</p>
        <h1>Meu Espaço de Registros</h1>
        <p className={styles.lead}>Um espaço pessoal para registrar experiências, reflexões e aprendizagens construídas no cotidiano da prática docente.</p>
        <p className={styles.description}>Este é um espaço pessoal de escrita e reflexão sobre a prática docente. Aqui, você pode registrar situações vivenciadas, decisões pedagógicas, aprendizagens e questões que emergem do cotidiano do Atendimento Educacional Hospitalar. Não há respostas certas nem um percurso obrigatório. Os registros podem ser construídos e retomados de acordo com suas necessidades e experiências.</p>
        <p className={styles.privacy}><ShieldCheck size={19} aria-hidden="true" /> Seus registros são pessoais e não são enviados à pesquisadora.</p>
      </Container>
    </header>
    <Container size="lg" className={styles.workspace}>
      <div className={styles.workspaceHeader}>
        <h2 ref={heading} tabIndex={-1} className={styles.screenTitle}>{screenTitle}</h2>
        {screen === 'list' ? <Button disabled={loading || !available} onClick={() => { setScreen('choose'); setMessage('') }}>+ Novo registro</Button>
          : <Button variant="ghost" disabled={busy} leadingIcon={<ArrowLeft size={18} aria-hidden="true" />} onClick={() => transition(backToList)}>Meus registros</Button>}
      </div>
      <p role="status" aria-live="polite" className={styles.status}>{message}</p>
      {error && <div role="alert" className={styles.error}><p>{error}</p>{screen === 'list' && <Button variant="secondary" onClick={() => void refresh()} disabled={loading}>Tentar novamente</Button>}</div>}

      {screen === 'list' && <>
        {loading ? <p aria-live="polite">Abrindo seus registros neste navegador…</p> : available && <>
          {records.length === 0 ? <section className={styles.empty} aria-label="Nenhum registro salvo">
            <NotebookPen size={36} aria-hidden="true" />
            <h3>Uma página à sua espera</h3>
            <p>Você ainda não possui registros. Uma experiência, uma pergunta ou uma aprendizagem pode ser o começo. Escreva no seu tempo, do seu jeito.</p>
            <Button variant="secondary" onClick={() => setScreen('choose')}>Criar meu primeiro registro</Button>
          </section> : <>
            <div className={styles.listToolbar}><p>{records.length} {records.length === 1 ? 'registro' : 'registros'} · do mais recente ao mais antigo, pela criação</p>
              <Button variant="secondary" disabled={exporting} leadingIcon={<Download size={18} aria-hidden="true" />} onClick={() => void download(records)}>Baixar todos os registros</Button>
            </div>
            <ul className={styles.recordList}>{records.map(record => <li key={record.id}>
              <article className={styles.card}>
                <div><p className={styles.eyebrow}>{recordModeLabel[record.mode]}</p><h3>{record.title}</h3><RecordDates record={record} /></div>
                <Button variant="secondary" onClick={() => open(record)} aria-label={`Abrir registro: ${record.title}`} trailingIcon={<ArrowRight size={18} aria-hidden="true" />}>Abrir registro</Button>
              </article>
            </li>)}</ul>
          </>}
        </>}
      </>}

      {screen === 'choose' && <>
        <p className={styles.sectionIntro}>Escolha o caminho que fizer sentido para este momento. Você pode escolher uma forma diferente a cada novo registro.</p>
        <div className={styles.choices}>
          <section className={styles.choice}><PenLine aria-hidden="true" /><h3>Escrita livre</h3><p>Uma página aberta para suas experiências, perguntas e aprendizagens, com as palavras e o percurso que você escolher.</p><Button onClick={() => start('free')}>Começar escrita livre</Button></section>
          <section className={styles.choice}><BookOpen aria-hidden="true" /><h3>Reflexão orientada</h3><p>Perguntas que podem acompanhar sua escrita. Responda às que desejar, na ordem que preferir. Nenhuma é obrigatória.</p><Button variant="secondary" onClick={() => start('guided')}>Começar reflexão orientada</Button></section>
        </div>
      </>}

      {screen === 'edit' && <form className={styles.editor} onSubmit={event => { event.preventDefault(); void save() }}>
        <p className={styles.sectionIntro}>{draft.mode === 'free' ? 'Escreva com liberdade. O título também é opcional, e você pode retomar o texto depois.' : 'Estas perguntas são apenas disparadores de reflexão. Nenhuma resposta é obrigatória; escreva apenas onde e quanto desejar.'}</p>
        <fieldset disabled={busy} className={styles.fields}>
          <legend className={styles.srOnly}>Sua escrita pessoal</legend>
          <label className={styles.titleLabel} htmlFor="record-title">Título do registro <span>(opcional)</span></label>
          <input id="record-title" className={styles.titleInput} value={draft.title} onChange={event => setDraft({ ...draft, title: event.target.value })} placeholder="Um título para reencontrar este momento" autoComplete="off" />
          <div>
            {draft.mode === 'free' ? <div className={styles.writingField}><label htmlFor="record-text">Minha escrita</label><textarea id="record-text" className={styles.freeWriting} value={draft.text} onChange={event => setDraft({ ...draft, text: event.target.value })} placeholder="Esta página é sua. Por onde você gostaria de começar?" rows={16} /></div>
              : recordPrompts.map((prompt, index) => <section className={styles.prompt} key={prompt.id}>
                  <h3><span className={styles.promptNumber} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>{prompt.title}</h3>
                  <label htmlFor={`answer-${prompt.id}`}>{prompt.question}</label>
                  <textarea id={`answer-${prompt.id}`} rows={5} value={draft.answers[prompt.id] ?? ''} onChange={event => setDraft({ ...draft, answers: { ...draft.answers, [prompt.id]: event.target.value } })} />
                </section>)}
          </div>
        </fieldset>
        <div className={styles.editorFooter}>
          <p>{dirty ? 'Há alterações ainda não salvas.' : 'Salve quando quiser guardar este registro.'}</p>
          <div className={styles.actions}>
            <Button type="submit" disabled={busy}>{busy ? 'Salvando…' : 'Salvar registro'}</Button>
            <Button variant="secondary" disabled={busy || exporting} onClick={() => void download([currentRecord()])}>Baixar texto atual em PDF</Button>
            <Button variant="ghost" disabled={busy} onClick={() => transition(() => { if (selected) setScreen('view'); else backToList() })}>Cancelar edição</Button>
          </div>
          <p className={styles.small}>O download guarda uma cópia do texto atual em PDF. Para retomá-lo e editá-lo aqui, use Salvar registro.</p>
        </div>
      </form>}

      {screen === 'view' && selected && <>
        <div className={styles.actions}>
          <Button onClick={edit} disabled={busy} leadingIcon={<PenLine size={18} aria-hidden="true" />}>Editar registro</Button>
          <Button variant="secondary" disabled={exporting || busy} onClick={() => void download([selected])} leadingIcon={<Download size={18} aria-hidden="true" />}>Baixar em PDF</Button>
          <Button variant="secondary" onClick={print} leadingIcon={<Printer size={18} aria-hidden="true" />}>Imprimir</Button>
          <Button variant="ghost" className={styles.deleteButton} disabled={busy} onClick={() => setConfirmDelete(true)} leadingIcon={<Trash2 size={18} aria-hidden="true" />}>Excluir registro</Button>
        </div>
        <RecordContent record={selected} />
      </>}

      <aside className={styles.storageNote} aria-label="Sobre seus registros">
        <ShieldCheck size={21} aria-hidden="true" />
        <div><p>Os registros ficam armazenados neste navegador/dispositivo. Caso os dados do navegador sejam apagados ou outro dispositivo seja utilizado, os registros poderão não estar disponíveis.</p><p className={styles.small}>Este espaço não é instrumento de pesquisa, coleta de dados ou avaliação. Não há envio, publicação ou compartilhamento de registros. Em dispositivos compartilhados, outras pessoas que usem o mesmo perfil do navegador podem acessar o que foi salvo. Uma cópia em PDF permite guardar sua escrita fora do navegador.</p></div>
      </aside>
      <aside className={styles.moduleConnection}>
        <BookOpen size={23} aria-hidden="true" /><div><h3>Para acompanhar sua reflexão</h3><p>O módulo 9 apresenta princípios para documentar experiências e pensar sobre os saberes construídos na prática.</p><Link to={paths.experiencias}>Consultar o módulo 9 — Experiências docentes <ArrowRight size={16} aria-hidden="true" /></Link></div>
      </aside>
    </Container>

    {confirmDelete && selected && <ConfirmDialog title="Excluir este registro?" description={`O registro “${selected.title}” será excluído deste navegador. Essa ação não pode ser desfeita. PDFs já baixados permanecem no seu dispositivo.`} confirmLabel="Excluir definitivamente" onCancel={() => setConfirmDelete(false)} onConfirm={() => void remove()} />}
    {pendingAction && <ConfirmDialog title="Sair sem salvar?" description="Há alterações ainda não salvas. Você pode continuar aqui e salvar sua escrita antes de sair." confirmLabel="Sair sem salvar" onCancel={() => setPendingAction(null)} onConfirm={() => { const action = pendingAction; setPendingAction(null); action() }} />}
    {blocker.state === 'blocked' && <ConfirmDialog title={busy ? 'Salvamento em andamento' : 'Sair sem salvar?'} description={busy ? 'Aguarde a conclusão do salvamento para continuar.' : 'Há alterações ainda não salvas. Continue aqui para salvá-las ou saia descartando essas alterações.'} confirmLabel={busy ? 'Continuar aqui' : 'Sair sem salvar'} onCancel={() => blocker.reset()} onConfirm={() => { if (busy) blocker.reset(); else blocker.proceed() }} />}
  </div>
}
