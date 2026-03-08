import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { CategoryNav } from './CategoryNav';
import './Header.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__help">
        <span className="header__help-label">Ayuda</span>
        <a href="tel:+5491112345678" className="header__help-phone">5491169952721</a>
      </div>
      <div className="header__top">
        <Link to="/" className="header__logo">
          Luna Lunera
        </Link>
        <div className="header__search">
          <SearchBar placeholder="¿Qué estás buscando?" />
        </div>
        <button
          type="button"
          className="header__menu-btn"
          aria-expanded={menuOpen}
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`header__nav ${menuOpen ? 'is-open' : ''}`}>
        <CategoryNav />
      </div>
    </header>
  );
}
