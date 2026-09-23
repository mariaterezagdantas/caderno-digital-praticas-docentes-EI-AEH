# Caderno Digital de Práticas Docentes na Educação Infantil em Contexto Hospitalar

Produto Educacional organizado e disponibilizado em formato de repositório digital, voltado prioritariamente a professores que atuam com crianças da Educação Infantil no Atendimento Educacional Hospitalar.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Arquitetura

O projeto utiliza React, TypeScript e Vite. A interface segue Atomic Design em
`src/components`, o conteúdo educacional é independente em `src/content` e as
páginas são responsáveis apenas pela composição de componentes e conteúdo.

As próximas etapas implementarão, nesta ordem, o Design System, o layout
compartilhado, as rotas e a página inicial.

## Melhoria futura

Substituir o carregamento remoto do Google Fonts por arquivos locais de
Cormorant Garamond e Nunito em `src/assets/fonts`, declarados com `@font-face`.

Documentar os componentes do Design System com Storybook, incluindo estados,
variantes, exemplos de uso e verificações de acessibilidade.
