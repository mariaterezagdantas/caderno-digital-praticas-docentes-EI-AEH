import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../components/templates'
import { paths } from './paths'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: paths.home, lazy: () => import('../pages/Home') },
      { path: paths.sobre, lazy: () => import('../pages/Sobre') },
      { path: paths.aeh, lazy: () => import('../pages/AEH') },
      { path: paths.educacaoInfantil, lazy: () => import('../pages/EducacaoInfantil') },
      { path: paths.planejamento, lazy: () => import('../pages/Planejamento') },
      { path: paths.estrategias, lazy: () => import('../pages/Estrategias') },
      { path: paths.recursos, lazy: () => import('../pages/Recursos') },
      { path: paths.legislacao, lazy: () => import('../pages/Legislacao') },
      { path: paths.formacao, lazy: () => import('../pages/Formacao') },
      { path: paths.experiencias, lazy: () => import('../pages/Experiencias') },
      { path: paths.registros, lazy: () => import('../pages/Registros') },
      { path: '*', lazy: () => import('../pages/NotFound') },
    ],
  },
], { basename: '/caderno-digital-praticas-docentes-EI-AEH' })

