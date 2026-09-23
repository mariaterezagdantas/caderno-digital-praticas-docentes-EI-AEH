import { Download, FileDown, LockKeyhole } from 'lucide-react'
import type { DownloadItem } from '../../../types/content'
import { Badge, Heading, Icon, Text } from '../../atoms'
import styles from './DownloadCard.module.css'

export interface DownloadCardProps {
  item: DownloadItem
}

function DownloadCardContent({ item }: DownloadCardProps) {
  return (
    <>
      <span className={styles.icon} aria-hidden="true">
        <Icon icon={item.href ? FileDown : LockKeyhole} size="lg" />
      </span>
      <div className={styles.copy}>
        <Heading level={3} size="sm">{item.title}</Heading>
        <Text tone="muted">{item.description}</Text>
        {(item.fileType || item.fileSize) && (
          <Text variant="small" tone="muted">
            {[item.fileType, item.fileSize].filter(Boolean).join(' · ')}
          </Text>
        )}
      </div>
      {item.href ? (
        <span className={styles.action}>
          Baixar <Icon icon={Download} size="sm" />
        </span>
      ) : (
        <Badge tone="terracotta">Indisponível</Badge>
      )}
    </>
  )
}

export function DownloadCard({ item }: DownloadCardProps) {
  if (item.href) {
    return (
      <a className={[styles.card, styles.interactive].join(' ')} download={item.fileName} href={item.href}>
        <DownloadCardContent item={item} />
      </a>
    )
  }

  return (
    <article className={[styles.card, styles.unavailable].join(' ')} aria-label={`${item.title} — download indisponível`}>
      <DownloadCardContent item={item} />
    </article>
  )
}
