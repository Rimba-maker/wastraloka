import { motion } from 'framer-motion';
import { categories } from '../../data/categories';

const containerReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardReveal = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ShopByCategory() {
  return (
    <section style={s.section}>
      <div className="container">
        <div style={s.header}>
          <p className="section-label">Browse</p>
          <h2 className="section-heading">Shop By Category</h2>
        </div>

        <motion.div
          style={s.grid}
          variants={containerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {categories.map((cat) => (
            <motion.a
              key={cat.id}
              href={cat.href}
              style={s.card}
              variants={cardReveal}
            >
              {/* Image */}
              <motion.img
                src={cat.imageUrl}
                alt={cat.name}
                style={s.img}
                loading="lazy"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Overlay */}
              <div style={s.overlay} />

              {/* Meta */}
              <div style={s.meta}>
                <p style={s.catName}>{cat.name}</p>
                <p style={s.catCount}>{cat.count} produk</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const s: Record<string, React.CSSProperties> = {
  section: {
    paddingBlock: '4rem',
    backgroundColor: 'var(--color-surface-soft)',
  },
  header: {
    marginBottom: '1.75rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '0.875rem',
  },
  card: {
    position: 'relative',
    aspectRatio: '4 / 3',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    cursor: 'pointer',
    display: 'block',
    textDecoration: 'none',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 65%)',
  },
  meta: {
    position: 'absolute',
    bottom: '0.875rem',
    left: '0.875rem',
  },
  catName: {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontSize: '1.25rem',
    fontWeight: 500,
    color: '#ffffff',
    letterSpacing: '-0.01em',
  },
  catCount: {
    fontSize: '0.75rem',
    fontWeight: 500,
    color: 'rgba(255,255,255,0.72)',
    marginTop: '0.125rem',
  },
};
