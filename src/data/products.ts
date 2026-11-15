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
export const newCollectionProducts: Product[] = [
  {
    id: 'rimba-wrap-dress',
    name: 'Rimba Wrap Dress',
    motif: 'Motif Daun',
    color: 'Earth Tone',
    price: 1200000,
    category: 'Women',
    badge: 'New',
    imageUrl: '/img/new-rimba-wrap.jpg',
  },
  {
    id: 'senja-kebaya-modern',
    name: 'Senja Kebaya Modern',
    motif: 'Motif Kawung',
    color: 'Indigo',
    price: 1500000,
    category: 'Women',
    badge: 'New',
    imageUrl: '/img/new-senja-kebaya.jpg',
  },
  {
    id: 'daun-outer-kimono',
    name: 'Daun Outer Kimono',
    motif: 'Motif Sekar Jagad',
    color: 'Sage',
    price: 950000,
    category: 'Women',
    badge: 'New',
    imageUrl: '/img/new-daun-outer.jpg',
  },
  {
    id: 'rimba-casual-shirt',
    name: 'Rimba Casual Shirt',
    motif: 'Motif Parang',
    color: 'Soga',
    price: 750000,
    category: 'Men',
    badge: 'New',
    imageUrl: '/img/new-rimba-shirt.jpg',
  },
  {
    id: 'senja-wide-pants',
    name: 'Senja Wide Pants',
    motif: 'Motif Truntum',
    color: 'Cream',
    price: 650000,
    category: 'Women',
    badge: 'New',
    imageUrl: '/img/new-senja-pants.jpg',
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
    imageUrl: '/img/bs-wrap-parang.jpg',
  },
  {
    id: 'kemeja-mega-mendung',
    name: 'Kemeja Mega Mendung Pria',
    motif: 'Motif Mega Mendung',
    color: 'Indigo',
    price: 695000,
    category: 'Men',
    imageUrl: '/img/bs-mega-mendung.jpg',
  },
  {
    id: 'kebaya-kawung-indigo',
    name: 'Kebaya Kawung Indigo',
    motif: 'Motif Kawung',
    color: 'Indigo',
    price: 1350000,
    category: 'Women',
    badge: 'Best Seller',
    imageUrl: '/img/bs-kebaya-kawung.jpg',
  },
  {
    id: 'outer-kimono-truntum',
    name: 'Outer Kimono Truntum',
    motif: 'Motif Truntum',
    color: 'Earth',
    price: 895000,
    category: 'Unisex',
    imageUrl: '/img/bs-outer-truntum.jpg',
  },
  {
    id: 'sekar-jagad-wide-pants',
    name: 'Sekar Jagad Wide Pants',
    motif: 'Motif Sekar Jagad',
    color: 'Cream',
    price: 650000,
    category: 'Women',
    imageUrl: '/img/bs-sekar-pants.jpg',
  },
  {
    id: 'set-sido-mukti-wedding',
    name: 'Set Sido Mukti Wedding',
    motif: 'Motif Sido Mukti',
    color: 'Gold',
    price: 2400000,
    category: 'Unisex',
    badge: 'Best Seller',
    imageUrl: '/img/bs-sido-mukti.jpg',
  },
  {
    id: 'kemeja-parang-premium',
    name: 'Kemeja Parang Premium',
    motif: 'Batik Tulis, Premium',
    color: 'Soga',
    price: 985000,
    category: 'Men',
    imageUrl: '/img/bs-kemeja-parang.jpg',
  },
  {
    id: 'crop-blouse-kawung',
    name: 'Crop Blouse Kawung',
    motif: 'Motif Kawung',
    color: 'Sage',
    price: 575000,
    category: 'Women',
    imageUrl: '/img/bs-crop-kawung.jpg',
  },
];

export function formatPrice(price: number): string {
  return `Rp ${price.toLocaleString('id-ID')}`;
}
