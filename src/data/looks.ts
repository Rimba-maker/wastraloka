export function formatPrice(price: number): string {
  return `Rp ${price.toLocaleString('id-ID')}`;
}

export interface LookItem {
  name: string;
  price: number;
}

export interface Look {
  id: string;
  title: string;
  occasion: string;
  description: string;
  items: LookItem[];
  // Swap imageUrl with photos from PRD: https://unsplash.com/s/photos/asian-business-woman-batik etc.
  imageUrl: string;
}

export const looks: Look[] = [
  {
    id: 'office-power',
    title: 'Office Power',
    occasion: 'Kerja & Meeting',
    description: 'Tampil profesional dengan sentuhan budaya yang kuat.',
    items: [
      { name: 'Kemeja Parang Premium', price: 985000 },
      { name: 'Senja Wide Pants', price: 650000 },
    ],
    imageUrl: 'https://picsum.photos/seed/wastra-look-1/800/1000',
  },
  {
    id: 'sunday-brunch',
    title: 'Sunday Brunch',
    occasion: 'Weekend & Casual',
    description: 'Santai tapi tetap terlihat stylish saat weekend.',
    items: [
      { name: 'Rimba Wrap Dress', price: 1200000 },
      { name: 'Aksesoris Pouch Sisa', price: 125000 },
    ],
    imageUrl: 'https://picsum.photos/seed/wastra-look-2/800/1000',
  },
  {
    id: 'wedding-guest',
    title: 'Wedding Guest',
    occasion: 'Pernikahan & Formal',
    description: 'Elegan dan layak untuk momen spesial pernikahan.',
    items: [
      { name: 'Senja Kebaya Modern', price: 1500000 },
      { name: 'Aksesoris Scrunchie', price: 85000 },
    ],
    imageUrl: 'https://picsum.photos/seed/wastra-look-3/800/1000',
  },
  {
    id: 'casual-friday',
    title: 'Casual Friday',
    occasion: 'Casual Pria',
    description: 'Batik pria yang santai, cocok untuk casual Friday.',
    items: [
      { name: 'Rimba Casual Shirt', price: 750000 },
      { name: 'Outer Kimono Truntum', price: 895000 },
    ],
    imageUrl: 'https://picsum.photos/seed/wastra-look-4/800/1000',
  },
  {
    id: 'date-night',
    title: 'Date Night',
    occasion: 'Malam & Spesial',
    description: 'Tampil memukau dengan kombinasi mewah earth tone.',
    items: [
      { name: 'Rimba Wrap Dress', price: 1200000 },
      { name: 'Crop Blouse Kawung', price: 575000 },
    ],
    imageUrl: 'https://picsum.photos/seed/wastra-look-5/800/1000',
  },
  {
    id: 'traditional-event',
    title: 'Traditional Event',
    occasion: 'Upacara & Adat',
    description: 'Lengkap dan sakral untuk acara adat dan upacara.',
    items: [
      { name: 'Set Sido Mukti Wedding', price: 2400000 },
      { name: 'Kebaya Kawung Indigo', price: 1350000 },
    ],
    imageUrl: 'https://picsum.photos/seed/wastra-look-6/800/1000',
  },
];
