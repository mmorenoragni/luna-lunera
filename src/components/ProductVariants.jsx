import { useState } from 'react';
import './ProductVariants.css';

export function ProductVariants({ variantes, selectedId, onSelect }) {
  const [current, setCurrent] = useState(selectedId ?? (variantes[0]?.id ?? null));

  const handleSelect = (id) => {
    setCurrent(id);
    onSelect?.(id);
  };

  if (!variantes || variantes.length === 0) return null;

  return (
    <div className="product-variants">
      <span className="product-variants__label">Elegir variante:</span>
      <div className="product-variants__options" role="group">
        {variantes.map((v) => (
          <button
            key={v.id}
            type="button"
            className={`product-variants__option ${(selectedId ?? current) === v.id ? 'is-selected' : ''}`}
            onClick={() => handleSelect(v.id)}
          >
            {v.talle}
            {v.cantidad != null && v.cantidad > 1 && (
              <span className="product-variants__qty"> x{v.cantidad} un</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
