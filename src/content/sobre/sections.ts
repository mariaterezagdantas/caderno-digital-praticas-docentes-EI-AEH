import type { ContentSection } from '../../types/content'

export const sobreSections: ContentSection[] = [
  {
    id: 'origem-produto-educacional',
    eyebrow: 'Apresentação',
    title: 'De onde nasce este Caderno Digital',
    blocks: [
      {
        type: 'paragraph',
        text: 'Este Caderno Digital de Práticas Docentes na Educação Infantil em Contexto Hospitalar é um Produto Educacional desenvolvido por Maria Tereza Gonçalves Lemos Dantas, no âmbito do Mestrado Profissional em Educação Especial do Programa de Pós-Graduação em Educação Especial da Universidade Federal do Rio Grande do Norte (PPGEEsp/UFRN), sob a orientação da Prof.ª Dr.ª Jacyene Melo de Oliveira Araújo.',
      },
      {"type":"paragraph","text":"Os módulos reúnem fundamentos, perguntas e propostas para consulta a partir de situações vividas no atendimento."},
      {"type":"paragraph","text":"Adapte as propostas aos interesses da criança e às condições do hospital."},
    ],
  },
  {
    id: 'relacao-pesquisa-mestrado',
    eyebrow: 'Vínculo acadêmico',
    title: 'Relação com a pesquisa de mestrado',
    blocks: [
      {
        type: 'paragraph',
        text: 'Este Caderno Digital foi construído em diálogo com a pesquisa de mestrado “A constituição das práticas docentes na Educação Infantil no Atendimento Educacional Hospitalar no Rio Grande do Norte”, desenvolvida por Maria Tereza Gonçalves Lemos Dantas e orientada pela Prof.ª Dr.ª Jacyene Melo de Oliveira Araújo.',
      },
      {
        type: 'paragraph',
        text: 'A pesquisa buscou compreender como se constituem as práticas docentes nesse contexto. Na elaboração do Caderno, seus resultados foram relacionados aos estudos que fundamentam a pesquisa e a documentos oficiais. O conteúdo não é uma transcrição da dissertação. Ele foi organizado para aproximar os conhecimentos construídos na pesquisa das perguntas e decisões que fazem parte do cotidiano das professoras.',
      },
      {
        type: 'paragraph',
        text: 'A Análise de Conteúdo do material produzido com as professoras participantes deu origem a cinco categorias. Elas ajudam a compreender aspectos importantes da docência no Atendimento Educacional Hospitalar e estão presentes, de diferentes formas, nos módulos do Caderno:',
      },
      {
        type: 'list',
        items: [
          'Concepções de infância que sustentam as práticas pedagógicas: levam a reconhecer a criança hospitalizada como sujeito de direitos, que aprende, participa, cria e produz sentidos sobre o que vive.',
          'Organização e flexibilização do trabalho pedagógico: ajudam a pensar um planejamento que possa acolher interrupções, pausas, mudanças e retomadas próprias do atendimento no hospital.',
          'O brincar e as mediações lúdicas como eixo das práticas pedagógicas: reafirmam a importância das brincadeiras, das interações, da imaginação e das diferentes linguagens na experiência da criança.',
          'Escuta, vínculo e acolhimento como fundamentos da relação pedagógica: destacam a importância de escutar a criança, respeitar suas escolhas e construir uma relação atenta às condições de cada encontro.',
          'Saberes docentes construídos na prática cotidiana: valorizam os conhecimentos que as professoras constroem, mobilizam e transformam no dia a dia de seu trabalho.',
        ],
      },
      {
        type: 'callout',
        tone: 'guidance',
        title: 'Da pesquisa ao Caderno Digital',
        text: 'As cinco categorias não estão separadas por módulo. Elas se relacionam e aparecem ao longo de todo o Caderno, assim como acontece na prática. Em um mesmo encontro, a docente pode planejar, adaptar uma proposta, escutar a criança, acolher uma recusa e descobrir com ela outra possibilidade de participação.',
      },
      {
        type: 'paragraph',
        text: 'Os resultados são apresentados de forma conjunta, preservando o anonimato das professoras participantes. Suas falas não são reproduzidas neste módulo.',
      },
      {
        type: 'callout',
        tone: 'note',
        title: 'Validação pelas professoras participantes',
        text: 'O Caderno Digital foi submetido à validação pelas professoras participantes da pesquisa, que atuam no Atendimento Educacional Hospitalar. Nessa etapa, as participantes avaliaram a clareza dos textos, a organização dos conteúdos, a facilidade de navegação e a relação do material com as especificidades da Educação Infantil em contexto hospitalar. Também apresentaram suas percepções sobre as contribuições do produto e indicaram aspectos a serem considerados em seu aprimoramento. As contribuições decorrentes desse processo foram consideradas na elaboração da versão final do Caderno Digital.',
      },
      {
        type: 'paragraph',
        text: 'As avaliações das participantes orientaram a revisão do material.',
      },
    ],
  },
  {
    id: 'objetivo-publico-usos',
    eyebrow: 'Finalidade',
    title: 'Objetivo, público e usos possíveis',
    blocks: [
      {"type":"paragraph","text":"O objetivo é aproximar fundamentos e decisões do cotidiano: acolher uma recusa, retomar uma proposta interrompida, escolher materiais ou registrar uma experiência sem rotular a criança."},
      {
        type: 'paragraph',
        text: 'O público principal é formado por docentes da Educação Infantil que atuam no Atendimento Educacional Hospitalar, especialmente com crianças de quatro anos a cinco anos e onze meses. O conteúdo também pode contribuir com coordenadores e outros profissionais da educação interessados no tema.',
      },
      {"type":"paragraph","text":"Você pode consultar os módulos para:"},
      {
        type: 'list',
        items: [
          'buscar apoio para pensar uma situação vivida no atendimento;',
          'consultar fundamentos relacionados a uma decisão pedagógica;',
          'preparar ou retomar um planejamento;',
          'refletir sobre a participação, as escolhas e as formas de expressão da criança;',
          'apoiar momentos de estudo individual ou de conversa entre docentes;',
          'localizar documentos e referências relacionados ao tema;',
          'reconhecer questões que ainda precisam de estudo ou atualização.',
        ],
      },
      {
        type: 'paragraph',
        text: 'As perguntas ajudam a examinar cada situação antes de decidir como agir.',
      },
      {"type":"paragraph","text":"Use as propostas como apoio ao estudo e à prática. Elas não são instrumentos de avaliação docente, curso certificado, habilitação profissional ou protocolo obrigatório."},
    ],
  },
  {
    id: 'principios-pedagogicos-editoriais',
    eyebrow: 'Compromissos',
    title: 'Princípios que orientam o Caderno Digital',
    blocks: [
      {"type":"paragraph","text":"Direitos da criança, interações e brincadeira, escuta e participação orientam as propostas. Esses princípios se articulam ao planejamento, aos recursos e à reflexão profissional nos módulos seguintes."},
      {"type":"list","items":["Reconhecer a criança como sujeito de direitos, com histórias, interesses e modos próprios de participar.","Sustentar interações e brincadeiras e a indissociabilidade entre educar e cuidar.","Escutar escolhas, iniciativas, silêncios e recusas, permitindo que influenciem o encontro.","Planejar com intenção e flexibilidade, ampliando o acesso às experiências e às diferentes linguagens.","Valorizar a autoria docente, a reflexão e o diálogo profissional, respeitando as responsabilidades de cada área."]},
    ],
  },
  {
    id: 'navegacao-percurso',
    eyebrow: 'Navegação',
    title: 'Como navegar e construir seu percurso',
    blocks: [
      {"type":"paragraph","text":"Comece pelo tema que se aproxima de sua pergunta. Os módulos podem ser lidos em qualquer ordem e retomados quando você precisar."},
      {
        type: 'list',
        items: [
          'Na página inicial, escolha um dos módulos apresentados nos cartões.',
          'Use a pesquisa para localizar temas relacionados à sua necessidade.',
          'No menu principal, acesse a página inicial, esta apresentação ou qualquer outro módulo.',
          'Dentro de cada módulo, use o sumário para ir diretamente à parte desejada.',
          'Ao final da página, utilize os links para avançar ao módulo seguinte ou retornar ao anterior.',
          'Quando houver um link verificado, consulte documentos oficiais e referências em seus endereços de origem.',
        ],
      },
      {"type":"callout","tone":"guidance","title":"Um percurso construído por você","text":"Não há controle de frequência, nota ou certificado. Seu percurso acompanha as necessidades de estudo e as perguntas da prática."},
    ],
  },
  {
    id: 'organizacao-modulos',
    eyebrow: 'Mapa do conteúdo',
    title: 'O que você encontrará em cada módulo',
    blocks: [
      {"type":"paragraph","text":"Após esta apresentação, os oito módulos seguintes oferecem caminhos de consulta:"},
      {
        type: 'list',
        items: [
          'Módulo 2 – Atendimento Educacional Hospitalar: apresenta fundamentos do atendimento, sua organização e os limites da atuação docente. Também convida a pensar a criança e a experiência educativa no cotidiano do hospital.',
          'Módulo 3 – Educação Infantil em Contexto Hospitalar: aborda concepções de criança, currículo, direitos de aprendizagem e desenvolvimento, campos de experiências, interações, brincadeiras e diferentes linguagens.',
          'Módulo 4 – Planejamento Pedagógico: discute como preparar possibilidades com intencionalidade e flexibilidade. Trata também da observação, do registro, da avaliação como acompanhamento e do replanejamento.',
          'Módulo 5 – Brincar e mediações lúdicas: discute o brincar como direito e linguagem da infância, as mediações docentes e possibilidades de participação durante a hospitalização.',
          'Módulo 6 – Recursos Pedagógicos: apresenta questões para selecionar, analisar, adaptar, organizar e utilizar recursos de modo responsável e coerente com cada encontro.',
          'Módulo 7 – Legislação: oferece caminhos para localizar e compreender normas e documentos relacionados ao direito à educação e ao atendimento durante a hospitalização.',
          'Módulo 8 – Formação Continuada: propõe percursos de estudo e reflexão ligados à prática, à troca entre pares e ao desenvolvimento profissional.',
          'Módulo 9 – Experiências docentes: princípios para documentação e compartilhamento: discute os cuidados necessários para registrar e, futuramente, compartilhar experiências docentes de maneira ética, acessível e responsável.',
        ],
      },
      {"type":"callout","tone":"note","title":"Sobre o Módulo 9","text":"O módulo sobre experiências docentes orienta a documentação e o compartilhamento responsável. Não há canal de submissão ou publicação de relatos."},
    ],
  },
  {
    id: 'limites-estado-responsabilidades',
    eyebrow: 'Transparência sobre o conteúdo',
    title: 'Limites do Caderno',
    blocks: [
      {"type":"paragraph","text":"As propostas precisam ser relacionadas às condições de cada atendimento e às orientações do sistema de ensino e da instituição."},
      {"type":"paragraph","text":"Referências e recursos têm suas formas de acesso indicadas junto aos links. Há materiais para download, incluindo o e-book Quintais Brincantes, além de páginas externas de consulta ou aquisição."},
      {"type":"paragraph","text":"As orientações são pedagógicas. Decisões clínicas e protocolos de saúde, higiene e segurança cabem aos profissionais e às instituições responsáveis."},
    ],
  },
  {
    id: 'autoria-atualizacao-tecnologia',
    eyebrow: 'Créditos e ficha técnica',
    title: 'Autoria, créditos e transparência tecnológica',
    blocks: [
      {
        type: 'list',
        items: [
          'Autora: Maria Tereza Gonçalves Lemos Dantas.',
          'Orientadora: Prof.ª Dr.ª Jacyene Melo de Oliveira Araújo.',
          'Vínculo acadêmico: Mestrado Profissional em Educação Especial do Programa de Pós-Graduação em Educação Especial da Universidade Federal do Rio Grande do Norte (PPGEEsp/UFRN).',
          'Natureza: Produto Educacional desenvolvido no âmbito da pesquisa de mestrado.',
          'Edição: versão final, setembro de 2026.',
          'Formato: Caderno Digital de Práticas Docentes na Educação Infantil em Contexto Hospitalar.',
          'Validação: realizada pelas professoras participantes da pesquisa.',
        ],
      },
      {"type":"paragraph","text":"O vínculo com o PPGEEsp/UFRN identifica a origem acadêmica do produto. Não atribui automaticamente à Universidade, ao Programa, à orientadora ou a outras instituições a responsabilidade por publicação, manutenção ou atualização."},
      {
        type: 'paragraph',
        text: 'A instituição responsável pela manutenção futura, a política de atualização, a licença e o canal de contato ainda serão definidos.',
      },
      {
        type: 'callout',
        tone: 'guidance',
        title: 'Uso de ferramentas digitais',
        text: 'Ferramentas digitais e de inteligência artificial generativa apoiaram a organização editorial, a revisão linguística, a programação e o desenvolvimento da interface.',
      },
      {
        type: 'paragraph',
        text: 'A inteligência artificial não é autora nem fonte acadêmica. A escolha das fontes, as decisões pedagógicas, a revisão do conteúdo e a responsabilidade acadêmica permanecem com a autora.',
      },
      {
        type: 'list',
        items: [
          'Interface e ilustrações vetoriais: desenvolvidas para o Caderno com apoio de ferramentas digitais e de inteligência artificial generativa.',
          'Ícones: biblioteca Lucide, distribuída sob licença ISC.',
          'Tipografia: Cormorant Garamond e Nunito, disponibilizadas pelo Google Fonts.',
          'Obras indicadas: livros, textos, vídeos e filmes pertencem a seus respectivos autores, editoras e produtores, identificados nas referências e nas páginas de origem.',
        ],
      },
    ],
  },
]
