export type CatalogCard = {
  id: string
  headline: string
  description?: string
  items?: string[]
  cta?: { label: string; href: string }
}

export type CatalogSectionContent = {
  heading: string
  viewAll: { label: string; href: string }
  cards: CatalogCard[]
}

import type { HeroLanguage } from './hero'

export const catalogMessages: Record<HeroLanguage, CatalogSectionContent> = {
  es: {
    heading: 'Catálogo',
    viewAll: { label: 'Ver todo', href: '#catalogo' },
    cards: [
      {
        id: 'new-arrivals-es',
        headline: 'Nueva Colección',
        cta: { label: 'Shop Now', href: '#new-arrivals' },
      },
      {
        id: 'categories',
        headline: 'Ver todo',
        items: ['Nuevas', 'Primavera', 'En oferta', 'Más populares'],
      },
    ],
  },
  en: {
    heading: 'Catalog', 
    viewAll: { label: 'Shop all', href: '#catalog' },
    cards: [
      {
        id: 'new-arrivals-en',
        headline: 'New Arrivals',
        cta: { label: 'Shop Now', href: '#new-arrivals' },
      },
      {
        id: 'categories',
        headline: 'All clothes',
        items: ['New', 'Spring', 'On sale', 'Most Popular'],
      },
    ],
  },
}
