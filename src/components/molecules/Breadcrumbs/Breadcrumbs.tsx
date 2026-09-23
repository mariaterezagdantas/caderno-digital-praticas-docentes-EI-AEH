import { ChevronRight, Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Icon, VisuallyHidden } from '../../atoms'
import styles from './Breadcrumbs.module.css'

export interface BreadcrumbItem {
  label: string
  path?: string
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Navegação estrutural" className={styles.breadcrumbs}>
      <ol className={styles.list}>
        <li>
          <Link className={styles.link} to="/">
            <Icon icon={Home} size="sm" />
            <VisuallyHidden>Início</VisuallyHidden>
          </Link>
        </li>
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1
          return (
            <li className={styles.item} key={`${item.label}-${index}`}>
              <Icon icon={ChevronRight} size="sm" />
              {item.path && !isCurrent ? (
                <Link className={styles.link} to={item.path}>{item.label}</Link>
              ) : (
                <span aria-current={isCurrent ? 'page' : undefined} className={styles.current}>
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
