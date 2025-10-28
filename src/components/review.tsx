import type { ReviewSectionContent } from "./data/review";
import { SectionHeader } from "./section-header";

type ReviewSectionProps = ReviewSectionContent;

export function ReviewSection({ heading, viewAll, items }: ReviewSectionProps) {
  return (
    <section className="review-section py-5" id="reviews">
      <div className="container">
        <SectionHeader
          title={heading}
          actionLabel={viewAll.label}
          actionHref={viewAll.href}
        />
        <div className="section-divider mb-4" />
        <div className="row g-4">
          {items.map((item) => (
            <div className="col-12 col-sm-4 col-lg-6" key={item.id}>
              <article className="review-card h-100 p-3 p-md-4">
                <div className="row g-3 g-md-4 align-items-center">
                  <div className="col-12 col-md-5">
                    <div className="review-card__image-wrapper">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={`Producto reseñado por ${item.customerName}`}
                        />
                      )}
                    </div>
                  </div>

                  <div className="col-12 col-md-7">
                    <header className="review-card__header d-flex justify-content-between align-items-start mb-2">
                      <h3 className="review-card__customer-name mb-0">
                        {item.customerName}
                      </h3>
                      <span className="review-card__date small text-muted">
                        {item.date}
                      </span>
                    </header>

                    <div className="review-card__rating mb-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span
                          key={index}
                          className={
                            index < item.rating ? "star star--filled" : "star"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    <p className="review-card__comment mb-3">{item.comment}</p>

                    {item.badges && (
                      <ul className="review-card__badges list-unstyled d-flex gap-3 mb-0">
                        {item.badges.map((badge) => (
                          <li
                            key={badge.label}
                            className="d-flex align-items-center gap-1"
                          >
                            <span
                              className={`review-badge__icon review-badge__icon--${badge.icon}`}
                            />
                            <span>{badge.label}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
