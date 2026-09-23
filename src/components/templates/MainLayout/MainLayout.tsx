import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { SkipLink } from '../../atoms'
import { Footer, Header } from '../../organisms'
import styles from './MainLayout.module.css'

export function MainLayout() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [hash, pathname])

  return (
    <div className={styles.layout}>
      <SkipLink />
      <Header />
      <main className={styles.main} id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
