export interface Motif {
  id: string;
  name: string;
  origin: string;
  region: string;
  meaning: string;
  description: string;
  imageUrl?: string;
}

export const motifs: Motif[] = [
  {
    id: 'parang',
    name: 'Parang',
    origin: 'Jawa Tengah',
    region: 'Solo',
    meaning: 'Kekuatan & Kontinuitas',
    description:
      'Simbol kekuatan, keberanian, dan kontinuitas. Dahulu hanya dikenakan oleh para raja Mataram, kini hadir dalam cutting modern.',
  },
  {
    id: 'mega-mendung',
    name: 'Mega Mendung',
    origin: 'Jawa Barat',
    region: 'Cirebon',
    meaning: 'Kesabaran & Ketenangan',
    description:
      'Motif awan dari Cirebon dengan pengaruh budaya Tiongkok. Simbol kesabaran dan ketenangan menghadapi badai kehidupan.',
  },
  {
    id: 'kawung',
    name: 'Kawung',
    origin: 'Jawa',
    region: 'Yogyakarta',
    meaning: 'Kemurnian & Pengendalian Diri',
    description:
      'Terinspirasi buah aren yang dipotong melintang. Melambangkan kemurnian hati dan pengendalian diri yang sempurna.',
  },
  {
    id: 'truntum',
    name: 'Truntum',
    origin: 'Jawa Tengah',
    region: 'Solo',
    meaning: 'Kasih Sayang Abadi',
    description:
      'Bintang-bintang malam yang memandu arah. Motif cinta abadi dan kasih sayang yang tumbuh kembali, diciptakan Ratu Beruk untuk Raja Pakubuwono III.',
  },
  {
    id: 'sekar-jagad',
    name: 'Sekar Jagad',
    origin: 'Jawa',
    region: 'Berbagai Daerah',
    meaning: 'Keberagaman & Keindahan',
    description:
      '"Bunga dunia", merayakan keberagaman dan keindahan alam semesta dalam satu lembar kain. Peta keindahan Nusantara.',
  },
  {
    id: 'sido-mukti',
    name: 'Sido Mukti',
    origin: 'Jawa Tengah',
    region: 'Solo',
    meaning: 'Kemakmuran & Kebahagiaan',
    description:
      'Motif kemakmuran dan kebahagiaan untuk pengantin. Harapan kehidupan rumah tangga yang sejahtera dan berlimpah berkah.',
  },
];
