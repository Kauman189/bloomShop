import type { CatalogSectionContent } from './data/catalog'

type CatalogSectionProps = CatalogSectionContent

export function CatalogSection({ heading, viewAll, cards }: CatalogSectionProps) {
  return (
    <section className="catalog-section py-5" id="catalog">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="catalog-title mb-0 text-uppercase">{heading}</h2>
          <a href={viewAll.href} className="catalog-view-all text-uppercase fw-semibold">
            {viewAll.label}
          </a>
        </div>

        <div className="catalog-divider mb-4" />

        <div className="row g-4">
          {cards.map((card) => (
            <div className="col-12 col-md-6" key={card.id}>
              <article className="catalog-card bg-body-tertiary rounded-4 p-5 h-100 d-flex flex-column justify-content-between">
                <div>
                  <h3 className="catalog-card__headline">{card.headline}</h3>
                  {card.description && <p className="text-body-secondary mt-3">{card.description}</p>}
                  {card.items && (
                    <ul className="catalog-card__list list-unstyled mt-3 mb-0">
                      {card.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {card.cta && (
                  <a href={card.cta.href} className="btn btn-outline-dark rounded-pill px-4 mt-4 align-self-start">
                    {card.cta.label}
                  </a>
                )}
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default CatalogSection