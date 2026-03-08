import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductVariants } from '../components/ProductVariants';
import { Price } from '../components/Price';
import { Badge } from '../components/Badge';
import { getProductBySlug } from '../data/products';
import './ProductPage.css';

export function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const [selectedVarianteId, setSelectedVarianteId] = useState(
    product?.variantes?.[0]?.id ?? null
  );

  if (!product) {
    return (
      <div className="product-page">
        <p>Producto no encontrado.</p>
      </div>
    );
  }

  return (
    <div className="product-page">
      <div className="product-page__grid">
        <div className="product-page__gallery">
          <img
            src={product.imagen}
            alt={product.nombre}
            className="product-page__image"
          />
          <div className="product-page__badges">
            {product.descuento > 0 && (
              <Badge variant="discount">{product.descuento}% OFF</Badge>
            )}
            {product.envíoGratis && (
              <Badge variant="free-shipping">Envío gratis</Badge>
            )}
          </div>
        </div>
        <div className="product-page__info">
          <h1 className="product-page__title">{product.nombre}</h1>
          {product.marca && (
            <p className="product-page__marca">Marca: {product.marca}</p>
          )}
          <div className="product-page__price">
            <Price value={product.precio} previousValue={product.precioAnterior} />
          </div>
          <ProductVariants
            variantes={product.variantes}
            selectedId={selectedVarianteId}
            onSelect={setSelectedVarianteId}
          />
        </div>
      </div>
    </div>
  );
}
