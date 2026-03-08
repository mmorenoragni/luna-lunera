import './FaqPage.css';

const faqs = [
  {
    q: '¿Cómo realizo una compra?',
    a: 'Elegí los productos, agregalos al carrito y en el checkout completá tus datos de envío. En esta versión demo el pedido se guarda solo en tu navegador.',
  },
  {
    q: '¿Qué medios de pago aceptan?',
    a: 'En la versión actual no hay pasarela de pago real. En un sitio en producción se integrarían tarjetas, transferencia, etc.',
  },
  {
    q: '¿Cómo se calcula el envío?',
    a: 'En el checkout ingresás tu código postal y se aplica una tabla de costos de ejemplo según zona (CABA, GBA, resto del país).',
  },
  {
    q: '¿Puedo cambiar o devolver un producto?',
    a: 'En esta demo no hay flujo de devoluciones. En un e-commerce real se definirían plazos y condiciones de cambio y devolución.',
  },
];

export function FaqPage() {
  return (
    <div className="faq-page">
      <h1>Preguntas frecuentes</h1>
      <ul className="faq-page__list">
        {faqs.map((item, i) => (
          <li key={i} className="faq-page__item">
            <h2 className="faq-page__q">{item.q}</h2>
            <p className="faq-page__a">{item.a}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
