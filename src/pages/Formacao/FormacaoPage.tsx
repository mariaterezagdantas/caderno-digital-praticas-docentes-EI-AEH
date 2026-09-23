import { formacaoContent } from '../../content/formacao'
import { EditorialModule } from '../../components/templates/EditorialModule/EditorialModule'
import { paths } from '../../routes/paths'

export function FormacaoPage() {
  return (
    <EditorialModule
      content={formacaoContent}
      previous={{ label: 'Módulo anterior', title: 'Legislação', path: paths.legislacao }}
      next={{
        label: 'Próximo módulo',
        title: 'Experiências docentes: princípios para documentação e compartilhamento',
        path: paths.experiencias,
      }}
    />
  )
}
