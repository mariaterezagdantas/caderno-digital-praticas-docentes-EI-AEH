# Auditoria e piloto — Planejamento Pedagógico

## Escopo e evidência

Auditoria da estrutura React, componentes, estilos e conteúdo em 5 de setembro de 2026. O navegador da sessão estava indisponível; não houve inspeção de screenshots nem validação visual ou de interação em dispositivos. As observações abaixo são baseadas no código. O piloto se limita à rota `/planejamento`. A página inicial, a busca, as entradas dos módulos e as páginas dos demais módulos foram preservadas.

## Diagnóstico

- A paleta existente (sálvia, bege, névoa e terracota), a tipografia com títulos serifados e a família Lucide já oferecem uma base coerente. Não é necessário substituir a identidade.
- O índice original contém âncoras, mas não identifica a seção atual. Em telas menores, a lista completa antecede a leitura.
- Os módulos compartilham aberturas exclusivamente textuais. Uma composição de materiais de planejamento ajuda a identificar o tema do piloto.
- A paginação original funciona entre módulos, mas não há navegação equivalente entre seções.
- As referências são apresentadas em grades de cards, com bastante tratamento visual repetido. A lista editorial distingue consulta bibliográfica de navegação.
- As perguntas de reflexão usam a mesma apresentação das demais listas. Orientações e ressalvas já possuem tipos semânticos; o piloto aproveita esses tipos, sem recategorizar o conteúdo.
- A página inicial já oferece ilustração, busca e entradas de módulos. Seu redesenho não integra esta etapa.

## Sistema aplicado ao piloto

Abertura com título e descrição originais, ícone ClipboardList e SVG autoral de caderno, folhas e lápis. Fundo bege claro, sálvia como cor principal e bordas finas. Não há fotografias externas, pessoas ou novas dependências.

Leitura contínua com largura limitada, corpo confortável e espaçamento ampliado. Conceitos usam fundo sálvia; orientações, névoa; ressalvas, bege e borda terracota. As perguntas de reflexão existentes recebem enquadramento próprio, sem alteração dos itens ou de sua posição. As seis referências preservam títulos, descrições, metadados e URLs em lista semântica, com indicação de abertura em nova aba.

Índice lateral em telas amplas, com destaque visual e `aria-current="location"`, indicador da posição (não conclusão de leitura), navegação anterior/próxima entre seções e paginação existente entre módulos. Em telas menores, o índice é expansível e o conteúdo ocupa uma coluna. O bloco “Saiba mais sobre a navegação” contém apenas instruções de interface; nenhum conteúdo acadêmico foi ocultado ou criado para preencher esse componente.

Foco visível, âncoras com destinos focalizáveis, SVG com título e descrição acessíveis, ícones acompanhados de texto, controles com altura mínima de 44–48 px e respeito à preferência de movimento reduzido. Esses recursos precisam de validação prática de teclado e leitor de tela.

## Oportunidades editoriais futuras — não implementadas

| Módulo | Possível imagem e função |
| --- | --- |
| Sobre o Caderno | Caderno aberto como identificação da proposta; avaliar reaproveitamento da arte existente. |
| Atendimento Educacional Hospitalar | Livros e espaço de apoio à leitura para contextualizar o atendimento, sem exposição de pacientes. |
| Educação Infantil | Materiais de exploração e livro para situar as experiências educativas. |
| Planejamento | Caderno, folhas e lápis para conectar planejamento e registro — implementado. |
| Brincar e mediações lúdicas | Objetos de brincar para identificar o tema; escolher somente após examinar a seção correspondente. |
| Recursos Pedagógicos | Composição de materiais para apoiar a identificação de recursos, sem sugerir adequação clínica universal. |
| Legislação | Priorizar ícone de documento e lista de consulta; imagem adicional pode ser dispensada. |
| Formação Continuada | Livros e anotações como abertura de estudo. |
| Experiências docentes | Folhas de registro sem dados pessoais para identificar documentação e compartilhamento. |

Essas possibilidades não autorizam replicação automática. Uma imagem só deve ser adicionada se apoiar orientação, compreensão ou identificação do tema.

## Arquitetura mínima

- `EditorialModule.tsx`: único componente novo. Reúne abertura, SVG, índice, acompanhamento de seção, navegação e apresentação dos blocos do piloto. A função interna `renderEditorialBlock` aplica apresentação aos dados existentes.
- `EditorialModule.module.css`: estilos restritos ao piloto, com regras responsivas e de impressão.
- `ContentRenderer.tsx`: dois pontos opcionais de apresentação (`blockPresentation` e `sectionFooter`). Sem esses parâmetros, mantém a apresentação anterior.
- `PlanejamentoPage.tsx`: seleciona o modelo editorial apenas nesta página; mantém conteúdo e destinos anterior/próximo.

## Revisão antes de replicar

Validação técnica concluída: `npm.cmd run lint` passou sem avisos; `npm.cmd run build` passou, incluindo `tsc -b` (checagem de tipos) e Vite. A primeira execução do Vite foi bloqueada pela restrição de acesso a diretórios do ambiente; a repetição com permissão concluiu sem erros ou warnings. Comparação SHA-256 dos 27 arquivos em `src/content/*/*.ts`: nenhum arquivo alterado. O build regenerou `dist/` e os caches normais de compilação. A base de hashes foi salva fora do projeto em `C:/Users/maria/tmp/caderno-content-before.json`.

Conferir `/planejamento` em computador, tablet e celular, incluindo 320 px e zoom de 200%; verificar quebra de títulos, ausência de rolagem horizontal, foco, índice ativo, retorno por âncora, referências e navegação entre módulos. Comparar a página inicial e outro módulo para confirmar a preservação visual. A inspeção responsiva e de acessibilidade ainda não foi realizada em navegador.

Se aprovado, podem ser reaproveitados abertura editorial, índice ativo, navegação entre seções, estilos de destaques e lista de referências. Ilustrações e uso de expansíveis devem ser definidos conforme a função de cada conteúdo, preservando títulos, textos e organização acadêmica.
