import type { ContentSection } from '../../types/content'

// Títulos, autoria e apresentações conferidos nas páginas da Editora CJA.
// As mediações abaixo são sugestões do Caderno, não prescrições das obras.
export const literaturaNaturezaSections: ContentSection[] = [
  {
    id: 'literatura-infantil-simone-rocha',
    eyebrow: 'Leitura e mediação literária',
    title: 'Literatura infantil: encontros com Simone Rocha',
    blocks: [
      { type: 'paragraph', text: 'Estas sugestões ampliam o repertório de leitura compartilhada. As apresentações se apoiam nas informações da editora; as possibilidades de mediação foram elaboradas para este Caderno. A leitura pode acolher perguntas, interpretações, pausas e recusas, sem exigir relatos pessoais ou respostas previamente definidas.' },
      { type: 'resources', items: [
        {
          id: 'simone-rocha-medo-hospital',
          type: 'book',
          title: 'Ai, que medo de Hospital',
          meta: 'Simone Rocha · Editora CJA · ISBN 9788567581972',
          description: 'João não quer ir ao hospital. Ao chegar, encontra possibilidades de acolhimento, brincadeira e convivência, incluindo uma sala de aula. A narrativa abre espaço para conversar sobre o hospital a partir da experiência do personagem.',
          href: 'https://www.cjaedicoes.com.br/ai-que-medo-de-hospital',
          reading: {
            mediation: 'Compartilhar a leitura no ritmo da criança, explorar suas interpretações e perguntar: “O que chamou sua atenção na história?” ou “O que você gostaria de perguntar ao João?”. Acolher recontos, desenhos ou brincadeiras que surjam por iniciativa infantil, sem exigir que a criança fale de sua internação.',
            relevance: 'Pode favorecer a expressão de perguntas e sentimentos sobre a hospitalização e a continuidade do encontro com a literatura. Reconhecer que cada criança vive o hospital de modo singular, sem prometer que sua experiência será igual à do personagem ou que a leitura eliminará o medo.',
            accessLabel: 'Conhecer ou adquirir na editora',
          },
        },
        {
          id: 'simone-rocha-menina-maos',
          type: 'book',
          title: 'A menina que fala com as mãos',
          meta: 'Simone Rocha · Editora CJA · ISBN 9786588510889',
          description: 'A história acompanha o encontro de duas meninas e a amizade construída entre perguntas e descobertas. A convivência com Marina apresenta à protagonista outras possibilidades de comunicação, em uma narrativa sobre gestos, escuta e diversidade.',
          href: 'https://www.cjaedicoes.com.br/menina-fala-com-maos',
          reading: {
            mediation: 'Ler em conjunto e acolher o que a criança percebe nas relações entre as personagens. Perguntar: “O que você percebe nesse encontro?” e “Como podemos compreender o que a outra pessoa quer contar?”. Oferecer espaço para fala, gesto, desenho ou outros modos de expressão, respeitando os recursos de comunicação utilizados pela criança. Quando envolver Libras, contar com mediação acessível e conhecimentos da língua, sem reduzi-la a gestos improvisados.',
            relevance: 'Convida a refletir sobre escuta, pertencimento e participação por diferentes formas de comunicação. No atendimento hospitalar, pode apoiar encontros literários que respeitem as singularidades da criança e suas condições de expressão, sem confundir surdez com limitações temporárias decorrentes do tratamento.',
            accessLabel: 'Conhecer ou adquirir na editora',
          },
        },
      ] },
    ],
  },
  {
    id: 'quintais-brincantes-ebook',
    eyebrow: 'Recurso para estudo e inspiração pedagógica',
    title: 'Quintais Brincantes: narrativas poéticas',
    blocks: [
      { type: 'resources', items: [{
        id: 'quintais-brincantes-narrativas-poeticas',
        type: 'book',
        title: 'Quintais Brincantes: narrativas poéticas',
        meta: 'Organização: Sarah de Lima Mendes, Jacyene Melo de Oliveira Araújo e Beatriz Marques Ferreira · Natal, 2026 · ISBN 9786502383308',
        description: 'O e-book reúne narrativas e registros fotográficos de experiências de brincar em quintais de instituições de Educação Infantil, vinculadas ao projeto de extensão Quintais Brincantes. Os textos convidam a observar as relações das crianças com a natureza, suas criações e os encontros com docentes. Menu do Sertão, Guardiões da Floresta e Entre cheiros, cores e flores oferecem referências para a reflexão pedagógica.',
        href: `${import.meta.env.BASE_URL}downloads/quintais-brincantes-narrativas-poeticas.pdf`,
        reading: {
          cover: { src: `${import.meta.env.BASE_URL}images/quintais-brincantes-capa.png`, alt: 'Capa original de Quintais Brincantes: narrativas poéticas, com uma criança em contato com a vegetação e flores.' },
          reference: 'MENDES, Sarah de Lima; ARAÚJO, Jacyene Melo de Oliveira; FERREIRA, Beatriz Marques (org.). Quintais brincantes: narrativas poéticas. Natal, 2026. E-book. ISBN 9786502383308.',
          relevance: 'As narrativas se referem aos contextos educativos apresentados na obra. A proposta “Quando a natureza entra no hospital”, no módulo Brincar e mediações lúdicas, é uma adaptação pedagógica elaborada para este Caderno; não corresponde a uma experiência hospitalar realizada pelo projeto Quintais Brincantes.',
          accessLabel: 'Acessar o e-book (PDF · 29,2 MB)',
        },
      }] },
      { type: 'paragraph', text: 'Capa reproduzida do PDF original fornecido, preservando seus créditos. A obra informa a licença Creative Commons Atribuição–NãoComercial–SemDerivações 3.0 Brasil. O arquivo integral é disponibilizado sem alterações.' },
    ],
  },
]
