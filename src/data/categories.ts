export interface Category {
  id: string;
  name: string;
  count: number;
  // Swap imageUrl with photos from PRD: https://unsplash.com/s/photos/asian-dress-elegant etc.
  imageUrl: string;
  href: string;
}

export const categories: Category[] = [
  {
    id: 'dress',
    name: 'Dress',
    count: 32,
    imageUrl: 'https://picsum.photos/seed/wastra-cat-dress/600/400',
    href: '#',
  },
  {
    id: 'outer',
    name: 'Outer & Kimono',
    count: 18,
    imageUrl: 'https://picsum.photos/seed/wastra-cat-outer/600/400',
    href: '#',
  },
  {
    id: 'shirt',
    name: 'Kemeja',
    count: 40,
    imageUrl: 'https://picsum.photos/seed/wastra-cat-shirt/600/400',
    href: '#',
  },
  {
    id: 'bottom',
    name: 'Bottom',
    count: 14,
    imageUrl: 'https://picsum.photos/seed/wastra-cat-bottom/600/400',
    href: '#',
  },
  {
    id: 'accessories',
    name: 'Aksesoris',
    count: 22,
    imageUrl: 'https://picsum.photos/seed/wastra-cat-accessories/600/400',
    href: '#',
  },
  {
    id: 'wedding',
    name: 'Wedding Series',
    count: 12,
    imageUrl: 'https://picsum.photos/seed/wastra-cat-wedding/600/400',
    href: '#',
  },
];
