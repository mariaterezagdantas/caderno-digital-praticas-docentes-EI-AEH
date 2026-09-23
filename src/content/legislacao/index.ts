import type { ModuleContent } from '../../types/content'
import { legislacaoMetadata } from './metadata'
import { legislacaoSections } from './sections'

export const legislacaoContent: ModuleContent = {
  metadata: legislacaoMetadata,
  sections: legislacaoSections,
}
