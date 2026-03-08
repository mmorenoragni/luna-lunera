import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CookieBanner.css';

const COOKIE_CONSENT_KEY = 'luna-lunera-cookies';

function getInitialVisible() {
  try {
    return !localStorage.getItem(COOKIE_CONSENT_KEY);
  } catch {
    return false;
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(getInitialVisible);

  const accept = () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
      setVisible(false);
    } catch {
      setVisible(false);
    }
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Uso de cookies">
      <p className="cookie-banner__text">
        Al navegar por este sitio aceptás el uso de cookies para agilizar tu experiencia de compra.{' '}
        <Link to="/faq" className="cookie-banner__link">Más información</Link>.
      </p>
      <button type="button" className="cookie-banner__btn" onClick={accept}>
        Entendido
      </button>
    </div>
  );
}
