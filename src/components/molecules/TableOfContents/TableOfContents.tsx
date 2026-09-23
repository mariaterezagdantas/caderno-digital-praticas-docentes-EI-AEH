import type { ContentSection } from '../../../types/content'
import { Text } from '../../atoms'
import styles from './TableOfContents.module.css'

export interface TableOfContentsProps {
  sections: ContentSection[]
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  return (
    <nav aria-labelledby="toc-title" className={styles.toc}>
      <Text id="toc-title" variant="caption" tone="muted">Nesta página</Text>
      <ol className={styles.list}>
        {sections.map((section, index) => (
          <li key={section.id}>
            <a className={styles.link} href={`#${section.id}`}>
              <span aria-hidden="true" className={styles.number}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className={styles.label}>{section.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
