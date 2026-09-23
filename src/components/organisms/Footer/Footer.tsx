import { Container, Divider, Text } from '../../atoms'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Divider />
        <div className={styles.content}>
          <Text tone="strong">Desenvolvido no âmbito do PPGEEsp/UFRN · 2026.</Text>
        </div>
      </Container>
    </footer>
  )
}
