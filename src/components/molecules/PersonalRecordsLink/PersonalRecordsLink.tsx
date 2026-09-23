import { ArrowRight, NotebookPen } from 'lucide-react'
import { ButtonLink } from '../../atoms'
import { paths } from '../../../routes/paths'
import styles from './PersonalRecordsLink.module.css'

export function PersonalRecordsLink() {
  return <aside className={styles.invitation} aria-label="Seu espaço pessoal de escrita">
    <NotebookPen size={26} aria-hidden="true" />
    <div><h2>Da leitura à sua própria escrita</h2><p>Se desejar, registre e retome suas reflexões no Meu Espaço de Registros. A escrita fica neste navegador, é pessoal e não é enviada à pesquisadora.</p>
      <ButtonLink to={paths.registros} variant="secondary" trailingIcon={<ArrowRight size={18} aria-hidden="true" />}>Abrir Meu Espaço de Registros</ButtonLink>
    </div>
  </aside>
}
