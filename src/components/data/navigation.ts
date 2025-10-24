import type { HeroLanguage } from './hero'

export type NavLink = {
  label: string
  href: string
}

export const navMessages: Record<HeroLanguage, NavLink[]> = {
  es: [
    { label: 'Inicio', href: '#' },
    { label: 'Tienda', href: '#catalogo' },
    { label: 'Nuestros Valores', href: '#values' },
    { label: 'Contacto', href: '#contact' },
  ],
  en: [
    { label: 'Home', href: '#' },
    { label: 'Shop', href: '#catalog' },
    { label: 'Our Values', href: '#values' },
    { label: 'Contact Us', href: '#contact' },
  ],
}
