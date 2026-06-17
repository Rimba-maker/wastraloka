export type ProductCategory = 'Women' | 'Men' | 'Unisex';

export interface Product {
  id: string;
  name: string;
  motif: string;
  color: string;
  price: number;
  category: ProductCategory;
  badge?: 'New' | 'Best Seller';
  imageUrl: string;
}

// Unsplash images via picsum seeds — swap with direct Unsplash CDN URLs from PRD:
// https://images.unsplash.com/photo-{ID}?w=800&q=80&fit=crop&crop=entropy
export const newCollectionProducts: Product[] = [
  {
    id: 'rimba-wrap-dress',
    name: 'Rimba Wrap Dress',
    motif: 'Motif Daun',
    color: 'Earth Tone',
    price: 1200000,
    category: 'Women',
    badge: 'New',
    imageUrl: 'https://picsum.photos/seed/wastra-prod-1/800/1000',
  },
  {
    id: 'senja-kebaya-modern',
    name: 'Senja Kebaya Modern',
    motif: 'Motif Kawung',
    color: 'Indigo',
    price: 1500000,
    category: 'Women',
    badge: 'New',
    imageUrl: 'https://picsum.photos/seed/wastra-prod-2/800/1000',
  },
  {
    id: 'daun-outer-kimono',
    name: 'Daun Outer Kimono',
    motif: 'Motif Sekar Jagad',
    color: 'Sage',
    price: 950000,
    category: 'Women',
    badge: 'New',
    imageUrl: 'https://picsum.photos/seed/wastra-prod-3/800/1000',
  },
  {
    id: 'rimba-casual-shirt',
    name: 'Rimba Casual Shirt',
    motif: 'Motif Parang',
    color: 'Soga',
    price: 750000,
    category: 'Men',
    badge: 'New',
    imageUrl: 'https://picsum.photos/seed/wastra-prod-4/800/1000',
  },
  {
    id: 'senja-wide-pants',
    name: 'Senja Wide Pants',
    motif: 'Motif Truntum',
    color: 'Cream',
    price: 650000,
    category: 'Women',
    badge: 'New',
    imageUrl: 'https://picsum.photos/seed/wastra-prod-5/800/1000',
  },
];

export const bestSellerProducts: Product[] = [
  {
    id: 'wrap-dress-parang-soga',
    name: 'Wrap Dress Parang Soga',
    motif: 'Motif Parang',
    color: 'Soga Brown',
    price: 1100000,
    category: 'Women',
    badge: 'Best Seller',
    imageUrl: 'https://picsum.photos/seed/wastra-bs-1/800/1000',
  },
  {
    id: 'kemeja-mega-mendung',
    name: 'Kemeja Mega Mendung Pria',
    motif: 'Motif Mega Mendung',
    color: 'Indigo',
    price: 695000,
    category: 'Men',
    imageUrl: 'https://picsum.photos/seed/wastra-bs-2/800/1000',
  },
  {
    id: 'kebaya-kawung-indigo',
    name: 'Kebaya Kawung Indigo',
    motif: 'Motif Kawung',
    color: 'Indigo',
    price: 1350000,
    category: 'Women',
    badge: 'Best Seller',
    imageUrl: 'https://picsum.photos/seed/wastra-bs-3/800/1000',
  },
  {
    id: 'outer-kimono-truntum',
    name: 'Outer Kimono Truntum',
    motif: 'Motif Truntum',
    color: 'Earth',
    price: 895000,
    category: 'Unisex',
    imageUrl: 'https://picsum.photos/seed/wastra-bs-4/800/1000',
  },
  {
    id: 'sekar-jagad-wide-pants',
    name: 'Sekar Jagad Wide Pants',
    motif: 'Motif Sekar Jagad',
    color: 'Cream',
    price: 650000,
    category: 'Women',
    imageUrl: 'https://picsum.photos/seed/wastra-bs-5/800/1000',
  },
  {
    id: 'set-sido-mukti-wedding',
    name: 'Set Sido Mukti Wedding',
    motif: 'Motif Sido Mukti',
    color: 'Gold',
    price: 2400000,
    category: 'Unisex',
    badge: 'Best Seller',
    imageUrl: 'https://picsum.photos/seed/wastra-bs-6/800/1000',
  },
  {
    id: 'kemeja-parang-premium',
    name: 'Kemeja Parang Premium',
    motif: 'Batik Tulis · Premium',
    color: 'Soga',
    price: 985000,
    category: 'Men',
    imageUrl: 'https://picsum.photos/seed/wastra-bs-7/800/1000',
  },
  {
    id: 'crop-blouse-kawung',
    name: 'Crop Blouse Kawung',
    motif: 'Motif Kawung',
    color: 'Sage',
    price: 575000,
    category: 'Women',
    imageUrl: 'https://picsum.photos/seed/wastra-bs-8/800/1000',
  },
];

export function formatPrice(price: number): string {
  return `Rp ${price.toLocaleString('id-ID')}`;
}
