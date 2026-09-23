import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Badge.module.css'

export type BadgeTone = 'sage' | 'mist' | 'terracotta'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  tone?: BadgeTone
}

export function Badge({
  children,
  tone = 'sage',
  className = '',
  ...props
}: BadgeProps) {
  const classes = [styles.badge, styles[tone], className]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}
