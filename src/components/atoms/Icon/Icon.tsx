import type { LucideIcon } from 'lucide-react'
import styles from './Icon.module.css'

export type IconSize = 'sm' | 'md' | 'lg'

export interface IconProps {
  icon: LucideIcon
  size?: IconSize
  label?: string
  className?: string
}

export function Icon({
  icon: SvgIcon,
  size = 'md',
  label,
  className = '',
}: IconProps) {
  const classes = [styles.icon, styles[size], className].filter(Boolean).join(' ')

  return (
    <SvgIcon
      aria-hidden={label ? undefined : true}
      aria-label={label}
      className={classes}
      focusable="false"
      role={label ? 'img' : undefined}
      strokeWidth={1.75}
    />
  )
}
