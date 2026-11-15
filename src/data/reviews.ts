export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  product?: string;
}

export const reviews: Review[] = [
  {
    id: 'maria-s',
    name: 'Maria S.',
    location: 'Jakarta Selatan',
    rating: 5,
    text: 'Quality batiknya beda dari toko biasa. Cutting modern banget, jatuhnya di badan perfect. Jahitannya halus dan rapi. Udah beli 3 kali dan nggak pernah kecewa.',
    product: 'Wrap Dress Parang Soga',
  },
  {
    id: 'bayu-p',
    name: 'Bayu P.',
    location: 'Bandung',
    rating: 5,
    text: 'Beli kemeja Wastraloka untuk seragam keluarga di nikahan adik. Warnanya konsisten semua unit, motifnya presisi. Tamu pada nanyain belinya di mana, bangga banget.',
    product: 'Kemeja Mega Mendung Pria',
  },
  {
    id: 'tika-r',
    name: 'Tika R.',
    location: 'Surabaya',
    rating: 5,
    text: 'Customer service sangat responsif, packaging cantik dan aman. Cocok banget untuk kado, penerimanya pasti senang. Recommended untuk yang cari hadiah premium.',
    product: 'Set Sido Mukti Wedding',
  },
  {
    id: 'dewi-a',
    name: 'Dewi A.',
    location: 'Yogyakarta',
    rating: 5,
    text: 'Sebagai orang Jogja yang paham batik, saya terkesan dengan kualitas tulis di koleksi premium. Motif Kawung-nya presisi, warna indigo tetap cerah setelah beberapa kali cuci.',
    product: 'Kebaya Kawung Indigo',
  },
  {
    id: 'rizky-m',
    name: 'Rizky M.',
    location: 'Semarang',
    rating: 5,
    text: 'Pertama kali beli batik pria yang beneran stylish dan enak dipakai ke kantor. Bahannya adem, nggak panas. Motif Parang-nya bold tapi tetap sopan untuk meeting.',
    product: 'Kemeja Parang Premium',
  },
  {
    id: 'sarah-k',
    name: 'Sarah K.',
    location: 'Bali',
    rating: 5,
    text: 'Beli outer kimono Wastraloka untuk honeymoon. Dapat banyak compliment dari tamu hotel, mereka kira branded Jepang, ternyata buatan Indonesia. Proud sekali!',
    product: 'Daun Outer Kimono',
  },
];

export const averageRating = 4.9;
export const totalReviews = 800;
