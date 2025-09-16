# Sistema de Numeração Automática - Guia de Uso

## 📋 Visão Geral

O sistema de numeração automática adiciona numeração sequencial aos títulos dos projetos de forma automática, seguindo uma hierarquia lógica:

- **`.project-h1`** → `1.`, `2.`, `3.`...
- **`.project-h2`** → `1.1.`, `1.2.`, `2.1.`, `2.2.`...
- **`.project-h3`** → `1.1.1.`, `1.1.2.`, `1.2.1.`...

## 🎯 Como Funciona

### Hierarquia de Numeração

```
1. Primeira Seção H1
   1.1. Primeira Subseção H2
        1.1.1. Primeira Sub-subseção H3
        1.1.2. Segunda Sub-subseção H3
   1.2. Segunda Subseção H2
        1.2.1. Primeira Sub-subseção H3

2. Segunda Seção H1
   2.1. Primeira Subseção H2
   2.2. Segunda Subseção H2
```

### Exemplo Prático

```html
<h1 class="project-h1">Sobre o Projeto</h1>
<!-- Resultado: 1. Sobre o Projeto -->

<h2 class="project-h2">Funcionalidades</h2>
<!-- Resultado: 1.1. Funcionalidades -->

<h3 class="project-h3">Frontend</h3>
<!-- Resultado: 1.1.1. Frontend -->

<h3 class="project-h3">Backend</h3>
<!-- Resultado: 1.1.2. Backend -->

<h2 class="project-h2">Tecnologias</h2>
<!-- Resultado: 1.2. Tecnologias -->

<h1 class="project-h1">Resultados</h1>
<!-- Resultado: 2. Resultados -->
```

## 🔧 Implementação

### 1. Incluir os Arquivos

```html
<!-- CSS -->
<link rel="stylesheet" href="../css/project-numbering.css" />

<!-- JavaScript -->
<script src="../js/project-numbering.js"></script>
```

### 2. Usar as Classes

```html
<h1 class="project-h1">Título Principal</h1>
<h2 class="project-h2">Subtítulo</h2>
<h3 class="project-h3">Sub-subtítulo</h3>
<p class="project-paragraph">Parágrafo numerado</p>
```

### 3. Numeração Automática

A numeração é aplicada automaticamente quando:
- A página carrega
- O conteúdo é inserido dinamicamente
- A função `reapplyNumbering()` é chamada

## 📝 Exemplo Completo

```html
<div class="project-content">
  <h1 class="project-h1">Sobre o Projeto</h1>
  <p class="project-paragraph">
    Descrição geral do projeto...
  </p>
  
  <h2 class="project-h2">Funcionalidades</h2>
  <ul>
    <li>Funcionalidade 1</li>
    <li>Funcionalidade 2</li>
  </ul>
  
  <h3 class="project-h3">Interface</h3>
  <p class="project-paragraph">
    Detalhes sobre a interface...
  </p>
  
  <h3 class="project-h3">Backend</h3>
  <p class="project-paragraph">
    Detalhes sobre o backend...
  </p>
  
  <h2 class="project-h2">Tecnologias</h2>
  <div class="tech-badges">
    <span class="tech-badge">React</span>
    <span class="tech-badge">Node.js</span>
  </div>
  
  <h1 class="project-h1">Resultados</h1>
  <p class="project-paragraph">
    Resultados alcançados...
  </p>
</div>
```

**Resultado da Numeração:**
```
1. Sobre o Projeto
   1.1. Funcionalidades
        1.1.1. Interface
        1.1.2. Backend
   1.2. Tecnologias
2. Resultados
```

## 🎨 Estilização

### CSS Personalizado

```css
/* Personalizar a numeração */
.project-number {
  color: #007bff;
  font-weight: bold;
  margin-right: 0.5em;
}

/* Estilo para H1 */
.project-h1 .project-number {
  font-size: 1.2em;
  color: #333;
}

/* Estilo para H2 */
.project-h2 .project-number {
  font-size: 1.1em;
  color: #666;
}

/* Estilo para H3 */
.project-h3 .project-number {
  font-size: 1em;
  color: #999;
}
```

## 🔧 Funções JavaScript

### Funções Disponíveis

```javascript
// Aplicar numeração
window.ProjectNumbering.addNumbering();

// Remover numeração
window.ProjectNumbering.removeNumbering();

// Reaplicar numeração (útil após mudanças dinâmicas)
window.ProjectNumbering.reapplyNumbering();
```

### Uso Programático

```javascript
// Após adicionar conteúdo dinamicamente
document.getElementById('content').innerHTML = newContent;

// Reaplicar numeração
setTimeout(() => {
  window.ProjectNumbering.reapplyNumbering();
}, 100);
```

## 🚨 Troubleshooting

### Numeração não aparece

1. **Verifique se o CSS está carregado:**
   ```html
   <link rel="stylesheet" href="../css/project-numbering.css" />
   ```

2. **Verifique se o JavaScript está carregado:**
   ```html
   <script src="../js/project-numbering.js"></script>
   ```

3. **Verifique as classes:**
   - Use `.project-h1`, `.project-h2`, `.project-h3`
   - Não use classes duplicadas

### Numeração duplicada

1. **Reaplique a numeração:**
   ```javascript
   window.ProjectNumbering.reapplyNumbering();
   ```

2. **Verifique se não há elementos duplicados**

### Numeração incorreta

1. **Verifique a hierarquia HTML:**
   - H1 deve vir antes dos H2
   - H2 deve vir antes dos H3

2. **Verifique a ordem dos elementos**

## 📱 Responsividade

O sistema é responsivo por padrão:

```css
@media (max-width: 768px) {
  .project-number {
    margin-right: 0.3em;
  }
}
```

## 🎯 Vantagens

- ✅ **Automático**: Não precisa numerar manualmente
- ✅ **Hierárquico**: Segue estrutura lógica
- ✅ **Flexível**: Funciona com conteúdo dinâmico
- ✅ **Consistente**: Mesmo estilo em todos os projetos
- ✅ **Responsivo**: Adapta-se a diferentes telas
- ✅ **Reutilizável**: Funciona em qualquer página de projeto

## 💡 Dicas

1. **Use hierarquia lógica**: H1 → H2 → H3
2. **Evite pular níveis**: Não use H1 depois de H3 sem H2
3. **Teste a numeração**: Verifique se está funcionando corretamente
4. **Use classes consistentes**: Sempre use as classes especificadas
5. **Reaplique após mudanças**: Use `reapplyNumbering()` após alterações dinâmicas

## 🔍 Debug

Para debug, adicione a classe `debug-numbering` ao body:

```html
<body class="debug-numbering">
```

Isso adicionará um destaque visual aos números para facilitar a identificação.
