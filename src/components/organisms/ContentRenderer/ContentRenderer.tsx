import type { ContentBlock, ContentSection } from '../../../types/content'
import { Heading, Text } from '../../atoms'
import { Callout, DownloadCard, Quote, ResourceCard } from '../../molecules'
import styles from './ContentRenderer.module.css'
import { Fragment, type ReactNode } from 'react'

function renderBlock(block: ContentBlock, index: number) {
  const key = `${block.type}-${index}`

  switch (block.type) {
    case 'paragraph':
      return <Text key={key}>{block.text}</Text>
    case 'list': {
      const List = block.ordered ? 'ol' : 'ul'
      return (
        <List className={styles.list} key={key}>
          {block.items.map((item) => <li key={item}>{item}</li>)}
        </List>
      )
    }
    case 'callout':
      return <Callout key={key} title={block.title} text={block.text} tone={block.tone} />
    case 'quote':
      return <Quote key={key} text={block.text} attribution={block.attribution} />
    case 'resources':
      return (
        <div className={styles.resourceGrid} key={key}>
          {block.items.map((resource) => <ResourceCard key={resource.id} resource={resource} />)}
        </div>
      )
    case 'downloads':
      return (
        <div className={styles.downloads} key={key}>
          {block.items.map((item) => <DownloadCard item={item} key={item.id} />)}
        </div>
      )
  }
}

export interface ContentRendererProps {
  sections: ContentSection[]
  sectionFooter?: (index: number) => ReactNode
  blockPresentation?: (block: ContentBlock, index: number, section: ContentSection) => ReactNode | undefined
}

export function ContentRenderer({ sections, sectionFooter, blockPresentation }: ContentRendererProps) {
  return (
    <div className={styles.content}>
      {sections.map((section, index) => (
        <section className={styles.section} id={section.id} key={section.id} tabIndex={sectionFooter ? -1 : undefined} aria-labelledby={`${section.id}-title`}>
          <div className={styles.sectionHeading}>
            {section.eyebrow && <Text variant="caption" tone="muted">{section.eyebrow}</Text>}
            <Heading id={`${section.id}-title`} level={2} size="lg">
              <span aria-hidden="true" className={styles.sectionNumber}>
                {String(index + 1).padStart(2, '0')}
              </span>
              {section.title}
            </Heading>
          </div>
          <div className={styles.blocks}>
            {section.blocks.map((block, blockIndex) => (
              <Fragment key={`${block.type}-${blockIndex}`}>
                {blockPresentation?.(block, blockIndex, section) ?? renderBlock(block, blockIndex)}
              </Fragment>
            ))}
          </div>
          {sectionFooter?.(index)}
        </section>
      ))}
    </div>
  )
}
