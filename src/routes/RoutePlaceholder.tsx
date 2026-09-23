import { InternalPageTemplate } from '../components/templates'

export interface RoutePlaceholderProps {
  title: string
}

export function RoutePlaceholder({ title }: RoutePlaceholderProps) {
  return (
    <InternalPageTemplate
      description="A estrutura deste módulo está preparada e receberá seu conteúdo em uma etapa posterior."
      eyebrow="Estrutura preparada"
      title={title}
    />
  )
}
