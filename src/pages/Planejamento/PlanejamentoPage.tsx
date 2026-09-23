import { planejamentoContent } from '../../content/planejamento'
import { EditorialModule } from '../../components/templates/EditorialModule/EditorialModule'
import { paths } from '../../routes/paths'

export function PlanejamentoPage() {
  return (
    <EditorialModule
      content={planejamentoContent}
      previous={{
        label: 'Módulo anterior',
        title: 'Educação Infantil em Contexto Hospitalar',
        path: paths.educacaoInfantil,
      }}
      next={{
        label: 'Próximo módulo',
        title: 'Brincar e mediações lúdicas',
        path: paths.estrategias,
      }}
    />
  )
}
