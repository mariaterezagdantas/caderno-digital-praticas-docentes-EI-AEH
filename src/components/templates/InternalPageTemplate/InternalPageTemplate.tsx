import type { ReactNode } from 'react'
import { Badge, Container, Heading, Text } from '../../atoms'
import styles from './InternalPageTemplate.module.css'

export interface InternalPageTemplateProps {
  title: string
  description: string
  eyebrow?: string
  children?: ReactNode
}

export function InternalPageTemplate({
  title,
  description,
  eyebrow = 'Caderno Digital',
  children,
}: InternalPageTemplateProps) {
  return (
    <section className={styles.section} aria-labelledby="page-title">
      <Container size="lg">
        <div className={styles.intro}>
          <Badge>{eyebrow}</Badge>
          <Heading level={1} size="xl" id="page-title">
            {title}
          </Heading>
          <Text variant="lead" tone="muted" className={styles.description}>
            {description}
          </Text>
        </div>
        {children}
      </Container>
    </section>
  )
}
