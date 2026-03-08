import { Link } from 'react-router-dom';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <section className="footer__section">
          <h3 className="footer__title">Ayuda</h3>
          <ul className="footer__links">
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/envios">Envíos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </section>
        <section className="footer__section">
          <h3 className="footer__title">Productos</h3>
          <ul className="footer__links">
            <li><Link to="/categoria/ofertas">Ofertas</Link></li>
            <li><Link to="/categoria/panales">Pañales</Link></li>
            <li><Link to="/categoria/higiene-perfumeria">Higiene</Link></li>
            <li><Link to="/categoria/alimentacion-lactancia">Alimentación</Link></li>
          </ul>
        </section>
        <section className="footer__section">
          <h3 className="footer__title">Contacto</h3>
          <ul className="footer__contact">
            <li><a href="tel:+5491112345678">+54 9 11 1234-5678</a></li>
            <li><a href="mailto:info@lunalunera.com">info@lunalunera.com</a></li>
            <li>Av. Ejemplo 1234, CABA</li>
          </ul>
        </section>
        <section className="footer__section footer__newsletter">
          <h3 className="footer__title">Newsletter</h3>
          <p className="footer__newsletter-text">
            Consejos y ofertas en tu correo.
          </p>
          <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="footer-email" className="visually-hidden">Email</label>
            <input
              id="footer-email"
              type="email"
              placeholder="tu@email.com"
              className="footer__newsletter-input"
            />
            <button type="submit" className="footer__newsletter-btn">Suscribirme</button>
          </form>
        </section>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Luna Lunera. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
