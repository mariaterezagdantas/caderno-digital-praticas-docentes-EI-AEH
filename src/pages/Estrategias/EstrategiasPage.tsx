import { estrategiasContent } from '../../content/estrategias'
import { EditorialModule } from '../../components/templates/EditorialModule/EditorialModule'
import { paths } from '../../routes/paths'

export function EstrategiasPage() {
  return (
    <EditorialModule
      content={estrategiasContent}
      previous={{
        label: 'Módulo anterior',
        title: 'Planejamento Pedagógico',
        path: paths.planejamento,
      }}
      next={{ label: 'Próximo módulo', title: 'Recursos Pedagógicos', path: paths.recursos }}
    />
  )
}
