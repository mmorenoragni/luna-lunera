import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getRootCategories, getCategoriesByParent } from '../data/categories';
import { ChevronDown } from 'lucide-react';
import './CategoryNav.css';

export function CategoryNav() {
  const [openId, setOpenId] = useState(null);
  const roots = getRootCategories();

  return (
    <nav className="category-nav" aria-label="Categorías">
      <ul className="category-nav__list">
        {roots.map((cat) => {
          const children = getCategoriesByParent(cat.id);
          const hasChildren = children.length > 0;
          const isOpen = openId === cat.id;

          return (
            <li
              key={cat.id}
              className="category-nav__item"
              onMouseEnter={() => hasChildren && setOpenId(cat.id)}
              onMouseLeave={() => setOpenId(null)}
            >
              <Link
                to={`/categoria/${cat.slug}`}
                className="category-nav__link"
              >
                {cat.nombre}
                {hasChildren && (
                  <ChevronDown
                    size={16}
                    className={`category-nav__chevron ${isOpen ? 'is-open' : ''}`}
                  />
                )}
              </Link>
              {hasChildren && (
                <ul
                  className={`category-nav__sub ${isOpen ? 'is-open' : ''}`}
                  role="menu"
                >
                  {children.map((sub) => (
                    <li key={sub.id} role="none">
                      <Link
                        to={`/categoria/${sub.slug}`}
                        className="category-nav__sublink"
                        role="menuitem"
                      >
                        {sub.nombre}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
