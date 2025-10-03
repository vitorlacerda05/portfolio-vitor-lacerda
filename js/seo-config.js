/**
 * SEO Configuration - Centralized SEO management
 * This file contains all SEO configurations for the portfolio
 */

const SEO_CONFIG = {
  // Base site information
  site: {
    name: "Vitor Lacerda",
    url: "https://vitorlacerda.com",
    description: "Vitor Lacerda é Product Designer e pesquisador na USP. Cofundador da UrbVerde, com experiência em gestão de produtos e desenvolvimento. Especialista em UX/UI Design com projetos premiados.",
    author: "Vitor Lacerda",
    locale: "pt_BR",
    image: "https://vitorlacerda.com/assets/favicon/android-chrome-512x512.png",
    social: {
      linkedin: "https://www.linkedin.com/in/vitorlacerda05/",
      github: "https://github.com/vitorlacerda05",
      lattes: "http://lattes.cnpq.br/8815889895192997",
      email: "vitorlacerda05@gmail.com"
    }
  },

  // Page-specific configurations
  pages: {
    home: {
      title: "Vitor Lacerda - Product Designer",
      description: "Vitor Lacerda é Product Designer e pesquisador na USP. Cofundador da UrbVerde, com experiência em gestão de produtos e desenvolvimento. Especialista em UX/UI Design com portfolio de projetos premiados. Freelance UX UI Designer disponível para novos projetos.",
      keywords: "product designer, ux designer, ui designer, portfolio ux, portfolio ui, ux ui designer, designer junior, freelance ux, freelance ui, vitor lacerda, usp, urbverde, design thinking, experiência do usuário, interface design, user experience, user interface",
      url: "/",
      image: "https://vitorlacerda.com/assets/favicon/android-chrome-512x512.png",
      schema: {
        type: "Person",
        data: {
          name: "Vitor Lacerda",
          jobTitle: "Product Designer",
          description: "Product Designer e pesquisador na USP. Cofundador da UrbVerde, com experiência em gestão de produtos e desenvolvimento.",
          url: "https://vitorlacerda.com",
          image: "https://vitorlacerda.com/assets/images/homepage/vitor-lacerda-image.png",
          sameAs: [
            "https://www.linkedin.com/in/vitorlacerda05/",
            "https://github.com/vitorlacerda05",
            "http://lattes.cnpq.br/8815889895192997"
          ],
          alumniOf: {
            "@type": "EducationalOrganization",
            name: "Universidade de São Paulo - USP"
          },
          worksFor: {
            "@type": "Organization",
            name: "UrbVerde"
          },
          knowsAbout: ["UX Design", "UI Design", "Product Design", "Design Thinking", "Prototipagem", "Desenvolvimento Front-end"]
        }
      }
    },

    urbverde: {
      title: "UrbVerde - Dashboard Socioambiental | Vitor Lacerda",
      description: "UrbVerde é uma plataforma digital que democratiza dados socioambientais urbanos. Projeto premiado pela Sociedade Brasileira de Computação e Nações Unidas, desenvolvido por Vitor Lacerda como cofundador e UX Lead. Case study completo de UX/UI Design.",
      keywords: "urbverde, dashboard socioambiental, dados urbanos, cobertura vegetal, temperatura, sig, sistema informação geográfica, vitor lacerda, ux design, ui design, portfolio ux, prêmio usp, projeto ux, case study ux, protótipo",
      url: "/project/urbverde.html",
      image: "https://vitorlacerda.com/assets/images/homepage/projects/urbverde.png",
      schema: {
        type: "CreativeWork",
        data: {
          name: "UrbVerde",
          description: "Plataforma digital que democratiza dados socioambientais urbanos para apoiar decisões públicas e empoderar a sociedade.",
          creator: {
            "@type": "Person",
            name: "Vitor Lacerda",
            jobTitle: "Cofounder & UX Lead"
          },
          url: "https://vitorlacerda.com/project/urbverde.html",
          image: "https://vitorlacerda.com/assets/images/homepage/projects/urbverde.png",
          dateCreated: "2024-09",
          dateModified: "2025-06",
          award: [
            "Menção honrosa na Competição Nacional de Design pela Sociedade Brasileira de Computação",
            "Reconhecimento pela Conferência das Nações Unidas",
            "Prêmio USP de Impacto Social"
          ],
          keywords: ["dashboard socioambiental", "dados urbanos", "cobertura vegetal", "sistema informação geográfica", "gestão pública"]
        }
      }
    },

    policies: {
      title: "Painel Políticas Públicas - ABC Paulista | Vitor Lacerda",
      description: "Painel para auxiliar gestores municipais do ABC Paulista na construção de planos climáticos locais. Desenvolvido por Vitor Lacerda como UX Lead e coordenador técnico da UrbVerde. Case study de UX Design para gestão pública.",
      keywords: "políticas públicas, abc paulista, planos climáticos, plac, gestão municipal, urbverde, vitor lacerda, ux design, ui design, portfolio ux, painel gestão, case study ux, projeto ux",
      url: "/project/policies.html",
      image: "https://vitorlacerda.com/assets/images/homepage/projects/policies.png",
      schema: {
        type: "CreativeWork",
        data: {
          name: "Painel Políticas Públicas - ABC Paulista",
          description: "Painel para auxiliar gestores municipais do ABC Paulista na construção de planos climáticos locais e políticas públicas.",
          creator: {
            "@type": "Person",
            name: "Vitor Lacerda",
            jobTitle: "UX Lead & Tech Coordinator"
          },
          url: "https://vitorlacerda.com/project/policies.html",
          image: "https://vitorlacerda.com/assets/images/homepage/projects/policies.png",
          dateCreated: "2025-06",
          dateModified: "2025-08",
          keywords: ["políticas públicas", "abc paulista", "planos climáticos", "gestão municipal", "painel gestão"]
        }
      }
    },

    pacepro: {
      title: "PacePro - App Gamificado para Corredores | Vitor Lacerda",
      description: "PacePro é um protótipo de aplicativo mobile gamificado para corredores que combina contador de passos, monitoramento de desempenho e comunidade. Desenvolvido por Vitor Lacerda usando Design Thinking. Case study de UX/UI Design para mobile.",
      keywords: "pacepro, app corrida, aplicativo corrida, gamificação, contador passos, vitor lacerda, ux design, ui design, portfolio ux, design thinking, protótipo mobile, case study ux, projeto ux, mobile ux",
      url: "/project/pacepro.html",
      image: "https://vitorlacerda.com/assets/images/homepage/projects/pacepro_1.png",
      schema: {
        type: "MobileApplication",
        data: {
          name: "PacePro",
          description: "Protótipo de aplicativo mobile gamificado para corredores que combina contador de passos, monitoramento de desempenho e comunidade.",
          creator: {
            "@type": "Person",
            name: "Vitor Lacerda",
            jobTitle: "UX/UI Designer"
          },
          url: "https://vitorlacerda.com/project/pacepro.html",
          image: "https://vitorlacerda.com/assets/images/homepage/projects/pacepro_1.png",
          dateCreated: "2023-05",
          applicationCategory: "HealthApplication",
          keywords: ["app corrida", "aplicativo corrida", "gamificação", "contador passos", "fitness"]
        }
      }
    },

    siga: {
      title: "SIGa - Dashboard Agronegócio | Vitor Lacerda",
      description: "SIGa é um dashboard de gerenciamento de compras, vendas e estoques agrários desenvolvido por Vitor Lacerda. Projeto de UI/UX Design voltado ao agronegócio com base em sistemas ERP. Case study de dashboard UX Design.",
      keywords: "siga, dashboard agronegócio, gestão estoques, sistema agrário, erp agronegócio, vitor lacerda, ui design, ux design, portfolio ux, icmc usp, case study ux, projeto ux, dashboard ux",
      url: "/project/siga.html",
      image: "https://vitorlacerda.com/assets/images/projects/siga/hi-fi-1.png",
      schema: {
        type: "SoftwareApplication",
        data: {
          name: "SIGa - Sistema de Informação Gerencial Agrário",
          description: "Dashboard de gerenciamento de compras, vendas e estoques agrários voltado ao agronegócio com base em sistemas ERP.",
          creator: {
            "@type": "Person",
            name: "Vitor Lacerda",
            jobTitle: "UI/UX Designer"
          },
          url: "https://vitorlacerda.com/project/siga.html",
          image: "https://vitorlacerda.com/assets/images/projects/siga/hi-fi-1.png",
          dateCreated: "2023-04",
          applicationCategory: "BusinessApplication",
          keywords: ["dashboard agronegócio", "gestão estoques", "sistema agrário", "erp agronegócio", "icmc usp"]
        }
      }
    }
  }
};

/**
 * SEO Manager Class
 * Handles all SEO-related operations
 */
class SEOManager {
  constructor(pageKey) {
    this.pageKey = pageKey;
    this.pageConfig = SEO_CONFIG.pages[pageKey];
    this.siteConfig = SEO_CONFIG.site;
  }

  /**
   * Initialize SEO for the current page
   */
  init() {
    if (!this.pageConfig) {
      console.warn(`SEO config not found for page: ${this.pageKey}`);
      return;
    }

    this.updateTitle();
    this.updateMetaTags();
    this.updateOpenGraphTags();
    this.updateTwitterTags();
    this.updateCanonicalUrl();
    this.addSchemaMarkup();
  }

  /**
   * Update page title
   */
  updateTitle() {
    document.title = this.pageConfig.title;
  }

  /**
   * Update meta tags
   */
  updateMetaTags() {
    this.setMetaTag('name', 'description', this.pageConfig.description);
    this.setMetaTag('name', 'keywords', this.pageConfig.keywords);
    this.setMetaTag('name', 'author', this.siteConfig.author);
    this.setMetaTag('name', 'robots', 'index, follow');
  }

  /**
   * Update Open Graph tags
   */
  updateOpenGraphTags() {
    const ogTags = {
      'og:type': this.pageKey === 'home' ? 'website' : 'article',
      'og:url': `${this.siteConfig.url}${this.pageConfig.url}`,
      'og:title': this.pageConfig.title,
      'og:description': this.pageConfig.description,
      'og:image': this.pageConfig.image,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:site_name': this.siteConfig.name,
      'og:locale': this.siteConfig.locale
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      this.setMetaTag('property', property, content);
    });
  }

  /**
   * Update Twitter Card tags
   */
  updateTwitterTags() {
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:url': `${this.siteConfig.url}${this.pageConfig.url}`,
      'twitter:title': this.pageConfig.title,
      'twitter:description': this.pageConfig.description,
      'twitter:image': this.pageConfig.image
    };

    Object.entries(twitterTags).forEach(([property, content]) => {
      this.setMetaTag('property', property, content);
    });
  }

  /**
   * Update canonical URL
   */
  updateCanonicalUrl() {
    const canonicalUrl = `${this.siteConfig.url}${this.pageConfig.url}`;
    this.setLinkTag('canonical', canonicalUrl);
  }

  /**
   * Add Schema.org markup
   */
  addSchemaMarkup() {
    if (!this.pageConfig.schema) return;

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': this.pageConfig.schema.type,
      ...this.pageConfig.schema.data
    });

    document.head.appendChild(schemaScript);
  }

  /**
   * Set meta tag (create or update)
   */
  setMetaTag(attribute, name, content) {
    let metaTag = document.querySelector(`meta[${attribute}="${name}"]`);
    
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute(attribute, name);
      document.head.appendChild(metaTag);
    }
    
    metaTag.setAttribute('content', content);
  }

  /**
   * Set link tag (create or update)
   */
  setLinkTag(rel, href) {
    let linkTag = document.querySelector(`link[rel="${rel}"]`);
    
    if (!linkTag) {
      linkTag = document.createElement('link');
      linkTag.setAttribute('rel', rel);
      document.head.appendChild(linkTag);
    }
    
    linkTag.setAttribute('href', href);
  }
}

/**
 * Initialize SEO for a specific page
 * Usage: initSEO('home') or initSEO('urbverde')
 */
function initSEO(pageKey) {
  const seoManager = new SEOManager(pageKey);
  seoManager.init();
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SEO_CONFIG, SEOManager, initSEO };
}
