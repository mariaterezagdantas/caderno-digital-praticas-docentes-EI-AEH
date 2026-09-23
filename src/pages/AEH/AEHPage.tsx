import { aehContent } from '../../content/aeh'
import { EditorialModule } from '../../components/templates/EditorialModule/EditorialModule'
import { paths } from '../../routes/paths'

export function AEHPage() {
  return (
    <EditorialModule
      content={aehContent}
      previous={{ label: 'Módulo anterior', title: 'Sobre o Caderno Digital', path: paths.sobre }}
      next={{
        label: 'Próximo módulo',
        title: 'Educação Infantil em Contexto Hospitalar',
        path: paths.educacaoInfantil,
      }}
    />
  )
}
