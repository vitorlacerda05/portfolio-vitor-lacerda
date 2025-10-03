# Sistema Centralizado de SEO

Este sistema centraliza toda a configuração de SEO do portfólio em um único arquivo JavaScript, facilitando a manutenção e padronização.

## 📁 Arquivos

- `js/seo-config.js` - Configuração centralizada de SEO
- `sitemap.xml` - Mapa do site para motores de busca
- `robots.txt` - Diretrizes para crawlers

## 🚀 Como Usar

### 1. Inicialização Automática

O sistema é inicializado automaticamente em cada página:

```javascript
// Na página inicial
initSEO('home');

// Nas páginas de projeto
initSEO('urbverde');
initSEO('policies');
initSEO('pacepro');
initSEO('siga');
```

### 2. Configuração de Novas Páginas

Para adicionar uma nova página, edite o arquivo `js/seo-config.js`:

```javascript
const SEO_CONFIG = {
  // ... configurações existentes
  
  pages: {
    // ... páginas existentes
    
    nova_pagina: {
      title: "Título da Nova Página | Vitor Lacerda",
      description: "Descrição da nova página...",
      keywords: "keyword1, keyword2, keyword3",
      url: "/project/nova-pagina.html",
      image: "https://vitorlacerda.com/assets/images/projects/nova-pagina.png",
      schema: {
        type: "CreativeWork",
        data: {
          name: "Nome do Projeto",
          description: "Descrição do projeto...",
          creator: {
            "@type": "Person",
            name: "Vitor Lacerda",
            jobTitle: "UX/UI Designer"
          },
          // ... outros dados do schema
        }
      }
    }
  }
};
```

### 3. HTML das Páginas

Cada página deve ter:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Título Base</title>
  <!-- SEO will be managed by JavaScript -->
  
  <!-- ... outros elementos head ... -->
  
  <!-- SEO Configuration -->
  <script src="js/seo-config.js"></script>
</head>
<body>
  <!-- ... conteúdo da página ... -->
  
  <!-- Initialize SEO -->
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      initSEO('nome_da_pagina');
    });
  </script>
</body>
</html>
```

## 🔧 Funcionalidades

### Gerenciamento Automático de Tags

O sistema gerencia automaticamente:

- **Meta Tags**: description, keywords, author, robots
- **Open Graph**: title, description, image, url, type, site_name
- **Twitter Cards**: title, description, image, url
- **Canonical URLs**: para evitar conteúdo duplicado
- **Schema.org Markup**: dados estruturados para rich snippets

### Tipos de Schema Suportados

- `Person` - Para páginas pessoais
- `CreativeWork` - Para projetos gerais
- `MobileApplication` - Para aplicativos mobile
- `SoftwareApplication` - Para software/dashboards

## 📊 Benefícios

### ✅ Vantagens

1. **Centralização**: Toda configuração em um lugar
2. **Manutenibilidade**: Fácil de atualizar e modificar
3. **Consistência**: Padrões uniformes em todas as páginas
4. **Escalabilidade**: Fácil adicionar novas páginas
5. **DRY Principle**: Evita duplicação de código
6. **Flexibilidade**: Permite personalização por página

### 🎯 SEO Otimizado

- Meta descriptions únicas por página
- Keywords relevantes e específicas
- Open Graph completo para redes sociais
- Schema markup para rich snippets
- URLs canônicas para evitar duplicação
- Sitemap.xml para indexação
- Robots.txt para controle de crawlers

## 🔄 Atualizações

### Para Modificar Configurações Existentes

1. Edite o arquivo `js/seo-config.js`
2. As mudanças serão aplicadas automaticamente em todas as páginas
3. Não é necessário modificar HTML individual

### Para Adicionar Novas Páginas

1. Adicione a configuração em `js/seo-config.js`
2. Crie o arquivo HTML com a estrutura padrão
3. Chame `initSEO('nome_da_pagina')` no JavaScript da página

## 📝 Exemplo Completo

```javascript
// Configuração no seo-config.js
nova_pagina: {
  title: "Meu Novo Projeto | Vitor Lacerda",
  description: "Descrição detalhada do meu novo projeto de UX Design...",
  keywords: "ux design, novo projeto, vitor lacerda, portfolio",
  url: "/project/novo-projeto.html",
  image: "https://vitorlacerda.com/assets/images/projects/novo-projeto.png",
  schema: {
    type: "CreativeWork",
    data: {
      name: "Meu Novo Projeto",
      description: "Descrição do projeto...",
      creator: {
        "@type": "Person",
        name: "Vitor Lacerda",
        jobTitle: "UX Designer"
      },
      url: "https://vitorlacerda.com/project/novo-projeto.html",
      dateCreated: "2025-01",
      keywords: ["ux design", "novo projeto", "portfolio"]
    }
  }
}
```

```html
<!-- No HTML da página -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    initSEO('nova_pagina');
  });
</script>
```

## 🚨 Importante

- O arquivo `seo-config.js` deve ser carregado antes da inicialização
- Use nomes consistentes para as chaves das páginas
- Mantenha as imagens em formato adequado (1200x630px para Open Graph)
- Teste sempre as mudanças em ambiente de desenvolvimento primeiro
