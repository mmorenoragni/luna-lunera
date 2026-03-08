import './ContactPage.css';

export function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Contacto</h1>
      <div className="contact-page__content">
        <section className="contact-page__section">
          <h2>Datos de contacto</h2>
          <ul>
            <li><strong>Teléfono:</strong> +54 9 11 1234-5678</li>
            <li><strong>Email:</strong> info@lunalunera.com</li>
            <li><strong>Dirección:</strong> Av. Ejemplo 1234, CABA</li>
          </ul>
        </section>
        <section className="contact-page__section">
          <h2>Horarios</h2>
          <p>Lunes a Viernes: 9 a 18 hs. Sábados: 9 a 13 hs.</p>
        </section>
      </div>
    </div>
  );
}
