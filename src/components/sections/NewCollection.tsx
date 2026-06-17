import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { newCollectionProducts, formatPrice } from '../../data/products';

const containerReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function NewCollection() {
  return (
    <section id="new-collection" style={s.section}>
      {/* Header */}
      <div style={s.header}>
        <div>
          <p className="section-label">New Arrival</p>
          <h2 className="section-heading">
            Koleksi: <em>Senja Rimba</em>
          </h2>
          <p className="section-sub">
            Terinspirasi cahaya senja yang menembus rimba — motif daun dan hutan dengan palet warm earth tone.
          </p>
        </div>
        <a href="#" style={s.viewAll}>Lihat semua →</a>
      </div>

      {/* Carousel */}
      <motion.div
        style={s.carousel}
        className="scrollbar-hide"
        variants={containerReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {newCollectionProducts.map((product) => (
          <motion.div
            key={product.id}
            style={s.card}
            variants={cardReveal}
            className="product-card"
          >
            {/* Photo */}
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

            {/* Meta */}
            <div className="product-card-meta">
              <p className="product-card-name">{product.name}</p>
              <p className="product-card-sub">
                {product.motif} · {product.color}
              </p>
              <p className="product-card-price">{formatPrice(product.price)}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const s: Record<string, React.CSSProperties> = {
  section: {
    paddingBlock: '4rem',
    backgroundColor: 'var(--color-canvas)',
  },
  header: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: '2rem',
    paddingInline: '2rem',
    maxWidth: '1280px',
    marginInline: 'auto',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  viewAll: {
    fontSize: '0.875rem',
    fontWeight: 600,
    color: 'var(--color-ink)',
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
    whiteSpace: 'nowrap',
  },
  carousel: {
    display: 'flex',
    gap: '0.875rem',
    overflowX: 'auto',
    paddingInline: '2rem',
    paddingBottom: '0.25rem',
    maxWidth: '1280px',
    marginInline: 'auto',
    WebkitOverflowScrolling: 'touch',
  },
  card: {
    flex: '0 0 230px',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
};
