import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Text.module.css'

export type TextElement = 'p' | 'span' | 'div'
export type TextVariant = 'body' | 'lead' | 'small' | 'caption'
export type TextTone = 'default' | 'muted' | 'strong'

export interface TextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  as?: TextElement
  variant?: TextVariant
  tone?: TextTone
}

export function Text({
  children,
  as: Tag = 'p',
  variant = 'body',
  tone = 'default',
  className = '',
  ...props
}: TextProps) {
  const classes = [styles.text, styles[variant], styles[tone], className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}
