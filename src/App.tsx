import { useState } from 'react'
import { HeroSection } from './components/hero-section'
import { navMessages } from './components/data/navigation'
import { heroMessages, defaultHeroLanguage } from './components/data/hero'
import type { HeroLanguage } from './components/data/hero'
import './App.css'

function App() {
  const [language, setLanguage] = useState<HeroLanguage>(defaultHeroLanguage)
  const heroContent = heroMessages[language]
  const navigationLinks = navMessages[language]

  return (
    <>
      <HeroSection
        links={navigationLinks}
        language={language}
        onLanguageChange={setLanguage}
        {...heroContent}
        onSearch={(value) => console.log(`Searching ${value} in ${language.toUpperCase()}`)}
      />
      {/* Catalog */}
      {/* Promotion */}
      {/* Reviews */}
      {/* Footer */}
    </>
  )
}

export default App
