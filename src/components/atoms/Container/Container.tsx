import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Container.module.css'

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl'
export type ContainerElement = 'div' | 'main' | 'section'

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  as?: ContainerElement
  size?: ContainerSize
}

export function Container({
  children,
  as: Tag = 'div',
  size = 'xl',
  className = '',
  ...props
}: ContainerProps) {
  const classes = [styles.container, styles[size], className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}
