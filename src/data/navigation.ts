import { paths } from '../routes/paths'
import type { NavigationItem } from '../types/navigation'

export const navigationItems: NavigationItem[] = [
  { label: 'Início', path: paths.home },
  { label: 'Meu Espaço de Registros', shortLabel: 'Meus registros', path: paths.registros },
  { label: 'Sobre o Caderno Digital', shortLabel: 'Sobre', path: paths.sobre },
  {
    label: 'Atendimento Educacional Hospitalar',
    shortLabel: 'Atendimento Educacional',
    path: paths.aeh,
  },
  {
    label: 'Educação Infantil em Contexto Hospitalar',
    shortLabel: 'Educação Infantil',
    path: paths.educacaoInfantil,
  },
  { label: 'Planejamento Pedagógico', shortLabel: 'Planejamento', path: paths.planejamento },
  {
    label: 'Brincar e mediações lúdicas',
    shortLabel: 'Brincar e mediações',
    path: paths.estrategias,
  },
  { label: 'Recursos Pedagógicos', shortLabel: 'Recursos', path: paths.recursos },
  { label: 'Legislação', path: paths.legislacao },
  { label: 'Formação Continuada', shortLabel: 'Formação', path: paths.formacao },
  {
    label: 'Experiências docentes: princípios para documentação e compartilhamento',
    shortLabel: 'Documentação de experiências',
    path: paths.experiencias,
  },
]
