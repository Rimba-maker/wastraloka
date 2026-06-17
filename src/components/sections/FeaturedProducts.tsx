import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { bestSellerProducts, formatPrice } from '../../data/products';
import type { ProductCategory } from '../../data/products';

type Filter = 'Semua' | ProductCategory;
const filters: Filter[] = ['Semua', 'Women', 'Men', 'Unisex'];

const gridReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState<Filter>('Semua');

  const filtered =
    activeFilter === 'Semua'
      ? bestSellerProducts
      : bestSellerProducts.filter((p) => p.category === activeFilter);

  return (
    <section style={s.section}>
      <div className="container">
        <div style={s.header}>
          <p className="section-label">Terlaris</p>
          <h2 className="section-heading">Best Sellers</h2>
          <div style={s.filters}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`btn-ghost${activeFilter === f ? ' active' : ''}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            style={s.grid}
            variants={gridReveal}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                variants={cardReveal}
                className="product-card"
                layout
              >
                <div className="product-card-photo">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    style={s.img}
                    loading="lazy"
                  />
                  {product.badge && (
                    <span className="badge">{product.badge}</span>
                  )}
                  <button className="heart-btn" aria-label={`Simpan ${product.name}`}>
                    <Heart size={15} strokeWidth={1.75} />
                  </button>
                </div>
                <div className="product-card-meta">
                  <p className="product-card-name">{product.name}</p>
                  <p className="product-card-sub">
                    {product.category} · {product.motif}
                  </p>
                  <p className="product-card-price">{formatPrice(product.price)}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

const s: Record<string, React.CSSProperties> = {
  section: {
    paddingBlock: '4rem',
    backgroundColor: 'var(--color-canvas)',
  },
  header: {
    marginBottom: '1.75rem',
  },
  filters: {
    display: 'flex',
    gap: '0.5rem',
    marginTop: '0.875rem',
    flexWrap: 'wrap',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '0.875rem',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
};
