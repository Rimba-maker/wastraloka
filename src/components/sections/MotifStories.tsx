import { motion } from 'framer-motion';
import { motifs } from '../../data/motifs';

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

export default function MotifStories() {
  return (
    <section style={s.section}>
      <div className="container">
        <div style={s.header}>
          <p className="section-label">Budaya &amp; Filosofi</p>
          <h2 className="section-heading">Setiap Motif Adalah Cerita</h2>
          <p className="section-sub">
            Klik untuk mendalami filosofi di balik motif yang Anda kenakan.
          </p>
        </div>

        <motion.div
          style={s.grid}
          variants={containerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {motifs.map((motif) => (
            <motion.div
              key={motif.id}
              style={s.card}
              variants={cardReveal}
              whileHover={{ y: -4, boxShadow: 'var(--shadow-elevated)' }}
              transition={{ duration: 0.3 }}
            >
              {/* Photo */}
              <div style={s.photoWrap}>
                <motion.img
                  src={motif.imageUrl}
                  alt={`Motif batik ${motif.name} dari ${motif.region}`}
                  style={s.img}
                  loading="lazy"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>

              {/* Info */}
              <div style={s.info}>
                <p style={s.origin}>
                  {motif.origin} · {motif.region}
                </p>
                <h3 style={s.name}>{motif.name}</h3>
                <p style={s.desc}>{motif.description}</p>
                <p style={s.meaning}>↗ {motif.meaning}</p>
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
    backgroundColor: 'var(--color-canvas)',
  },
  header: {
    marginBottom: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '0.875rem',
  },
  card: {
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    border: '1px solid var(--color-hairline-soft)',
    cursor: 'pointer',
    backgroundColor: 'var(--color-canvas)',
    boxShadow: 'var(--shadow-card)',
  },
  photoWrap: {
    aspectRatio: '1 / 1',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  info: {
    padding: '0.875rem 1rem 1.125rem',
  },
  origin: {
    fontSize: '0.625rem',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--color-mengkudu)',
    marginBottom: '0.25rem',
  },
  name: {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontSize: '1.375rem',
    fontWeight: 500,
    color: 'var(--color-ink)',
    marginBottom: '0.375rem',
    letterSpacing: '-0.01em',
  },
  desc: {
    fontSize: '0.8125rem',
    color: 'var(--color-muted)',
    lineHeight: 1.6,
  },
  meaning: {
    fontSize: '0.75rem',
    fontWeight: 600,
    color: 'var(--color-soga)',
    marginTop: '0.625rem',
  },
};
