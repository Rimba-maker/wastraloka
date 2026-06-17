# PRD: Wastraloka — Brand Batik Modern

## 1. Brand Identity

**Nama Brand:** Wastraloka
**Alasan Naming:** Gabungan "Wastra" (kain tradisional Indonesia) + "loka" (tempat/dunia). Memberi positioning brand yang menghormati heritage tapi dengan cita rasa modern & dunia. Sounds elegant, sangat Indonesia, mudah didaftarkan trademark.

**Tagline:** *"Heritage Reimagined, For Every Day."*

**Target Audience:**
- Wanita & pria usia 25-45, urban professional
- Pecinta fashion yang aware budaya lokal
- Gift-giver (oleh-oleh premium, hadiah formal)
- Expat & turis asing yang cari Indonesian fashion modern
- Wedding party (seragam keluarga, bridesmaid attire)
- SES B+ sampai A, willing to pay untuk craftsmanship

**Brand Voice:**
- Tone: Elegant, edukatif, modern-cultural, proud-of-Indonesia tanpa nasionalisme berlebihan
- Style copywriting: Storytelling tentang motif & pengrajin, fashion-forward language
- Avoid: Bahasa terlalu "tradisional kuno", sales-y

---

## 2. Tech Stack

- **Framework:** Astro 5 (SSG)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Animation:** Framer Motion via React islands
- **Deploy:** Netlify (static)
- **Images:** Unsplash + Pexels (lifestyle editorial)
- **i18n:** Optional Astro i18n EN/ID

---

## 3. Section Breakdown

| # | Section | Type | Tujuan |
|---|---------|------|--------|
| 1 | Navbar | `.astro` static | Logo serif, nav, cart icon, CTA "Shop" |
| 2 | Hero | React island `client:load` | Editorial shot model wear batik modern |
| 3 | New Collection | React island `client:visible` | Showcase koleksi terbaru musim ini |
| 4 | Shop By Category | React island `client:visible` | Dress, Outer, Shirt, Bottom, Accessories |
| 5 | Motif Stories | React island `client:visible` | Story di balik motif (Parang, Mega Mendung) |
| 6 | The Craft | `.astro` static | Process: tulis, cap, kombinasi, batik printing |
| 7 | Featured Products | React island `client:visible` | Best seller produk |
| 8 | Lookbook | React island `client:visible` | Style inspiration full-look |
| 9 | Sustainability | React island `client:visible` | Pemberdayaan pengrajin & natural dye |
| 10 | Reviews | React island `client:visible` | Customer review dengan foto |
| 11 | Press / Featured | `.astro` static | Logo media yang pernah feature |
| 12 | Newsletter | React island `client:idle` | Newsletter signup + discount code |
| 13 | Footer | `.astro` static | Care guide, ship policy, sosmed |

---

## 4. Copywriting (Bahasa Indonesia)

### Navbar
- Menu: Women • Men • Collection • Stories • Sale
- Icons: Search • Account • Cart (0)
- CTA: **Shop Now** | Lang: 🇮🇩 / 🇬🇧

### Hero
- **Headline:** Batik, Tapi Bukan Yang Biasa.
- **Subheadline:** Wastraloka merancang batik modern untuk wanita & pria yang mencintai detail. Ditenun, dibatik, dan dijahit di Jawa oleh tangan-tangan terbaik.
- **CTA Primary:** Shop New Collection
- **CTA Secondary:** Our Story

Sub-banner: "Free shipping di atas Rp 750k • 30-day return • Made in Indonesia"

### New Collection
- **Heading:** New Collection: *Senja Rimba*
- **Subheading:** Koleksi musim hujan terinspirasi cahaya senja yang menembus rimba — motif daun dan hutan dengan palet warm earth tone.
- Carousel 6-8 produk koleksi terbaru
- Per card: foto produk, nama, harga, "New" tag

Sample items:
- **Rimba Wrap Dress** — Rp 1.2 jt
- **Senja Kebaya Modern** — Rp 1.5 jt
- **Daun Outer Kimono** — Rp 950k
- **Rimba Casual Shirt (Men)** — Rp 750k
- **Senja Wide Pants** — Rp 650k

### Shop By Category
- **Heading:** Shop By Category
- Grid 6 category cards:
  - 👗 **Dress** — 32 items
  - 🧥 **Outer & Kimono** — 18 items
  - 👔 **Shirt** — 24 items (Women) | 16 items (Men)
  - 👖 **Bottom** — 14 items
  - 👜 **Accessories** — 22 items
  - 👰 **Wedding Series** — 12 items

### Motif Stories
- **Heading:** Setiap Motif Adalah Cerita
- **Subheading:** Klik untuk mendalami filosofi di balik motif yang Anda kenakan.

Grid 4-6 motif cards:
- **Parang** — Simbol kekuatan & kontinuitas
- **Mega Mendung** — Awan dari Cirebon, simbol kesabaran
- **Kawung** — Buah aren, simbol kemurnian
- **Truntum** — Bintang malam, motif kasih sayang
- **Sekar Jagad** — "Bunga dunia", simbol keragaman
- **Sido Mukti** — Motif kemakmuran untuk pengantin

Per card: foto detail motif, nama, asal daerah, makna singkat.

### The Craft
- **Heading:** Kerajinan Yang Tidak Bisa Diburu-buru
- **Body:** Setiap helai Wastraloka melewati 14-21 tahap, dari menggambar pola hingga finishing. Kami bekerja sama dengan 35+ pengrajin di Pekalongan, Solo, Cirebon, dan Madura.

4-step visual:
1. **🎨 Menggambar Pola** — Desainer kami bekerja dengan pengrajin merancang motif
2. **🕯️ Membatik (Tulis / Cap)** — Tulis untuk premium, cap untuk produksi terbatas
3. **🌿 Pewarnaan Natural** — Indigo, mengkudu, soga — pewarna alami
4. **✂️ Menjahit & Finishing** — Cutting modern, finishing detail di Solo

Stat: "35+ Pengrajin Mitra • 14-21 Tahap Produksi • 100% Made in Java"

### Featured Products
- **Heading:** Best Sellers
- Grid 8 produk best seller
- Filter: Women • Men • Unisex
- Per card: foto produk, nama, harga, color variants, "Add to Cart" quick action

### Lookbook
- **Heading:** Style The Look
- **Subheading:** 6 cara styling Wastraloka untuk berbagai occasion.

6 look cards:
- **Office Power** — Wastraloka Shirt + Tailored Pants
- **Sunday Brunch** — Wrap Dress + Sandals
- **Wedding Guest** — Modern Kebaya + Statement Earrings
- **Casual Friday** — Men's Batik Shirt + Chinos
- **Date Night** — Off-shoulder Batik Top
- **Traditional Event** — Full Kebaya Set

Per look: full-body photo, breakdown items, shop look CTA.

### Sustainability
- **Heading:** Lebih Dari Sekadar Fashion
- **Body:** Kami percaya, fashion yang baik adalah fashion yang menghormati orang dan bumi.
- 4 commitment cards:
  - 🤝 **Fair Pricing for Artisans** — Bayar 25% di atas harga pasar untuk pengrajin
  - 🌿 **Natural Dye When Possible** — Indigo, mengkudu, soga untuk koleksi premium
  - ♻️ **Zero Waste Cutting** — Sisa kain dijadikan accessories (scrunchie, pouch)
  - 📦 **Plastic-Free Packaging** — Box karton recyclable + paper tape

### Reviews
- **Heading:** Apa Kata Pelanggan
- Grid 6-8 review dengan foto pelanggan wearing produk:
  - "Quality batiknya beda dari toko biasa. Cutting modern, halus banget jahitannya." — *Maria, Jakarta*
  - "Beli kemeja Wastraloka untuk seragam keluarga di nikahan adik. Tamu pada nanyain belinya di mana." — *Bayu, Bandung*
  - "Customer service responsif, packaging cantik banget. Recommended buat gift." — *Tika, Surabaya*

Average rating: 4.9 / 5.0 from 800+ reviews

### Press / Featured
- **Heading:** As Featured In
- Logo grid: Vogue Indonesia, Harper's Bazaar ID, Tempo Magazine, The Jakarta Post, Bridestory

### Newsletter
- **Heading:** Join The Wastraloka Family
- **Body:** Dapatkan akses early ke new collection, story di balik motif, dan diskon eksklusif 10% untuk first order.
- Form: Email + Submit
- **CTA:** Get 10% Off

### Footer
- Tagline: *"Crafted in Java, worn worldwide."*
- Links: Care guide, Size chart, Shipping & return policy, FAQ
- Sosmed: IG (@wastraloka), TikTok, Pinterest, YouTube (motif documentary)
- Payment partners: BCA, Mandiri, OVO, GoPay, Shopee Pay, credit card

---

## 5. Image References

| Section | Source | URL / Search Term | Alt Text | Dimensi |
|---------|--------|-------------------|----------|---------|
| Hero | Unsplash | https://unsplash.com/s/photos/indonesian-batik-fashion-model | "Model wearing modern batik" | 1920x1080 |
| Hero alt | Pexels | https://www.pexels.com/search/batik%20fashion/ | "Batik editorial shot" | 1920x1080 |
| New Collection cover | Unsplash | https://unsplash.com/s/photos/asian-fashion-editorial | "Senja Rimba collection" | 1200x900 |
| Product - Wrap Dress | Pexels | https://www.pexels.com/search/wrap%20dress%20asian/ | "Rimba Wrap Dress" | 800x1000 |
| Product - Kebaya | Unsplash | https://unsplash.com/s/photos/kebaya-modern | "Modern kebaya" | 800x1000 |
| Product - Outer | Pexels | https://www.pexels.com/search/kimono%20jacket%20woman/ | "Kimono outer batik" | 800x1000 |
| Product - Men Shirt | Unsplash | https://unsplash.com/s/photos/batik-shirt-men | "Men's batik shirt" | 800x1000 |
| Product - Pants | Pexels | https://www.pexels.com/search/wide%20leg%20pants%20woman/ | "Wide leg batik pants" | 800x1000 |
| Category - Dress | Unsplash | https://unsplash.com/s/photos/asian-dress-elegant | "Dress collection" | 600x800 |
| Category - Outer | Pexels | https://www.pexels.com/search/kimono%20outerwear/ | "Outer category" | 600x800 |
| Category - Shirt | Unsplash | https://unsplash.com/s/photos/shirt-pattern-traditional | "Shirt category" | 600x800 |
| Category - Wedding | Pexels | https://www.pexels.com/search/javanese%20wedding%20attire/ | "Wedding series" | 600x800 |
| Motif - Parang | Unsplash | https://unsplash.com/s/photos/batik-parang-pattern | "Motif Parang detail" | 800x800 |
| Motif - Mega Mendung | Pexels | https://www.pexels.com/search/cirebon%20batik/ | "Motif Mega Mendung" | 800x800 |
| Motif - Kawung | Unsplash | https://unsplash.com/s/photos/batik-kawung | "Motif Kawung" | 800x800 |
| Motif - Truntum | Pexels | https://www.pexels.com/search/javanese%20batik%20pattern/ | "Motif Truntum" | 800x800 |
| Craft - Drawing | Unsplash | https://unsplash.com/s/photos/batik-pattern-drawing | "Menggambar pola" | 800x600 |
| Craft - Membatik | Pexels | https://www.pexels.com/search/batik%20canting%20artisan/ | "Pengrajin membatik" | 800x600 |
| Craft - Pewarnaan | Unsplash | https://unsplash.com/s/photos/natural-dye-textile | "Pewarnaan natural" | 800x600 |
| Craft - Jahit | Pexels | https://www.pexels.com/search/sewing%20fabric%20artisan/ | "Menjahit finishing" | 800x600 |
| Lookbook - Office | Unsplash | https://unsplash.com/s/photos/asian-business-woman-batik | "Office power look" | 800x1000 |
| Lookbook - Brunch | Pexels | https://www.pexels.com/search/asian%20woman%20cafe%20outfit/ | "Brunch look" | 800x1000 |
| Lookbook - Wedding | Unsplash | https://unsplash.com/s/photos/wedding-guest-asian | "Wedding guest" | 800x1000 |
| Lookbook - Casual | Pexels | https://www.pexels.com/search/asian%20man%20casual%20outfit/ | "Casual Friday" | 800x1000 |
| Sustainability - Artisans | Unsplash | https://unsplash.com/s/photos/indonesian-batik-artisan | "Pengrajin batik" | 1200x800 |
| Sustainability - Natural dye | Pexels | https://www.pexels.com/search/natural%20indigo%20dye/ | "Natural dye process" | 1200x800 |
| Reviews customer photos | Pexels | https://www.pexels.com/search/asian%20woman%20outfit%20smile/ | Customer wearing | 600x800 |

---

## 6. Animation Spec (Framer Motion)

### Hero (React island, `client:load`)
```tsx
// Hero: editorial reveal with subtle parallax
const editorialReveal = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
  }
}

// Headline serif elegant reveal
const serifReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, staggerChildren: 0.15 }
  }
}
```

### New Collection Carousel (React island, `client:visible`)
- Horizontal scroll snap dengan momentum
- Drag-to-scroll desktop
- Card hover: subtle scale + price slide-up
- "New" tag: pulse glow infinite

### Shop By Category (React island, `client:visible`)
- 6 cards grid stagger reveal
- Hover: image scale + category name color shift + item count counter
- Click → smooth transition to category page

### Motif Stories (React island, `client:visible`)
- 4-6 motif cards with image-heavy layout
- Reveal: alternating from left/right
- Hover: motif image zoom + story preview slide-up
- Click → modal lightbox with full motif story (pakai `layoutId` morph)

### The Craft Steps (`.astro` + small island)
- 4 steps reveal sequential with connecting line
- Icon scale pop on visible
- Process image hover: scale slight

### Featured Products Grid (React island, `client:visible`)
- 8 products grid stagger reveal
- Hover: image swap (front → back image), "Quick add" button slide-in
- Color variants: smooth swatch transition
- Filter (Women/Men/Unisex): `AnimatePresence` + `layout` smooth reflow

### Lookbook (React island, `client:visible`)
- 6 full-look cards in 2-column desktop grid
- Card hover: image scale + items list slide-in
- "Shop this look" hover state with item dots highlighted
- Click → look detail page

### Sustainability Section (React island, `client:visible`)
- 4 commitment cards stagger reveal
- Icon: rotate slight on hover
- Stat numbers: counter animation

### Reviews Grid (React island, `client:visible`)
- Masonry layout
- Customer photo + review side-by-side
- Star rating: sequential fill animation
- Filter by rating/product (smooth reflow)

### Newsletter Signup
- Email input focus: smooth border accent
- Submit button: morph + success state
- Discount code reveal: scratch-card style or fade-in

### Scroll Reveal Pattern (reusable)
```tsx
const editorialFadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
}
```

### Cart Animation (mini)
- Add to cart: button morph + cart icon shake + count update
- Cart preview slide-in from right

### Hydration Strategy
- `client:load` → Hero
- `client:visible` → New Collection, Categories, Motif, Products, Lookbook, Sustainability, Reviews
- `client:idle` → Newsletter form
- Sisanya: static

---

## 7. SEO Meta

- **Title:** Wastraloka — Modern Indonesian Batik Fashion | Made in Java
- **Description:** Batik modern untuk wanita & pria. Dress, kebaya, kemeja, outer dengan motif tradisional & cutting modern. Made in Java, free shipping di atas Rp 750k.
- **Keywords:** batik modern, batik wanita, batik pria, kebaya modern, fashion indonesia, batik premium, wastra indonesia
- **OG Image:** Editorial hero shot dengan logo overlay (1200x630)
- **Schema:** `Brand` + `Product` + `Organization` schema
- **Hreflang:** id-ID, en-US
