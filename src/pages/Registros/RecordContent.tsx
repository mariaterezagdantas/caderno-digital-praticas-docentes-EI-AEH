import { formatRecordDate, recordModeLabel, recordPrompts } from '../../data/recordPrompts'
import type { PersonalRecord } from '../../types/record'
import styles from './Registros.module.css'

export function RecordDates({ record }: { record: PersonalRecord }) {
  return <div className={styles.dates}>
    <p>Criado em <time dateTime={record.createdAt}>{formatRecordDate(record.createdAt)}</time></p>
    {record.updatedAt !== record.createdAt && <p>Última edição em <time dateTime={record.updatedAt}>{formatRecordDate(record.updatedAt)}</time></p>}
  </div>
}

export function RecordContent({ record }: { record: PersonalRecord }) {
  return <article className={styles.paper} aria-label="Conteúdo do registro">
    <div className={styles.printHeading}>
      <p>Caderno Digital de Práticas Docentes na Educação Infantil em Contexto Hospitalar</p>
      <h1>Meu Espaço de Registros</h1>
    </div>
    <p className={styles.eyebrow}>{recordModeLabel[record.mode]}</p>
    <h2 className={styles.recordTitle}>{record.title}</h2>
    <RecordDates record={record} />
    {record.mode === 'free'
      ? <div className={styles.written}>{record.text || 'Este registro ainda não tem texto.'}</div>
      : recordPrompts.map(prompt => <section key={prompt.id} className={styles.answer}>
          <h3>{prompt.title}</h3>
          <p className={styles.question}>{prompt.question}</p>
          <div className={styles.written}>{record.answers[prompt.id] || 'Sem resposta registrada.'}</div>
        </section>)}
  </article>
}
