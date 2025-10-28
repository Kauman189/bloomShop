import type { HeroLanguage } from './hero'

export type PromotionItem = {
  id: string
  title: string
  subtitle: string
  price: string
  image: string
}

export type PromotionSectionContent = {
  heading: string
  viewAll: { label: string; href: string }
  items: PromotionItem[]
}

export const promotionMessages: Record<HeroLanguage, PromotionSectionContent> = {
  es: {
    heading: 'Promoción',
    viewAll: { label: 'Ver todo', href: '#promociones' },
    items: [
      {
        id: 'promo-1',
        title: 'Camisola de lá',
        subtitle: 'Basic Sweater',
        price: '$200',
        image: '',
      },
      {
        id: 'promo-2',
        title: 'Camisola de lá 2',
        subtitle: 'Basic Sweater',
        price: '$200',
        image: '',
      },
      {
        id: 'promo-3',
        title: 'Camisola de lá 3',
        subtitle: 'Basic Sweater',
        price: '$200',
        image: '',
      },
      {
        id: 'promo-4',
        title: 'Camisola de lá 4',
        subtitle: 'Basic Sweater',
        price: '$200',
        image: '',
      },
      {
        id: 'promo-5',
        title: 'Camisola de lá 5',
        subtitle: 'Basic Sweater',
        price: '$200',
        image: '',
      },
      {
        id: 'promo-6',
        title: 'Camisola de lá 6',
        subtitle: 'Basic Sweater',
        price: '$200',
        image: '',
      },
    ],
  },
  en: {
    heading: 'Promotion',
    viewAll: { label: 'Shop all', href: '#promotions' },
    items: [
      {
        id: 'promo-1',
        title: 'Wool sweater',
        subtitle: 'Basic Sweater 1',
        price: '$200',
        image: '',
      },
      {
        id: 'promo-2',
        title: 'Wool sweater',
        subtitle: 'Basic Sweater 2',
        price: '$200',
        image: '',
      },
      {
        id: 'promo-3',
        title: 'Wool sweater',
        subtitle: 'Basic Sweater 3',
        price: '$200',
        image: '',
      },
      {
        id: 'promo-4',
        title: 'Wool sweater',
        subtitle: 'Basic Sweater 4',
        price: '$200',
        image: '',
      },
      {
        id: 'promo-5',
        title: 'Wool sweater',
        subtitle: 'Basic Sweater 5',
        price: '$200',
        image: '',
      },
      {
        id: 'promo-6',
        title: 'Wool sweater',
        subtitle: 'Basic Sweater 6',
        price: '$200',
        image: '',
      },
    ],
  },
}
