import { useId, type ReactNode } from 'react'
import { BookOpen, ClipboardList, Files, Hand, Library, MessagesSquare, Shapes, Sprout, type LucideIcon } from 'lucide-react'
import { PlanningDrawing } from './PlanningDrawing'

interface ModuleArt {
  icon: LucideIcon
  title: string
  description: string
  caption: string
  drawing?: ReactNode
}

// Each scene is drawn separately. Shared ink, scale and sparse washes keep the family coherent.
const art: Record<string, ModuleArt> = {
  sobre: {
    icon: BookOpen,
    title: 'Um caderno aberto a diferentes percursos',
    description: 'Uma mão vira a página de um caderno aberto. Pequenos marcadores e anotações soltas sugerem consulta e retomada, em linhas livres e discretas manchas pastel.',
    caption: 'Caderno · consulta · percursos',
    drawing: <>
      <path d="M111 180c14-4 25-2 37 3 6 3 4 8-2 9-11-3-21-4-34-2-7 0-8-7-1-10Z" fill="var(--color-sage-100)" stroke="none" />
      <path d="M95 117c25-4 51 1 73 13 15 6 26 14 37 23 19-13 41-21 62-25 11-2 22-1 31-2-2 20-6 39-6 58-2 13-1 27-5 38-28-1-55 5-79 18-22-15-45-23-68-27-19-2-37-1-54 1 4-19 4-37 7-56 1-11 1-23 2-33" strokeWidth="1.65" />
      <path d="M205 155c1 16-1 30 1 45 0 10 2 21 1 34m-122-12c24-4 46-1 67 4 21 5 38 12 53 22 26-13 54-19 80-18" strokeWidth="1.1" />
      <path d="M209 146c-1-20 0-36 5-54 23-8 48-7 70-3-9 16-13 34-14 53-18 4-37 9-55 18" strokeWidth="1.45" />
      <path d="M218 106c14-3 28-2 39 0m-40 10c10-2 22 0 30 1m-35 15c9-1 14 1 19 2" strokeWidth="1.05" />
      <path d="M108 146c21 1 44 7 62 18m-61-5c12-1 24 5 36 7m-40 29c15-2 29 3 38 4" strokeWidth="1.2" />
      <path d="M286 103c8-5 15-13 20-22l11-24m-23 57c13-3 22-14 28-23 4-8 7-17 10-23" strokeWidth="1.5" />
      <path d="M287 103c-6 0-8-4-7-8 2-4 6-4 9-7l8-11c3-4 7-3 8 0 1 4-3 10-5 13m-13 24c-6 0-9-3-8-7" strokeWidth="1.2" />
      <path d="m251 218-2 26 7-4 4 6 2-30" fill="var(--color-terracotta-100)" stroke="none" />
      <path d="M252 219c0 8-2 16-2 22m-151 7c16-1 33 1 45 2m144-6 32-1" strokeWidth=".95" />
    </>,
  },
  'atendimento-educacional-hospitalar': {
    icon: Hand,
    title: 'Um encontro de escuta e acolhimento',
    description: 'Uma professora se inclina para escutar uma criança sentada, com um livro entre elas. As figuras sem detalhes faciais dão destaque ao encontro pedagógico e à presença atenta.',
    caption: 'Encontro · escuta · acolhimento',
    drawing: <>
      <path d="M118 143c7-5 14-3 18 2 3 7 1 17-4 21-8 4-18 0-16-7 0-6-3-9 2-16Z" fill="var(--color-sage-100)" stroke="none" />
      <path d="M264 192c11-2 19 1 24 4 5 4 1 8-5 7l-22-2c-5-2-4-6 3-9Z" fill="var(--color-terracotta-100)" stroke="none" />
      <path d="M163 118c-7-2-13-6-16-13-3-8-1-15 3-20 6-7 15-8 22-4 7 3 12 10 12 17 0 7-5 14-10 16m-28-12c-4-7-3-14 2-20 4-6 12-8 19-6 6 0 10 4 13 8-8-1-13-3-18 1-5 4-2 9-7 13" strokeWidth="1.55" />
      <path d="M155 119l-3 9m19-10 4 8m-23 2c-14 0-26 9-33 24-6 14-7 28-10 41m64-64c10 4 16 12 19 23l7 22m-69-10-6 29c12 3 24 3 34 1" strokeWidth="1.6" />
      <path d="M190 154c7 11 12 23 19 33m-11-14c7 5 14 9 23 10 4 1 8 0 12 1m-23 5c7 3 17 4 22 1m-73 5c15 0 30 5 33 15 2 13-9 25-16 36m-65-51c-5 18 4 22 17 24l24 3-14 23" strokeWidth="1.35" />
      <path d="M274 136c-6-2-10-7-11-13-1-7 3-14 9-15 7-3 15 1 18 7 3 7 1 14-5 18m-22-13c-2-6 1-13 7-16 6-3 13 0 17 3 3 3 4 5 5 8-7-4-13-4-17-1" strokeWidth="1.45" />
      <path d="M272 139c-11 4-13 13-14 24l-2 21c13 3 25 3 36-1l-2-28c-1-8-4-13-9-15m-18 12c-5 8-8 15-12 18l-20 4m32-6-12 10c-6 2-12 3-18 2" strokeWidth="1.5" />
      <path d="M258 188c-2 8 1 15 7 18l18 4-3 22m10-45c5 9 3 17 7 26l-1 21m-17-1 9 2m8 0 8 1" strokeWidth="1.2" />
      <path d="M250 195c17 1 31 0 49-1m-48 6-3 35m53-33 4 33m-84-52c8-3 15-1 21 2 7-3 14-3 22-2l-2 13c-7-1-14 1-21 4-8-4-15-5-23-4l2-10m22 1-1 10" strokeWidth="1.05" />
      <path d="M103 253c19-2 37 0 51 1m124-10 39 1" strokeWidth=".85" opacity=".55" />
    </>,
  },
  'educacao-infantil': {
    icon: Sprout,
    title: 'Expressar, explorar e participar',
    description: 'Uma criança mostra seu desenho a uma mão adulta aberta. A folha, o gesto e pequenos materiais destacam expressão, escuta e participação, sem detalhes faciais.',
    caption: 'Infância · expressão · participação',
    drawing: <>
      <path d="M149 147c6-5 13-4 17 1 4 4 3 14-2 18-8 5-17 1-18-5-1-5-1-9 3-14Z" fill="var(--color-sage-100)" stroke="none" />
      <path d="M223 117c8-4 14-3 19 1 5 4 2 10-4 11-7 0-10-3-16-3-5-3-3-6 1-9Z" fill="var(--color-terracotta-100)" stroke="none" />
      <path d="M153 126c-6-3-11-8-11-14-2-8 3-15 9-18 7-3 15 0 19 5 5 5 7 12 3 18-2 4-5 6-8 8m-23-17c-4-6-1-14 4-18 5-3 10-4 15-2 5 1 10 4 12 9-5-2-9-1-12-4-4 2-7 5-11 5" strokeWidth="1.5" />
      <path d="M149 131c-9 3-15 10-17 20-3 13-1 29-3 42 14 3 28 3 41 0-1-12 0-26-2-36m-7-26c8 1 12 7 18 12 4 4 7 5 11 2l16-13m-34 24c10 2 15 0 22-7l14-12" strokeWidth="1.6" />
      <path d="M138 147c-8 8-13 17-12 26 3 7 12 11 19 10l11-5m-25-17c3 7 8 10 15 10l12-4" strokeWidth="1.2" />
      <path d="M137 198c-3 14-4 28-4 41m12-38 4 27 10 14m4-44c0 13 2 27 7 39m-39 4 12 1m15 1 15-1" strokeWidth="1.3" />
      <path d="M193 106c19-3 38-1 56-4 0 17 4 34 3 52-20 1-39 3-57 3 0-13-3-27-2-40" strokeWidth="1.25" />
      <path d="M210 139c3-10 11-12 17-7 5 5 10 5 13-2m-29-10c-4-6 0-12 6-10 5 1 7 6 4 10-3 3-8 2-10 0" strokeWidth="1.05" />
      <path d="M327 144c-14 3-25 9-36 17-4 2-9 4-14 4l-17-3c-4 0-5 4-1 6l14 6m-2-13-9-11c-3-4-6-2-4 2l5 8m9 15c9 5 20 4 29-1l30-15" strokeWidth="1.35" />
      <path d="m212 226 9-24 4 2-9 26-5 5 1-7m23 1c5-6 12-4 14 1 2 6-6 10-11 7m26-2 14 2 2-13-13-3-3 12" strokeWidth="1.1" />
      <path d="M114 251c18-1 41 2 59 0m71-4 48 1" strokeWidth=".85" opacity=".55" />
    </>,
  },
  planejamento: {
    icon: ClipboardList,
    title: 'Planejar, observar e registrar',
    description: '', // The approved drawing includes its own accessible description.
    caption: 'Planejamento · materiais · registro',
  },
  estrategias: {
    icon: Shapes,
    title: 'Brincar e inventar possibilidades',
    description: 'Uma criança ajoelhada combina peças e um tecido em uma brincadeira. O gesto de construir e a disposição aberta dos materiais sugerem invenção e autoria infantil.',
    caption: 'Brincar · imaginar · inventar',
    drawing: <>
      <path d="M235 202c17-6 26-1 39 1 7 1 14-3 21 0 5 5 1 9-6 10-18-2-34 4-49 1-8-2-12-7-5-12Z" fill="var(--color-sage-100)" stroke="none" />
      <path d="M245 168c7-2 13 1 13 5 1 6-5 9-11 6-5-2-9-8-2-11Z" fill="var(--color-terracotta-100)" stroke="none" />
      <path d="M174 131c-7-1-14-6-15-13-3-7 0-15 6-18 7-4 15-2 20 3 6 5 8 12 4 18-2 5-5 7-8 8m-22-13c-4-6-2-14 3-19 6-4 12-5 18-2 6 2 9 6 11 10-7-2-10-5-16-2-3 3-6 3-9 4" strokeWidth="1.6" />
      <path d="M169 136c-12 2-22 12-27 24-5 12-8 23-10 35 12 4 26 5 37 4l6-26m6-38c8 3 13 10 17 19l9 17c-4 4-10 7-15 8l-12-16" strokeWidth="1.65" />
      <path d="M205 173c9 4 18 10 25 16 4 4 7 4 11 5m-47-12c11 5 20 10 27 16 5 5 12 6 19 6m0-11c4-1 7 0 9 3l2 4c-2 2-4 1-6 0" strokeWidth="1.25" />
      <path d="M151 162c-10 7-14 15-12 23 2 9 9 14 17 16l20 6m-29-28c1 11 9 13 18 17l17 3" strokeWidth="1.2" />
      <path d="M133 201c-9 5-13 15-11 23 3 8 14 10 24 10l35 1m-15-32c9 6 15 13 15 20-1 6-8 7-16 6l-21-4m39 9c9 1 16 0 23-2" strokeWidth="1.4" />
      <path d="M221 220c20-8 34-3 49-1 12 2 20-6 35-5m-85 13c8 9 20 11 29 8 14-6 19 2 30 2 13 1 22-7 31-9" strokeWidth="1.2" />
      <path d="m247 197-1-15 18 1 1 14m-17-21 7-17 15 19-22-2m28 25 2-16 17 3-3 16m-70 7c-6-1-10-7-8-12 2-6 9-9 14-5 6 3 7 10 3 13" strokeWidth="1.25" />
      <path d="M104 247c18 2 37 0 51 1m128 1 33-3" strokeWidth=".85" opacity=".55" />
    </>,
  },
  recursos: {
    icon: Library,
    title: 'Escolher e combinar materiais',
    description: 'Uma mão escolhe uma peça junto a um cesto aberto com livro e tecido. Materiais dispostos com espaço entre si sugerem seleção e possibilidades de uso, sem acumulação.',
    caption: 'Materiais · escolha · possibilidades',
    drawing: <>
      <path d="M144 188c11-4 19-2 28 1 7 3 7 9 0 12-9-2-16-1-24 1-6-1-10-8-4-14Z" fill="var(--color-sage-100)" stroke="none" />
      <path d="M279 167c6-4 12-1 15 2 3 6 0 11-6 11-7 0-13-7-9-13Z" fill="var(--color-terracotta-100)" stroke="none" />
      <path d="M93 161c39-6 84-4 121 4m-119 4c3 15 3 33 7 48 35 5 65 5 99 0 6-13 8-29 12-44m-111 8c32 3 67 4 102 0" strokeWidth="1.6" />
      <path d="M117 181c1 8 0 19 2 25m17-23 1 26m19-24-1 22m20-23-1 24m20-25-2 22" strokeWidth=".95" />
      <path d="M112 159c-1-21-3-43-7-64 18-6 37-7 55-10 2 23 7 48 8 71m-57-56 10 57m-2-41 30-4m-28 12c10-1 19-2 26-1m-23 10 18-1" strokeWidth="1.3" />
      <path d="M173 157c-6-16 1-30 12-34 10-4 13 3 18 3 5-1 10-8 15-4 9 7 3 22-3 30-4 8-7 15-3 24m-22-43c-6 12-3 22-7 30m21-29c1 8-3 14-5 22" strokeWidth="1.35" />
      <path d="M255 208c-4-9 2-18 10-20 9-1 17 7 15 16-1 9-10 14-18 10m35-1 1-26 24 3-2 25-20-1m-43-44 15-22 17 22c-13-2-21 0-30 0" strokeWidth="1.4" />
      <path d="M318 80c-9 10-20 16-30 23-6 4-10 9-15 15m58-23c-11 10-24 16-31 28-3 4-7 9-13 11" strokeWidth="1.45" />
      <path d="M273 118c-5 1-10 4-11 9-1 4 2 6 5 3l8-6m-4 6c-3 7-2 11 2 10l6-8m0 1c-2 5 0 8 3 5l5-4" strokeWidth="1.1" />
      <path d="M267 147c-1-6 0-14 3-19l14 3-3 18-14-2" strokeWidth="1.25" />
      <path d="M90 240c25-2 51 0 68 1m106-9c21 0 41 3 64 1" strokeWidth=".85" opacity=".55" />
    </>,
  },
  legislacao: {
    icon: Files,
    title: 'Documentos em diálogo',
    description: 'Folhas sobrepostas, um volume aberto e pequenos marcadores de consulta. Contornos incompletos e anotações discretas representam leitura e relação entre documentos, sem símbolos de julgamento.',
    caption: 'Documentos · direitos · consulta',
    drawing: <>
      <path d="M163 97c16-3 30-1 43-1 9 0 10 6 4 9-17 0-31-1-46 3-7-1-9-7-1-11Z" fill="var(--color-sage-100)" stroke="none" />
      <path d="m278 155 11 1-2 23-5-3-7 4Z" fill="var(--color-terracotta-100)" stroke="none" />
      <path d="M131 162c-1-26-4-50-4-77 27-3 57-3 83-6 8 7 14 12 19 20-1 21 2 42 1 62m-17-80c-2 5-1 13-1 19 5 2 10 0 16 0" strokeWidth="1.5" />
      <path d="M117 160c-2-28-3-58-6-89 33-2 63-6 94-6m33 27c10-1 18-3 28-2 4 19 5 40 7 61" strokeWidth="1.1" />
      <path d="M144 114c22-2 43 1 59-2m-57 15c19-1 37 0 55-1m-56 14c13 1 24-1 36 0" strokeWidth="1.2" />
      <path d="M91 171c23-6 45-4 68 5 16 5 28 12 41 21 25-16 56-23 86-21l-5 58c-27-1-52 5-77 15-25-14-48-22-77-22-14-1-25 1-38 3 2-14 0-30 2-45" strokeWidth="1.65" />
      <path d="M201 199c-1 15 2 28 1 44m-115-7c40-6 80 5 114 20 26-9 55-17 81-15" strokeWidth="1.05" />
      <path d="M107 189c20-1 37 5 52 10m-49 4c12 0 23 4 34 7m79-3c14-5 28-7 44-7m-40 17c10-4 19-4 29-4" strokeWidth="1.15" />
      <path d="M244 104c5-2 10-2 14-1m-11 8 10-1m-8 9 9-1m33 17c8-1 13 3 13 8 0 6-5 12-11 10-5-1-5-7-2-10 2-3 6-2 8-1" strokeWidth="1.05" />
      <path d="M90 263c18-1 37 1 53 1m112-7 42 1" strokeWidth=".85" opacity=".55" />
    </>,
  },
  formacao: {
    icon: MessagesSquare,
    title: 'Estudar em diálogo',
    description: 'Duas docentes voltadas uma para a outra compartilham a leitura de um livro. Um gesto de conversa e outro de consulta representam estudo coletivo, sem traços faciais detalhados.',
    caption: 'Estudo · diálogo · formação',
    drawing: <>
      <path d="M119 145c8-5 16-2 19 5 4 7 0 18-6 20-8 2-15-3-14-9-1-5-3-12 1-16Z" fill="var(--color-sage-100)" stroke="none" />
      <path d="M251 183c8-2 16-1 23 2 4 3 2 7-4 7-6-1-11-2-17-1-6-1-7-6-2-8Z" fill="var(--color-terracotta-100)" stroke="none" />
      <path d="M145 117c-6-2-12-8-13-15-2-8 1-16 7-20 7-5 15-3 21 1 6 5 9 12 7 19-1 7-6 12-11 14m-24-17c-3-9 0-19 7-22 8-4 18-2 23 4 3 3 4 6 5 9-6-4-13-6-18-4-5 3-6 8-8 12" strokeWidth="1.55" />
      <path d="M140 121c-14 5-22 15-28 27-6 14-8 30-10 45m49-72c14 0 25 12 29 23m-57 11-7 35c13 4 27 4 40 2m20-46c3 9 7 16 13 21 8 4 16 7 24 8m-52-19c6 13 17 21 27 24l22 4" strokeWidth="1.5" />
      <path d="M208 175c5-2 9-2 13 0 3 2 1 4-2 4m-10 5c5 0 10 0 14-2" strokeWidth="1.05" />
      <path d="M270 116c-7-2-12-7-14-13-2-9 1-17 8-20 8-4 16-1 21 5 4 6 4 14 0 20-3 4-6 6-9 7m-22-17c-1-8 3-16 8-20 7-4 15-2 20 3 7 7 7 17 11 22l-6 9m-31-16c6-3 7-10 13-10 5-1 9 2 12 3" strokeWidth="1.5" />
      <path d="M265 122c-10 5-16 14-19 25l-5 22m35-47c13 4 22 14 27 27 6 15 7 29 10 44m-24-39 6 39c-13 4-24 3-37 1" strokeWidth="1.65" />
      <path d="M249 146c-5 2-9 5-14 6l-13-11m23 18c-11 1-20-7-25-14m1-6c-3-5-6-8-8-6-2 2 1 6 2 8m9 2-1-10c0-4-4-5-4-1" strokeWidth="1.15" />
      <path d="M286 166c-6 9-14 14-22 19m-21-14c3 7 7 12 15 13" strokeWidth="1.25" />
      <path d="M169 195c14-6 28-3 41 3 14-6 28-8 41-5l-4 27c-14-2-27 1-37 6-14-7-28-9-42-7l1-18m41-1-1 23" strokeWidth="1.3" />
      <path d="M99 202c17 1 34-1 50 0m111 4 61-1m-209 3-4 36m199-35 4 35m-134-35 19 3m24-4 14-2" strokeWidth="1.05" />
      <path d="M96 251c14-1 29 1 43 1m143-1 41-1" strokeWidth=".85" opacity=".55" />
    </>,
  },
  experiencias: {
    icon: Files,
    title: 'Selecionar registros e construir uma narrativa',
    description: 'Duas mãos organizam folhas em um portfólio aberto. Fragmentos de escrita e um pequeno desenho sem dados pessoais representam seleção, memória e documentação pedagógica.',
    caption: 'Registros · memória · documentação',
    drawing: <>
      <path d="M164 161c9-3 20-3 26 1 4 4 2 8-3 9-9-2-15 1-23 0-5-3-6-6 0-10Z" fill="var(--color-sage-100)" stroke="none" />
      <path d="M253 205c10-4 21-3 28 0 7 3 6 7 0 9-9-1-17 1-26 0-6-1-8-6-2-9Z" fill="var(--color-terracotta-100)" stroke="none" />
      <path d="M107 130c28-3 53-1 81 6l19 13c24-5 51-5 74-2 3 26 4 54 5 80-28-3-53 0-77 8-32-14-66-17-99-14-1-23-4-47-3-71" strokeWidth="1.55" />
      <path d="M208 153c-1 23 0 51 1 76m-103 1c37-4 70 1 102 12 26-6 55-10 83-6l-2-44" strokeWidth="1.1" />
      <path d="M145 105c18-5 35-7 53-8 5 26 8 50 13 76-20 3-39 7-60 10-1-21-5-44-6-66" strokeWidth="1.35" />
      <path d="M160 121c10-3 20-3 28-3m-26 13c9-3 18-2 27-3m-26 13c7-2 12-1 18-2m-25 28c5-4 7-2 10 0 4 3 7 1 11-1" strokeWidth="1.05" />
      <path d="M223 162c15 0 30 1 44 3l-1 27c-14-2-28-4-43-3l1-19m11 6c4-7 9-6 12-2 4 6 9 5 14 3m-32 23 33 3m-32 10 19 1" strokeWidth="1.1" />
      <path d="M101 68c12 10 22 20 31 34 3 4 8 7 12 11m-55-32c13 11 23 23 30 37 3 5 6 10 11 12m13-17c5 1 9 4 8 8-1 3-4 2-7 0l-8-6m3 7c4 7 5 11 2 12-3 0-6-4-8-7m0 2c1 4 1 7-2 6-3-1-6-7-7-10" strokeWidth="1.35" />
      <path d="M330 174c-10 3-19 9-28 14-5 3-10 4-15 5l-12-1c-5 0-6 4-2 6l12 2m-7-9-7-7c-3-3-6-1-3 3l5 6m9 9c8 4 17 2 24-1l27-12" strokeWidth="1.3" />
      <path d="M218 109c-3-6-1-11 4-12 6-1 9 3 9 8l-2 17c-1 4-6 4-7 1l1-16" strokeWidth="1.05" />
      <path d="M101 253c16-2 37 0 51 0m113-3c16-1 29 1 40 0" strokeWidth=".85" opacity=".55" />
    </>,
  },
}

export function ModuleSymbol({ slug }: { slug: string }) {
  const Symbol = (art[slug] ?? art.sobre).icon
  return <Symbol size={20} strokeWidth={1.75} aria-hidden="true" />
}

export function ModuleIllustration({ slug, className }: { slug: string; className?: string }) {
  const id = useId()
  const scene = art[slug] ?? art.sobre
  return (
    <figure className={className}>
      {slug === 'planejamento' ? <PlanningDrawing /> : (
        <svg viewBox="0 0 420 300" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
          <title id={`${id}-title`}>{scene.title}</title>
          <desc id={`${id}-desc`}>{scene.description}</desc>
          <g fill="none" stroke="var(--color-sage-700)" strokeLinecap="round" strokeLinejoin="round">
            {scene.drawing}
          </g>
        </svg>
      )}
      <figcaption>{scene.caption}</figcaption>
    </figure>
  )
}
