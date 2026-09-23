import { sobreContent } from '../../content/sobre'
import { EditorialModule } from '../../components/templates/EditorialModule/EditorialModule'
import { paths } from '../../routes/paths'

export function SobrePage() {
  return (
    <EditorialModule
      content={sobreContent}
      previous={{ label: 'Voltar para', title: 'Página inicial', path: paths.home }}
      next={{
        label: 'Próximo módulo',
        title: 'Atendimento Educacional Hospitalar',
        path: paths.aeh,
      }}
    />
  )
}
