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
│   │   ├── homepage/
│   │   │   ├── projects/        ← imagens dos cards
│   │   │   ├── social/
│   │   │   ├── social-proof/
│   │   │   └── vector/
│   │   └── projects/            ← imagens internas dos projetos
│   └── tokens/
│       ├── breakpoints.css
│       ├── colors.css
│       └── fonts.css
├── css/
│   ├── projects.css             ← estilos dos cards da homepage
│   ├── projects-template.css    ← estilos das páginas de projeto
│   └── (outros arquivos css)
├── js/
│   ├── projects/                ← fonte da verdade dos projetos
│   │   ├── projects-data.js     ← dados de todos os projetos
│   │   ├── render-projects.js   ← renderiza cards na homepage
│   │   └── render-project-info.js ← renderiza header nas páginas
│   ├── edit-mode/
│   └── (outros arquivos js)
├── project/
│   ├── example.html             ← template de referência
│   └── (páginas de projeto)
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

### 1. Como Adicionar um Novo Projeto

Os cards da homepage e o header de cada página de projeto são gerados automaticamente a partir de um único arquivo: **`js/projects/projects-data.js`**.

Para adicionar um novo projeto, basta incluir uma entrada no array `PROJECTS`:

```js
// js/projects/projects-data.js
{
  id: 'meu-projeto',                              // identificador único
  title: 'Meu Projeto',                           // título exibido
  url: 'project/meu-projeto.html',                // caminho da página
  image: {
    src: 'assets/images/homepage/projects/meu-projeto.png', // relativo à raiz
    alt: 'Descrição da imagem'
  },
  cardBg: 'bg-blue',                              // cor de fundo do card
  badges: ['UX Lead', 'UX Researcher'],           // papéis no projeto
  description: 'Descrição curta do projeto',      // texto do card
  date: 'jan, 2025 - mar, 2025'                   // período
}
```

O card aparece automaticamente na homepage e o header da página de projeto é populado ao usar `data-project="meu-projeto"` no `main-content` (ver passo 2).

**Resolução recomendada para a imagem do card: `864 × 560px`**

> A imagem é exibida com `object-fit: cover` e altura fixa de 280px. O tamanho 864×560 corresponde ao dobro (2×) da área de exibição real, garantindo nitidez em telas Retina. Mantenha o conteúdo principal centralizado ou no topo da imagem para evitar cortes indesejados.

Cores disponíveis para `cardBg`:
- `bg-green` / `bg-yellow` / `bg-blue` / `bg-purple` / `bg-red` / `bg-pink` / `bg-brown`

### 2. Como Criar uma Página de Projeto

Use o template base fornecido em `project/example.html` como referência. A estrutura inclui:

- **Cabeçalho**: Meta tags, favicon, tokens CSS e bibliotecas externas
- **Botão de Volta**: Navegação para a página principal
- **Header do Projeto**: Renderizado automaticamente via JS — basta definir `data-project` no container
- **Conteúdo do Projeto**: Seções organizadas com títulos e parágrafos (via markdown)
- **Seção de Contato**: Cards com links para LinkedIn e Email
- **Rodapé**: Informações de copyright

O header (título, badges, descrição, data e imagem) é injetado automaticamente pelo script. Configure assim:

```html
<!-- Na página do projeto -->
<div class="main-content" id="project-main-content" data-project="meu-projeto">
  <!-- Renderizado por js/projects/render-project-info.js -->
</div>
```

E inclua os scripts antes do fechamento do `</body>`:

```html
<script src="../js/projects/projects-data.js"></script>
<script src="../js/projects/render-project-info.js"></script>
<script src="../js/markdown-to-html.js"></script>
```

**Importante**: O valor de `data-project` deve corresponder ao `id` cadastrado em `js/projects/projects-data.js`.

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
