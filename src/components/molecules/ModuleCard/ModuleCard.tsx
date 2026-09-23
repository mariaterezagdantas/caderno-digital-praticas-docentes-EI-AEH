import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { RepositoryModule } from '../../../types/module'
import { Heading, Icon, Text, VisuallyHidden } from '../../atoms'
import styles from './ModuleCard.module.css'

export interface ModuleCardProps {
  module: RepositoryModule
}

export function ModuleCard({ module }: ModuleCardProps) {
  return (
    <article className={[styles.card, styles[module.accent]].join(' ')}>
      <Link className={styles.link} to={module.path}>
        <span className={styles.iconBox}>
          <Icon icon={module.icon} size="lg" />
        </span>
        <div className={styles.copy}>
          <Heading level={3} size="md">
            {module.title}
          </Heading>
          <Text tone="muted">{module.description}</Text>
        </div>
        <span aria-hidden="true" className={styles.arrow}>
          <Icon icon={ArrowUpRight} size="md" />
        </span>
        <VisuallyHidden>Acessar {module.title}</VisuallyHidden>
      </Link>
    </article>
  )
}
