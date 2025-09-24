# Sistema de Markdown para Projetos

Este sistema permite escrever o conteúdo da seção `project-content` em markdown, que é automaticamente convertido para HTML com as classes CSS específicas do projeto.

## Como Usar

### 1. Estrutura Básica

Adicione o atributo `data-markdown` ao elemento que contém o conteúdo:

```html
<div class="project-content" data-markdown>
  <!-- Seu conteúdo em markdown aqui -->
</div>
```

### 2. Incluir o Script

Adicione o script de conversão antes do fechamento do `</body>`:

```html
<script src="../js/markdown-to-html.js"></script>
```

### 3. Sintaxe Markdown

#### Headers
```markdown
# Título Principal (project-h1)
## Subtítulo (project-h2)
### Sub-subtítulo (project-h3)
```

#### Parágrafos
```markdown
Este é um parágrafo normal.

> Este é um callout (fundo azul claro).

>> Esta é uma citação (borda azul à esquerda).
```

#### Listas
```markdown
## Lista de Funcionalidades
- Item 1
- Item 2
- Item 3
```

#### Imagens com Legenda
```markdown
![Alt text](../path/to/image.png) *Legenda da imagem*
```

## Classes CSS Aplicadas

| Elemento Markdown | Classe CSS | Descrição |
|-------------------|------------|-----------|
| `# Título` | `project-h1` | Título principal (32px, Karla, 700) |
| `## Subtítulo` | `project-h2` | Subtítulo (24px, Karla, 600) |
| `### Sub-subtítulo` | `project-h3` | Sub-subtítulo (20px, Karla, 600) |
| Parágrafo normal | `project-paragraph` | Parágrafo (16px, Inter, 400) |
| `> Callout` | `project-paragraph callout` | Parágrafo destacado (fundo azul) |
| `>> Citação` | `project-paragraph quote` | Citação (borda azul) |
| `![img](src) *legenda*` | `project-img` + `project-img-caption` | Imagem com legenda |
| `- Item` | `features-list` + `regular-base` | Lista de itens |

## Exemplo Completo

```markdown
![Interface do projeto](../assets/images/projeto.png) *Interface principal do projeto*

# Sobre o Projeto
Este projeto foi desenvolvido para resolver um problema específico.

> Este é um ponto importante que merece destaque.

## Principais Funcionalidades
- Dashboard interativo
- Relatórios em tempo real
- Interface responsiva

### Tecnologias Utilizadas
React, TypeScript e Node.js foram as principais tecnologias.

>> "Este projeto representa um marco na nossa jornada de inovação."
```

## Conversão Automática

O sistema converte automaticamente quando a página carrega. Você também pode converter manualmente:

```javascript
// Converter elemento específico
window.markdownConverter.convertElement('project-content');

// Converter todos os elementos com data-markdown
window.markdownConverter.convertAll();
```

## Vantagens

1. **Escrita Mais Rápida**: Markdown é mais simples que HTML
2. **Classes Automáticas**: Mantém todas as classes CSS do projeto
3. **Consistência**: Garante que todos os projetos usem as mesmas classes
4. **Flexibilidade**: Pode ser usado em qualquer página do projeto

## Arquivo de Exemplo

Veja o arquivo `project/markdown-example.html` para um exemplo completo de uso.
