import { Link } from 'react-router-dom';
import { Price } from './Price';
import { Badge } from './Badge';
import './ProductCard.css';

export function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/producto/${product.slug}`} className="product-card__link">
        <div className="product-card__image-wrap">
          <img
            src={product.imagen}
            alt={product.nombre}
            className="product-card__image"
          />
          {product.descuento > 0 && (
            <Badge variant="discount" className="product-card__badge">
              {product.descuento}% OFF
            </Badge>
          )}
          {product.envíoGratis && (
            <Badge variant="free-shipping" className="product-card__badge-shipping">
              Envío gratis
            </Badge>
          )}
        </div>
        <h3 className="product-card__title">{product.nombre}</h3>
        <div className="product-card__price">
          <Price
            value={product.precio}
            previousValue={product.precioAnterior}
          />
        </div>
        <div className="product-card__action">
          <span className="product-card__btn">Ver</span>
        </div>
      </Link>
    </article>
  );
}
