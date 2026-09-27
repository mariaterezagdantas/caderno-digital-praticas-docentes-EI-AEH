# Inclusões de literatura infantil e Quintais Brincantes

Atualização local em 27/09/2026, exclusivamente no repositório `C:\Users\maria\OneDrive\Desktop\github ufrn\caderno-digital-praticas-docentes-EI-AEH`. Nenhuma outra cópia do projeto foi modificada. Não foram executados commit, push ou publicação.

## Organização examinada antes das alterações

O repositório estava sem alterações locais. Foram identificados os nove módulos existentes:

| Módulo | Encaminhamento nesta etapa |
| --- | --- |
| Sobre o Caderno Digital | Preservado |
| Atendimento Educacional Hospitalar | Preservado |
| Educação Infantil em Contexto Hospitalar | Preservado |
| Planejamento Pedagógico | Preservado |
| Brincar e mediações lúdicas | Inclusão de “Quando a natureza entra no hospital”, antes da seção final de reflexão |
| Recursos Pedagógicos | Inclusão de duas seções após a curadoria complementar: literatura infantil de Simone Rocha e e-book Quintais Brincantes |
| Legislação | Preservado |
| Formação Continuada | Preservado |
| Experiências docentes: princípios para documentação e compartilhamento | Preservado |

Não havia módulo principal denominado Literatura Infantil, nem proposta já intitulada “Quando a natureza entra no hospital”. As inclusões foram acomodadas nos módulos existentes, sem duplicação ou reorganização dos conteúdos anteriores.

## Conteúdos incluídos e fontes

### Livros de Simone Rocha

Foram criados dois cartões com título, autoria, editora, ISBN, apresentação, possibilidades de mediação, relação com o atendimento hospitalar e link oficial para conhecer ou adquirir a obra. As mediações são explicitamente sugestões do Caderno. Não foram criadas ou utilizadas capas para esses livros.

Os títulos foram ajustados à identificação bibliográfica encontrada:

- **Ai, que medo de Hospital**, Simone Rocha, Editora CJA, ISBN 9788567581972. Título, autoria, identificação e apresentação conferidos na [página oficial da editora](https://www.cjaedicoes.com.br/ai-que-medo-de-hospital). A narrativa apresenta João e seu encontro com possibilidades de acolhimento, brincadeira e escola no hospital.
- **A menina que fala com as mãos**, Simone Rocha, Editora CJA, ISBN 9786588510889. Título, identificação e apresentação conferidos na [página oficial da editora](https://www.cjaedicoes.com.br/menina-fala-com-maos); autoria também corroborada pelo [registro bibliográfico do Orelha de Livro](https://orelhadelivro.com.br/a-menina-que-fala-com-as-maos-simone-rocha). A apresentação aborda amizade, diversidade e comunicação no encontro com Marina. Foi utilizado “fala”, e não “falava”, conforme a obra de Simone Rocha.

Consultas em 27/09/2026. A página do segundo livro foi obtida diretamente da editora por HTTP após falha do serviço de consulta web. Não foram inseridos preços, promessas de disponibilidade ou links para cópias não autorizadas. Ano, edição e número de páginas dos livros não foram acrescentados aos cartões por não serem necessários à identificação solicitada.

### Quintais Brincantes

Fonte principal: `C:\Users\maria\Downloads\ebook.pdf`, 96 páginas. Foram conferidas a capa, a folha de rosto, a ficha catalográfica e as narrativas pertinentes.

Referência utilizada: MENDES, Sarah de Lima; ARAÚJO, Jacyene Melo de Oliveira; FERREIRA, Beatriz Marques (org.). **Quintais brincantes: narrativas poéticas**. Natal, 2026. E-book. ISBN 9786502383308. A ordem das organizadoras segue a folha de rosto e a indicação da solicitante. Não foi atribuída editora não informada na ficha.

O cartão contém a capa original renderizada da primeira página, referência, apresentação e botão de acesso ao PDF integral. A ficha informa licença Creative Commons Atribuição–NãoComercial–SemDerivações 3.0 Brasil, mencionada junto ao recurso. O PDF foi copiado sem alterações.

Narrativas lidas como referência:

- Menu do Sertão, páginas 29–32: composições e significados atribuídos pela criança aos materiais.
- No quintal da Dona Lica: Guardiões da Floresta, páginas 37–40: observação, brincadeira e cuidado com plantas. A referência no Caderno usa a grafia “Guardiões”, solicitada pela autora do Caderno.
- Entre cheiros, cores e flores, páginas 47–49: memórias, experiências sensoriais e participação no brincar.

### Quando a natureza entra no hospital

Incluídos os quatro parágrafos introdutórios fornecidos, as quatro experiências solicitadas, orientações de mediação e as cinco perguntas abertas. A proposta prioriza contato com elementos naturais reais, observação, exploração e criação infantil, sem produzir quintais artificiais ou substituir o contato por fotografias.

As adaptações estão identificadas como elaboração para o Caderno, sem atribuí-las ao projeto original. A orientação hospitalar explicita autorização institucional, avaliação clínica pela equipe competente, prevenção e controle de infecções, riscos de contaminação, alergias, ingestão e ferimentos, atenção a imunossupressão e isolamento, e não realização com materiais naturais quando a manipulação não for autorizada.

## Arquivos modificados

| Arquivo | Alteração |
| --- | --- |
| `src/content/recursos/sections.ts` | Importação e inclusão das duas novas seções |
| `src/content/estrategias/sections.ts` | Importação e inclusão da proposta de natureza |
| `src/types/content.ts` | Campo opcional para informações dos novos cartões de leitura |
| `src/components/templates/EditorialModule/EditorialModule.tsx` | Renderização específica apenas para recursos que optem pelos novos cartões |

## Arquivos adicionados

| Arquivo | Finalidade |
| --- | --- |
| `src/content/recursos/literatura-natureza.ts` | Conteúdo dos dois livros e do e-book |
| `src/content/estrategias/natureza.ts` | Proposta pedagógica com natureza |
| `src/components/molecules/ReadingResourceCard/ReadingResourceCard.tsx` | Cartão de leitura com identificação, mediação, referência, capa opcional e acesso |
| `src/components/molecules/ReadingResourceCard/ReadingResourceCard.module.css` | Estilos restritos aos novos cartões, com os tons pastel existentes, largura flexível e foco visível |
| `public/downloads/quintais-brincantes-narrativas-poeticas.pdf` | Cópia integral do PDF fornecido, 30.627.658 bytes |
| `public/images/quintais-brincantes-capa.png` | Reprodução da capa original |
| `RELATORIO_LITERATURA_QUINTAIS_2026-09-27.md` | Este relatório |

## Validação

| Verificação | Resultado |
| --- | --- |
| `npm.cmd run lint` | Aprovado, sem erros ou avisos do ESLint |
| `npm.cmd run build` | Aprovado: TypeScript e Vite, 2.114 módulos transformados |
| `git diff --check` | Aprovado, sem erros de espaços em branco; Git apenas informou a conversão habitual LF/CRLF |
| Renderização React em HTML das páginas Recursos e Estratégias | Aprovada; três cartões presentes, mediações, links e conteúdo da proposta encontrados |
| Contagem dos módulos e identificadores de seções | Nove módulos; nenhuma duplicação entre as seções dos dois módulos examinados; uma proposta de natureza |
| Caminhos do PDF e da capa no HTML | Incluem a base `/caderno-digital-praticas-docentes-EI-AEH/` do GitHub Pages |
| Arquivos públicos no build | PDF e capa incluídos em `dist` |
| Integridade do PDF | Original, arquivo público e arquivo do build idênticos por SHA-256 |
| Preservação dos textos anteriores | Comparação com HEAD aprovada: removidas apenas as linhas de integração das inclusões, os arquivos de seções anteriores permanecem idênticos |
| Registros, armazenamento e configuração | Sem diferenças em Meu Espaço de Registros, IndexedDB, navegação, tema, dependências e configuração do GitHub Pages |

SHA-256 do PDF: `804c0febb822a294f5cb09ab78b1280ed434fc2bca65fcdb348c1c2636d39320`.

A execução inicial de `npm` encontrou restrição ao script PowerShell; foi utilizado `npm.cmd`, sem mudar políticas do sistema. O primeiro build encontrou bloqueio de leitura do ambiente. O build e a verificação com Vite passaram ao serem executados com a permissão necessária, sem mudança na configuração do projeto.

Os arquivos temporários de conferência e a verificação pontual estão em `tmp/quintais/`, pasta já ignorada pelo Git. O projeto não possui script `test` no `package.json`.

Limitação: o navegador integrado informou indisponibilidade e não havia navegador conectado. Foram inspecionadas visualmente a capa e a ficha do PDF; a interface foi verificada por renderização React em HTML e análise dos estilos. Não foi executada inspeção visual da página em desktop/celular, nem teste interativo do IndexedDB. A preservação desses recursos foi verificada pelo código sem alterações e pelo build, não por teste de uso em navegador.

As alterações permanecem locais, disponíveis para revisão. Não houve revisão editorial geral nem publicação no GitHub.
