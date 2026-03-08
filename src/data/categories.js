export const categories = [
  { id: '1', nombre: 'Pañales', slug: 'panales', parentId: null, orden: 1 },
  { id: '2', nombre: 'Higiene y perfumería', slug: 'higiene-perfumeria', parentId: null, orden: 2 },
  { id: '3', nombre: 'Alimentación y lactancia', slug: 'alimentacion-lactancia', parentId: null, orden: 3 },
  { id: '4', nombre: 'Ofertas', slug: 'ofertas', parentId: null, orden: 0 },
  { id: '1a', nombre: 'Pañales bebés', slug: 'panales-bebes', parentId: '1', orden: 1 },
  { id: '1b', nombre: 'Pañales adulto', slug: 'panales-adulto', parentId: '1', orden: 2 },
  { id: '2a', nombre: 'Toallitas húmedas', slug: 'toallitas-humedas', parentId: '2', orden: 1 },
  { id: '2b', nombre: 'Shampoos y acondicionadores', slug: 'shampoos', parentId: '2', orden: 2 },
  { id: '3a', nombre: 'Mamaderas', slug: 'mamaderas', parentId: '3', orden: 1 },
  { id: '3b', nombre: 'Chupetes', slug: 'chupetes', parentId: '3', orden: 2 },
];

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug);
}

export function getCategoriesByParent(parentId) {
  return categories.filter((c) => c.parentId === parentId).sort((a, b) => a.orden - b.orden);
}

export function getRootCategories() {
  return getCategoriesByParent(null);
}
