export const recordPrompts = [
  { id: 'situacao', title: 'Situação vivenciada', question: 'Que situação da sua prática você gostaria de registrar?' },
  { id: 'contexto', title: 'A criança e o contexto', question: 'O que você observou sobre a criança e sobre as condições daquele atendimento?' },
  { id: 'organizacao', title: 'Organização e flexibilização', question: 'Como você organizou ou flexibilizou a proposta pedagógica diante dessa situação?' },
  { id: 'estrategias', title: 'Estratégias e recursos', question: 'Quais estratégias, brincadeiras, materiais ou recursos fizeram parte desse momento?' },
  { id: 'escuta', title: 'Escuta, vínculo e acolhimento', question: 'De que maneira a escuta e a relação estabelecida com a criança participaram das suas decisões?' },
  { id: 'reflexao', title: 'Reflexão sobre a prática', question: 'O que essa experiência fez você perceber ou repensar sobre sua prática docente?' },
  { id: 'futuro', title: 'Possibilidades futuras', question: 'Há algo que você manteria, reorganizaria ou experimentaria de outra maneira em uma situação futura?' },
] as const

export const recordModeLabel = { free: 'Escrita livre', guided: 'Reflexão orientada' } as const

export function formatRecordDate(value: string) {
  return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long', timeStyle: 'short' }).format(new Date(value))
}
