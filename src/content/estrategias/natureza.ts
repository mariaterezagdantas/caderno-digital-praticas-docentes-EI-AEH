import type { ContentSection } from '../../types/content'

export const naturezaSection: ContentSection = {
  id: 'quando-a-natureza-entra-no-hospital',
  eyebrow: 'Possibilidades pedagógicas · Infância e natureza',
  title: 'Quando a natureza entra no hospital',
  blocks: [
    { type: 'paragraph', text: 'A hospitalização pode restringir o contato da criança com a natureza.' },
    { type: 'paragraph', text: 'Quando autorizados, elementos naturais podem favorecer observação, investigação e brincadeira.' },
    { type: 'paragraph', text: 'Uma folha ou flor pode despertar perguntas e lembranças. A criança compara e atribui sentidos ao que encontra.' },
    { type: 'paragraph', text: 'Inspirada no projeto Quintais Brincantes, esta proposta convida o professor a reconhecer a natureza como parte das experiências educativas da infância, respeitando as singularidades de cada criança e as condições do atendimento hospitalar.' },
    { type: 'callout', tone: 'note', title: 'Atenção ao contexto hospitalar', text: 'A utilização de elementos naturais depende de autorização institucional, avaliação das condições clínicas da criança e orientações da equipe de saúde e do serviço de prevenção e controle de infecções. Não considerar terra, folhas, flores, sementes, plantas ou outros elementos automaticamente seguros, mesmo quando aparentemente limpos. Considerar riscos de contaminação, alergias, ingestão acidental e ferimentos, especialmente em situações de imunossupressão ou isolamento. Se a manipulação não for autorizada, não realizar a experiência com materiais naturais naquele atendimento.' },
    { type: 'paragraph', text: 'As possibilidades a seguir foram elaboradas para o contexto hospitalar a partir da leitura do e-book. Não são relatos de experiências originalmente realizadas no projeto Quintais Brincantes. Seu foco é o encontro com elementos naturais reais e autorizados, sem montar quintais artificiais, substituir esse contato por fotografias ou definir uma produção decorativa como resultado esperado.' },
    { type: 'paragraph', text: 'Em Menu do Sertão (p. 29–32), a composição criada por uma criança se transforma com os sentidos que ela atribui aos materiais. No quintal da Dona Lica: Guardiões da Floresta (p. 37–40) aproxima observação, brincadeira e cuidado com plantas. Entre cheiros, cores e flores (p. 47–49) articula memórias, experiências sensoriais e participação no brincar. Essas narrativas inspiram a escuta e a abertura da mediação; os materiais e procedimentos usados em seus contextos não são automaticamente transferíveis ao hospital.' },
    { type: 'paragraph', text: 'Sugestões de experiências, somente nas condições autorizadas para aquele atendimento:' },
    { type: 'list', ordered: true, items: [
      'Encontro com folhas e flores: disponibilizar apenas os elementos autorizados para que a criança escolha o que deseja observar ou tocar. Acompanhar a exploração de formas, cores e texturas, acolhendo comparações e lembranças. Em diálogo com Entre cheiros, cores e flores, reconhecer as percepções da criança sem exigir uma sequência sensorial ou estimular aproximação ao rosto e inalação dos materiais.',
      'Pequenas descobertas da natureza: partir de uma pergunta ou de um detalhe percebido pela criança em um elemento natural real. Observar, virar, aproximar ou comparar materiais conforme a autorização e as possibilidades de participação. Investigar marcas, contornos e diferenças, dando tempo para hipóteses e novas perguntas, sem transformar a exploração em identificação de respostas certas.',
      'Criações com elementos naturais: oferecer os materiais autorizados em uma superfície também aprovada para o atendimento e acompanhar sua organização livre. A criança pode aproximar, separar, recompor e atribuir nomes ou histórias às suas criações. Menu do Sertão inspira essa abertura aos significados infantis; não se solicita reproduzir o prato da narrativa nem usar os materiais como alimento.',
      'Cuidar da natureza: inspirada em Guardiões da Floresta, acolher o interesse em observar mudanças e pensar formas de cuidado com uma planta real, somente quando sua presença e as ações de cuidado estiverem expressamente autorizadas. Acompanhar o que a criança percebe e as perguntas que formula. Plantio, uso de terra ou rega não são etapas obrigatórias e não devem ser introduzidos sem autorização específica.',
    ] },
    { type: 'callout', tone: 'guidance', title: 'Mediação pedagógica', text: 'Valorizar a escuta, a observação e o protagonismo infantil. Apresentar os materiais sem determinar antecipadamente seus usos ou significados; acompanhar as iniciativas da criança e oferecer apoio quando necessário. Respeitar seu ritmo, suas pausas e sua decisão de participar, observar ou recusar. As perguntas abertas ampliam a conversa, sem conduzir a respostas predeterminadas.' },
    { type: 'list', items: [
      'O que chamou sua atenção?',
      'O que você percebe?',
      'Como é a textura desse elemento?',
      'O que gostaria de descobrir?',
      'O que podemos criar com esses materiais?',
    ] },
    { type: 'resources', items: [{
      id: 'natureza-recurso-quintais',
      type: 'link',
      title: 'Conhecer o e-book Quintais Brincantes',
      description: 'Capa, referência bibliográfica e acesso ao PDF integral no módulo Recursos Pedagógicos.',
      href: '/recursos#quintais-brincantes-ebook',
    }] },
  ],
}
