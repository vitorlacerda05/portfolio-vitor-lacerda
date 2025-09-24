/**
 * Conversor de Markdown para HTML com classes CSS específicas do projeto
 * Converte markdown simples para HTML mantendo as classes CSS definidas no projeto
 */

class MarkdownToHTML {
  constructor() {
    this.rules = {
      // Headers
      h1: { tag: 'h1', class: 'project-h1' },
      h2: { tag: 'h2', class: 'project-h2' },
      h3: { tag: 'h3', class: 'project-h3' },
      
      // Paragraphs
      paragraph: { tag: 'p', class: 'project-paragraph' },
      callout: { tag: 'p', class: 'project-paragraph callout' },
      quote: { tag: 'p', class: 'project-paragraph quote' },
      
      // Images
      image: { tag: 'img', class: 'project-img' },
      imageCaption: { tag: 'p', class: 'project-img-caption' },
      
      // Lists
      ul: { tag: 'ul', class: 'features-list' },
      li: { tag: 'li', class: 'regular-base' }
    };
  }

  /**
   * Converte markdown para HTML
   * @param {string} markdown - Texto em markdown
   * @returns {string} - HTML com classes CSS
   */
  convert(markdown) {
    let html = markdown;

    // Converter imagens com legenda
    html = this.convertImagesWithCaption(html);
    
    // Converter imagens simples (sem legenda)
    html = this.convertSimpleImages(html);
    
    // Converter headers
    html = this.convertHeaders(html);
    
    // Converter listas
    html = this.convertLists(html);
    
    // Converter parágrafos especiais
    html = this.convertSpecialParagraphs(html);
    
    // Converter formatação inline (negrito, etc.)
    html = this.convertInlineFormatting(html);
    
    // Converter linhas horizontais
    html = this.convertHorizontalRules(html);
    
    // Converter parágrafos normais
    html = this.convertNormalParagraphs(html);

    return html;
  }

  /**
   * Converte imagens com legenda (formato: ![alt](src) *legenda*)
   */
  convertImagesWithCaption(html) {
    const imageCaptionRegex = /!\[([^\]]*)\]\(([^)]+)\)\s*\*([^*]+)\*/g;
    return html.replace(imageCaptionRegex, (match, alt, src, caption) => {
      return `<div class="project-img-wrapper"><img src="${src}" alt="${alt}"></div>\n<p class="project-img-caption">${caption}</p>`;
    });
  }

  /**
   * Converte imagens simples (formato: ![alt](src))
   */
  convertSimpleImages(html) {
    const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)(?!\s*\*)/g;
    return html.replace(imageRegex, (match, alt, src) => {
      return `<div class="project-img-wrapper"><img src="${src}" alt="${alt}"></div>`;
    });
  }

  /**
   * Converte headers
   */
  convertHeaders(html) {
    // H1
    html = html.replace(/^# (.+)$/gm, '<h1 class="project-h1">$1</h1>');
    
    // H2
    html = html.replace(/^## (.+)$/gm, '<h2 class="project-h2">$1</h2>');
    
    // H3
    html = html.replace(/^### (.+)$/gm, '<h3 class="project-h3">$1</h3>');
    
    return html;
  }

  /**
   * Converte listas
   */
  convertLists(html) {
    // Lista não ordenada
    html = html.replace(/^\- (.+)$/gm, '<li class="regular-base">$1</li>');
    
    // Agrupar itens de lista em <ul>
    html = html.replace(/(<li class="regular-base">.*<\/li>)(?:\s*<li class="regular-base">.*<\/li>)*/g, (match) => {
      return `<ul class="features-list">${match}</ul>`;
    });
    
    return html;
  }

  /**
   * Converte parágrafos especiais
   */
  convertSpecialParagraphs(html) {
    // Callout (linha que começa com >)
    html = html.replace(/^> (.+)$/gm, '<p class="project-paragraph callout">$1</p>');
    
    // Quote (linha que começa com >>)
    html = html.replace(/^>> (.+)$/gm, '<p class="project-paragraph quote">$1</p>');
    
    return html;
  }

  /**
   * Converte formatação inline (negrito, itálico, links, etc.)
   */
  convertInlineFormatting(html) {
    // Links: [texto](url) -> <a href="url">texto</a>
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    
    // Negrito: **texto** -> <strong>texto</strong>
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    
    // Itálico: *texto* -> <em>texto</em>
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    
    return html;
  }

  /**
   * Converte linhas horizontais
   */
  convertHorizontalRules(html) {
    // Linha horizontal: --- -> <hr>
    html = html.replace(/^---$/gm, '<hr>');
    
    return html;
  }

  /**
   * Converte parágrafos normais
   */
  convertNormalParagraphs(html) {
    // Parágrafos que não são headers, listas ou especiais
    const lines = html.split('\n');
    let result = [];
    let inList = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Pular linhas vazias
      if (!line) {
        result.push('');
        continue;
      }
      
      // Se já é HTML completo (já tem tag de parágrafo), manter como está
      if (line.startsWith('<p class="project-paragraph">') || 
          line.startsWith('<h1') || line.startsWith('<h2') || line.startsWith('<h3') ||
          line.startsWith('<ul') || line.startsWith('<li') || line.startsWith('<hr>') ||
          line.startsWith('<img') || line.startsWith('<p class="project-img-caption">') ||
          line.startsWith('<div class="project-img-wrapper">')) {
        result.push(line);
        continue;
      }
      
      // Se é header, lista ou parágrafo especial, já foi processado
      if (line.startsWith('#') || line.startsWith('-') || line.startsWith('>')) {
        result.push(line);
        continue;
      }
      
      // Se contém HTML inline (formatação já aplicada), envolver em parágrafo
      if (line.includes('<strong>') || line.includes('<em>') || line.includes('<a href')) {
        result.push(`<p class="project-paragraph">${line}</p>`);
        continue;
      }
      
      // Converter para parágrafo normal
      result.push(`<p class="project-paragraph">${line}</p>`);
    }
    
    return result.join('\n');
  }

  /**
   * Converte markdown de um elemento específico
   * @param {string} elementId - ID do elemento que contém o markdown
   */
  convertElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      const markdown = element.textContent || element.innerHTML;
      const html = this.convert(markdown);
      element.innerHTML = html;
    }
  }

  /**
   * Converte todos os elementos com data-markdown
   */
  convertAll() {
    const elements = document.querySelectorAll('[data-markdown]');
    elements.forEach(element => {
      const markdown = element.textContent || element.innerHTML;
      const html = this.convert(markdown);
      element.innerHTML = html;
    });
  }
}

// Instância global
window.markdownConverter = new MarkdownToHTML();

// Auto-conversão quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  window.markdownConverter.convertAll();
});

// Exemplo de uso:
/*
// HTML:
<div id="project-content" data-markdown>
# Sobre o Projeto
Este é um parágrafo normal com **texto em negrito** e *texto em itálico*.

> Este é um callout importante.

>> Esta é uma citação.

---

## Principais Funcionalidades
- Dashboard interativo
- Sistema de monitoramento
- Relatórios automáticos

Versionamento colaborativo no GitHub — [adicionar link do repositório aqui](https://github.com/usuario/repositorio)

![Interface](image.png) *Legenda da imagem*
</div>

// Será convertido automaticamente para HTML com as classes corretas
// **texto** vira <strong>texto</strong>
// *texto* vira <em>texto</em>
// [texto](url) vira <a href="url" target="_blank" rel="noopener noreferrer">texto</a>
// --- vira <hr>
*/
