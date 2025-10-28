import type { PromotionSectionContent } from './data/promotion'
import { SectionHeader } from './section-header'

type PromotionSectionProps = PromotionSectionContent

export function PromotionSection({ heading, viewAll, items }: PromotionSectionProps) {
  return (
    <section className="promotion-section py-5" id="promotions">
      <div className="container">
        <SectionHeader title={heading} actionLabel={viewAll.label} actionHref={viewAll.href} />
        <div className="section-divider mb-4" />
        <div className="row g-4">
          {items.map((item) => (
            <div className="col-12 col-sm-6 col-lg-4" key={item.id}>
              <article className="promotion-card h-100">
                <div className="promotion-card__image-wrapper">
                  {item.image && <img src={item.image} alt={item.title} />}
                </div>
                <div className="promotion-card__body">
                  <h3 className="promotion-card__headline">{item.title}</h3>
                  <p className="promotion-card__subtitle">{item.subtitle}</p>
                  <p className="promotion-card__price">{item.price}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PromotionSection