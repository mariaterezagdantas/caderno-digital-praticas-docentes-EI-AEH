import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Button, Container, Icon } from '../../atoms'
import { Brand } from '../../molecules'
import { Navigation } from '../Navigation'
import styles from './Header.module.css'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isMenuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  return (
    <header className={styles.header}>
      <Container className={styles.bar}>
        <Brand />
        <Navigation />
        <Button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          className={styles.menuButton}
          onClick={() => setIsMenuOpen((current) => !current)}
          size="sm"
          variant="ghost"
        >
          <Icon icon={isMenuOpen ? X : Menu} label="" size="lg" />
        </Button>
      </Container>
      {isMenuOpen && (
        <div className={styles.mobilePanel} id="mobile-navigation">
          <Container>
            <Navigation variant="mobile" onNavigate={() => setIsMenuOpen(false)} />
          </Container>
        </div>
      )}
    </header>
  )
}
