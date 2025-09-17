# Portfolio Vitor Lacerda

Portfólio pessoal desenvolvido em HTML, CSS e JavaScript com design baseado no Figma. O projeto inclui funcionalidades interativas de edição, permitindo arrastar elementos e usar ferramentas de pintura para uma experiência única.

## 🌐 Links

**Link de acesso:** [https://vitorlacerda05.github.io/portfolio-vitor-lacerda/](https://vitorlacerda05.github.io/portfolio-vitor-lacerda/)

**Link do Figma:** [https://www.figma.com/design/1EPHxMr80QnAGkYDsx7IyC/Portf%C3%B3lio---Vitor-Lacerda?node-id=13-40&t=KbCRG0CI9mvsaduV-1](https://www.figma.com/design/1EPHxMr80QnAGkYDsx7IyC/Portf%C3%B3lio---Vitor-Lacerda?node-id=13-40&t=KbCRG0CI9mvsaduV-1)

## 🚀 Funcionalidades

- **Design Responsivo**: Interface adaptável para diferentes dispositivos
- **Modo de Edição Interativo**: Sistema de arrastar elementos e ferramenta de pincel
- **Animações Suaves**: Transições e efeitos visuais com Animate.css
- **Sistema de Projetos**: Estrutura reutilizável para adicionar novos projetos
- **Páginas de Projeto**: Templates padronizados para detalhamento de projetos

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
│   └── scroll-animations.js
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

Use o template base fornecido em `project/template.html` como referência. A estrutura inclui:

- **Cabeçalho**: Meta tags, favicon, tokens CSS e bibliotecas externas
- **Botão de Volta**: Navegação para a página principal
- **Informações do Projeto**: Título, badges, descrição e data
- **Imagem Principal**: Com cantos decorativos
- **Conteúdo do Projeto**: Seções organizadas com títulos e parágrafos
- **Seção de Contato**: Cards com links para LinkedIn e Email
- **Rodapé**: Informações de copyright

### 3. Estilos de Texto para Páginas de Projeto

O sistema utiliza classes CSS padronizadas para formatação de texto:

#### Títulos
- `.project-h1`: Título principal (32px, Karla, 700)
- `.project-h1-alt`: Título principal alternativo, que não possui contagem automática (mesmo estilo do h1)
- `.project-h2`: Subtítulo (24px, Karla, 600)
- `.project-h3`: Subtítulo menor (20px, Karla, 600)

#### Parágrafos e Listas
- `.project-paragraph`: Texto padrão (16px, Inter, 400)
- `ul`: Listas com marcadores (herda estilos do parágrafo)

#### Elementos Especiais
- `.quote`: Citação com borda lateral
- `.callout`: Destaque com fundo colorido
- `.project-img-caption`: Legenda de imagens

#### Imagens
- `.project-img`: Imagem do conteúdo
- `.project-shadow`: Sombra para imagens

## 🚀 Deploy

O projeto está configurado para deploy no GitHub Pages. Para fazer deploy:

1. Faça commit das alterações
2. Push para a branch `main`
3. O GitHub Pages automaticamente fará o deploy

## 📄 Licença

© 2025 Vitor Lacerda. Todos os direitos reservados.
