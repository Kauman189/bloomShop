export type FooterContent = {
  about: { heading: string; copy: string; cta: { label: string; href: string } }
  services: { heading: string; links: { label: string; href: string }[] }
  contact: { heading: string; address: string; phone: string; email: string }
  mapImage?: string
}

import type { HeroLanguage } from './hero'

export const footerMessages: Record<HeroLanguage, FooterContent> = {
  es: {
    about: {
      heading: 'Sobre nosotros',
      copy: 'Wild Bloom Co. es una marca de moda sostenible que se preocupa por el medio ambiente y los derechos de los animales.',
      cta: { label: 'Aprende más', href: '/about' }
    },
    services: {
      heading: 'Nuestros servicios',
      links: [
        { label: 'Consultoría de moda', href: '/services/fashion-consulting' },
        { label: 'Personal Shopper', href: '/services/personal-shopper' }
      ]
    },
    contact: {
      heading: 'Contáctanos',
      address: 'Calle Falsa 123, Ciudad, País',
      phone: '+34 123 456 789',
      email: 'info@wildbloomco.com'
    },
    mapImage: '/images/map-es.png'
  },
  en: {
    about: {
      heading: 'About Us',
      copy: 'Wild Bloom Co. is a sustainable fashion brand that cares about the environment and animal rights.',
      cta: { label: 'Learn More', href: '/about' }
    },
    services: {
      heading: 'Our Services',
      links: [
        { label: 'Fashion Consulting', href: '/services/fashion-consulting' },
        { label: 'Personal Shopper', href: '/services/personal-shopper' }
      ]
    },
    contact: {
      heading: 'Contact Us',
      address: '123 Fake Street, City, Country',
      phone: '+1 234 567 890',
      email: 'info@wildbloomco.com'
    },
    mapImage: '/images/map-en.png'
  },
}