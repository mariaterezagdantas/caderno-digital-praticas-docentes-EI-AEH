import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Heading.module.css'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
export type HeadingSize = 'display' | 'xl' | 'lg' | 'md' | 'sm'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  level?: HeadingLevel
  size?: HeadingSize
}

export function Heading({
  children,
  level = 2,
  size,
  className = '',
  ...props
}: HeadingProps) {
  const Tag = `h${level}` as const
  const resolvedSize = size ?? (level === 1 ? 'display' : level === 2 ? 'xl' : 'lg')
  const classes = [styles.heading, styles[resolvedSize], className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}
