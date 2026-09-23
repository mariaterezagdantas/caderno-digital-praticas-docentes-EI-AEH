import type { AnchorHTMLAttributes, ReactNode } from 'react'
import styles from './SkipLink.module.css'

export interface SkipLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode
}

export function SkipLink({
  children = 'Pular para o conteúdo principal',
  href = '#main-content',
  className = '',
  ...props
}: SkipLinkProps) {
  const classes = [styles.skipLink, className].filter(Boolean).join(' ')

  return (
    <a className={classes} href={href} {...props}>
      {children}
    </a>
  )
}
