import { categories } from './categories.js';

export const products = [
  {
    id: 'p1',
    nombre: 'Pack x4 Pañales Huggies Natural Care',
    slug: 'pack-4-panales-huggies-natural-care',
    precio: 100990,
    precioAnterior: 114760,
    descuento: 12,
    categoriaIds: ['1', '1a', '4'],
    imagen: 'https://images.unsplash.com/photo-1584305574647-0cc949a2d2e2?w=400',
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
    nombre: 'Pampers Pants Premium Care x2',
    slug: 'pampers-pants-premium-care-2',
    precio: 61325,
    precioAnterior: 72960,
    descuento: 16,
    categoriaIds: ['1', '1a', '4'],
    imagen: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=400',
    variantes: [
      { id: 'v2-g', talle: 'G', cantidad: 64 },
      { id: 'v2-xg', talle: 'XG', cantidad: 46 },
    ],
    envíoGratis: true,
    marca: 'Pampers',
  },
  {
    id: 'p3',
    nombre: 'Pack x4 Pañales Huggies Dermacare XG',
    slug: 'pack-4-panales-huggies-dermacare-xg',
    precio: 81280,
    precioAnterior: 95620,
    descuento: 15,
    categoriaIds: ['1', '1a', '4'],
    imagen: 'https://images.unsplash.com/photo-1584305574647-0cc949a2d2e2?w=400',
    variantes: [{ id: 'v3-xg', talle: 'Extra Grande', cantidad: 152 }],
    envíoGratis: true,
    marca: 'Huggies',
  },
  {
    id: 'p4',
    nombre: 'Toallitas húmedas Huggies x48',
    slug: 'toallitas-humedas-huggies-48',
    precio: 28690,
    precioAnterior: null,
    descuento: 0,
    categoriaIds: ['2', '2a'],
    imagen: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400',
    variantes: [],
    envíoGratis: true,
    marca: 'Huggies',
  },
  {
    id: 'p5',
    nombre: 'Mochila Escolar Frozen 12"',
    slug: 'mochila-escolar-frozen-12',
    precio: 19599,
    precioAnterior: 23070,
    descuento: 15,
    categoriaIds: ['4'],
    imagen: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    variantes: [
      { id: 'v5-rosa', talle: 'Rosa', cantidad: 1 },
      { id: 'v5-verde', talle: 'Verde', cantidad: 1 },
    ],
    envíoGratis: true,
    marca: 'Wabro',
  },
  {
    id: 'p6',
    nombre: 'Botella Infantil Bluey 575ml',
    slug: 'botella-infantil-bluey-575ml',
    precio: 13999,
    precioAnterior: 17515,
    descuento: 20,
    categoriaIds: ['4'],
    imagen: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400',
    variantes: [],
    envíoGratis: true,
    marca: 'Wabro',
  },
  {
    id: 'p7',
    nombre: 'Mamadera anticólico 260ml',
    slug: 'mamadera-anticolico-260ml',
    precio: 12500,
    precioAnterior: null,
    descuento: 0,
    categoriaIds: ['3', '3a'],
    imagen: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=400',
    variantes: [
      { id: 'v7-azul', talle: 'Azul', cantidad: 1 },
      { id: 'v7-rosa', talle: 'Rosa', cantidad: 1 },
    ],
    envíoGratis: false,
    marca: 'Genérica',
  },
  {
    id: 'p8',
    nombre: 'Chupete ortodóntico 0-6 meses',
    slug: 'chupete-ortodontico-0-6',
    precio: 4500,
    precioAnterior: null,
    descuento: 0,
    categoriaIds: ['3', '3b'],
    imagen: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400',
    variantes: [],
    envíoGratis: false,
    marca: 'Genérica',
  },
  {
    id: 'p9',
    nombre: 'Shampoo bebé sin lágrimas 400ml',
    slug: 'shampoo-bebe-sin-lagrimas-400ml',
    precio: 8900,
    precioAnterior: null,
    descuento: 0,
    categoriaIds: ['2', '2b'],
    imagen: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400',
    variantes: [],
    envíoGratis: false,
    marca: 'Johnson\'s',
  },
  {
    id: 'p10',
    nombre: 'Pack Pañales Estrella x4',
    slug: 'pack-panales-estrella-4',
    precio: 45000,
    precioAnterior: 52000,
    descuento: 13,
    categoriaIds: ['1', '1a'],
    imagen: 'https://images.unsplash.com/photo-1584305574647-0cc949a2d2e2?w=400',
    variantes: [
      { id: 'v10-m', talle: 'M', cantidad: 100 },
      { id: 'v10-g', talle: 'G', cantidad: 100 },
    ],
    envíoGratis: true,
    marca: 'Estrella',
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
