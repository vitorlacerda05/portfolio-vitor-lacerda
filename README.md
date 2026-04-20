# Portfolio Vitor Lacerda

Portfólio pessoal construído em **Vue 3 + Vite + Vue Router**, com design baseado no Figma. Inclui modo de edição interativo (arrastar elementos + pincel), animações, páginas de projeto geradas a partir de markdown e um sistema de componentes reutilizáveis.

## 🌐 Links

**Link de acesso:** [https://vitorlacerda.com/](https://vitorlacerda.com/)

**Link do Figma:** [https://www.figma.com/design/1EPHxMr80QnAGkYDsx7IyC/Portf%C3%B3lio---Vitor-Lacerda?node-id=13-40&t=KbCRG0CI9mvsaduV-1](https://www.figma.com/design/1EPHxMr80QnAGkYDsx7IyC/Portf%C3%B3lio---Vitor-Lacerda?node-id=13-40&t=KbCRG0CI9mvsaduV-1)

## 🛠️ Stack

- **Vue 3** (Composition API, `<script setup>`)
- **Vite** (bundler + dev server)
- **Vue Router** (SPA com history mode)
- **@unhead/vue** (meta tags dinâmicas por rota — SEO)
- **Interact.js** (drag & drop no edit mode)
- **Animate.css** + **Font Awesome** (via CDN)

## 🚀 Rodando localmente

```bash
npm install
npm run dev       # servidor de desenvolvimento em http://localhost:5173
npm run build     # gera /dist pronto pra deploy
npm run preview   # serve o /dist localmente pra teste
```

## 📁 Estrutura

```
portfolio-vitor-lacerda/
├── index.html                    ← entry do Vite
├── vite.config.js
├── package.json
├── public/                       ← assets estáticos servidos na raiz
│   ├── assets/images/...
│   ├── assets/favicon/...
│   ├── CNAME
│   ├── robots.txt
│   ├── sitemap.xml
│   └── 404.html                  ← fallback SPA do GitHub Pages
└── src/
    ├── main.js                   ← boot da app
    ├── App.vue
    ├── router.js                 ← rotas (/, /project/:id, legados .html)
    ├── views/
    │   ├── Home.vue
    │   ├── Project.vue
    │   └── NotFound.vue
    ├── components/
    │   ├── base/                 ← primitivos reutilizáveis
    │   │   ├── BaseButton.vue    (primary / secondary)
    │   │   ├── Badge.vue         (card / project)
    │   │   ├── CornerSquares.vue
    │   │   ├── Toaster.vue
    │   │   └── ResetButton.vue
    │   ├── layout/               ← chrome da aplicação
    │   │   ├── Navbar.vue
    │   │   ├── MobileMenu.vue
    │   │   ├── AppFooter.vue
    │   │   └── BackButton.vue
    │   ├── home/                 ← seções da home
    │   │   ├── HeroSection.vue
    │   │   ├── ProjectsSection.vue
    │   │   ├── ProjectCard.vue
    │   │   ├── MainBottom.vue
    │   │   ├── AboutSection.vue
    │   │   ├── HighlightSquare.vue
    │   │   ├── SocialProofSection.vue
    │   │   ├── CommentCard.vue
    │   │   ├── ContactSection.vue
    │   │   └── ContactCard.vue
    │   └── project/              ← páginas de projeto
    │       ├── ProjectHeader.vue
    │       └── ProjectContent.vue (renderiza markdown)
    ├── composables/
    │   ├── useEditMode.js        ← mão vs pincel, canvas, reset
    │   ├── useScrollAnimations.js
    │   ├── useProjectNumbering.js ← numera h1/h2 do projeto
    │   └── useSeo.js             ← meta tags por rota
    ├── lib/
    │   ├── markdown.js           ← parser MD → HTML com classes do projeto
    │   └── edit-mode/
    │       ├── drag-core.js      ← interact.js + handlers de drag
    │       └── paint-system.js   ← canvas de pincel
    ├── data/
    │   └── projects.js           ← lista + SEO por projeto
    ├── content/
    │   ├── index.js              ← lookup slug → markdown
    │   ├── urbverde.md
    │   ├── policies.md
    │   ├── pacepro.md
    │   └── siga.md
    └── styles/
        ├── global.css            ← reset + container base
        ├── project-numbering.css
        └── tokens/
            ├── colors.css
            ├── fonts.css
            └── breakpoints.css
```

## 🎨 Style guide e design tokens

Tokens ficam em `src/styles/tokens/`:
- **colors.css** — paleta Material Blue + Blue Gray + off-whites por categoria de card
- **fonts.css** — Inter / Karla + classes utilitárias (`title-md`, `regular-base`, `medium-lg`, etc.)
- **breakpoints.css** — tokens de media query

## 📱 Responsividade

- **Desktop**: > 1026px
- **Tablet**: 601px – 1026px
- **Mobile**: < 601px

## 📖 Como adicionar um novo projeto

1. Adicione os metadados em `src/data/projects.js`:

   ```js
   {
     id: 'meu-projeto',
     title: 'Meu Projeto',
     image: { src: '/assets/images/homepage/projects/meu-projeto.png', alt: '...' },
     cardBg: 'bg-blue',                    // bg-green | bg-yellow | bg-blue | bg-purple | bg-red | bg-pink | bg-brown
     badges: ['UX Design'],
     description: 'Descrição curta',
     date: 'jan, 2025 - mar, 2025',
     seo: {
       title: 'Meu Projeto | Vitor Lacerda',
       description: '...',
       keywords: '...',
       ogType: 'article',
       schema: { /* JSON-LD opcional */ }
     }
   }
   ```

2. Crie `src/content/meu-projeto.md` com o conteúdo.
3. Registre o import em `src/content/index.js`:

   ```js
   import meuProjeto from './meu-projeto.md?raw'
   export const PROJECT_MARKDOWN = { ..., 'meu-projeto': meuProjeto }
   ```

Pronto — a card aparece na home e a rota `/project/meu-projeto` fica viva.

**Resolução recomendada para a imagem do card:** `864 × 560px` (2× da área exibida).

## ✍️ Sintaxe markdown suportada

Processada em `src/lib/markdown.js` com as classes do projeto:

| Markdown | HTML gerado |
|---|---|
| `# Título` | `<h1 class="project-h1">` |
| `## Subtítulo` | `<h2 class="project-h2">` |
| `### Subtítulo menor` | `<h3 class="project-h3">` |
| `**bold**` / `*itálico*` | `<strong>` / `<em>` |
| `[texto](url)` | `<a target="_blank" rel="noopener noreferrer">` |
| `> linha` | callout (parágrafo com fundo) |
| `>> linha` | quote (borda lateral azul) |
| `- item` | `<li class="regular-base">` agrupado em `<ul class="features-list">` |
| `![alt](src) *legenda*` | imagem em wrapper + legenda |
| `---` | `<hr>` |

Numeração automática de `h1` e `h2` é injetada pelo composable `useProjectNumbering`.

## 🚀 Deploy (GitHub Pages)

1. `npm run build` — gera `/dist`.
2. Publique o conteúdo de `/dist` na branch do Pages (ou configure um workflow).
3. `public/CNAME` mantém o domínio custom, `public/404.html` habilita reload em rotas profundas (`/project/xxx`) e redireciona URLs legados `.html`.

## 📄 Licença

© 2025 Vitor Lacerda. Todos os direitos reservados.
