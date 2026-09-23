import type { ModuleContent } from '../../types/content'
import { formacaoMetadata } from './metadata'
import { formacaoSections } from './sections'

export const formacaoContent: ModuleContent = {
  metadata: formacaoMetadata,
  sections: formacaoSections,
}
