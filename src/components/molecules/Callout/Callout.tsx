import { Info, Lightbulb, Sparkles } from 'lucide-react'
import type { CalloutBlock } from '../../../types/content'
import { Heading, Icon, Text } from '../../atoms'
import styles from './Callout.module.css'

const icons = {
  highlight: Sparkles,
  guidance: Lightbulb,
  note: Info,
}

export type CalloutProps = Omit<CalloutBlock, 'type'>

export function Callout({ title, text, tone }: CalloutProps) {
  return (
    <aside className={[styles.callout, styles[tone]].join(' ')} aria-label={title}>
      <span className={styles.icon} aria-hidden="true">
        <Icon icon={icons[tone]} size="lg" />
      </span>
      <div className={styles.copy}>
        <Heading level={3} size="sm">{title}</Heading>
        <Text>{text}</Text>
      </div>
    </aside>
  )
}
