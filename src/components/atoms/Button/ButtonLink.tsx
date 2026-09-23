import type { ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import type { ButtonSize, ButtonVariant } from './Button'
import styles from './Button.module.css'

export interface ButtonLinkProps extends LinkProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
}

export function ButtonLink({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leadingIcon,
  trailingIcon,
  className = '',
  ...props
}: ButtonLinkProps) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Link className={classes} {...props}>
      {leadingIcon && <span className={styles.icon}>{leadingIcon}</span>}
      <span>{children}</span>
      {trailingIcon && <span className={styles.icon}>{trailingIcon}</span>}
    </Link>
  )
}
