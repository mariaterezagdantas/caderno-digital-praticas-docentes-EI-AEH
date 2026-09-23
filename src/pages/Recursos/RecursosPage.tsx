import { recursosContent } from '../../content/recursos'
import { EditorialModule } from '../../components/templates/EditorialModule/EditorialModule'
import { paths } from '../../routes/paths'

export function RecursosPage() {
  return (
    <EditorialModule
      content={recursosContent}
      previous={{
        label: 'Módulo anterior',
        title: 'Brincar e mediações lúdicas',
        path: paths.estrategias,
      }}
      next={{ label: 'Próximo módulo', title: 'Legislação', path: paths.legislacao }}
    />
  )
}
