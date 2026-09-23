import type { ModuleContent } from '../../types/content'
import { recursosMetadata } from './metadata'
import { recursosSections } from './sections'

export const recursosContent: ModuleContent = {
  metadata: recursosMetadata,
  sections: recursosSections,
}
