export interface Category {
  id: string;
  name: string;
  count: number;
  imageUrl: string;
  href: string;
}

export const categories: Category[] = [
  {
    id: 'dress',
    name: 'Dress',
    count: 32,
    imageUrl: '/img/cat-dress.jpg',
    href: '#',
  },
  {
    id: 'outer',
    name: 'Outer & Kimono',
    count: 18,
    imageUrl: '/img/cat-outer.jpg',
    href: '#',
  },
  {
    id: 'shirt',
    name: 'Kemeja',
    count: 40,
    imageUrl: '/img/cat-shirt.jpg',
    href: '#',
  },
  {
    id: 'bottom',
    name: 'Bottom',
    count: 14,
    imageUrl: '/img/cat-bottom.jpg',
    href: '#',
  },
  {
    id: 'accessories',
    name: 'Aksesoris',
    count: 22,
    imageUrl: '/img/cat-accessories.jpg',
    href: '#',
  },
  {
    id: 'wedding',
    name: 'Wedding Series',
    count: 12,
    imageUrl: '/img/cat-wedding.jpg',
    href: '#',
  },
];
