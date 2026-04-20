/**
 * Conversor de Markdown para HTML com classes CSS específicas do projeto.
 * Portado do antigo js/markdown-to-html.js, preservando 1-para-1 o output HTML
 * (classes, ordem de transformações, quebras de linha) para manter o visual idêntico.
 */

function convertImagesWithCaption(html) {
  const re = /!\[([^\]]*)\]\(([^)]+)\)\s*\*([^*]+)\*/g
  return html.replace(re, (_m, alt, src, caption) => {
    return `<div class="project-img-wrapper"><img src="${src}" alt="${alt}"></div>\n<p class="project-img-caption">${caption}</p>`
  })
}

function convertSimpleImages(html) {
  const re = /!\[([^\]]*)\]\(([^)]+)\)(?!\s*\*)/g
  return html.replace(re, (_m, alt, src) => {
    return `<div class="project-img-wrapper"><img src="${src}" alt="${alt}"></div>`
  })
}

function convertHeaders(html) {
  html = html.replace(/^# (.+)$/gm, '<h1 class="project-h1">$1</h1>')
  html = html.replace(/^## (.+)$/gm, '<h2 class="project-h2">$1</h2>')
  html = html.replace(/^### (.+)$/gm, '<h3 class="project-h3">$1</h3>')
  return html
}

function convertLists(html) {
  html = html.replace(/^- (.+)$/gm, '<li class="regular-base">$1</li>')
  html = html.replace(
    /(<li class="regular-base">.*<\/li>)(?:\s*<li class="regular-base">.*<\/li>)*/g,
    (match) => `<ul class="features-list">${match}</ul>`
  )
  return html
}

function convertSpecialParagraphs(html) {
  html = html.replace(/^>> (.+)$/gm, '<p class="project-paragraph quote">$1</p>')
  html = html.replace(/^> (.+)$/gm, '<p class="project-paragraph callout">$1</p>')
  return html
}

function convertInlineFormatting(html) {
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  )
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>')
  return html
}

function convertHorizontalRules(html) {
  return html.replace(/^---$/gm, '<hr>')
}

function convertNormalParagraphs(html) {
  const lines = html.split('\n')
  const result = []

  for (const raw of lines) {
    const line = raw.trim()

    if (!line) {
      result.push('')
      continue
    }

    if (
      line.startsWith('<p class="project-paragraph">') ||
      line.startsWith('<h1') || line.startsWith('<h2') || line.startsWith('<h3') ||
      line.startsWith('<ul') || line.startsWith('<li') || line.startsWith('<hr>') ||
      line.startsWith('<img') || line.startsWith('<p class="project-img-caption">') ||
      line.startsWith('<div class="project-img-wrapper">') ||
      line.startsWith('<p class="project-paragraph callout">') ||
      line.startsWith('<p class="project-paragraph quote">')
    ) {
      result.push(line)
      continue
    }

    if (line.startsWith('#') || line.startsWith('-') || line.startsWith('>')) {
      result.push(line)
      continue
    }

    if (line.includes('<strong>') || line.includes('<em>') || line.includes('<a href')) {
      result.push(`<p class="project-paragraph">${line}</p>`)
      continue
    }

    result.push(`<p class="project-paragraph">${line}</p>`)
  }

  return result.join('\n')
}

export function markdownToHtml(markdown) {
  let html = markdown
  html = convertImagesWithCaption(html)
  html = convertSimpleImages(html)
  html = convertHeaders(html)
  html = convertLists(html)
  html = convertSpecialParagraphs(html)
  html = convertInlineFormatting(html)
  html = convertHorizontalRules(html)
  html = convertNormalParagraphs(html)
  return html
}
