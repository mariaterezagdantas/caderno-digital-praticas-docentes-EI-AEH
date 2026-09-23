export type ContentStatus = 'planned' | 'draft' | 'published'

export interface ContentMetadata {
  slug: string
  title: string
  description: string
  keywords: string[]
  status: ContentStatus
  moduleLabel?: string
}

export type CalloutTone = 'highlight' | 'guidance' | 'note'
export type ResourceType = 'book' | 'film' | 'article' | 'document' | 'link'

export interface ParagraphBlock {
  type: 'paragraph'
  text: string
}

export interface ListBlock {
  type: 'list'
  items: string[]
  ordered?: boolean
}

export interface CalloutBlock {
  type: 'callout'
  title: string
  text: string
  tone: CalloutTone
}

export interface QuoteBlock {
  type: 'quote'
  text: string
  attribution?: string
}

export interface ResourceItem {
  id: string
  type: ResourceType
  title: string
  description: string
  meta?: string
  href?: string
}

export interface ResourcesBlock {
  type: 'resources'
  items: ResourceItem[]
}

export interface DownloadItem {
  id: string
  title: string
  description: string
  fileName?: string
  fileType?: string
  fileSize?: string
  href?: string
}

export interface DownloadsBlock {
  type: 'downloads'
  items: DownloadItem[]
}

export type ContentBlock =
  | ParagraphBlock
  | ListBlock
  | CalloutBlock
  | QuoteBlock
  | ResourcesBlock
  | DownloadsBlock

export interface ContentSection {
  id: string
  title: string
  eyebrow?: string
  blocks: ContentBlock[]
}

export interface ModuleContent {
  metadata: ContentMetadata
  sections: ContentSection[]
}

export interface ModuleNavigationTarget {
  label: string
  title: string
  path: string
}
