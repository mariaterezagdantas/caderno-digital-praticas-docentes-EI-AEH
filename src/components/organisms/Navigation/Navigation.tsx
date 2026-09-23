import { navigationItems } from '../../../data/navigation'
import { NavigationLink } from '../../molecules'
import styles from './Navigation.module.css'

export interface NavigationProps {
  variant?: 'desktop' | 'mobile'
  onNavigate?: () => void
}

export function Navigation({ variant = 'desktop', onNavigate }: NavigationProps) {
  return (
    <nav aria-label="Navegação principal" className={styles[variant]}>
      <ul className={styles.list}>
        {navigationItems.map((item) => (
          <li key={item.path}>
            <NavigationLink
              compact={variant === 'desktop'}
              item={item}
              onNavigate={onNavigate}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}
