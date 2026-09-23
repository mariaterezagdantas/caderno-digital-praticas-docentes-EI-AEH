import type { ModuleContent } from '../../types/content'
import { aehMetadata } from './metadata'
import { aehSections } from './sections'

export const aehContent: ModuleContent = { metadata: aehMetadata, sections: aehSections }
