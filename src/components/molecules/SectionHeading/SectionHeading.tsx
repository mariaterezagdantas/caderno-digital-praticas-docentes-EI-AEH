import { Badge, Heading, Text } from '../../atoms'
import styles from './SectionHeading.module.css'

export interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  id,
}: SectionHeadingProps) {
  return (
    <div className={[styles.heading, centered ? styles.centered : ''].filter(Boolean).join(' ')}>
      <Badge>{eyebrow}</Badge>
      <Heading id={id} level={2} size="xl">
        {title}
      </Heading>
      {description && (
        <Text variant="lead" tone="muted" className={styles.description}>
          {description}
        </Text>
      )}
    </div>
  )
}
