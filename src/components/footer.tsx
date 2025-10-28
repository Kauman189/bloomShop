import type { FooterContent } from "./data/footer";

type FooterProps = FooterContent;

export function Footer({ about, services, contact, mapImage }: FooterProps) {
    return (
         <footer className="footer py-5" id="contact">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-4">
            <h3 className="footer__heading">{about.heading}</h3>
            <p className="footer__copy">{about.copy}</p>
            <a href={about.cta.href} className="btn footer__cta rounded-pill px-4">
              {about.cta.label}
            </a>
          </div>

          <div className="col-6 col-lg-3">
            <h4 className="footer__heading">{services.heading}</h4>
            <ul className="list-unstyled footer__list">
              {services.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <h4 className="footer__heading">{contact.heading}</h4>
            <ul className="list-unstyled footer__contact">
              <li>{contact.address}</li>
              <li>{contact.phone}</li>
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-lg-2">
            {mapImage && (
              <div className="footer__map">
                <img src={mapImage} alt="Wild Bloom Co. location" />
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
    )
}

export default Footer