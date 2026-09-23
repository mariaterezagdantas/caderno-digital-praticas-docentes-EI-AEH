import { useEffect, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowLeft, ArrowRight, List, ChevronDown, BookOpen, Lightbulb, Info, MessageCircle, FileText, ExternalLink } from 'lucide-react'
import { Container } from '../../atoms'
import { Breadcrumbs, ModulePagination } from '../../molecules'
import { ContentRenderer } from '../../organisms'
import type { ModulePageTemplateProps } from '../ModulePageTemplate/ModulePageTemplate'
import type { ContentBlock, ContentSection } from '../../../types/content'
import { ModuleIllustration, ModuleSymbol } from '../../organisms/ModuleIllustration/ModuleIllustration'
import styles from './EditorialModule.module.css'

function renderEditorialBlock(block: ContentBlock, index: number, section: ContentSection) {
  if (block.type === 'callout') {
    const Symbol = { highlight: BookOpen, guidance: Lightbulb, note: Info }[block.tone]
    return (
      <aside className={`${styles.callout} ${styles[block.tone]}`} aria-label={block.title}>
        <Symbol size={22} aria-hidden="true" />
        <div><h3>{block.title}</h3><p>{block.text}</p></div>
      </aside>
    )
  }
  const preceding = section.blocks[index - 1]
  const reflectionIntroduction = preceding?.type === 'paragraph' && preceding.text === 'Como convite à reflexão, a docente pode se perguntar:'
  const questionList = block.type === 'list' && block.items.length > 0 && block.items.every(item => item.trim().endsWith('?'))
  if (block.type === 'list' && (reflectionIntroduction || questionList)) {
    const ListElement = block.ordered ? 'ol' : 'ul'
    return <div className={styles.reflection}><MessageCircle size={22} aria-hidden="true" /><ListElement>{block.items.map(item => <li key={item}>{item}</li>)}</ListElement></div>
  }
  if (block.type === 'resources') {
    return (
      <ul className={styles.references}>
        {block.items.map(resource => (
          <li key={resource.id}>
            <FileText size={21} aria-hidden="true" />
            <div>
              <h3>{resource.title}</h3>
              {resource.meta && <p className={styles.referenceMeta}>{resource.meta}</p>}
              <p>{resource.description}</p>
              {resource.href?.startsWith('/') ? (
                <Link to={resource.href}>Acessar recurso <ArrowRight size={16} aria-hidden="true" /></Link>
              ) : resource.href ? (
                <a href={resource.href} target="_blank" rel="noopener noreferrer">Acessar recurso <ExternalLink size={16} aria-hidden="true" /><span className={styles.newTab}>(nova aba)</span></a>
              ) : <p>Link não disponível</p>}
            </div>
          </li>
        ))}
      </ul>
    )
  }
  return undefined
}

/** Shared editorial presentation; academic content remains in its original data files. */
export function EditorialModule({ content, previous, next, openingAside }: ModulePageTemplateProps & { openingAside?: ReactNode }) {
  const { metadata, sections } = content
  const [active, setActive] = useState(0)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      let current = 0
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id)
        if (element && element.getBoundingClientRect().top <= 180) current = index
      })
      setActive(current)
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [sections])

  const index = (
    <ol className={styles.indexList}>
      {sections.map((section, i) => (
        <li key={section.id}>
          <a href={`#${section.id}`} aria-current={active === i ? 'location' : undefined}>
            <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            {section.title}
          </a>
        </li>
      ))}
    </ol>
  )

  return (
    <article className={styles.editorial} aria-labelledby="module-title">
      <header className={styles.opening}>
        <Container size="lg">
          <Breadcrumbs items={[{ label: metadata.title }]} />
          <div className={[styles.hero, metadata.title.length > 55 ? styles.longTitle : ''].filter(Boolean).join(' ')}>
            <div>
              <p className={styles.eyebrow}><ModuleSymbol slug={metadata.slug} />{metadata.moduleLabel}</p>
              <h1 id="module-title" tabIndex={-1}>{metadata.title}</h1>
              <p className={styles.description}>{metadata.description}</p>
              <a className={styles.start} href={`#${sections[0].id}`}>Explorar o módulo <ArrowDown size={18} aria-hidden="true" /></a>
            </div>
            <ModuleIllustration slug={metadata.slug} className={styles.figure} />
          </div>
          <div className={styles.meta}><span>{sections.length} seções</span><span>Leitura e consulta</span><a href="/#modulos">Ver todos os módulos <ArrowRight size={16} aria-hidden="true" /></a></div>
          {openingAside}
        </Container>
      </header>
      <Container size="lg" className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.location}>
            <span className={styles.eyebrow}>Neste módulo</span>
            <p>Seção {active + 1} de {sections.length}</p>
            <meter min={1} max={sections.length} value={active + 1} aria-label="Localização no módulo" />
          </div>
          <nav className={styles.desktopIndex} aria-label="Índice do módulo">{index}</nav>
          <details className={styles.mobileIndex}>
            <summary><List size={18} aria-hidden="true" /> Índice do módulo <ChevronDown size={16} aria-hidden="true" /></summary>
            <nav aria-label="Índice do módulo">{index}</nav>
          </details>
          <details className={styles.help}>
            <summary>Saiba mais sobre a navegação <ChevronDown size={16} aria-hidden="true" /></summary>
            <p>Leia em sequência ou escolha uma seção no índice. Ao final de cada seção, os links permitem seguir ou voltar. O indicador mostra sua localização, sem registrar conclusão de leitura.</p>
          </details>
        </aside>
        <div className={styles.reading}>
          <ContentRenderer sections={sections} blockPresentation={renderEditorialBlock} sectionFooter={(i) => (
            <nav className={styles.sectionNav} aria-label={`Navegação da seção ${i + 1}`}>
              {i > 0 && <a href={`#${sections[i - 1].id}`}><ArrowLeft size={17} aria-hidden="true" /><span>Conteúdo anterior<span className={styles.navTitle}>{sections[i - 1].title}</span></span></a>}
              {i < sections.length - 1 && <a className={styles.forward} href={`#${sections[i + 1].id}`}><span>Próximo conteúdo<span className={styles.navTitle}>{sections[i + 1].title}</span></span><ArrowRight size={17} aria-hidden="true" /></a>}
              {i === sections.length - 1 && <a className={styles.forward} href="#module-title">Voltar ao início <ArrowDown className={styles.up} size={17} aria-hidden="true" /></a>}
            </nav>
          )} />
          <div className={styles.pagination}><ModulePagination previous={previous} next={next} /></div>
        </div>
      </Container>
    </article>
  )
}
