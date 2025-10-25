import { useState } from 'react'
import { HeroSection } from './components/hero-section'
import { CatalogSection } from './components/catalog'
import { navMessages } from './components/data/navigation'
import { heroMessages, defaultHeroLanguage } from './components/data/hero'
import { catalogMessages } from './components/data/catalog'
import type { HeroLanguage } from './components/data/hero'

function App() {
  const [language, setLanguage] = useState<HeroLanguage>(defaultHeroLanguage)
  const heroContent = heroMessages[language]
  const navigationLinks = navMessages[language]
  const catalogContent = catalogMessages[language]

  return (
    <>
      <HeroSection
        links={navigationLinks}
        language={language}
        onLanguageChange={setLanguage}
        {...heroContent}
        onSearch={(value) => console.log(`Searching ${value} in ${language.toUpperCase()}`)}
      />
      <CatalogSection {...catalogContent} />
      {/* Promotion */}
      {/* Reviews */}
      {/* Footer */}
    </>
  )
}

export default App
