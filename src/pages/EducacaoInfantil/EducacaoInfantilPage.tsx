import { educacaoInfantilContent } from '../../content/educacao-infantil'
import { EditorialModule } from '../../components/templates/EditorialModule/EditorialModule'
import { paths } from '../../routes/paths'

export function EducacaoInfantilPage() {
  return (
    <EditorialModule
      content={educacaoInfantilContent}
      previous={{
        label: 'Módulo anterior',
        title: 'Atendimento Educacional Hospitalar',
        path: paths.aeh,
      }}
      next={{
        label: 'Próximo módulo',
        title: 'Planejamento Pedagógico',
        path: paths.planejamento,
      }}
    />
  )
}
