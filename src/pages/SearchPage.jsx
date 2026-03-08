import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { searchProducts } from '../data/products';
import './SearchPage.css';

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q') ?? '';
  const results = searchProducts(q);

  return (
    <div className="search-page">
      <h1 className="search-page__title">
        {q ? `Resultados para "${q}"` : 'Buscar productos'}
      </h1>
      {q && results.length === 0 ? (
        <p className="search-page__empty">No encontramos productos para tu búsqueda.</p>
      ) : (
        <div className="search-page__grid">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
