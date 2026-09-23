import type { HTMLAttributes, ReactNode } from 'react'
import styles from './VisuallyHidden.module.css'

export interface VisuallyHiddenProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
}

export function VisuallyHidden({
  children,
  className = '',
  ...props
}: VisuallyHiddenProps) {
  const classes = [styles.visuallyHidden, className].filter(Boolean).join(' ')

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}
