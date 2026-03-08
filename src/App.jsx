import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import './App.css';

// Lazy load de páginas (SPA: solo se carga la ruta al navegar)
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const CategoryPage = lazy(() => import('./pages/CategoryPage').then(m => ({ default: m.CategoryPage })));
const ProductPage = lazy(() => import('./pages/ProductPage').then(m => ({ default: m.ProductPage })));
const SearchPage = lazy(() => import('./pages/SearchPage').then(m => ({ default: m.SearchPage })));
const FaqPage = lazy(() => import('./pages/FaqPage').then(m => ({ default: m.FaqPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const ShippingPage = lazy(() => import('./pages/ShippingPage').then(m => ({ default: m.ShippingPage })));

function PageFallback() {
  return (
    <div className="app-loading" aria-live="polite">
      Cargando…
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="categoria/:slug" element={<CategoryPage />} />
            <Route path="producto/:slug" element={<ProductPage />} />
            <Route path="busqueda" element={<SearchPage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="contacto" element={<ContactPage />} />
            <Route path="envios" element={<ShippingPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
