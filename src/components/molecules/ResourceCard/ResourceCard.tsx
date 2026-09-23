import { BookOpen, ExternalLink, FileText, Film, Link as LinkIcon, Newspaper } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ResourceItem, ResourceType } from '../../../types/content'
import { Badge, Heading, Icon, Text } from '../../atoms'
import styles from './ResourceCard.module.css'

const resourceConfig: Record<ResourceType, { label: string; icon: typeof BookOpen }> = {
  book: { label: 'Livro', icon: BookOpen },
  film: { label: 'Filme', icon: Film },
  article: { label: 'Artigo', icon: Newspaper },
  document: { label: 'Documento', icon: FileText },
  link: { label: 'Link', icon: LinkIcon },
}

export interface ResourceCardProps {
  resource: ResourceItem
}

function ResourceCardContent({ resource, isExternal = false }: ResourceCardProps & { isExternal?: boolean }) {
  const config = resourceConfig[resource.type]

  return (
    <>
      <div className={styles.topline}>
        <span className={styles.icon} aria-hidden="true">
          <Icon icon={config.icon} size="lg" />
        </span>
        <Badge tone={resource.href ? 'sage' : 'terracotta'}>
          {resource.href ? config.label : 'Link não disponível'}
        </Badge>
      </div>
      <div className={styles.copy}>
        <Heading level={3} size="sm">{resource.title}</Heading>
        {resource.meta && <Text variant="small" tone="muted">{resource.meta}</Text>}
        <Text tone="muted">{resource.description}</Text>
      </div>
      {resource.href && (
        <span className={styles.access}>
          Acessar recurso {isExternal && <Icon icon={ExternalLink} size="sm" />}
        </span>
      )}
    </>
  )
}

export function ResourceCard({ resource }: ResourceCardProps) {
  if (resource.href) {
    const isInternal = resource.href.startsWith('/')

    if (isInternal) {
      return (
        <Link className={[styles.card, styles.interactive].join(' ')} to={resource.href}>
          <ResourceCardContent resource={resource} />
        </Link>
      )
    }

    return (
      <a className={[styles.card, styles.interactive].join(' ')} href={resource.href} rel="noopener noreferrer" target="_blank">
        <ResourceCardContent resource={resource} isExternal />
      </a>
    )
  }

  return (
    <article className={[styles.card, styles.unavailable].join(' ')} aria-label={`${resource.title} — link não disponível`}>
      <ResourceCardContent resource={resource} />
    </article>
  )
}
