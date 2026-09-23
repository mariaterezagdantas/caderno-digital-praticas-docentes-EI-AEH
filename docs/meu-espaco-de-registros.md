# Meu Espaço de Registros

Implementação no projeto `C:\Users\maria\OneDrive\Desktop\repositorio ufrn`.

## Uso

No PowerShell, dentro deste projeto:

```powershell
cd "C:\Users\maria\OneDrive\Desktop\repositorio ufrn"
npm.cmd run dev -- --host 127.0.0.1 --port 5173 --strictPort
```

Abra `http://127.0.0.1:5173/meus-registros`. Se o servidor já estiver ativo nessa porta, basta abrir o endereço. Para encerrar um servidor iniciado em um terminal, use Ctrl+C nesse terminal.

Use o mesmo endereço, porta, navegador e perfil para reencontrar os registros: `localhost` e `127.0.0.1` têm armazenamentos separados, assim como a versão publicada e o servidor de desenvolvimento.

O acesso também está no menu principal (Meus registros no desktop; Meu Espaço de Registros no menu móvel) e em um convite na abertura do módulo 9. O novo espaço contém um link de volta ao módulo 9.

## Escrita e autonomia

- Escrita livre ou reflexão orientada, escolhidas a cada registro.
- Título opcional; quando vazio, utiliza Registro sem título.
- Sete disparadores de reflexão, todos opcionais. É possível salvar sem responder a nenhuma pergunta.
- Salvamento explícito, lista por data de criação decrescente, leitura, edição e exclusão confirmada.
- Datas de criação e de última edição, exibindo esta última apenas depois de uma edição salva.
- Confirmação para descartar alterações e proteção de saída/recarregamento oferecida pelo navegador.
- Módulos e referências permanecem nos arquivos originais. A única precisão no texto do módulo 9 foi qualificar “formulário de envio” e “armazenamento remoto”, para preservar a ausência de coleta e publicação sem contradizer a nova escrita pessoal local.

Não é instrumento de pesquisa, coleta de dados, avaliação ou submissão de relatos. A escrita pertence à pessoa que utiliza o navegador.

## Armazenamento e privacidade

IndexedDB nativo, banco `caderno-digital-registros`, versão 1, coleção `registros`, chave `id`. Cada objeto contém versão, identificador aleatório, modo, título, escrita, respostas e datas ISO.

IndexedDB permite operações assíncronas e transações por registro, evitando regravar toda a coleção em uma string de localStorage. A interface só confirma o salvamento depois que a transação termina. A verificação da data anterior ocorre na mesma transação da escrita/exclusão e impede que uma aba antiga sobrescreva alterações de outra aba.

Não foram criados API, servidor de registros, login, banco remoto, painel administrativo, análise de conteúdo, publicação ou compartilhamento. Nenhum registro é enviado à pesquisadora. A geração de PDF ocorre no navegador. As requisições normais de arquivos do site e das fontes já existentes não contêm os textos dos registros.

Erros de acesso e falta de espaço são apresentados ao usuário. O rascunho permanece na tela se o salvamento falhar, com opção de baixar o texto atual em PDF. Registros com estrutura não reconhecida não são descartados silenciosamente.

Limites: os dados não são sincronizados entre dispositivos, perfis ou endereços. Limpeza dos dados do site, navegação privada e políticas do navegador podem remover o armazenamento. Não existe senha ou criptografia adicional: outra pessoa com acesso ao mesmo perfil pode ler os registros. Salvar explicitamente e baixar cópias é necessário; não há salvamento automático. O aviso de saída não impede encerramento forçado do navegador/sistema.

## PDF e impressão

Dependência direta acrescentada: `jspdf` 4.2.1, carregada sob demanda pela exportação. A opção de baixar todos reutiliza o mesmo gerador, sem outra biblioteca.

- Baixar em PDF: documento A4 com identidade do Caderno, título do registro, datas, texto ou perguntas e respostas, margens e páginas numeradas.
- Baixar todos os registros: um PDF, em ordem de criação decrescente, iniciando cada registro em uma página nova.
- Baixar texto atual em PDF: também disponível no editor, inclusive se o armazenamento falhar. Não substitui Salvar registro.
- Imprimir: diálogo nativo do navegador, com estilos que retiram menus, botões e explicações da impressão e mantêm a identidade e o registro.

O PDF utiliza fontes padrão serifada e sem serifa e as cores do Caderno. Português e acentuação foram verificados. Emojis e alfabetos não cobertos pelas fontes padrão não têm garantia de reprodução; a impressão do navegador é a alternativa nesses casos. O PDF é uma cópia de leitura, não um formato de importação/restauração dos registros. Não há promessa de conformidade PDF/UA.

Documentação da biblioteca: https://parallax.github.io/jsPDF/docs/jsPDF.html

## Arquivos

Criados:

- `src/types/record.ts`
- `src/data/recordPrompts.ts`
- `src/utils/recordStorage.ts`
- `src/utils/recordPdf.ts`
- `src/pages/Registros/index.ts`
- `src/pages/Registros/RegistrosPage.tsx`
- `src/pages/Registros/Registros.module.css`
- `src/pages/Registros/RecordContent.tsx`
- `src/pages/Registros/ConfirmDialog.tsx`
- `src/components/molecules/PersonalRecordsLink/PersonalRecordsLink.tsx`
- `src/components/molecules/PersonalRecordsLink/PersonalRecordsLink.module.css`
- `tests/registros.e2e.mjs`
- `docs/meu-espaco-de-registros.md`

Modificados:

- `src/routes/paths.ts` e `src/routes/router.tsx`: nova rota com carregamento sob demanda.
- `src/data/navigation.ts`: acesso na navegação principal.
- `src/components/templates/EditorialModule/EditorialModule.tsx`: espaço opcional para o convite, utilizado apenas pelo módulo 9.
- `src/pages/Experiencias/ExperienciasPage.tsx`: inclui o convite, sem alterar o texto acadêmico.
- `src/content/experiencias/sections.ts`: precisão de uma frase sobre ausência de formulário de envio e armazenamento remoto; demais conteúdos preservados.
- `src/components/organisms/Navigation/Navigation.module.css`: quebra de linha no menu desktop para acomodar o acesso.
- `src/components/organisms/Header/Header.module.css`: espaçamento do cabeçalho.
- `package.json` e `package-lock.json`: jsPDF.
- `.gitignore`: cache local de instalação e artefatos temporários dos testes.

O build regenera `dist`. A instalação atualiza `node_modules`. Os artefatos de QA ficam em `tmp/registros-qa`, dentro deste projeto e ignorados pelo controle de versão.

## Verificação

Comandos de validação:

```powershell
npm.cmd run lint
npm.cmd run build
```

O teste `tests/registros.e2e.mjs` usa Playwright e Chrome em contexto isolado, sem abrir o perfil ou os registros pessoais do usuário. O Playwright utilizado já estava disponível no ambiente de desenvolvimento, sem acrescentar dependência de teste ao produto.

Para repetir neste ambiente, mantenha o servidor acima ativo e execute, em outro PowerShell dentro deste projeto:

```powershell
$env:PLAYWRIGHT_MODULE='file:///C:/Users/maria/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'
$env:CHROME_PATH='C:\Program Files\Google\Chrome\Application\chrome.exe'
node tests\registros.e2e.mjs
```

Em outro ambiente, disponibilize Playwright para Node ou indique seu módulo por `PLAYWRIGHT_MODULE`. `REGISTROS_BASE_URL` permite usar outra URL apenas para os testes.

Cobertura: estado vazio, dois modos, perguntas opcionais, título vazio, múltiplos registros, salvamento, recarga, nova aba, edição, datas, exclusão e cancelamento, alterações pendentes, foco e teclado, conflito entre abas, indisponibilidade e falta de espaço de armazenamento, PDF individual/coletivo/de rascunho, impressão e textos longos/acentuados. Larguras verificadas: 390, 768, 1152 e 1440px. Monitoramento de erros JavaScript e de requisições durante a escrita.

Resultado: 15 grupos de verificações de navegador aprovados, sem erros JavaScript, sem requisições POST e sem conteúdo dos registros nas requisições monitoradas. Lint e build aprovados.

Os PDFs foram extraídos e renderizados com pypdf e Poppler para verificação de conteúdo e aparência. O documento longo de teste tem 11 páginas. A impressão foi verificada acionando o manipulador do botão e gerando a saída do mecanismo de impressão do Chrome; não foi testada uma impressora física. A semântica, os nomes acessíveis e o teclado foram testados, mas não houve avaliação com um leitor de tela humano nem em todos os navegadores.

Evidências reproduzíveis: `tmp/registros-qa/results.json`, PDFs e capturas de tela. Os dados usados são sintéticos e não foram inseridos no perfil pessoal do usuário.
