import type { ContentMetadata } from '../../../types/content'
import { Badge, Container, Heading, Text } from '../../atoms'
import { Breadcrumbs } from '../../molecules'
import styles from './InternalPageHeader.module.css'

export interface InternalPageHeaderProps {
  metadata: ContentMetadata
}

export function InternalPageHeader({ metadata }: InternalPageHeaderProps) {
  return (
    <header className={styles.header}>
      <Container size="lg">
        <Breadcrumbs items={[{ label: metadata.title }]} />
        <div className={styles.copy}>
          <Badge>{metadata.moduleLabel ?? 'Módulo do Caderno Digital'}</Badge>
          <Heading id="module-title" level={1} size="display">{metadata.title}</Heading>
          <Text className={styles.description} variant="lead" tone="muted">
            {metadata.description}
          </Text>
        </div>
      </Container>
    </header>
  )
}
