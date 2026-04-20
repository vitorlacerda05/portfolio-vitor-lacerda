export const PROJECTS = [
  {
    id: 'urbverde',
    title: 'UrbVerde',
    image: {
      src: '/assets/images/homepage/projects/urbverde.png',
      alt: 'UrbVerde Dashboard'
    },
    cardBg: 'bg-blue',
    badges: ['UX Lead', 'Design Thinking', 'Co-founder'],
    description: 'Dashboard com dados sociais e ambientais urbanos que ganhou prêmios da Sociedade Brasileira de Computação e das Nações Unidas',
    date: 'set, 2024 - jun, 2025',
    seo: {
      title: 'UrbVerde - Dashboard Socioambiental | Vitor Lacerda',
      description: 'UrbVerde é uma plataforma digital que democratiza dados socioambientais urbanos. Projeto premiado pela SBC e ONU, desenvolvido por Vitor Lacerda como cofundador e UX Lead.',
      keywords: 'urbverde, dashboard socioambiental, dados urbanos, cobertura vegetal, temperatura, sig, sistema informação geográfica, vitor lacerda, ux design, ui design, portfolio ux, prêmio usp, projeto ux, case study ux, protótipo',
      ogType: 'article',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: 'UrbVerde',
        description: 'Plataforma digital que democratiza dados socioambientais urbanos para apoiar decisões públicas e empoderar a sociedade.',
        creator: { '@type': 'Person', name: 'Vitor Lacerda', jobTitle: 'Cofounder & UX Lead' },
        url: 'https://vitorlacerda.com/project/urbverde',
        image: 'https://vitorlacerda.com/assets/images/homepage/projects/urbverde.png',
        dateCreated: '2024-09',
        dateModified: '2025-06',
        award: [
          'Menção honrosa na Competição Nacional de Design pela Sociedade Brasileira de Computação',
          'Reconhecimento pela Conferência das Nações Unidas',
          'Prêmio USP de Impacto Social'
        ],
        keywords: ['dashboard socioambiental', 'dados urbanos', 'cobertura vegetal', 'sistema informação geográfica', 'gestão pública']
      }
    }
  },
  {
    id: 'policies',
    title: 'Painel políticas públicas',
    image: {
      src: '/assets/images/homepage/projects/policies.png',
      alt: 'Painel Políticas Públicas'
    },
    cardBg: 'bg-blue',
    badges: ['UX Lead', 'Inclusive Design', 'Double Diamond'],
    description: 'Construção de um painel para auxiliar a gestão pública dos municípios do ABC Paulista',
    date: 'jun, 2025 - ago, 2025',
    seo: {
      title: 'Painel Políticas Públicas | Vitor Lacerda',
      description: 'Painel de políticas públicas da UrbVerde para gestores municipais do ABC Paulista. Case study de UX Design por Vitor Lacerda.',
      keywords: 'painel políticas públicas, gestores municipais, abc paulista, urbverde, ux design, case study',
      ogType: 'article'
    }
  },
  {
    id: 'pacepro',
    title: 'PacePro',
    image: {
      src: '/assets/images/homepage/projects/pacepro_1.png',
      alt: 'PacePro'
    },
    cardBg: 'bg-blue',
    badges: ['Mobile first Design', 'UX Research'],
    description: 'Protótipo de aplicativo mobile gamificado para corredores',
    date: 'mai, 2023 - mai, 2023',
    seo: {
      title: 'PacePro - App Gamificado para Corredores | Vitor Lacerda',
      description: 'PacePro é um protótipo de app mobile gamificado para corredores. Desenvolvido por Vitor Lacerda usando Design Thinking. Case study UX/UI Design.',
      keywords: 'pacepro, app corrida, aplicativo corrida, gamificação, contador passos, vitor lacerda, ux design, ui design, portfolio ux, design thinking, protótipo mobile, case study ux, projeto ux, mobile ux',
      ogType: 'article',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'MobileApplication',
        name: 'PacePro',
        description: 'Protótipo de aplicativo mobile gamificado para corredores que combina contador de passos, monitoramento de desempenho e comunidade.',
        creator: { '@type': 'Person', name: 'Vitor Lacerda', jobTitle: 'UX/UI Designer' },
        url: 'https://vitorlacerda.com/project/pacepro',
        image: 'https://vitorlacerda.com/assets/images/homepage/projects/pacepro_1.png',
        dateCreated: '2023-05',
        applicationCategory: 'HealthApplication',
        keywords: ['app corrida', 'aplicativo corrida', 'gamificação', 'contador passos', 'fitness']
      }
    }
  },
  {
    id: 'siga',
    title: 'SIGa',
    image: {
      src: '/assets/images/homepage/projects/siga.png',
      alt: 'Projeto SIGa'
    },
    cardBg: 'bg-blue',
    badges: ['UX Dashboard', 'UX/UI Design'],
    description: 'Dashboard de gerenciamento de compras, vendas e estoques agrários',
    date: 'abr, 2023',
    seo: {
      title: 'SIGa - Dashboard Agrário | Vitor Lacerda',
      description: 'Dashboard de gerenciamento de compras, vendas e estoques agrários. Case study UI Design por Vitor Lacerda.',
      keywords: 'siga, dashboard agrário, ui design, erp, atomic design, vitor lacerda, portfolio ux',
      ogType: 'article'
    }
  }
]

export function findProject(id) {
  return PROJECTS.find(p => p.id === id)
}
