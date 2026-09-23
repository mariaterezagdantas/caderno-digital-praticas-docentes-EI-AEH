import type { HTMLAttributes } from 'react'
import styles from './Divider.module.css'

export type DividerOrientation = 'horizontal' | 'vertical'

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: DividerOrientation
}

export function Divider({
  orientation = 'horizontal',
  className = '',
  ...props
}: DividerProps) {
  const classes = [styles.divider, styles[orientation], className]
    .filter(Boolean)
    .join(' ')

  return (
    <hr
      aria-orientation={orientation}
      className={classes}
      {...props}
    />
  )
}
