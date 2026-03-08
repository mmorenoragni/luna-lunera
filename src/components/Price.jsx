const formatARS = (n) =>
  new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(n);

import './Price.css';

export function Price({ value, previousValue, className = '' }) {
  return (
    <span className={className}>
      {previousValue != null && previousValue > value && (
        <span className="price-old" aria-hidden>
          {formatARS(previousValue)}
        </span>
      )}
      <span className="price-current">{formatARS(value)}</span>
    </span>
  );
}
