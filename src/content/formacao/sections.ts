import type { ContentSection } from '../../types/content'

export const formacaoSections: ContentSection[] = [
  {
    id: 'situacao-pergunta-formativa',
    eyebrow: 'Situação pedagógica para reflexão',
    title: 'Uma situação que se transforma em pergunta',
    blocks: [
      { type: 'callout', tone: 'note', title: 'Sobre esta situação', text: 'Situação hipotética elaborada com finalidade formativa. Não corresponde a relato das professoras participantes nem constitui resultado da pesquisa.' },
      { type: 'paragraph', text: 'Uma docente prepara uma experiência com narrativa e imagens. Durante o encontro, a criança prefere observar as ilustrações, comenta apenas alguns detalhes e não acompanha o percurso imaginado. Quando um profissional da saúde entra no quarto, a experiência é interrompida. Mais tarde, a docente se pergunta: de que maneiras aquela criança participou e o que essa situação pode ensinar sobre mediação e continuidade?' },
      { type: 'paragraph', text: 'A dúvida não indica necessariamente erro ou falta de preparo. Ela pode nascer da atenção ao que aconteceu e tornar visíveis concepções, escolhas e condições que merecem ser examinadas. Em vez de procurar uma solução imediata, a docente pode descrever a situação, escutar outras interpretações, consultar referências e reconhecer o que depende de sua ação ou de condições institucionais.' },
      { type: 'paragraph', text: 'Uma experiência concreta pode, assim, transformar-se em pergunta formativa. O que será compreendido a partir dela não está definido de antemão: pode confirmar uma percepção, deslocar uma interpretação, abrir outra pergunta ou indicar a necessidade de diálogo com a coordenação, a rede ou a equipe responsável.' },
      { type: 'callout', tone: 'guidance', title: 'Para pensar', text: 'Que aspecto da situação merece ser observado com mais cuidado? Que conhecimentos e vozes poderiam ampliar sua compreensão sem transformar a experiência em julgamento da docente ou da criança?' },
    ],
  },
  {
    id: 'formacao-percurso-direito-responsabilidade',
    eyebrow: 'Desenvolvimento profissional',
    title: 'Formação continuada é processo, direito e responsabilidade compartilhada',
    blocks: [
      { type: 'paragraph', text: 'A formação continuada não começa nem termina em um curso. Ela acompanha a trajetória profissional por meio de estudo, reflexão, diálogo, pesquisa, acompanhamento e revisão da prática. Uma capacitação pontual pode contribuir para conhecer determinado tema, procedimento ou ferramenta, mas não substitui um processo formativo sustentado ao longo do tempo.' },
      { type: 'paragraph', text: 'A LDB atribui aos entes federados, em regime de colaboração, a promoção da formação inicial e continuada dos profissionais do magistério. O Decreto nº 8.752/2016 reconhece o acesso permanente à formação, a articulação entre teoria e prática, a experiência profissional, as instituições educativas como espaços formativos e a importância das condições de trabalho.' },
      { type: 'paragraph', text: 'A docente participa ativamente de sua formação, formula perguntas, busca conhecimentos e revisa suas decisões. Essa participação não transfere a ela, individualmente, toda a responsabilidade pelo desenvolvimento profissional. Políticas de formação, tempo, acesso, acompanhamento e condições para estudar pertencem também às responsabilidades das redes e das instituições.' },
      { type: 'callout', tone: 'highlight', title: 'Formação precisa de condições para acontecer', text: 'Tempo institucional, acesso, acompanhamento pedagógico, materiais, conectividade, participação nas decisões e reconhecimento profissional integram as condições formativas. Este módulo não certifica, não classifica docentes e não substitui a política de formação do sistema de ensino.' },
    ],
  },
  {
    id: 'pesquisa-saberes-pratica',
    eyebrow: 'Resultados da pesquisa',
    title: 'O que a pesquisa revelou: saberes construídos na prática cotidiana',
    blocks: [
      { type: 'paragraph', text: 'Os saberes docentes construídos na prática cotidiana constituem uma das categorias evidenciadas pela pesquisa que originou o Caderno Digital. No Atendimento Educacional Hospitalar, as professoras constroem, mobilizam e transformam conhecimentos ao lidar com as situações do dia a dia e com as decisões que o trabalho exige.' },
      { type: 'paragraph', text: 'Quando uma docente retoma uma mediação, procura compreender a participação da criança ou discute com outras profissionais uma mudança feita no planejamento, a experiência se torna matéria de formação. O conhecimento construído nessas situações integra a docência e merece ser reconhecido, examinado e compartilhado em condições adequadas.' },
      { type: 'paragraph', text: 'O estudo ajuda a ampliar essa elaboração. Documentos, pesquisas, referenciais pedagógicos e diálogo profissional trazem outras perguntas, confrontam interpretações e permitem rever aquilo que a experiência havia mostrado inicialmente.' },
      { type: 'callout', tone: 'highlight', title: 'A experiência também produz conhecimento', text: 'A formação aproxima ação, observação, reflexão, estudo e diálogo. Nesse movimento, a docente compreende melhor suas escolhas e continua construindo conhecimentos sobre o trabalho.' },
    ],
  },
  {
    id: 'partir-pratica-ampliar-perguntas',
    eyebrow: 'Experiência e conhecimento',
    title: 'Da experiência à reflexão: ampliar perguntas e compreensões',
    blocks: [
      { type: 'paragraph', text: 'Viver uma experiência e analisá-la são movimentos relacionados, mas diferentes. No encontro, a docente observa, decide e responde às condições presentes. Ao retomá-lo para estudo, pode desacelerar o olhar, descrever acontecimentos, distinguir o que observou daquilo que interpretou e formular hipóteses sobre suas escolhas e seus efeitos.' },
      { type: 'paragraph', text: 'Uma descrição procura registrar o que ocorreu sem antecipar conclusões. A interpretação atribui sentidos ao acontecimento e precisa permanecer aberta à revisão. As hipóteses ajudam a explorar explicações possíveis, sem rotular a criança, presumir intenções ou transformar uma percepção inicial em certeza.' },
      { type: 'paragraph', text: 'Teoria e prática não ocupam lados opostos. Conceitos, pesquisas, documentos curriculares e normas oferecem outras lentes para examinar a experiência. Eles não funcionam como correção externa ou receita, mas ajudam a formular perguntas mais precisas, reconhecer limites, confrontar interpretações e rever decisões.' },
      { type: 'callout', tone: 'guidance', title: 'Refletir não é avaliar a pessoa', text: 'A análise formativa volta-se às decisões, relações, condições e conhecimentos envolvidos. Não deve produzir nota, ranking, perfil ideal ou julgamento da competência individual da docente.' },
    ],
  },
  {
    id: 'estudar-observar-registrar-refletir',
    eyebrow: 'Registro e análise',
    title: 'Registrar para compreender e replanejar',
    blocks: [
      { type: 'paragraph', text: 'O registro para estudo profissional pode reunir descrições, perguntas, relações entre fontes, dúvidas, hipóteses e decisões a retomar. Ao tornar o pensamento visível, permite comparar interpretações, perceber mudanças de compreensão e voltar à situação depois de novas leituras ou conversas.' },
      { type: 'paragraph', text: 'Ele não se confunde com a documentação pedagógica, que acompanha e comunica processos educativos; com o registro institucional, produzido segundo finalidades e procedimentos da rede; nem com prontuário ou registro clínico, que pertence aos profissionais e sistemas responsáveis pelo cuidado em saúde. Cada registro possui finalidade, autoria, circulação e proteção próprias.' },
      { type: 'paragraph', text: 'Registrar não encerra a reflexão. A análise do que foi anotado pode apoiar o replanejamento: manter uma possibilidade, modificar uma mediação, reorganizar materiais, buscar assessoramento ou reconhecer que determinada questão depende de encaminhamento institucional. Nem todo registro precisa produzir uma mudança imediata; às vezes ele preserva uma pergunta que ainda precisa amadurecer.' },
      { type: 'callout', tone: 'note', title: 'Privacidade no estudo da prática', text: 'Nos registros e nas situações utilizados para estudo ou discussão formativa, devem ser omitidos nomes, diagnósticos, imagens e detalhes que permitam reconhecer crianças, familiares ou profissionais. Essa orientação não substitui as regras próprias dos registros institucionais. A necessidade formativa não autoriza copiar prontuários, retirar informações de canais institucionais protegidos ou interpretar dados clínicos.' },
    ],
  },
  {
    id: 'aprender-pares-conhecimento-coletivo',
    eyebrow: 'Diálogo profissional',
    title: 'Estudar com outras docentes e construir saberes coletivamente',
    blocks: [
      { type: 'paragraph', text: 'Grupos formativos, conversas entre pares, narrativas profissionais, projetos de pesquisa e ações de extensão podem criar espaços para analisar experiências, estudar referenciais e construir perguntas coletivas. A tese de Senadaht Barbosa Baracho Rodrigues de Oliveira e relatos situados nos Anais consultados registram experiências de reflexão entre pares e articulação entre formação, pesquisa e trabalho docente no contexto hospitalar.' },
      { type: 'paragraph', text: 'Wendos (2020) registra sua participação, em 2019, por intermédio de sua orientadora, em um projeto de extensão de formação continuada para professores e coordenadores que atuavam nas classes hospitalares e domiciliares do Rio Grande do Norte. Segundo o trabalho, a ação foi oferecida pela SEEC em parceria com a SME, a UFRN, a UERN e a UFERSA. Esse registro documenta uma experiência formativa situada naquele período, sem permitir concluir que o mesmo projeto ou a parceria permaneçam atualmente ativos.' },
      { type: 'paragraph', text: 'O estudo coletivo precisa de confiança, escuta, respeito e confidencialidade. Participar não deve significar obrigação de relatar dificuldades ou expor experiências pessoais e profissionais. Situações fictícias, textos, documentos e questões comuns ao trabalho também podem sustentar a reflexão.' },
      { type: 'paragraph', text: 'Construir conhecimento coletivamente não exige consenso. Diferentes interpretações podem tornar visíveis concepções e alternativas que uma leitura individual não alcançou, desde que sejam tratadas com respeito, fundamentação e abertura à revisão. Quando a questão envolve atribuições administrativas, jurídicas ou clínicas, o grupo pode reconhecê-la e encaminhá-la, mas não substituir a instância competente.' },
      { type: 'callout', tone: 'guidance', title: 'Uma conversa formativa pode começar por uma pergunta', text: 'Que evidências estão disponíveis? Que interpretações são possíveis? Que referência pode ampliar a análise? O que depende da ação pedagógica e o que requer condições ou decisões institucionais?' },
    ],
  },
  {
    id: 'conhecimentos-articulados-aeh',
    eyebrow: 'Especificidade pedagógica',
    title: 'Formar-se para a Educação Infantil em contexto hospitalar',
    blocks: [
      { type: 'paragraph', text: 'A formação continuada articula conhecimentos sobre infância, Educação Infantil e contexto hospitalar. Reconhecer a criança como sujeito de direitos orienta a escuta, a participação, a escolha e o respeito aos diferentes modos de participar, inclusive quando a criança prefere observar, transformar a proposta, fazer uma pausa ou recusá-la.' },
      { type: 'paragraph', text: 'Interações e brincadeira permanecem eixos da Educação Infantil. Planejamento flexível, diferentes linguagens, observação e documentação ajudam a sustentar experiências coerentes com a etapa mesmo quando os encontros são breves, variáveis ou interrompidos. A avaliação acompanha o desenvolvimento por meio de observação e registro, sem objetivo de promoção ou retenção.' },
      { type: 'paragraph', text: 'Inclusão e acessibilidade exigem atenção às barreiras concretas entre criança, espaço, materiais, comunicação e situação. Estudar formas de tornar a experiência acessível não significa deduzi-las automaticamente de um diagnóstico, mas observar, reorganizar condições e acompanhar novamente a participação.' },
      { type: 'paragraph', text: 'A formação pedagógica pode ajudar a docente a compreender o ambiente em que trabalha e a dialogar com outras áreas. Não autoriza diagnóstico, prescrição, interpretação de informações clínicas nem substituição dos profissionais de saúde. Informações necessárias à participação devem chegar pelos canais institucionais adequados.' },
      { type: 'callout', tone: 'highlight', title: 'O contexto muda; a identidade da Educação Infantil permanece', text: 'Formar-se para esse trabalho envolve compreender as singularidades do hospital sem reduzir a experiência educativa ao tratamento, abandonar as interações e a brincadeira ou antecipar práticas próprias de outras etapas.' },
      { type: 'resources', items: [
        { id: 'formacao-modulo-educacao-infantil', type: 'link', title: 'Módulo 3 – Educação Infantil em Contexto Hospitalar', description: 'Para aprofundar concepções de criança, currículo, direitos e diferentes linguagens.', href: '/educacao-infantil' },
        { id: 'formacao-modulo-planejamento', type: 'link', title: 'Módulo 4 – Planejamento Pedagógico', description: 'Para estudar planejamento flexível, observação, registro, avaliação e replanejamento.', href: '/planejamento' },
        { id: 'formacao-modulo-estrategias', type: 'link', title: 'Módulo 5 – Brincar e mediações lúdicas', description: 'Para refletir sobre brincadeira, participação, autoria e mediação docente.', href: '/estrategias' },
      ] },
    ],
  },
  {
    id: 'formacao-situada-articulacao-institucional',
    eyebrow: 'Condições e responsabilidades',
    title: 'A formação continuada também é responsabilidade institucional',
    blocks: [
      { type: 'paragraph', text: 'A formação continuada precisa considerar as características do serviço, da rede, da etapa educacional e das condições de trabalho. A iniciativa pessoal de leitura e estudo pode enriquecer o percurso profissional, mas não substitui políticas de formação, tempo institucional, condições de acesso, acompanhamento e assessoramento.' },
      { type: 'paragraph', text: 'Ao sistema de ensino e à gestão cabem responsabilidades pela política e pelas condições formativas. Coordenação pedagógica e estruturas de assessoramento podem apoiar a análise de demandas, articular estudos e acompanhar processos dentro de suas atribuições. À docente cabe participar, formular questões e refletir sobre a prática em condições viáveis, sem assumir sozinha lacunas estruturais da rede.' },
      { type: 'paragraph', text: 'Universidades e instituições formadoras podem contribuir por meio de ensino, pesquisa e extensão quando existem projetos e parcerias formalmente constituídos. Essas relações podem aproximar produção acadêmica e trabalho docente, respeitando responsabilidades, participação voluntária quando aplicável e cuidados éticos.' },
      { type: 'paragraph', text: 'No Rio Grande do Norte, a Portaria-SEI nº 533, de 6 de julho de 2022, e a Portaria-SEI nº 4.522, de 26 de setembro de 2024, ambas da SEEC/RN, contêm disposições sobre formação continuada, participação de professores e atuação da estrutura estadual no AEHD. A vigência e a aplicação administrativa desses atos devem ser confirmadas junto à rede quando fundamentarem uma decisão institucional.' },
      { type: 'callout', tone: 'note', title: 'Formação pedagógica não é treinamento clínico', text: 'Orientações institucionais relacionadas à segurança e à participação precisam ser oferecidas pelos responsáveis competentes. A formação docente não autoriza diagnóstico, prescrição, avaliação clínica, interpretação de prontuários ou substituição de profissionais da saúde.' },
    ],
  },
  {
    id: 'construir-percurso-formativo',
    eyebrow: 'Roteiro opcional',
    title: 'Construir um percurso formativo possível',
    blocks: [
      { type: 'paragraph', text: 'O roteiro abaixo pode apoiar estudo individual, encontro entre pares ou conversa de assessoramento. Seus movimentos podem ser usados em outra ordem, reunidos, modificados ou omitidos conforme a questão, o tempo disponível e as orientações institucionais.' },
      { type: 'list', ordered: true, items: [
        'Delimitar a questão da prática que mobiliza o estudo e por que ela merece atenção.',
        'Registrar as observações disponíveis e distinguir delas as interpretações iniciais.',
        'Identificar conhecimentos, documentos e pessoas que podem ampliar a análise.',
        'Reconhecer as condições institucionais necessárias para estudar, dialogar ou agir.',
        'Retomar as compreensões construídas, as incertezas e os limites reconhecidos.',
        'Considerar possibilidades de continuidade, replanejamento ou encaminhamento à instância competente.',
      ] },
      { type: 'callout', tone: 'guidance', title: 'Uso opcional e adaptável', text: 'Este roteiro é um apoio à reflexão. Não é formulário obrigatório, ficha de desempenho, escala de competência, instrumento de certificação ou exigência de relato pessoal.' },
    ],
  },
  {
    id: 'sintese-continuidade-estudos',
    eyebrow: 'Reflexão e aprofundamento',
    title: 'Para refletir, aprofundar e continuar',
    blocks: [
      { type: 'paragraph', text: 'Ao retomar seu percurso formativo, considere:' },
      { type: 'list', items: [
        'Que saberes construídos na experiência reconheço em minhas decisões e relações?',
        'Que situação ou pergunta da prática merece estudo mais demorado?',
        'O que observei e que interpretação ainda precisa ser examinada ou revista?',
        'Com quem posso dialogar e que fontes podem ampliar minha compreensão?',
        'Que tempo, apoio, acesso ou acompanhamento a instituição precisa assegurar?',
        'Como o estudo pode contribuir para o replanejamento ou indicar um encaminhamento necessário?',
      ] },
      { type: 'callout', tone: 'highlight', title: 'Formar-se é continuar elaborando a experiência', text: 'A formação continuada articula saberes da prática, estudo, diálogo e condições institucionais. Não busca um perfil ideal de docente, mas sustenta perguntas, compreensões e decisões pedagógicas que podem continuar se transformando.' },
      { type: 'callout', tone: 'note', title: 'Fundamentos da formação continuada', text: 'Documentos que tratam da formação e da valorização dos profissionais da Educação Básica.' },
      { type: 'resources', items: [
        { id: 'formacao-ldb', type: 'document', title: 'Lei nº 9.394/1996 — LDB', description: 'Texto compilado, incluindo disposições sobre formação e valorização dos profissionais da educação.', meta: 'Presidência da República · conferido em 4 ago. 2026', href: 'https://www.planalto.gov.br/ccivil_03/leis/l9394compilado.htm' },
        { id: 'formacao-decreto-8752-2016', type: 'document', title: 'Decreto nº 8.752/2016', description: 'Institui a Política Nacional de Formação dos Profissionais da Educação Básica.', meta: 'Presidência da República · conferido em 4 ago. 2026', href: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2016/decreto/d8752.htm' },
        { id: 'formacao-lei-15326-2026', type: 'document', title: 'Lei nº 15.326/2026', description: 'Altera a Lei nº 11.738/2008 para incluir professores da Educação Infantil entre os profissionais do magistério público e acrescenta definição correspondente ao art. 61 da LDB.', meta: 'Presidência da República · conferido em 4 ago. 2026', href: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15326.htm' },
        { id: 'formacao-lei-15462-2026', type: 'document', title: 'Lei nº 15.462/2026', description: 'Especifica atividades compreendidas no aperfeiçoamento profissional continuado dos profissionais da Educação Básica pública.', meta: 'Presidência da República · conferido em 4 ago. 2026', href: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15462.htm' },
      ] },
      { type: 'callout', tone: 'note', title: 'Pesquisa, experiência e saberes docentes', text: 'Produções acadêmicas que apoiam a reflexão sobre experiência, formação e trabalho docente.' },
      { type: 'list', items: [
        'OLIVEIRA, Senadaht Barbosa Baracho Rodrigues de. Acompanhamento educacional no hospital e na escola regular: o que dizem crianças, mães e professoras. 2022. 285 f. Tese (Doutorado em Educação) — Programa de Pós-Graduação em Educação, Centro de Educação, Universidade Federal do Rio Grande do Norte, Natal, 2022.',
        'SEMINÁRIO REGIONAL SOBRE ATENDIMENTO EDUCACIONAL HOSPITALAR, 4.; FÓRUM SOBRE ATENDIMENTO EDUCACIONAL HOSPITALAR E DOMICILIAR DO RN, 5., 2019, Natal. Anais [...]. Organização: Jacyene Melo de Oliveira Araújo. 1. ed. Natal: SEDIS-UFRN, 2020. 1 PDF (168 p.). ISBN 978-65-5569-133-7.',
        'WENDOS, Vanessa da Rocha Oliveira Baier. Desenvolvimento da linguagem oral na Educação Infantil: práticas pedagógicas em contexto hospitalar. 2020. 48 f. Trabalho de Conclusão de Curso (Graduação em Pedagogia) — Centro de Educação, Universidade Federal do Rio Grande do Norte, Natal, 2020.',
      ] },
      { type: 'callout', tone: 'note', title: 'Formação continuada no AEHD', text: 'Atos estaduais que tratam da organização e da formação no atendimento educacional hospitalar e domiciliar.' },
      { type: 'resources', items: [
        { id: 'formacao-portaria-533-2022', type: 'document', title: 'Portaria-SEI nº 533, de 6 de julho de 2022', description: 'Ato da SEEC/RN que prevê formação continuada, assessoramento e apoio formativo no âmbito do Programa de AEHD do RN.', meta: 'Diário Oficial do RN · conferido em 4 ago. 2026', href: 'https://webdisk.diariooficial.rn.gov.br/Jornal/12022-07-22.pdf' },
        { id: 'formacao-portaria-4522-2024', type: 'document', title: 'Portaria-SEI nº 4.522, de 26 de setembro de 2024', description: 'Ato da SEEC/RN sobre Educação Especial Inclusiva que inclui disposições sobre AEHD e participação de seus professores em formação continuada.', meta: 'Diário Oficial do RN · conferido em 4 ago. 2026', href: 'https://webdisk.diariooficial.rn.gov.br/Jornal/12024-09-27.pdf' },
      ] },
      { type: 'callout', tone: 'note', title: 'Documentos institucionais e normativos', text: 'Referências para compreender a trajetória do atendimento e acompanhar atos sobre formação docente.' },
      { type: 'resources', items: [
        { id: 'formacao-mec-2002', type: 'document', title: 'Classe hospitalar e atendimento pedagógico domiciliar', description: 'Orientação técnica e histórica do MEC/SEESP; não é lei nem norma de habilitação obrigatória.', meta: 'Ministério da Educação · 2002 · conferido em 4 ago. 2026', href: 'https://dominiopublico.mec.gov.br/pesquisa/DetalheObraForm.do?co_obra=17039&select_action=' },
        { id: 'formacao-mec-normas-res-4-2024', type: 'link', title: 'Resolução CNE/CP nº 4/2024 no MEC Normas', description: 'Registro oficial para consulta de informações sobre o ato e sua relação com normas anteriores.', meta: 'MEC Normas · conferido em 4 ago. 2026', href: 'https://mecnormas.mec.gov.br/pesquisa/detalhar/5042' },
      ] },
      { type: 'callout', tone: 'note', title: 'Produções acadêmicas do Rio Grande do Norte', text: 'A tese, os Anais e o trabalho de Wendos, relacionados acima, documentam pesquisas e experiências situadas no estado. Seu alcance deve ser compreendido de acordo com os contextos e períodos estudados.' },
    ],
  },
]
