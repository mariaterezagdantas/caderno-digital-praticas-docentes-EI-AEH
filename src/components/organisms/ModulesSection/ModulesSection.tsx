import { repositoryModules } from '../../../data/modules'
import { suggestedSearchTerms } from '../../../data/searchTerms'
import { useModuleSearch } from '../../../hooks/useModuleSearch'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container, Heading, Icon, Text } from '../../atoms'
import { SearchBar } from '../../molecules'
import { ModuleSymbol } from '../ModuleIllustration/ModuleIllustration'
import styles from './ModulesSection.module.css'

export function ModulesSection() {
  const { query, setQuery, filteredModules } = useModuleSearch(repositoryModules)

  return (
    <section className={styles.section} id="modulos" tabIndex={-1} aria-labelledby="modules-title">
      <Container size="lg">
        <div className={styles.header}>
          <div className={styles.heading}>
            <Text className={styles.eyebrow} variant="caption">Percursos de aprendizagem</Text>
            <Heading id="modules-title" level={2} size="xl">Explore o Caderno Digital</Heading>
            <Text tone="muted">Escolha um tema para explorar fundamentos, orientações e recursos pedagógicos.</Text>
          </div>
          <SearchBar
            onChange={setQuery}
            suggestions={suggestedSearchTerms}
            value={query}
          />
        </div>
        <Text className={styles.resultCount} variant="small" tone="muted" aria-live="polite">
          {filteredModules.length === 1
            ? '1 módulo encontrado'
            : `${filteredModules.length} módulos encontrados`}
        </Text>
        {filteredModules.length > 0 ? (
          <ol className={styles.index} aria-label="Módulos do Caderno">
            {filteredModules.map((module) => {
              const number = repositoryModules.findIndex(item => item.id === module.id) + 1
              return (
                <li key={module.id} value={number}>
                  <Link className={styles.entry} to={module.path}>
                    <span className={styles.marker} aria-hidden="true">
                      <span>{String(number).padStart(2, '0')}</span>
                      <ModuleSymbol slug={module.path.slice(1)} />
                    </span>
                    <div className={styles.copy}>
                      <Heading level={3} size="md">{module.title}</Heading>
                      <Text tone="muted">{module.description}</Text>
                    </div>
                    <Icon icon={ArrowRight} className={styles.arrow} />
                  </Link>
                </li>
              )
            })}
          </ol>
        ) : (
          <div className={styles.empty} role="status">
            <Text tone="strong">Nenhum módulo encontrado.</Text>
            <Text tone="muted">Tente pesquisar outro termo ou limpe a busca.</Text>
          </div>
        )}
      </Container>
    </section>
  )
}
