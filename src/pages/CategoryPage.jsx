import { useParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { getCategoryBySlug } from '../data/categories';
import { getProductsByCategorySlug } from '../data/products';
import './CategoryPage.css';

export function CategoryPage() {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);
  const productsList = slug ? getProductsByCategorySlug(slug) : [];

  if (!category) {
    return (
      <div className="category-page">
        <p>Categoría no encontrada.</p>
      </div>
    );
  }

  return (
    <div className="category-page">
      <h1 className="category-page__title">{category.nombre}</h1>
      {productsList.length === 0 ? (
        <p className="category-page__empty">No hay productos en esta categoría.</p>
      ) : (
        <div className="category-page__grid">
          {productsList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
