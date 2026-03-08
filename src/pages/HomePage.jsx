import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { getRootCategories } from '../data/categories';
import './HomePage.css';

export function HomePage() {
  const ofertas = products.filter((p) => p.categoriaIds.includes('4')).slice(0, 6);
  const roots = getRootCategories().filter((c) => c.slug !== 'ofertas').slice(0, 4);

  return (
    <div className="home">
      <section className="home__hero">
        <h1 className="home__hero-title">Todo para tu bebé</h1>
        <p className="home__hero-subtitle">
          Pañales, higiene, alimentación y más al mejor precio.
        </p>
      </section>

      <section className="home__section">
        <h2 className="home__section-title">Ofertas del Mes</h2>
        <div className="home__grid">
          {ofertas.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="home__section-footer">
          <Link to="/categoria/ofertas" className="home__link">
            Ver todas las ofertas
          </Link>
        </div>
      </section>

      <section className="home__section">
        <h2 className="home__section-title">Comprar por categoría</h2>
        <div className="home__categories">
          {roots.map((cat) => (
            <Link
              key={cat.id}
              to={`/categoria/${cat.slug}`}
              className="home__category-card"
            >
              <span className="home__category-name">{cat.nombre}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home__section">
        <h2 className="home__section-title">Productos destacados</h2>
        <div className="home__grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
