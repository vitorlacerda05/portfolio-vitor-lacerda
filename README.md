# Portfolio Vitor Lacerda

Portfólio pessoal desenvolvido em HTML, CSS e JavaScript com design baseado no Figma. O projeto inclui funcionalidades interativas de edição, permitindo arrastar elementos e usar ferramentas de pintura para uma experiência única.

## 🌐 Links

**Link de acesso:** [https://vitorlacerda.com/](https://vitorlacerda.com/)

**Link do Figma:** [https://www.figma.com/design/1EPHxMr80QnAGkYDsx7IyC/Portf%C3%B3lio---Vitor-Lacerda?node-id=13-40&t=KbCRG0CI9mvsaduV-1](https://www.figma.com/design/1EPHxMr80QnAGkYDsx7IyC/Portf%C3%B3lio---Vitor-Lacerda?node-id=13-40&t=KbCRG0CI9mvsaduV-1)

## 🚀 Funcionalidades

- **Design Responsivo**: Interface adaptável para diferentes dispositivos
- **Modo de Edição Interativo**: Sistema de arrastar elementos e ferramenta de pincel
- **Animações Suaves**: Transições e efeitos visuais com Animate.css
- **Sistema de Projetos**: Estrutura reutilizável para adicionar novos projetos
- **Páginas de Projeto**: Templates padronizados para detalhamento de projetos
- **Sistema Markdown**: Conversão automática de markdown para HTML com classes CSS

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização e responsividade
- **JavaScript**: Interatividade e funcionalidades dinâmicas
- **Font Awesome**: Ícones
- **Animate.css**: Animações
- **Interact.js**: Funcionalidades de arrastar e soltar

## 📁 Estrutura do Projeto

```
portfolio-vitor-lacerda/
├── assets/
│   ├── images/
│   │   ├── favicon.svg
│   │   ├── homepage/
│   │   │   ├── background.svg
│   │   │   ├── hero-image.png
│   │   │   ├── logo.svg
│   │   │   ├── navbar/
│   │   │   ├── projects/
│   │   │   ├── social/
│   │   │   ├── social-proof/
│   │   │   └── vector/
│   │   └── projects/
│   └── tokens/
│       ├── breakpoints.css
│       ├── colors.css
│       └── fonts.css
├── css/
│   ├── button.css
│   ├── cta-section.css
│   ├── footer.css
│   ├── hero-section.css
│   ├── homepage.css
│   ├── main-bottom.css
│   ├── navbar-homepage.css
│   ├── project-numbering.css
│   ├── projects-styles.css
│   ├── projects-template.css
│   ├── projects.css
│   └── social-proof.css
├── js/
│   ├── edit-mode/
│   │   ├── drag-core.js
│   │   ├── drag.js
│   │   ├── paint-system.js
│   │   └── ui-controls.js
│   ├── mobile-menu.js
│   ├── navbar.js
│   ├── project-numbering.js
│   ├── scroll-animations.js
│   └── markdown-to-html.js
├── project/
│   └── template.html
│   └── urbverde.html
│   └── (outros projetos)
└── index.html
```
## 🎨 Style guide

O projeto utiliza um sistema de design tokens centralizado em `assets/tokens/`:
- **colors.css**: Paleta de cores padronizada
- **fonts.css**: Tipografia e hierarquia de fontes
- **breakpoints.css**: Pontos de quebra responsivos

Todos estes designs seguiram o style guide disponível no Figma

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints definidos em:
- **Desktop**: > 1026px
- **Tablet**: 601px - 1026px  
- **Mobile**: < 601px

## 📖 Documentação de Uso

### 1. Como Adicionar um Novo Projeto no index.html

Para adicionar um novo projeto na página principal, use a seguinte estrutura:

```html
<!-- 
  SISTEMA DE PROJETOS REUTILIZÁVEL
  
  Para adicionar um novo projeto, use a seguinte estrutura:
  
  <a href="caminho/para/projeto.html" class="project-card bg-[cor]">
    <div class="project-image-container">
      
  Para uma imagem:
  <div class="project-image-single">
    <img src="caminho/para/imagem.jpg" alt="Descrição da imagem">
    <div class="corner-square top-left"></div>
    <div class="corner-square bottom-left"></div>
  </div>
  
  OU para duas imagens separadas:
  <div class="project-images-double">
    <div class="project-image-double">
      <img src="imagem1.jpg" alt="Descrição da imagem 1">
      <div class="corner-square top-left"></div>
      <div class="corner-square top-right"></div>
      <div class="corner-square bottom-left"></div>
      <div class="corner-square bottom-right"></div>
    </div>
    <div class="project-image-double">
      <img src="imagem2.jpg" alt="Descrição da imagem 2">
      <div class="corner-square top-left"></div>
      <div class="corner-square top-right"></div>
      <div class="corner-square bottom-left"></div>
      <div class="corner-square bottom-right"></div>
    </div>
  </div>
    </div>
    <div class="project-content">
      <h3 class="project-title">Título do Projeto</h3>
      <p class="project-description">Descrição do projeto aqui...</p>
    </div>
  </a>
  
  Cores disponíveis: 
  - bg-green
  - bg-yellow
  - bg-blue
  - bg-purple
  - bg-red
  - bg-pink
  - bg-brown
-->
```

### 2. Como Criar uma Página de Projeto

Use o template base fornecido em `project/example.html` como referência. A estrutura inclui:

- **Cabeçalho**: Meta tags, favicon, tokens CSS e bibliotecas externas
- **Botão de Volta**: Navegação para a página principal
- **Informações do Projeto**: Título, badges, descrição e data
- **Imagem Principal**: Com cantos decorativos
- **Conteúdo do Projeto**: Seções organizadas com títulos e parágrafos
- **Seção de Contato**: Cards com links para LinkedIn e Email
- **Rodapé**: Informações de copyright

**Importante**: Para usar o sistema markdown, certifique-se de incluir o script `markdown-to-html.js` e adicionar o atributo `data-markdown` ao elemento que contém o conteúdo.

### 3. Sistema de Markdown para Páginas de Projeto

O projeto inclui um sistema de markdown customizado que converte automaticamente texto markdown para HTML com as classes CSS corretas. Use o atributo `data-markdown` em qualquer elemento para ativar a conversão.

#### Como Usar

```html
<div data-markdown>
# Título Principal
## Subtítulo
### Subtítulo Menor

Este é um parágrafo normal com **texto em negrito** e *texto em itálico*.

> Este é um callout importante.

>> Esta é uma citação.

---

## Lista de Funcionalidades
- Item da lista 1
- Item da lista 2
- Item da lista 3

![Imagem](caminho/para/imagem.jpg) *Legenda da imagem*

[Link para GitHub](https://github.com/usuario/repositorio)
</div>
```

#### Sintaxe Markdown Suportada

**Títulos:**
- `# Título Principal` → `<h1 class="project-h1">`
- `## Subtítulo` → `<h2 class="project-h2">`
- `### Subtítulo Menor` → `<h3 class="project-h3">`

**Formatação de Texto:**
- `**texto**` → `<strong>texto</strong>` (negrito)
- `*texto*` → `<em>texto</em>` (itálico)
- `[texto](url)` → `<a href="url" target="_blank" rel="noopener noreferrer">texto</a>` (link)

**Elementos Especiais:**
- `> texto` → `<p class="project-paragraph callout">texto</p>` (callout)
- `>> texto` → `<p class="project-paragraph quote">texto</p>` (citação)
- `---` → `<hr>` (linha horizontal)

**Listas:**
- `- item` → `<li class="regular-base">item</li>` (lista não ordenada)

**Imagens com Legenda:**
- `![alt](src) *legenda*` → `<img src="src" alt="alt" class="project-img"><p class="project-img-caption">legenda</p>`

**Parágrafos:**
- Texto normal → `<p class="project-paragraph">texto</p>`

#### Classes CSS Aplicadas Automaticamente

O sistema markdown aplica automaticamente as seguintes classes:
- `.project-h1`, `.project-h2`, `.project-h3`: Títulos
- `.project-paragraph`: Parágrafos normais
- `.project-paragraph.callout`: Callouts
- `.project-paragraph.quote`: Citações
- `.project-img`: Imagens
- `.project-img-caption`: Legendas
- `.features-list`: Listas
- `.regular-base`: Itens de lista

#### Exemplo Prático de Uso

```html
<!-- Em uma página de projeto -->
<div class="project-content" data-markdown>
# Resumo do Projeto

Este é um **projeto incrível** que resolve problemas reais com *soluções inovadoras*.

> "A melhor ferramenta que já usei!" — Cliente satisfeito

## Principais Funcionalidades
- Interface intuitiva
- Performance otimizada
- Código limpo e documentado

![Screenshot do projeto](images/projeto.png) *Interface principal do sistema*

Acesse o [repositório no GitHub](https://github.com/usuario/projeto) para ver o código.

---
</div>
```

**Resultado**: O sistema converterá automaticamente todo o markdown para HTML com as classes CSS corretas, mantendo a consistência visual do projeto.

## 🚀 Deploy

O projeto está configurado para deploy no GitHub Pages. Para fazer deploy:

1. Faça commit das alterações
2. Push para a branch `main`
3. O GitHub Pages automaticamente fará o deploy

## 📄 Licença

© 2025 Vitor Lacerda. Todos os direitos reservados.
