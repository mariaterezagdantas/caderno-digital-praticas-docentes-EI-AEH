import { NavLink } from 'react-router-dom'
import type { NavigationItem } from '../../../types/navigation'
import styles from './NavigationLink.module.css'

export interface NavigationLinkProps {
  item: NavigationItem
  compact?: boolean
  onNavigate?: () => void
}

export function NavigationLink({
  item,
  compact = false,
  onNavigate,
}: NavigationLinkProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        [styles.link, isActive ? styles.active : ''].filter(Boolean).join(' ')
      }
      end={item.path === '/'}
      onClick={onNavigate}
      to={item.path}
    >
      {compact ? (item.shortLabel ?? item.label) : item.label}
    </NavLink>
  )
}
