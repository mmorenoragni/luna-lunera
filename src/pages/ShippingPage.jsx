import './ShippingPage.css';

export function ShippingPage() {
  return (
    <div className="shipping-page">
      <h1>Envíos</h1>
      <div className="shipping-page__content">
        <p>
          En esta versión demo el costo de envío se calcula de forma simulada según tu código postal en el checkout.
        </p>
        <h2>Zonas de ejemplo</h2>
        <ul>
          <li>CP 1000–1499: $3.500</li>
          <li>CP 1500–1999: $4.000</li>
          <li>Resto del país: $5.000</li>
        </ul>
        <p>
          En un sitio real se integraría con OCA, Correo Argentino u otro proveedor para cotizar en tiempo real.
        </p>
      </div>
    </div>
  );
}
