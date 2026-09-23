import type { ModuleContent } from '../../types/content'
import { planejamentoMetadata } from './metadata'
import { planejamentoSections } from './sections'

export const planejamentoContent: ModuleContent = {
  metadata: planejamentoMetadata,
  sections: planejamentoSections,
}
