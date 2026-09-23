import { BookOpenCheck, Compass, GraduationCap } from 'lucide-react'
import { Container, Heading, Icon, Text } from '../../atoms'
import styles from './RepositoryIntroduction.module.css'

const principles = [
  {
    icon: BookOpenCheck,
    title: 'Conhecimento acessível',
    text: 'Conteúdos organizados para apoiar decisões pedagógicas com clareza e segurança.',
  },
  {
    icon: Compass,
    title: 'Prática contextualizada',
    text: 'Referências que dialogam com as singularidades do trabalho docente no contexto hospitalar.',
  },
  {
    icon: GraduationCap,
    title: 'Formação continuada',
    text: 'Um espaço permanente de estudo, reflexão e desenvolvimento profissional.',
  },
] as const

export function RepositoryIntroduction() {
  return (
    <section className={styles.section} aria-labelledby="about-title">
      <Container size="lg">
        <div className={styles.introduction}>
          <div className={styles.heading}>
            <Text className={styles.eyebrow} variant="caption">Sobre o Caderno Digital</Text>
            <Heading id="about-title" level={2} size="xl">Conhecimento que acolhe e orienta</Heading>
          </div>
          <Text className={styles.description} variant="lead" tone="muted">Um Caderno Digital criado para reunir fundamentos, orientações e recursos que fortaleçam o trabalho docente na Educação Infantil em contexto hospitalar.</Text>
        </div>
        <div className={styles.grid}>
          {principles.map((principle) => (
            <article className={styles.item} key={principle.title}>
              <span className={styles.icon} aria-hidden="true">
                <Icon icon={principle.icon} size="lg" />
              </span>
              <Heading level={3} size="sm">{principle.title}</Heading>
              <Text tone="muted">{principle.text}</Text>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
