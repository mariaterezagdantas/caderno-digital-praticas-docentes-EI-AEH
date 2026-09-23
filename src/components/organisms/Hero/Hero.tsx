import { ArrowDown } from 'lucide-react'
import { Container, Heading, Icon, Text } from '../../atoms'
import { HeroIllustration } from '../HeroIllustration'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Container size="lg" className={styles.grid}>
        <div className={styles.copy}>
          <Text className={styles.eyebrow} variant="caption">Produto educacional de mestrado</Text>
          <Heading className={styles.title} id="hero-title" level={1} size="display">
            Caderno Digital de Práticas Docentes na Educação Infantil em Contexto Hospitalar
          </Heading>
          <Text className={styles.subtitle} variant="lead" tone="strong">
            Estratégias pedagógicas e experiências para a prática docente com crianças hospitalizadas
          </Text>
          <Text className={styles.institutional} tone="muted">
            Desenvolvido no âmbito do Mestrado Profissional em Educação Especial – PPGEEsp/UFRN.
          </Text>
          <a className={styles.continuation} href="#modulos">
            <span>Continue para explorar o Caderno</span>
            <Icon icon={ArrowDown} aria-hidden="true" />
          </a>
        </div>
        <HeroIllustration />
      </Container>
    </section>
  )
}
