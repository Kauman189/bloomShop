import { useState } from 'react'
import { HeroSection } from './components/hero-section'
import { CatalogSection } from './components/catalog-main'
import { PromotionSection } from './components/promotion'
import { navMessages } from './components/data/navigation'
import { heroMessages, defaultHeroLanguage } from './components/data/hero'
import { catalogMessages } from './components/data/catalog'
import { promotionMessages } from './components/data/promotion'
import type { HeroLanguage } from './components/data/hero'
import ReviewSection from './components/review'
import { reviewMessages } from './components/data/review'

function App() {
  const [language, setLanguage] = useState<HeroLanguage>(defaultHeroLanguage)
  const heroContent = heroMessages[language]
  const navigationLinks = navMessages[language]
  const catalogContent = catalogMessages[language]
  const promotionContent = promotionMessages[language]
  const reviewContent = reviewMessages[language]

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
      <PromotionSection {...promotionContent} />
      {/* Reviews */}
      <ReviewSection {...reviewContent} />
      {/* Footer */}
    </>
  )
}

export default App
