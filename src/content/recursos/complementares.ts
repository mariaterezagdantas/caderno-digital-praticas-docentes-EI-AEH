import type { ContentBlock, ContentSection, ResourceType } from '../../types/content'

// Fontes verificadas em 06/09/2026; mediações e experiências são sugestões do Caderno.
interface CuratedItem {
  id: string
  title: string
  author: string
  description: string
  relevance: string
  mediation: string
  href: string
  language: string
  international: string
  access: string
  evidence?: string
  questions?: string[]
  experience?: string
}
interface CuratedGroup {
  id: string
  title: string
  type: ResourceType
  intro: string
  items: CuratedItem[]
}

export const curadoriaComplementar: CuratedGroup[] = [
  {
    "id": "livros",
    "title": "Livros",
    "type": "book",
    "intro": "Oito obras para leitura compartilhada e ampliação do repertório docente. As páginas das editoras e dos responsáveis apresentam as obras; os links não oferecem necessariamente o livro integral. Bibliotecas e acervos institucionais também podem ser caminhos de acesso.",
    "items": [
      {
        "id": "giramundo",
        "title": "Giramundo e outros brinquedos e brincadeiras dos meninos do Brasil",
        "author": "Renata Meirelles",
        "description": "Registros de brinquedos e brincadeiras de diferentes regiões brasileiras.",
        "relevance": "Amplia os repertórios culturais que podem acompanhar a criança durante a hospitalização.",
        "mediation": "Escolher uma brincadeira conhecida pela criança ou pela família e acolher uma recriação possível, sem reproduzir obrigatoriamente os materiais originais.",
        "href": "https://territoriodobrincar.com.br/producoes-culturais/",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Apresentação da obra no site do projeto; livro integral não incluído."
      },
      {
        "id": "cozinhando",
        "title": "Cozinhando no quintal",
        "author": "Renata Meirelles · Editora Terceiro Nome",
        "description": "Fotografias e relatos das brincadeiras de comidinha de crianças em diferentes contextos.",
        "relevance": "Convida a reconhecer o faz de conta e os sentidos que a criança atribui aos objetos.",
        "mediation": "Imaginar com a criança uma cozinha de personagem, acolhendo seus nomes, ingredientes imaginários e modos de preparar.",
        "href": "https://territoriodobrincar.com.br/producoes-culturais/",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Apresentação da obra no site do projeto; livro integral não incluído."
      },
      {
        "id": "janela",
        "title": "Da minha janela",
        "author": "Otávio Júnior · Ilustrações de Vanina Starkoff · Companhia das Letrinhas",
        "description": "Uma criança apresenta a vida que observa pela janela de uma favela do Rio de Janeiro.",
        "relevance": "Favorece conversas sobre pertencimento, cotidiano e diferentes maneiras de olhar o entorno.",
        "mediation": "Convidar a criança a desenhar ou narrar uma janela real ou imaginária e escolher o que deseja mostrar por ela.",
        "href": "https://www.companhiadasletras.com.br/livro/9788574068749/da-minha-janela",
        "language": "Português",
        "international": "Não — obra brasileira, com ilustrações da argentina Vanina Starkoff",
        "access": "Página da editora com apresentação e trecho; livro comercial."
      },
      {
        "id": "amoras",
        "title": "Amoras",
        "author": "Emicida · Ilustrações de Aldo Fabrini · Companhia das Letrinhas",
        "description": "Narrativa poética que valoriza a identidade negra e o reconhecimento de si.",
        "relevance": "Contribui para um repertório antirracista e para a representação positiva das crianças.",
        "mediation": "Ler com abertura às observações da criança e conversar sobre detalhes, personagens e imagens que ela queira destacar, sem reduzir a obra a uma lição moral.",
        "href": "https://www.companhiadasletras.com.br/livro/9788574068367/amoras",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Página da editora com apresentação e trecho; livro comercial."
      },
      {
        "id": "onda",
        "title": "Onda",
        "author": "Suzy Lee · Companhia das Letrinhas",
        "description": "Livro-imagem sobre o encontro de uma menina com o mar.",
        "relevance": "Oferece narrativa visual que pode ser acompanhada por gestos, apontamentos e diferentes interpretações.",
        "mediation": "Folhear no ritmo da criança e convidá-la a inventar sons, gestos ou uma narrativa para as imagens.",
        "href": "https://www.companhiadasletras.com.br/livro/9788574067735/onda-nova-edicao",
        "language": "Edição brasileira; narrativa sem palavras",
        "international": "Sim — obra de Suzy Lee; edição oficial brasileira, sem necessidade de tradução da narrativa",
        "access": "Página da editora; livro comercial, sujeito à disponibilidade."
      },
      {
        "id": "visita",
        "title": "A visita",
        "author": "Antje Damm · Tradução de Sofia Mariutti · Companhia das Letrinhas",
        "description": "Uma visita inesperada transforma o cotidiano de Elise; texto e imagens constroem juntos a narrativa.",
        "relevance": "Permite explorar encontros, mudanças e vínculos sem solicitar relatos pessoais da hospitalização.",
        "mediation": "Observar as transformações nas cores e imaginar um encontro entre personagens escolhidos pela criança.",
        "href": "https://www.companhiadasletras.com.br/livro/9788574067131/a-visita",
        "language": "Português",
        "international": "Sim — tradução editorial em português de Sofia Mariutti",
        "access": "Página da editora com apresentação e trecho; livro comercial."
      },
      {
        "id": "guilherme",
        "title": "Guilherme Augusto Araújo Fernandes",
        "author": "Mem Fox · Ilustrações de Julie Vivas · Tradução de Gilda de Aquino · Brinque-Book",
        "description": "Um menino aproxima objetos e lembranças na relação com uma amiga idosa.",
        "relevance": "Abre espaço para memórias e vínculos entre gerações, respeitando o que cada criança deseja contar.",
        "mediation": "Escolher um objeto ou desenho que lembre uma brincadeira; acolher também histórias inventadas e a vontade de não compartilhar lembranças.",
        "href": "https://www.companhiadasletras.com.br/BlogPost/6185/joias-do-catalogo-guilherme-augusto-araujo-fernandes-de-mem-fox-e-julie-vivas",
        "language": "Português",
        "international": "Sim — tradução editorial em português de Gilda de Aquino",
        "access": "Apresentação específica da obra no blog da editora; livro comercial."
      },
      {
        "id": "arvore",
        "title": "A árvore generosa",
        "author": "Shel Silverstein · Tradução de Fernando Sabino · Companhia das Letrinhas",
        "description": "A relação entre um menino e uma árvore se transforma ao longo do tempo.",
        "relevance": "Permite diferentes interpretações sobre convivência, cuidado e reciprocidade.",
        "mediation": "Conversar sobre as escolhas das personagens e imaginar outras possibilidades de relação; não apresentar o sacrifício como obrigação de quem cuida.",
        "href": "https://www.companhiadasletras.com.br/livro/9788574067537/a-arvore-generosa",
        "language": "Português",
        "international": "Sim — tradução editorial em português de Fernando Sabino",
        "access": "Página da editora; livro comercial."
      }
    ]
  },
  {
    "id": "videos",
    "title": "Curtas e vídeos",
    "type": "link",
    "intro": "Oito títulos específicos para observar, conversar e criar. Os minidocumentários registram situações situadas; as experiências sugeridas são possibilidades elaboradas para o Caderno. A professora assiste antes, seleciona trechos e considera pausas, interesses e condições de participação.",
    "items": [
      {
        "id": "palmas",
        "title": "Brincadeiras de palmas nas diversas regiões do Brasil",
        "author": "Território do Brincar · Série MiniDocs",
        "description": "Crianças de diferentes comunidades combinam palmas, canto e brincadeira.",
        "relevance": "Aproxima ritmo, linguagem e interação em propostas que podem assumir movimentos pequenos.",
        "mediation": "Acompanhar uma sequência e acolher variações inventadas pela criança.",
        "href": "https://territoriodobrincar.com.br/videos/territorio-do-brincar-serie-minidocs-brincadeiras-de-palmas-nas-diversas-regioes-do-brasil/",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Página específica do projeto com vídeo incorporado.",
        "questions": [
          "Como as crianças combinam ritmo e participação?",
          "O que pode mudar para cada participante escolher seus gestos?"
        ],
        "experience": "Criar um diálogo de dois sons ou gestos, alternando quem propõe e quem responde."
      },
      {
        "id": "amarelinha",
        "title": "Amarelinha — São Gonçalo do Rio das Pedras, MG",
        "author": "Território do Brincar · Série MiniDocs",
        "description": "Registro de uma brincadeira tradicional em uma comunidade mineira.",
        "relevance": "Ajuda a pensar regras, percursos e modos de participar sem exigir o mesmo movimento de todas as crianças.",
        "mediation": "Observar o percurso e conversar sobre outras maneiras de percorrê-lo.",
        "href": "https://territoriodobrincar.com.br/videos/territorio-do-brincar-serie-minidocs-amarelinha-sao-goncalo-do-rio-das-pedras-mg/",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Página específica do projeto com vídeo incorporado.",
        "questions": [
          "Que regras organizam a brincadeira?",
          "Como a criança poderia transformá-las?"
        ],
        "experience": "Inventar um percurso desenhado de mesa, percorrido por apontamento, gesto ou personagem."
      },
      {
        "id": "barquinhos",
        "title": "Barquinhos — Tatajuba, CE",
        "author": "Território do Brincar · Série MiniDocs",
        "description": "Crianças transformam materiais em canoas de brincar.",
        "relevance": "Valoriza invenção, repertório regional e relações entre objetos e imaginação.",
        "mediation": "Observar as decisões das crianças; distinguir a apreciação do registro da escolha de materiais possíveis no hospital.",
        "href": "https://territoriodobrincar.com.br/videos/territorio-do-brincar-serie-minidocs-barquinhos-tatajuba-ce/",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Página específica do projeto com vídeo incorporado.",
        "questions": [
          "O que transforma um material em barco?",
          "Que viagens a criança gostaria de inventar?"
        ],
        "experience": "Criar um barco de papel já preparado ou desenhado e narrar uma viagem sobre uma paisagem de mesa, sem água."
      },
      {
        "id": "tolentino",
        "title": "Seu Tolentino — São Luiz, Pancas, ES",
        "author": "Território do Brincar · Série MiniDocs",
        "description": "Um avô retoma a construção de carrinhos para o neto.",
        "relevance": "Evidencia memórias do brincar e trocas entre gerações.",
        "mediation": "Convidar um acompanhante a contar uma brincadeira de sua infância, se desejar.",
        "href": "https://territoriodobrincar.com.br/videos/territorio-do-brincar-serie-minidocs-seu-tolentino-sao-luiz-pancas-es/",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Página específica do projeto com vídeo incorporado.",
        "questions": [
          "Que saberes passam de uma geração a outra?",
          "Como a criança acrescenta algo próprio à brincadeira?"
        ],
        "experience": "Desenhar ou montar com materiais autorizados um veículo imaginário e inventar seu percurso."
      },
      {
        "id": "elefante",
        "title": "Elefante desengonçado — Brincar e Dançar, temporada 2, episódio 1",
        "author": "São Paulo Companhia de Dança · Concepção pedagógica de Márcia Strazzacappa",
        "description": "Artistas exploram movimentos inspirados em animais.",
        "relevance": "Amplia expressão corporal e imaginação sem depender de uma execução padronizada.",
        "mediation": "Selecionar um gesto e convidar a criança a modificá-lo ou conduzir o movimento realizado pela professora.",
        "href": "https://youtu.be/hFa1ScWBDGA",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Episódio indicado na página oficial da SPCD; reprodução pelo YouTube.",
        "questions": [
          "Quantos gestos diferentes podem representar o mesmo animal?",
          "Como participar com as mãos, o olhar ou a direção da cena?"
        ],
        "experience": "Inventar um animal e uma pequena dança de mãos, respeitando os movimentos confortáveis.",
        "evidence": "https://spcd.com.br/educativo/brincar-e-dancar/"
      },
      {
        "id": "pastel",
        "title": "Vamos fazer pastel? — Brincar e Dançar, temporada 2, episódio 2",
        "author": "São Paulo Companhia de Dança · Concepção pedagógica de Márcia Strazzacappa",
        "description": "Uma receita imaginária se transforma em movimentos e dança.",
        "relevance": "Articula faz de conta, gestos e sequência narrativa.",
        "mediation": "Acolher ingredientes e movimentos inventados pela criança, sem exigir movimentos amplos.",
        "href": "https://youtu.be/xZwNNgt7dOs",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Episódio indicado na página oficial da SPCD; reprodução pelo YouTube.",
        "questions": [
          "Como os gestos contam uma receita?",
          "Que ingrediente imaginário mudaria essa dança?"
        ],
        "experience": "Criar uma receita de faz de conta representada por pequenos gestos ou por instruções dadas à professora.",
        "evidence": "https://spcd.com.br/educativo/brincar-e-dancar/"
      },
      {
        "id": "esculturas",
        "title": "Esculturas vivas — Brincar e Dançar, temporada 2, episódio 3",
        "author": "São Paulo Companhia de Dança · Concepção pedagógica de Márcia Strazzacappa",
        "description": "Um jogo combina cores, posições do corpo e equilíbrio.",
        "relevance": "Oferece perguntas sobre composição corporal, espaço e diferentes modos de responder a um convite.",
        "mediation": "A professora pode observar as relações entre cores e posições e propor uma versão confortável, sem reproduzir o desafio de equilíbrio.",
        "href": "https://youtu.be/wyzKltSuX9U",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Episódio indicado na página oficial da SPCD; reprodução pelo YouTube.",
        "questions": [
          "Como uma cor pode sugerir um gesto?",
          "É possível criar uma escultura usando apenas as mãos?"
        ],
        "experience": "A criança escolhe uma cor e inventa uma escultura de mãos, ou dirige a pose de um personagem desenhado.",
        "evidence": "https://spcd.com.br/educativo/brincar-e-dancar/"
      },
      {
        "id": "elogio",
        "title": "Repense o Elogio",
        "author": "Direção de Estela Renner · Maria Farinha Filmes",
        "description": "Vídeo documental sobre os elogios dirigidos a meninas e meninos.",
        "relevance": "Apoia a revisão de falas adultas que podem limitar escolhas e identidades.",
        "mediation": "Para formação docente: conversar sobre comentários que reconheçam ações e descobertas sem aprisionar a criança em rótulos.",
        "href": "https://mff.com.br/filmes/repense-o-elogio/",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Página da produtora com links de exibição no YouTube.",
        "questions": [
          "Que expectativas aparecem nos elogios?",
          "Como reconhecer uma descoberta sem comparar crianças?"
        ],
        "experience": "Entre docentes, transformar exemplos fictícios de elogios em comentários descritivos sobre escolhas e processos."
      }
    ]
  },
  {
    "id": "sites",
    "title": "Sites e recursos digitais",
    "type": "link",
    "intro": "Oito ambientes de consulta e exploração em português. Aqui o recurso é a própria plataforma; livros, vídeos e filmes específicos são identificados nas outras partes. A seleção do que compartilhar com a criança é feita previamente pela professora.",
    "items": [
      {
        "id": "emilia",
        "title": "Instituto Emília",
        "author": "Instituto Emília",
        "description": "Portal de literatura, crítica e formação de leitores.",
        "relevance": "Apoia escolhas de acervo e a reflexão sobre leitura na infância.",
        "mediation": "Escolher um texto em português sobre mediação e relacioná-lo a uma pergunta do cotidiano docente.",
        "href": "https://emilia.org.br/",
        "language": "Português; priorizar os textos em português identificados no portal",
        "international": "Não — produção brasileira",
        "access": "Consulta gratuita à página oficial."
      },
      {
        "id": "territorio",
        "title": "Território do Brincar",
        "author": "Programa Território do Brincar · Correalização do Instituto Alana",
        "description": "Registros de brincadeiras e produções culturais de diferentes comunidades.",
        "relevance": "Ajuda a conhecer repertórios situados e a valorizar saberes infantis.",
        "mediation": "Explorar a descrição de uma brincadeira, identificar sua comunidade e conversar sobre semelhanças e diferenças com as memórias da criança.",
        "href": "https://territoriodobrincar.com.br/",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Consulta gratuita à página oficial."
      },
      {
        "id": "diversa",
        "title": "DIVERSA — Educação inclusiva na prática",
        "author": "Instituto Rodrigo Mendes",
        "description": "Relatos, artigos e materiais sobre inclusão na educação.",
        "relevance": "Apoia perguntas sobre barreiras à participação e responsabilidade coletiva.",
        "mediation": "Ler um relato de Educação Infantil e identificar uma decisão de organização que possa inspirar reflexão sobre o atendimento.",
        "href": "https://diversa.org.br/",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Consulta gratuita à página oficial."
      },
      {
        "id": "mapa",
        "title": "Mapa do Brincar",
        "author": "Folha de S.Paulo · Folhinha",
        "description": "Mapa de brincadeiras com variações regionais, memórias e descrições.",
        "relevance": "Amplia a percepção da diversidade cultural e dos nomes atribuídos às brincadeiras.",
        "mediation": "Comparar duas versões de uma brincadeira e convidar a criança ou a família a contar como a conhece.",
        "href": "https://mapadobrincar.folha.com.br/",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Consulta ao conteúdo do projeto; algumas mídias antigas podem depender do navegador."
      },
      {
        "id": "leia",
        "title": "Leia com uma criança",
        "author": "Itaú Social · Fundação Itaú",
        "description": "Programa com materiais para mediação literária e livros acessíveis.",
        "relevance": "Oferece referências para ampliar o acesso à literatura e a participação na leitura.",
        "mediation": "Consultar os recursos de acessibilidade e escolher uma forma de leitura que acolha as preferências da criança.",
        "href": "https://www.itausocial.org.br/leiacomumacrianca/",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Materiais de consulta e links de livros acessíveis; não implica inscrição em distribuição de livros."
      },
      {
        "id": "espaco",
        "title": "Espaço de Leitura",
        "author": "Laboratório de Educação",
        "description": "Plataforma de histórias, leituras em voz alta e orientações para adultos.",
        "relevance": "Permite combinar escuta, imagem e conversa no encontro com a literatura.",
        "mediation": "Escolher previamente um conto, ler junto e interromper para acolher comentários; os jogos são opcionais.",
        "href": "https://espacodeleitura.labedu.org.br/",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Consulta gratuita à página oficial."
      },
      {
        "id": "museu",
        "title": "Museu da Vida Fiocruz",
        "author": "Casa de Oswaldo Cruz · Fiocruz",
        "description": "Portal de divulgação científica e cultura com materiais e ações educativas.",
        "relevance": "Amplia repertórios de investigação e aproxima perguntas infantis do universo da ciência.",
        "mediation": "Selecionar uma imagem ou tema e levantar com a criança o que ela gostaria de descobrir, sem transformar a conversa em orientação clínica.",
        "href": "https://www.museudavida.fiocruz.br/index.php/pt-br/",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Consulta gratuita à página oficial."
      },
      {
        "id": "natureza",
        "title": "Criança e Natureza",
        "author": "Instituto Alana",
        "description": "Conteúdos sobre relações entre infância, natureza e espaços de vida.",
        "relevance": "Ajuda a pensar experiências de observação e investigação em diferentes condições.",
        "mediation": "Escolher uma paisagem ou pergunta e imaginar como explorá-la por imagens, desenhos e narrativas quando sair ao ar livre não for possível.",
        "href": "https://criancaenatureza.org.br/pt/",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Consulta gratuita à página oficial."
      }
    ]
  },
  {
    "id": "leituras",
    "title": "Leituras docentes",
    "type": "document",
    "intro": "Dez textos ou publicações específicos, sem contabilizar atalhos internos. As leituras apoiam o estudo e a reflexão docente. Nos dois textos do Caderno Emília nº 9, o link aponta à página de início do artigo em português; não é necessário ler as partes em espanhol.",
    "items": [
      {
        "id": "cast",
        "title": "Diretrizes do Desenho Universal para a Aprendizagem — versão 3.0",
        "author": "CAST · Tradução brasileira disponibilizada pela instituição",
        "description": "Organizador sobre engajamento, representação, ação e expressão.",
        "relevance": "Apoia a análise das barreiras presentes na oferta de um recurso.",
        "mediation": "Identificar uma barreira concreta e planejar outra forma de perceber, escolher ou comunicar, sem usar as diretrizes como checklist da criança.",
        "href": "https://udlguidelines.cast.org/static/udlg3-graphicorganizer-digital-numbers-a11y-portuguese-brazil.pdf",
        "language": "Português",
        "international": "Sim — tradução em português brasileiro disponibilizada pelo CAST",
        "access": "PDF gratuito em português brasileiro."
      },
      {
        "id": "dianne",
        "title": "Práticas de leitura literária: possibilidades para (re)ler o mundo",
        "author": "Dianne de Melo · Caderno Emília nº 9",
        "description": "Texto sobre leitura literária, participação e relações com o mundo.",
        "relevance": "Ajuda a pensar o repertório oferecido e a escuta das interpretações infantis.",
        "mediation": "Escolher uma questão do texto e conversar sobre quais vozes e experiências estão presentes no acervo.",
        "href": "https://emilia.org.br/wp-content/uploads/2023/12/Caderno-Emilia-9.pdf#page=95",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Artigo em português; começa na página 95 do PDF (impressa 93)."
      },
      {
        "id": "bertrand",
        "title": "Contra a revisão",
        "author": "Sara Bertrand · Tradução de Dolores Prades · Caderno Emília nº 9",
        "description": "Ensaio sobre literatura e intervenções no texto de obras literárias.",
        "relevance": "Convida a distinguir seleção de obras, mediação e alteração de seu conteúdo.",
        "mediation": "Debater entre docentes como apresentar uma obra e acolher perguntas, sem apagar suas tensões nem determinar uma interpretação única.",
        "href": "https://emilia.org.br/wp-content/uploads/2023/12/Caderno-Emilia-9.pdf#page=115",
        "language": "Português",
        "international": "Sim — autora chilena; tradução editorial de Dolores Prades",
        "access": "Tradução em português; começa na página 115 do PDF (impressa 113)."
      },
      {
        "id": "leiturar",
        "title": "Leiturar",
        "author": "María Emilia López · Instituto Emília",
        "description": "Reflexão sobre leitura compartilhada, presença e linguagem na primeira infância.",
        "relevance": "Aproxima a mediação literária do vínculo e da disponibilidade para escutar.",
        "mediation": "Observar como voz, pausa e gesto participam de uma leitura, sem medir a atenção da criança pelo tempo em que permanece imóvel.",
        "href": "https://emilia.org.br/leiturar/",
        "language": "Português",
        "international": "Sim — autora argentina; versão em português publicada pelo Instituto Emília",
        "access": "Texto integral em português; tradutor não identificado na página consultada."
      },
      {
        "id": "democracia",
        "title": "Democracia para as infâncias e adolescências",
        "author": "María Emilia López · Instituto Emília",
        "description": "Texto sobre bibliotecas, primeiros leitores e acesso à cultura.",
        "relevance": "Ajuda a pensar a literatura como direito também durante a hospitalização.",
        "mediation": "Conversar sobre quais condições permitem à criança escolher, alcançar e compartilhar um livro no atendimento.",
        "href": "https://emilia.org.br/democracia-infancias-adolescencias/",
        "language": "Português",
        "international": "Sim — autora argentina; versão em português publicada pelo Instituto Emília",
        "access": "Texto integral em português; sem necessidade de tradução automática."
      },
      {
        "id": "usp-dua",
        "title": "Desenho universal para a aprendizagem e ensino inclusivo na educação infantil",
        "author": "Claudia Daiane Batista Bettio, Ana Carolina Arruda Miranda e Andréia Schmidt · USP",
        "description": "Publicação que discute o DUA e sua relação com a Educação Infantil.",
        "relevance": "Aproxima princípios de inclusão de decisões sobre materiais e participação.",
        "mediation": "Retomar uma oferta de materiais e pensar duas formas de acesso ou expressão, preservando o interesse e a escolha da criança.",
        "href": "https://www.livrosabertos.abcd.usp.br/portaldelivrosUSP/catalog/book/646",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Livro digital gratuito em português no Portal de Livros Abertos da USP."
      },
      {
        "id": "diversificadas",
        "title": "Práticas pedagógicas diversificadas: o que são e como usá-las para favorecer a inclusão",
        "author": "Camila Cecílio · DIVERSA / Instituto Rodrigo Mendes",
        "description": "Reportagem com explicações e experiências sobre diversificação do ensino.",
        "relevance": "Ajuda a analisar como a organização das propostas pode ampliar a participação.",
        "mediation": "Distinguir diversificar caminhos de exigir mais tarefas; selecionar uma mudança que responda a uma barreira observada.",
        "href": "https://diversa.org.br/noticias/praticas-pedagogicas-diversificadas-o-que-sao-e-como-usa-las-para-favorecer-a-inclusao/",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Consulta gratuita à página oficial."
      },
      {
        "id": "avaliacao",
        "title": "Avaliação inclusiva: por que avaliar é mais do que medir o que se aprendeu",
        "author": "Luan Brito · DIVERSA / Instituto Rodrigo Mendes",
        "description": "Texto sobre avaliação, participação e revisão das decisões pedagógicas.",
        "relevance": "Contribui para discutir registros que acompanhem processos sem classificar crianças.",
        "mediation": "Conversar sobre o que um registro revela do encontro e que informação ajuda a reorganizar a próxima oferta.",
        "href": "https://diversa.org.br/noticias/avaliacao-inclusiva-mais-que-medir/",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Consulta gratuita à página oficial."
      },
      {
        "id": "hospital",
        "title": "Crianças com câncer e o atendimento educacional nos ambientes hospitalar e escolar",
        "author": "Carmem Lúcia Artioli Rolim e Maria Cecília Rafael de Góes · Educação e Pesquisa",
        "description": "Pesquisa sobre os sentidos do aprender para crianças em tratamento oncológico.",
        "relevance": "Traz o atendimento hospitalar e a continuidade da experiência educativa para o centro da reflexão.",
        "mediation": "Discutir como reconhecer a criança como participante da cultura e do aprender, considerando os limites de um estudo situado.",
        "href": "https://www.scielo.br/j/ep/a/VrvZ59bkXrKTcFPPPWp4ZnQ/?lang=pt",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Artigo científico integral em português."
      },
      {
        "id": "conversa-lopez",
        "title": "Uma conversa com María Emilia López",
        "author": "Eva Martínez entrevista María Emilia López · Instituto Emília",
        "description": "Entrevista sobre arte, leitura, vínculos e liberdade de exploração na primeira infância.",
        "relevance": "Ajuda a pensar a presença docente na oferta de materiais abertos a diferentes sentidos.",
        "mediation": "Comparar uma intervenção que determina o uso do material com outra que acolhe a invenção da criança, contextualizando os exemplos da entrevista.",
        "href": "https://emilia.org.br/as-criancas-abordam-os-riscos-melhor-que-nos/",
        "language": "Português",
        "international": "Sim — diálogo com educadora argentina; versão em português publicada pelo Instituto Emília",
        "access": "Entrevista integral em português."
      }
    ]
  },
  {
    "id": "filmes",
    "title": "Filmes e documentários",
    "type": "film",
    "intro": "Sete obras para encontros de formação docente. A indicação não pressupõe exibir o filme completo às crianças. A professora pode relacionar as perguntas a experiências possíveis, preservando diferenças entre os contextos filmados e o hospital. As páginas oficiais informam as formas de assistir e, quando aplicável, as condições de exibição pública.",
    "items": [
      {
        "id": "territorio-filme",
        "title": "Território do Brincar",
        "author": "Direção de Renata Meirelles e David Reeks · Maria Farinha Filmes",
        "description": "Documentário que acompanha o brincar em diferentes realidades brasileiras.",
        "relevance": "Convida à observação de gestos e narrativas infantis.",
        "mediation": "Selecionar uma cena para conversar sobre iniciativa, tempo e intervenção adulta.",
        "href": "https://mff.com.br/filmes/territorio-do-brincar/",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Página oficial com opções de onde assistir; condições definidas pelas plataformas.",
        "questions": [
          "Que decisões partem das crianças?",
          "O que a professora pode observar antes de intervir?"
        ],
        "experience": "Organizar um pequeno conjunto de materiais autorizados e acompanhar usos inventados pela criança."
      },
      {
        "id": "dialogo-escolas",
        "title": "Território do Brincar: diálogo com escolas",
        "author": "Projeto Território do Brincar · Instituto Alana",
        "description": "Documentário sobre o diálogo do projeto com escolas e suas reflexões sobre o brincar.",
        "relevance": "Apoia o estudo coletivo da prática e a relação entre observação e planejamento.",
        "mediation": "Conversar entre docentes sobre uma pergunta surgida da observação, sem procurar um modelo a copiar.",
        "href": "https://territoriodobrincar.com.br/producoes-culturais/",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Página oficial de produções com acesso indicado ao documentário.",
        "questions": [
          "Como observar transforma o planejamento?",
          "Que pergunta do filme encontra eco no atendimento?"
        ],
        "experience": "Em formação, comparar dois registros fictícios do mesmo encontro e discutir o que cada olhar tornou visível."
      },
      {
        "id": "tarja",
        "title": "Tarja Branca",
        "author": "Direção de Cacau Rhoden · Maria Farinha Filmes",
        "description": "Documentário sobre a presença do brincar na infância e na vida adulta.",
        "relevance": "Ajuda a professora a refletir sobre sua própria relação com o lúdico.",
        "mediation": "Retomar memórias de brincadeiras, sem transformar o brincar em obrigação ou promessa terapêutica.",
        "href": "https://alana.org.br/material/tarja-branca/",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Página do Alana com trailer e indicação de acesso ao filme; pode haver cobrança.",
        "questions": [
          "Que lugar o brincar ocupa na vida adulta?",
          "Como a pressa interfere no encontro com a criança?"
        ],
        "experience": "Entre docentes, compartilhar uma brincadeira lembrada e imaginar uma versão que acolha diferentes modos de participar."
      },
      {
        "id": "terreiros",
        "title": "Terreiros do Brincar",
        "author": "Direção de David Reeks e Renata Meirelles · Maria Farinha Filmes",
        "description": "Registro da participação infantil em manifestações culturais de diferentes comunidades brasileiras.",
        "relevance": "Valoriza a diversidade cultural e as relações entre gerações.",
        "mediation": "Situar cada manifestação em sua comunidade e ouvir repertórios trazidos pelas famílias.",
        "href": "https://mff.com.br/filmes/terreiros-do-brincar/",
        "language": "Português",
        "international": "Não — produção brasileira",
        "access": "Página oficial com indicação de onde assistir e condições de exibição pública.",
        "questions": [
          "Como crianças e adultos participam juntos?",
          "O que se perde quando uma manifestação é apresentada sem seu contexto?"
        ],
        "experience": "Conversar sobre uma festa ou cantiga conhecida e criar um registro em desenho, gesto ou narrativa, sem reproduzir rituais descontextualizados."
      },
      {
        "id": "comeco",
        "title": "O Começo da Vida",
        "author": "Direção de Estela Renner · Maria Farinha Filmes",
        "description": "Documentário que reúne famílias e especialistas de diferentes países em torno da primeira infância.",
        "relevance": "Amplia a reflexão sobre relações, ambientes e responsabilidade coletiva.",
        "mediation": "Relacionar as cenas ao acolhimento e às condições educativas, sem usar o filme para avaliar o desenvolvimento da criança.",
        "href": "https://mff.com.br/filmes/o-comeco-da-vida/",
        "language": "Vários idiomas; versão e recursos de acesso em português brasileiro",
        "international": "Produção brasileira com experiências internacionais; acesso em PT-BR informado pela produtora",
        "access": "Página oficial com opções de exibição e idiomas; escolher a versão PT-BR.",
        "questions": [
          "Que condições sustentam os encontros entre crianças e adultos?",
          "Como compartilhar a responsabilidade pelas experiências infantis?"
        ],
        "experience": "Em formação, mapear formas de acolher escolhas da criança e saberes da família no início de um encontro."
      },
      {
        "id": "comeco2",
        "title": "O Começo da Vida 2: Lá Fora",
        "author": "Direção de Renata Terra · Maria Farinha Filmes",
        "description": "Documentário sobre relações entre crianças e natureza em diferentes cidades.",
        "relevance": "Ajuda a pensar a continuidade das investigações e do vínculo com o mundo durante a hospitalização.",
        "mediation": "Distinguir o valor da experiência ao ar livre das possibilidades de aproximação por outros meios quando há restrições.",
        "href": "https://mff.com.br/filmes/o-comeco-da-vida-2-la-fora/",
        "language": "Vários idiomas; versão e recursos de acesso em português brasileiro",
        "international": "Produção brasileira com experiências internacionais; acesso em PT-BR informado pela produtora",
        "access": "Página oficial com opções de exibição e idiomas; escolher a versão PT-BR.",
        "questions": [
          "Que perguntas a natureza provoca nas crianças?",
          "Como acolher essas perguntas quando o encontro ocorre no leito?"
        ],
        "experience": "Observar uma paisagem pela janela ou em fotografia escolhida e criar uma coleção de perguntas ou desenhos."
      },
      {
        "id": "lugar",
        "title": "Um Lugar Para Todo Mundo",
        "author": "Maria Farinha Filmes · Documentário sobre a família Bernier",
        "description": "A busca de uma família por educação inclusiva para uma criança em Nova York.",
        "relevance": "Oferece um contexto internacional para refletir sobre barreiras e pertencimento.",
        "mediation": "Comparar as questões apresentadas com a realidade brasileira, sem transferir regras de outro sistema de ensino.",
        "href": "https://mff.com.br/filmes/um-lugar-para-todo-mundo/",
        "language": "Original em inglês; legendagem em português brasileiro",
        "international": "Sim — experiência nos Estados Unidos; legendagem PT-BR informada pela produtora",
        "access": "Página oficial com opções de exibição; selecionar legendas PT-BR.",
        "questions": [
          "Que barreiras estão na organização do atendimento, e não na criança?",
          "Como reconhecer participação para além da presença física?"
        ],
        "experience": "Entre docentes, analisar uma situação fictícia e propor mudanças no ambiente, nos recursos e nas formas de comunicação."
      }
    ]
  }
]

function itemBlocks(item: CuratedItem, type: ResourceType): ContentBlock[] {
  const blocks: ContentBlock[] = [
    {
      type: 'resources',
      items: [{
        id: `complementar-${item.id}`,
        type,
        title: item.title,
        meta: `${item.author} · ${item.language}`,
        description: `${item.description} ${item.access}`,
        href: item.href,
      }],
    },
    { type: 'paragraph', text: `Por que é pertinente ao Caderno: ${item.relevance}` },
    { type: 'paragraph', text: `Possibilidade de mediação ou reflexão: ${item.mediation}` },
  ]
  if (item.questions?.length) {
    blocks.push({ type: 'callout', tone: 'guidance', title: `Para conversar — ${item.title}`, text: item.questions.join(' ') })
  }
  if (item.experience) {
    blocks.push({ type: 'paragraph', text: `Experiência relacionada: ${item.experience}` })
  }
  return blocks
}

export const recursosComplementares: ContentSection[] = curadoriaComplementar.map((group, index) => ({
  id: `complementar-${group.id}`,
  eyebrow: `Bloco complementar · ${group.items.length} indicações`,
  title: group.title,
  blocks: [
    ...(index === 0 ? [
      { type: 'paragraph' as const, text: 'Esta curadoria reúne livros, vídeos, sites, leituras docentes e filmes. As mediações, perguntas e experiências relacionadas são sugestões do Caderno, para escolher e adaptar; não são prescrições dos autores nem novas propostas numeradas. Considere a vontade da criança, as possibilidades do encontro e as orientações da instituição.' },
      { type: 'paragraph' as const, text: 'Todos os recursos selecionados têm conteúdo em português, edição brasileira, tradução publicada por fonte confiável ou legendagem em português. A exceção de linguagem verbal é Onda, livro-imagem em edição brasileira. Para audiovisuais multilíngues, selecione a versão ou as legendas em português indicadas. Datas, condições de acesso e disponibilidade podem mudar nas páginas de origem.' },
    ] : []),
    { type: 'paragraph', text: group.intro },
    ...group.items.flatMap(item => itemBlocks(item, group.type)),
  ],
}))
