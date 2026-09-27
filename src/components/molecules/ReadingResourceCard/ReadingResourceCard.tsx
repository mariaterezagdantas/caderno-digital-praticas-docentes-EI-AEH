import { BookOpen, ExternalLink } from 'lucide-react'
import type { ResourceItem } from '../../../types/content'
import styles from './ReadingResourceCard.module.css'

export function ReadingResourceCard({ resource }: { resource: ResourceItem }) {
  const reading = resource.reading

  return (
    <article className={styles.card} aria-labelledby={`${resource.id}-title`}>
      <div className={styles.heading}>
        <BookOpen size={22} aria-hidden="true" />
        <span>{reading?.cover ? 'E-book · Leitura docente' : 'Literatura infantil'}</span>
      </div>
      {reading?.cover && (
        <img className={styles.cover} src={reading.cover.src} alt={reading.cover.alt} width={641} height={1000} loading="lazy" />
      )}
      <h3 id={`${resource.id}-title`}>{resource.title}</h3>
      {resource.meta && <p className={styles.meta}>{resource.meta}</p>}
      <p>{resource.description}</p>
      {reading?.reference && <p className={styles.reference}><strong>Referência bibliográfica:</strong> {reading.reference}</p>}
      {reading?.mediation && <div><h4>Possibilidades de mediação pedagógica</h4><p>{reading.mediation}</p></div>}
      {reading?.relevance && <div><h4>Educação Infantil em contexto hospitalar</h4><p>{reading.relevance}</p></div>}
      {resource.href && (
        <a className={styles.access} href={resource.href} target="_blank" rel="noopener noreferrer">
          {reading?.accessLabel ?? 'Acessar recurso'} <ExternalLink size={16} aria-hidden="true" />
          <span className={styles.newTab}>(nova aba)</span>
        </a>
      )}
    </article>
  )
}
