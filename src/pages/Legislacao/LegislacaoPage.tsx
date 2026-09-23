import { legislacaoContent } from '../../content/legislacao'
import { EditorialModule } from '../../components/templates/EditorialModule/EditorialModule'
import { paths } from '../../routes/paths'

export function LegislacaoPage() {
  return (
    <EditorialModule
      content={legislacaoContent}
      previous={{ label: 'Módulo anterior', title: 'Recursos Pedagógicos', path: paths.recursos }}
      next={{ label: 'Próximo módulo', title: 'Formação Continuada', path: paths.formacao }}
    />
  )
}
