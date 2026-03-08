import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import './SearchBar.css';

export function SearchBar({ placeholder = 'Buscar...', className = '' }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (q) navigate(`/busqueda?q=${encodeURIComponent(q)}`);
  };

  return (
    <form
      role="search"
      className={`search-bar ${className}`.trim()}
      onSubmit={handleSubmit}
    >
      <label htmlFor="search-input" className="visually-hidden">
        Buscar productos
      </label>
      <input
        id="search-input"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="search-bar__input"
        autoComplete="off"
      />
      <button type="submit" className="search-bar__btn" aria-label="Buscar">
        <Search size={18} />
        <span>Buscar</span>
      </button>
    </form>
  );
}
