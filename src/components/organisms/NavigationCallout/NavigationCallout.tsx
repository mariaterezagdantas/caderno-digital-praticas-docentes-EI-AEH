import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container, Heading, Icon, Text } from '../../atoms'
import styles from './NavigationCallout.module.css'

export function NavigationCallout() {
  return (
    <section className={styles.section} aria-labelledby="callout-title">
      <Container size="lg">
        <div className={styles.card}>
          <div className={styles.copy}>
            <Text variant="caption" tone="muted">Comece por aqui</Text>
            <Heading id="callout-title" level={2} size="lg">
              Conheça a construção deste Produto Educacional
            </Heading>
            <Text tone="muted">
              Saiba como o Caderno Digital foi organizado para apoiar a formação e a prática docente.
            </Text>
          </div>
          <Link className={styles.link} to="/sobre">
            Sobre o Caderno Digital
            <Icon icon={ArrowRight} />
          </Link>
        </div>
      </Container>
    </section>
  )
}
