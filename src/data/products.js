import { categories } from './categories.js';

export const products = [
  {
    id: 'p1',
    nombre: 'promo estrellam premiun + toallitas húmedas',
    slug: 'pack-4-panales-huggies-natural-care',
    precio: 16800,
    precioAnterior: 17400,
    descuento: 10,
    categoriaIds: ['1', '1a', '4'],
    imagen: '/images/promo1.jpeg',
    variantes: [
      { id: 'v1-m', talle: 'M', cantidad: 272 },
      { id: 'v1-g', talle: 'G', cantidad: 240 },
      { id: 'v1-xg', talle: 'XG', cantidad: 208 },
    ],
    envíoGratis: true,
    marca: 'Huggies',
  },
  {
    id: 'p2',
    nombre: 'Promo pañales + higiene',
    slug: 'promo-panales-higiene',
    precio: 22900,
    precioAnterior: 25900,
    descuento: 12,
    categoriaIds: ['1', '2', '4'],
    imagen: '/images/promo2.jpeg',
    variantes: [
      { id: 'v2-m', talle: 'M', cantidad: 120 },
      { id: 'v2-g', talle: 'G', cantidad: 100 },
    ],
    envíoGratis: true,
    marca: 'Luna Lunera',
  },
  {
    id: 'p3',
    nombre: 'Combo bebé premium',
    slug: 'combo-bebe-premium',
    precio: 31500,
    precioAnterior: 35000,
    descuento: 10,
    categoriaIds: ['1', '2', '3', '4'],
    imagen: '/images/promo3.jpeg',
    variantes: [{ id: 'v3-unico', talle: 'Único', cantidad: 80 }],
    envíoGratis: true,
    marca: 'Luna Lunera',
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getProductsByCategoryId(categoryId) {
  return products.filter((p) => p.categoriaIds.includes(categoryId));
}

export function getProductsByCategorySlug(categorySlug) {
  const categoryIds = categories.filter((c) => c.slug === categorySlug).map((c) => c.id);
  if (categoryIds.length === 0) return [];
  return products.filter((p) => p.categoriaIds.some((cid) => categoryIds.includes(cid)));
}

export function searchProducts(query) {
  const q = (query || '').toLowerCase().trim();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.nombre.toLowerCase().includes(q) ||
      (p.marca && p.marca.toLowerCase().includes(q))
  );
}
