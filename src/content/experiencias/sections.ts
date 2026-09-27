import type { ContentSection } from '../../types/content'

export const experienciasSections: ContentSection[] = [
  {
    id: 'documentar-sem-expor',
    eyebrow: 'Situação pedagógica para reflexão',
    title: 'Uma experiência pode ser documentada sem ser exposta',
    blocks: [
      { type: 'callout', tone: 'note', title: 'Sobre esta situação', text: 'Situação hipotética elaborada com finalidade formativa. Não corresponde a relato das professoras participantes nem constitui resultado da pesquisa.' },
      { type: 'paragraph', text: 'Depois de um encontro, uma docente anota que a criança mudou o percurso de uma proposta, combinou os materiais de um modo não previsto e preferiu interromper quando o ambiente se tornou mais movimentado. Ao reler o registro, a docente percebe uma pergunta sobre sua própria mediação e considera conversar com outras docentes.' },
      {"type":"paragraph","text":"Documentar não obriga a compartilhar. O registro pode apoiar uma reflexão pessoal ou uma conversa profissional protegida. Antes de mudar seu público, selecione o que é necessário e reveja os cuidados com a identificação das pessoas."},
    ],
  },
  {
    id: 'por-que-documentar-experiencias',
    eyebrow: 'Memória e reflexão',
    title: 'Por que documentar experiências docentes?',
    blocks: [
      {"type":"paragraph","text":"Registrar dúvidas e interrupções permite examinar o percurso, inclusive quando não houve o resultado esperado."},
      { type: 'callout', tone: 'guidance', title: 'Documentar para voltar a pensar', text: 'A documentação não precisa comprovar que uma proposta deu certo. Ela pode preservar uma pergunta, tornar uma decisão examinável e apoiar novas leituras da experiência.' },
    ],
  },
  {
    id: 'pesquisa-saberes-documentacao',
    eyebrow: 'Resultados da pesquisa',
    title: 'O que a pesquisa revelou: saberes que se constroem na prática',
    blocks: [
      { type: 'paragraph', text: 'A pesquisa que originou o Caderno Digital evidenciou os saberes docentes construídos na prática cotidiana como uma das categorias de análise. As professoras constroem, mobilizam e transformam saberes no trabalho desenvolvido no Atendimento Educacional Hospitalar, e esses saberes integram a constituição da docência nesse contexto.' },
      { type: 'paragraph', text: 'Ao narrar uma experiência, a docente seleciona acontecimentos e examina suas decisões. Essa elaboração pode tornar visíveis saberes da prática, sem transformar o episódio em resultado de pesquisa nem atribuir às participantes afirmações não documentadas.' },
      { type: 'paragraph', text: 'Toda narrativa parte de uma perspectiva situada e, por essa razão, não representa o conjunto de docentes, crianças, instituições ou contextos. O diálogo com estudos, documentos e outras interpretações amplia a compreensão da experiência e oferece fundamentos para uma circulação responsável.' },
      { type: 'callout', tone: 'highlight', title: 'Saberes que podem tornar-se visíveis', text: 'Ao documentar e narrar, a docente elabora a experiência e reconhece saberes construídos na prática. O caráter singular do que viveu permanece visível, sem transformar a narrativa em regra ou modelo profissional.' },
    ],
  },
  {
    id: 'experiencia-relato-publicavel',
    eyebrow: 'Elaboração narrativa',
    title: 'Da experiência vivida à narrativa profissional',
    blocks: [
      {"type":"paragraph","text":"Experiência → registro → seleção → contextualização → interpretação → narrativa. Ao escrever, você pode voltar ao registro, buscar contexto ou rever uma interpretação. Não é um percurso linear nem uma reprodução integral do vivido."},
      {"type":"paragraph","text":"Distinga o observado do interpretado e deixe aparecer escolhas, dúvidas e limites. A narrativa não precisa terminar com sucesso ou produto final."},
      { type: 'paragraph', text: 'Como a experiência não pertence integralmente a uma única voz, a narrativa precisa reconhecer a presença de outras pessoas sem falar por elas, expô-las ou se apropriar de suas falas, imagens e produções. O texto da docente é autoral, mas sua autoria não cria automaticamente o direito de tornar públicos todos os elementos da situação.' },
    ],
  },
  {
    id: 'finalidade-publico-autorizacao',
    eyebrow: 'Distinções necessárias',
    title: 'Registros diferentes, finalidades diferentes',
    blocks: [
      {"type":"paragraph","text":"Antes de escolher o que registrar ou compartilhar, defina a finalidade:"},
      { type: 'list', items: [
        'Registro para estudo profissional: anotação destinada a elaborar perguntas, interpretações e decisões da prática, com circulação protegida conforme sua finalidade.',
        'Documentação pedagógica: seleção e organização interpretativa de registros para acompanhar e tornar processos educativos visíveis aos interlocutores previstos, com finalidade pedagógica e cuidados éticos.',
        'Registro institucional: documento produzido segundo normas, responsabilidades, finalidades e canais definidos pela instituição ou rede.',
        'Prontuário ou registro clínico: documento próprio do cuidado em saúde, produzido, protegido e interpretado pelos profissionais e sistemas competentes.',
        'Relato de experiência: narrativa autoral que comunica e reflete sobre uma experiência situada, sem estabelecer modelo universal.',
        'Relato de pesquisa: produção vinculada a investigação sistemática, submetida ao enquadramento e às exigências éticas aplicáveis.',
        'Exposição pública: disponibilização para público amplo, que altera a circulação e pode envolver privacidade, autoria, proteção de dados, acessibilidade e responsabilidade institucional.',
      ] },
      { type: 'callout', tone: 'highlight', title: 'Mudar o público muda a responsabilidade', text: 'Compartilhar em um grupo profissional protegido não equivale a publicar na internet. A ampliação da circulação exige revisar finalidade, necessidade, contexto, proteção das pessoas e responsabilidades institucionais.' },
    ],
  },
  {
    id: 'compartilhar-sem-receita',
    eyebrow: 'Contexto e singularidade',
    title: 'Compartilhar sem transformar a experiência em receita',
    blocks: [
      {"type":"paragraph","text":"Ofereça o contexto pedagógico necessário para compreender as decisões: condições do encontro, materiais, relações e perguntas. Evite detalhes identificáveis ou clínicos que não contribuam para a reflexão."},
      {"type":"paragraph","text":"Um relato amplia repertórios, mas não comprova eficácia nem estabelece um procedimento universal."},
      {"type":"paragraph","text":"Evite apresentar a docente como responsável por toda transformação, romantizar a precariedade ou apagar problemas institucionais. A autoria profissional não substitui as responsabilidades da rede e da gestão."},
    ],
  },
  {
    id: 'privacidade-protecao-minimizacao',
    eyebrow: 'Privacidade e cuidado ético',
    title: 'Proteger crianças, famílias, profissionais e instituições',
    blocks: [
      { type: 'paragraph', text: 'Documentar e compartilhar exigem proteção da privacidade, confidencialidade e uso apenas das informações necessárias à finalidade definida. Retirar o nome pode não impedir a identificação indireta: hospital, escola, município, idade exata, período, condição rara, composição familiar e circunstâncias singulares podem reconhecer uma pessoa quando aparecem isolados ou combinados.' },
      { type: 'paragraph', text: 'Informações sobre diagnóstico, tratamento, procedimentos e condições de saúde são dados pessoais sensíveis. A docente não deve acessar prontuários para produzir narrativas, copiar informações clínicas, interpretar diagnósticos ou divulgar dados de saúde. Questões jurídicas, institucionais e de proteção de dados precisam ser encaminhadas às instâncias competentes.' },
      { type: 'paragraph', text: 'Fotografias, vídeos, áudios, vozes, falas e produções infantis podem envolver imagem, identidade, autoria, contexto e direitos de outras pessoas. Ter acesso ao material ou autorização para utilizá-lo em uma atividade pedagógica não significa ter permissão para divulgá-lo em outra finalidade ou para um público diferente.' },
      { type: 'paragraph', text: 'Considerar a participação e consultar a criança, de modo compatível com sua idade, com o contexto, com a finalidade e com as orientações institucionais, é um cuidado ético e pedagógico. Isso não constitui, por si só, regra jurídica universal nem substitui as autorizações e análises competentes. Da mesma forma, uma autorização adulta não elimina automaticamente os cuidados com dignidade, melhor interesse, necessidade e efeitos futuros da exposição.' },
      { type: 'paragraph', text: 'Familiares, docentes, profissionais, escolas, hospitais e redes também podem ser identificados ou expostos por detalhes da narrativa. Na circulação digital aberta, conteúdos podem ser copiados, indexados e preservados fora do controle de quem publicou, mesmo depois de eventual retirada da página original.' },
      { type: 'callout', tone: 'note', title: 'Autorização não elimina todos os cuidados', text: 'A hipótese jurídica aplicável e os instrumentos necessários não devem ser definidos individualmente pela docente. Mesmo quando houver autorização pertinente, ainda precisam ser considerados privacidade, dignidade, melhor interesse, finalidade e alcance da circulação.' },
    ],
  },
  {
    id: 'autoria-direitos-uso',
    eyebrow: 'Perspectiva e direitos de uso',
    title: 'Autoria, voz docente e construção coletiva de saberes',
    blocks: [
      {"type":"paragraph","text":"Preserve sua voz ao narrar decisões, dúvidas e mudanças de compreensão. Mostrar incertezas pode tornar visível a reflexão profissional, sem exigir uma imagem de desempenho perfeito."},
      { type: 'paragraph', text: 'A experiência, entretanto, é relacional. Reconhecer interlocutores e condições que participaram do encontro não autoriza falar em nome de outras pessoas ou expô-las. O reconhecimento da coautoria deve considerar contribuição efetiva à elaboração intelectual ou textual, e não decorre apenas de cargo, supervisão ou autorização administrativa.' },
      { type: 'paragraph', text: 'Textos, fotografias, ilustrações, músicas, materiais pedagógicos e produções infantis podem possuir autores e titulares distintos. Citar a origem não substitui a verificação de licença ou de permissão compatível com o uso pretendido. Autorização de imagem também não equivale automaticamente a cessão de direitos sobre uma produção.' },
    ],
  },
  {
    id: 'compartilhar-responsabilidade',
    eyebrow: 'Estado atual e responsabilidade',
    title: 'Compartilhamento público exige responsabilidade institucional',
    blocks: [
      {"type":"callout","tone":"highlight","title":"O Caderno Digital ainda não recebe nem publica relatos","text":"Este módulo é formativo. Não há envio, seleção ou publicação pública de relatos. O Meu Espaço de Registros é destinado aos registros pessoais e não funciona como canal de submissão."},
      {"type":"paragraph","text":"Uma abertura futura dependeria de instituição responsável, finalidade e público definidos, políticas editorial e de privacidade, critérios pedagógicos e proteção de dados. As análises éticas, jurídicas e institucionais cabíveis não podem ser transferidas à docente autora."},
      { type: 'paragraph', text: 'A acessibilidade precisaria integrar a escrita, a estrutura e os formatos desde o início, com linguagem clara, ordem de leitura compreensível, links descritivos e recursos adequados aos conteúdos utilizados. Uma política futura também precisaria prever procedimentos de correção, atualização e retirada.' },
    ],
  },
  {
    id: 'estado-atual-condicoes-futuras',
    eyebrow: 'Reflexão e aprofundamento',
    title: 'Para refletir, elaborar e aprofundar',
    blocks: [
      { type: 'paragraph', text: 'Ao retomar uma experiência para documentação ou estudo, considere:' },
      { type: 'list', items: [
        'Por que esta experiência merece ser retomada e qual é a finalidade da escrita?',
        'O que foi observado e o que corresponde à minha interpretação?',
        'Que saber docente a narrativa ajuda a reconhecer ou rever?',
        'Que contexto é necessário para compreender a experiência e que detalhes devem ser protegidos?',
        'O texto preserva a singularidade ou sugere uma receita, resultado garantido ou modelo universal?',
        'A circulação pretendida é adequada ou exige autorização, proteção e responsabilidade institucional ainda não asseguradas?',
      ] },
      { type: 'paragraph', text: 'Este roteiro opcional pode apoiar a elaboração de uma narrativa profissional:' },
      { type: 'list', ordered: true, items: [
        'Identificar a questão que mobiliza a escrita.',
        'Apresentar apenas o contexto pedagógico necessário.',
        'Descrever os acontecimentos observados.',
        'Distinguir decisões, dúvidas e interpretações.',
        'Reconhecer saberes construídos ou revistos.',
        'Explicitar limites, cuidados de proteção e possíveis continuidades.',
      ] },
      {"type":"callout","tone":"guidance","title":"Um roteiro de reflexão, não de submissão","text":"Adapte o roteiro à sua escrita. Ele não é formulário de submissão nem instrumento de avaliação. Na circulação fora dos canais autorizados, proteja dados clínicos, imagens e informações que permitam identificar pessoas ou instituições."},
      { type: 'callout', tone: 'note', title: 'Direitos da criança e proteção de dados', text: 'Referências sobre dignidade, privacidade, melhor interesse e tratamento de dados pessoais.' },
      { type: 'resources', items: [
        { id: 'experiencias-lgpd', type: 'document', title: 'Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais', description: 'Dispõe sobre tratamento de dados pessoais, dados sensíveis, pesquisa e dados de crianças e adolescentes.', meta: 'Presidência da República · texto oficial', href: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm' },
        { id: 'experiencias-anpd-criancas', type: 'document', title: 'Enunciado da ANPD sobre dados de crianças e adolescentes', description: 'Orienta que o melhor interesse deve prevalecer na aplicação das hipóteses legais de tratamento.', meta: 'Autoridade Nacional de Proteção de Dados · fonte oficial', href: 'https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-divulga-enunciado-sobre-o-tratamento-de-dados-pessoais-de-criancas-e-adolescentes' },
        { id: 'experiencias-eca', type: 'document', title: 'Lei nº 8.069/1990 — Estatuto da Criança e do Adolescente', description: 'Protege dignidade, imagem, identidade, autonomia e integridade moral da criança e do adolescente.', meta: 'Presidência da República · texto compilado', href: 'https://www.planalto.gov.br/ccivil_03/leis/l8069compilado.htm' },
      ] },
      { type: 'callout', tone: 'note', title: 'Autoria e direitos de uso', text: 'Referência para autoria, reprodução e disponibilização de obras e materiais.' },
      { type: 'resources', items: [
        { id: 'experiencias-direitos-autorais', type: 'document', title: 'Lei nº 9.610/1998 — Lei de Direitos Autorais', description: 'Regula direitos dos autores e utilização, reprodução e disponibilização de obras.', meta: 'Presidência da República · texto oficial', href: 'https://www.planalto.gov.br/ccivil_03/leis/l9610.htm' },
      ] },
      { type: 'callout', tone: 'note', title: 'Acessibilidade', text: 'Referências para acessibilidade da comunicação e dos conteúdos digitais.' },
      { type: 'resources', items: [
        { id: 'experiencias-lbi', type: 'document', title: 'Lei nº 13.146/2015 — Lei Brasileira de Inclusão', description: 'Estabelece, entre outras garantias, acessibilidade em sítios da internet.', meta: 'Presidência da República · texto oficial', href: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm' },
        { id: 'experiencias-emag', type: 'document', title: 'Modelo de Acessibilidade em Governo Eletrônico — eMAG 3.1', description: 'Referência brasileira para desenvolvimento e publicação de conteúdo digital acessível.', meta: 'Governo Digital · fonte oficial', href: 'https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/modelo-de-acessibilidade' },
      ] },
      { type: 'callout', tone: 'note', title: 'Ética em pesquisa', text: 'Documentos para consulta quando a produção estiver vinculada a pesquisa envolvendo participantes.' },
      { type: 'resources', items: [
        { id: 'experiencias-cns-510-2016', type: 'document', title: 'Resolução CNS nº 510/2016', description: 'Dispõe sobre normas aplicáveis a pesquisas em Ciências Humanas e Sociais envolvendo participantes.', meta: 'Conselho Nacional de Saúde · fonte oficial', href: 'https://www.gov.br/conselho-nacional-de-saude/pt-br/atos-normativos/resolucoes/2016/resolucao-no-510.pdf' },
        { id: 'experiencias-cns-466-2012', type: 'document', title: 'Resolução CNS nº 466/2012', description: 'Estabelece diretrizes e normas para pesquisas envolvendo seres humanos.', meta: 'Conselho Nacional de Saúde · fonte oficial', href: 'https://www.gov.br/conselho-nacional-de-saude/pt-br/atos-normativos/resolucoes/2012/resolucao-no-466.pdf/view' },
      ] },
      { type: 'callout', tone: 'note', title: 'Documentação, narrativa e saberes docentes', text: 'O Módulo 08 aprofunda a relação entre experiência, registro, reflexão, estudo coletivo e constituição dos saberes docentes.' },
      { type: 'resources', items: [
        { id: 'experiencias-modulo-formacao', type: 'link', title: 'Módulo 08 – Formação Continuada', description: 'Para retomar experiência, registro, reflexão e construção coletiva de saberes.', href: '/formacao' },
      ] },
    ],
  },
]
