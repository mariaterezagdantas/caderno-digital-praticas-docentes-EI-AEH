import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ModuleNavigationTarget } from '../../../types/content'
import { Icon, Text } from '../../atoms'
import styles from './ModulePagination.module.css'

export interface ModulePaginationProps {
  previous?: ModuleNavigationTarget
  next?: ModuleNavigationTarget
}

function NavigationTarget({ target, direction }: { target: ModuleNavigationTarget; direction: 'previous' | 'next' }) {
  const isPrevious = direction === 'previous'
  return (
    <Link className={[styles.link, styles[direction]].join(' ')} to={target.path}>
      {isPrevious && <Icon icon={ArrowLeft} size="md" />}
      <span className={styles.copy}>
        <Text variant="caption" tone="muted">{target.label}</Text>
        <Text tone="strong">{target.title}</Text>
      </span>
      {!isPrevious && <Icon icon={ArrowRight} size="md" />}
    </Link>
  )
}

export function ModulePagination({ previous, next }: ModulePaginationProps) {
  return (
    <nav aria-label="Navegação entre módulos" className={styles.navigation}>
      {previous ? <NavigationTarget direction="previous" target={previous} /> : <span />}
      {next && <NavigationTarget direction="next" target={next} />}
    </nav>
  )
}
