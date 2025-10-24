export type HeroContent = {
  title: string
  tagline: string
  searchPlaceholder: string
  searchLabel: string
}

export type HeroLanguage = 'es' | 'en'

export const defaultHeroLanguage: HeroLanguage = 'es'

export const heroMessages: Record<HeroLanguage, HeroContent> = {
  es: {
    title: 'Wild Bloom Co.',
    tagline: 'Viste con propósito. Sin crueldad, sin compromisos.',
    searchPlaceholder: 'Buscar',
    searchLabel: 'Buscar productos',
  },
  en: {
    title: 'Wild Bloom Co.',
    tagline: 'Dress with purpose. Cruelty-free, no compromises.',
    searchPlaceholder: 'Search',
    searchLabel: 'Search products',
  },
}
