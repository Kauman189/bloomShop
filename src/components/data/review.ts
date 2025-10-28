import type { HeroLanguage } from './hero'

export type ReviewItem = {
  id: string
  customerName: string
  rating: number
  date: string
  comment: string
  productPrice: string
  image: string
  badges?: { icon: 'comment' | 'favorite'; label: string }[]
}


export type ReviewSectionContent = {
  heading: string
  viewAll: { label: string; href: string }
  items: ReviewItem[]
}

export const reviewMessages: Record<HeroLanguage, ReviewSectionContent> = {
    es: {
        heading: 'Reseñas',
        viewAll: { label: '', href: '' },
        items: [
            {
                id: 'review-1',
                customerName: 'Juan Pérez',
                rating: 5,
                date: '2024-01-15',
                comment: 'Excelente calidad y muy cómodo.',
                productPrice: '$150',
                image: '',
                badges: [{ icon: 'favorite', label: 'Top Reviewer' }],
            },
            {
                id: 'review-2',
                customerName: 'María Gómez',
                rating: 4,
                date: '2024-02-10',
                comment: 'Me gustó mucho, pero el envío fue un poco lento.',
                productPrice: '$200',
                image: '',
            },
        ],
    },
    en: {
        heading: 'Reviews',
        viewAll: { label: '', href: '' },
        items: [
            {
                id: 'review-1',
                customerName: 'John Smith',
                rating: 5,
                date: '2024-01-15',
                comment: 'Excellent quality and very comfortable.',
                productPrice: '$150',
                image: '',
                badges: [{ icon: 'favorite', label: 'Top Reviewer' }],
            },
            {
                id: 'review-2',
                customerName: 'Jane Doe',
                rating: 4,
                date: '2024-02-10',
                comment: 'I really liked it, but the shipping was a bit slow.',
                productPrice: '$200',
                image: '',
            },
        ],
    },
}