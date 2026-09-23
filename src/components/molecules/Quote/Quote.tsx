import { Quote as QuoteIcon } from 'lucide-react'
import type { QuoteBlock } from '../../../types/content'
import { Icon, Text } from '../../atoms'
import styles from './Quote.module.css'

export type QuoteProps = Omit<QuoteBlock, 'type'>

export function Quote({ text, attribution }: QuoteProps) {
  return (
    <blockquote className={styles.quote}>
      <Icon icon={QuoteIcon} size="lg" />
      <Text as="div" variant="lead" className={styles.text}>{text}</Text>
      {attribution && <cite className={styles.cite}>{attribution}</cite>}
    </blockquote>
  )
}
