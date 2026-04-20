import { useHead } from '@unhead/vue'

/**
 * Apply SEO meta tags for a page.
 *
 * Accepts:
 *   - title, description, keywords, url, image, ogType
 *   - schema (object or array) — JSON-LD blocks.
 */
export function useSeo(opts) {
  const {
    title,
    description,
    keywords,
    url,
    image = 'https://vitorlacerda.com/assets/favicon/android-chrome-512x512.png',
    ogType = 'website',
    schema = null
  } = opts

  const meta = [
    { name: 'description', content: description },
    { name: 'author', content: 'Vitor Lacerda' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:type', content: ogType },
    { property: 'og:url', content: url },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:site_name', content: 'Vitor Lacerda' },
    { property: 'og:locale', content: 'pt_BR' },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: url },
    { property: 'twitter:title', content: title },
    { property: 'twitter:description', content: description },
    { property: 'twitter:image', content: image }
  ]

  if (keywords) meta.push({ name: 'keywords', content: keywords })

  const link = [{ rel: 'canonical', href: url }]

  const script = []
  if (schema) {
    const schemas = Array.isArray(schema) ? schema : [schema]
    schemas.forEach(s => {
      script.push({
        type: 'application/ld+json',
        innerHTML: JSON.stringify(s)
      })
    })
  }

  useHead({ title, meta, link, script })
}
