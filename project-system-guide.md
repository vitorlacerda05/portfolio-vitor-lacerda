# Sistema de Páginas de Projeto - Guia de Uso

## 📋 Visão Geral

Este sistema permite criar páginas de projeto de forma escalável e organizada, usando apenas HTML, CSS e JavaScript. Todas as páginas seguem o mesmo padrão visual, mas com conteúdo personalizado.

## 🏗️ Estrutura do Sistema

### Arquivos Principais

1. **`project-template.html`** - Template base reutilizável
2. **`js/projects-data.js`** - Dados centralizados de todos os projetos
3. **`js/project-loader.js`** - Sistema de carregamento automático
4. **`project/exemplo.html`** - Exemplo de implementação

## 🚀 Como Criar uma Nova Página de Projeto

### Passo 1: Copiar o Template

```bash
# Copie o template base
cp project-template.html project/meu-projeto.html
```

### Passo 2: Adicionar Dados do Projeto

Edite o arquivo `js/projects-data.js` e adicione seu projeto:

```javascript
const projectsData = {
  // ... outros projetos ...
  
  'meu-projeto': {  // ← Nome do arquivo HTML (sem .html)
    title: 'Meu Projeto Incrível',
    badges: [
      'Frontend Developer',
      'UI Designer'
    ],
    description: 'Descrição do seu projeto aqui',
    date: 'jan, 2024 - mar, 2024',
    image: '../assets/images/homepage/projects/meu-projeto.png',
    imageAlt: 'Meu Projeto - Interface do projeto',
    content: `
      <!-- Conteúdo específico do seu projeto -->
      <div class="project-details">
        <h2 class="project-h2">Sobre o Projeto</h2>
        <p class="regular-base">
          Aqui você pode escrever sobre seu projeto, tecnologias usadas,
          desafios enfrentados, resultados alcançados, etc.
        </p>
        
        <div class="project-highlights">
          <h3 class="project-h3">Principais Funcionalidades</h3>
          <ul class="features-list">
            <li class="regular-base">Funcionalidade 1</li>
            <li class="regular-base">Funcionalidade 2</li>
            <li class="regular-base">Funcionalidade 3</li>
          </ul>
        </div>
        
        <div class="project-technologies">
          <h3 class="project-h3">Tecnologias Utilizadas</h3>
          <div class="tech-badges">
            <span class="tech-badge">React</span>
            <span class="tech-badge">TypeScript</span>
            <span class="tech-badge">Figma</span>
          </div>
        </div>
      </div>
    `
  }
};
```

### Passo 3: Adicionar Scripts ao HTML

Certifique-se de que seu arquivo HTML inclui os scripts necessários:

```html
<!-- Antes do </body> -->
<script src="../js/scroll-animations.js"></script>
<script src="https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js"></script>
<script src="../js/projects-data.js"></script>
<script src="../js/project-loader.js"></script>
```

## 📝 Estrutura dos Dados do Projeto

Cada projeto deve ter as seguintes propriedades:

| Propriedade | Tipo | Descrição | Obrigatório |
|-------------|------|-----------|-------------|
| `title` | string | Nome do projeto | ✅ |
| `badges` | array | Array de strings com badges | ✅ |
| `description` | string | Descrição resumida | ✅ |
| `date` | string | Período do projeto | ✅ |
| `image` | string | Caminho para a imagem | ✅ |
| `imageAlt` | string | Texto alternativo da imagem | ✅ |
| `content` | string | HTML do conteúdo específico | ✅ |

## 🎨 Personalizando o Conteúdo

### Classes CSS Disponíveis

- `.project-h2` - Títulos principais
- `.project-h3` - Subtítulos
- `.regular-base` - Texto normal
- `.features-list` - Lista de funcionalidades
- `.tech-badges` - Container para badges de tecnologia
- `.tech-badge` - Badge individual de tecnologia

### Exemplo de Conteúdo Rico

```html
content: `
  <div class="project-details">
    <h2 class="project-h2">Sobre o Projeto</h2>
    <p class="regular-base">
      Descrição detalhada do projeto...
    </p>
    
    <div class="project-highlights">
      <h3 class="project-h3">Principais Funcionalidades</h3>
      <ul class="features-list">
        <li class="regular-base">Interface responsiva</li>
        <li class="regular-base">Integração com APIs</li>
        <li class="regular-base">Sistema de autenticação</li>
      </ul>
    </div>
    
    <div class="project-technologies">
      <h3 class="project-h3">Stack Tecnológico</h3>
      <div class="tech-badges">
        <span class="tech-badge">React</span>
        <span class="tech-badge">Node.js</span>
        <span class="tech-badge">MongoDB</span>
        <span class="tech-badge">Figma</span>
      </div>
    </div>
    
    <div class="project-results">
      <h3 class="project-h3">Resultados Alcançados</h3>
      <p class="regular-base">
        Resultados e métricas do projeto...
      </p>
    </div>
  </div>
`
```

## 🔧 Funcionalidades do Sistema

### Carregamento Automático

- ✅ Extrai o ID do projeto da URL automaticamente
- ✅ Carrega dados do arquivo JavaScript
- ✅ Popula todos os elementos da página
- ✅ Tratamento de erros para projetos não encontrados

### Flexibilidade

- ✅ Conteúdo HTML personalizado para cada projeto
- ✅ Badges dinâmicos
- ✅ Imagens personalizadas
- ✅ Datas flexíveis

## 🚨 Troubleshooting

### Projeto não carrega

1. Verifique se o nome do arquivo HTML corresponde à chave no `projects-data.js`
2. Certifique-se de que os scripts estão sendo carregados na ordem correta
3. Verifique o console do navegador para erros

### Imagem não aparece

1. Verifique se o caminho da imagem está correto
2. Certifique-se de que o arquivo de imagem existe
3. Use caminhos relativos à pasta `project/`

### Conteúdo não aparece

1. Verifique se a propriedade `content` está definida
2. Certifique-se de que o HTML está bem formado
3. Verifique se não há erros de sintaxe no JavaScript

## 📁 Estrutura de Pastas Recomendada

```
project/
├── urbverde.html
├── exemplo.html
├── meu-projeto.html
└── ...

js/
├── projects-data.js
├── project-loader.js
└── ...

assets/
└── images/
    └── homepage/
        └── projects/
            ├── urbverde.png
            ├── exemplo.png
            └── meu-projeto.png
```

## 🎯 Vantagens do Sistema

1. **Escalabilidade**: Fácil adição de novos projetos
2. **Manutenibilidade**: Dados centralizados em um local
3. **Consistência**: Todas as páginas seguem o mesmo padrão
4. **Flexibilidade**: Conteúdo personalizado para cada projeto
5. **Performance**: Carregamento otimizado
6. **Simplicidade**: Apenas HTML, CSS e JavaScript

## 💡 Dicas

- Use nomes descritivos para as chaves dos projetos
- Mantenha as imagens otimizadas
- Teste sempre em diferentes dispositivos
- Use o exemplo como referência
- Organize as imagens na pasta `assets/images/homepage/projects/`
