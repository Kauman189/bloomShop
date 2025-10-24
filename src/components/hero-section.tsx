import { useState } from 'react'
import type { FormEvent } from 'react'
import type { HeroContent, HeroLanguage } from './data/hero'
import type { NavLink } from './data/navigation'

type HeroSectionProps = HeroContent & {
  links: NavLink[]
  language: HeroLanguage
  onLanguageChange?: (language: HeroLanguage) => void
  onSearch?: (value: string) => void
}

export function HeroSection({
  links,
  title,
  tagline,
  searchPlaceholder,
  searchLabel,
  language,
  onLanguageChange,
  onSearch,
}: HeroSectionProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch?.(query)
  }

  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="hero-surface bg-body-tertiary rounded-4 px-4 px-md-5 py-5">
          <div className="d-flex justify-content-end">
            <div className="hero-language" role="group" aria-label="Language toggle">
              <button
                type="button"
                className={`btn btn-sm hero-language__button ${language === 'es' ? 'is-active' : ''}`}
                onClick={() => onLanguageChange?.('es')}
              >
                ES
              </button>
              <button
                type="button"
                className={`btn btn-sm hero-language__button ${language === 'en' ? 'is-active' : ''}`}
                onClick={() => onLanguageChange?.('en')}
              >
                EN
              </button>
            </div>
          </div>

          <div className="text-center mt-4 mt-lg-5">
            <h1 className="hero-title display-3 fw-semibold">{title}</h1>
            <p className="hero-tagline fs-5 text-body-secondary mt-3 mb-4 mb-lg-5">{tagline}</p>
          </div>

          <nav aria-label="Main navigation" className="hero-nav mt-4">
            <ul className="nav justify-content-center gap-3 gap-lg-4 text-uppercase fw-medium">
              {links.map((link) => (
                <li className="nav-item" key={link.label}>
                  <a className="nav-link px-0 text-body" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <form
            onSubmit={handleSubmit}
            className="hero-search mx-auto mt-3"
            role="search"
            aria-label={searchLabel}
          >
            <label htmlFor="query" className="visually-hidden">
              {searchLabel}
            </label>
            <div className="input-group input-group-lg hero-search-group">
              <input
                id="query"
                name="query"
                type="search"
                className="form-control ps-4"
                placeholder={searchPlaceholder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <button
                type="submit"
                className="btn btn-dark px-4 d-flex align-items-center justify-content-center"
                aria-label={searchLabel}
              >
                🔍
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
