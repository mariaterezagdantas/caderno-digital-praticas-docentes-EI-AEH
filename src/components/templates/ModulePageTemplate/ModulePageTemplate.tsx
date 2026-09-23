import type { ModuleContent, ModuleNavigationTarget } from '../../../types/content'
import { Container, Divider } from '../../atoms'
import { ModulePagination, TableOfContents } from '../../molecules'
import { ContentRenderer, InternalPageHeader } from '../../organisms'
import styles from './ModulePageTemplate.module.css'

export interface ModulePageTemplateProps {
  content: ModuleContent
  previous?: ModuleNavigationTarget
  next?: ModuleNavigationTarget
}

export function ModulePageTemplate({ content, previous, next }: ModulePageTemplateProps) {
  return (
    <article aria-labelledby="module-title">
      <InternalPageHeader metadata={content.metadata} />
      <Container className={styles.layout} size="lg">
        <aside className={styles.sidebar}>
          <TableOfContents sections={content.sections} />
        </aside>
        <div className={styles.mainColumn}>
          <ContentRenderer sections={content.sections} />
          <Divider />
          <ModulePagination previous={previous} next={next} />
        </div>
      </Container>
    </article>
  )
}
