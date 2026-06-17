import { motion } from 'framer-motion';
import { looks, formatPrice } from '../../data/looks';

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

export default function Lookbook() {
  return (
    <section style={s.section}>
      <div className="container">
        <div style={s.header}>
          <p className="section-label">Style Inspiration</p>
          <h2 className="section-heading">Style The Look</h2>
          <p className="section-sub">
            6 cara styling Wastraloka untuk berbagai kesempatan — dari kantor hingga acara pernikahan.
          </p>
        </div>

        <motion.div
          style={s.grid}
          variants={containerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {looks.map((look) => (
            <motion.div key={look.id} style={s.card} variants={cardReveal}>
              {/* Photo */}
              <div style={s.photoWrap}>
                <motion.img
                  src={look.imageUrl}
                  alt={`Look: ${look.title}`}
                  style={s.img}
                  loading="lazy"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Hover overlay */}
                <motion.div
                  style={s.photoOverlay}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                >
                  <a href="#" style={s.shopLookBtn}>Shop This Look →</a>
                </motion.div>

                <span style={s.occasionBadge}>{look.occasion}</span>
              </div>

              {/* Content */}
              <div style={s.content}>
                <h3 style={s.title}>{look.title}</h3>
                <p style={s.desc}>{look.description}</p>
                <ul style={s.items}>
                  {look.items.map((item, i) => (
                    <li key={i} style={s.item}>
                      <span style={s.itemName}>{item.name}</span>
                      <span style={s.itemPrice}>{formatPrice(item.price)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
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
  header: { marginBottom: '2rem' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.25rem',
  },
  card: {
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    backgroundColor: 'var(--color-canvas)',
    boxShadow: 'var(--shadow-card)',
    border: '1px solid var(--color-hairline-soft)',
    cursor: 'pointer',
  },
  photoWrap: {
    position: 'relative',
    aspectRatio: '4 / 5',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  photoOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(30,26,21,0.55)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(2px)',
  },
  shopLookBtn: {
    backgroundColor: 'var(--color-canvas)',
    color: 'var(--color-ink)',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.875rem',
    fontWeight: 600,
    padding: '0.625rem 1.25rem',
    borderRadius: '6px',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  },
  occasionBadge: {
    position: 'absolute',
    top: '0.75rem',
    left: '0.75rem',
    backgroundColor: 'rgba(250,246,239,0.92)',
    backdropFilter: 'blur(6px)',
    color: 'var(--color-ink)',
    fontSize: '0.625rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '0.25rem 0.625rem',
    borderRadius: '9999px',
  },
  content: { padding: '1rem 1.125rem 1.25rem' },
  title: {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontSize: '1.25rem',
    fontWeight: 500,
    color: 'var(--color-ink)',
    marginBottom: '0.25rem',
    letterSpacing: '-0.01em',
  },
  desc: {
    fontSize: '0.8125rem',
    color: 'var(--color-muted)',
    lineHeight: 1.55,
    marginBottom: '0.75rem',
  },
  items: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.375rem',
    borderTop: '1px solid var(--color-hairline-soft)',
    paddingTop: '0.75rem',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '0.5rem',
  },
  itemName: { fontSize: '0.8125rem', color: 'var(--color-body-text)' },
  itemPrice: {
    fontSize: '0.8125rem',
    fontWeight: 600,
    color: 'var(--color-ink)',
    whiteSpace: 'nowrap',
  },
};
