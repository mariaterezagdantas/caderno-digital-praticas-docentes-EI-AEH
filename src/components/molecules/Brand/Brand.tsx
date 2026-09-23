import { BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Icon, Text } from '../../atoms'
import styles from './Brand.module.css'

export interface BrandProps {
  compact?: boolean
}

export function Brand({ compact = false }: BrandProps) {
  return (
    <Link aria-label="Caderno Digital — Página inicial" className={styles.brand} to="/">
      <span aria-hidden="true" className={styles.mark}>
        <Icon icon={BookOpen} size="md" />
      </span>
      {!compact && (
        <span className={styles.copy}>
          <Text as="span" tone="strong" className={styles.title}>
            Caderno Digital
          </Text>
          <Text as="span" variant="small" tone="muted" className={styles.subtitle}>
            Práticas Docentes
          </Text>
        </span>
      )}
    </Link>
  )
}
