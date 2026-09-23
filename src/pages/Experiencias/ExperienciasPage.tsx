import { experienciasContent } from '../../content/experiencias'
import { EditorialModule } from '../../components/templates/EditorialModule/EditorialModule'
import { paths } from '../../routes/paths'
import { PersonalRecordsLink } from '../../components/molecules/PersonalRecordsLink/PersonalRecordsLink'

export function ExperienciasPage() {
  return (
    <EditorialModule
      content={experienciasContent}
      openingAside={<PersonalRecordsLink />}
      previous={{
        label: 'Módulo anterior',
        title: 'Formação Continuada',
        path: paths.formacao,
      }}
    />
  )
}
