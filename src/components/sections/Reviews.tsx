import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { reviews, averageRating, totalReviews } from '../../data/reviews';

const containerReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Reviews() {
  return (
    <section style={s.section}>
      <div className="container">
        <div style={s.header}>
          <p className="section-label">Ulasan</p>
          <h2 className="section-heading">Apa Kata Pelanggan</h2>
        </div>

        {/* Rating band */}
        <div style={s.ratingBand}>
          <div style={s.ratingBig}>{averageRating.toFixed(1)}</div>
          <div>
            <div style={s.stars}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  strokeWidth={1.5}
                  fill="var(--color-ink)"
                  color="var(--color-ink)"
                />
              ))}
            </div>
            <p style={s.ratingLabel}>Sangat direkomendasikan</p>
            <p style={s.ratingCount}>{totalReviews}+ ulasan pelanggan</p>
          </div>
        </div>

        {/* Reviews grid */}
        <motion.div
          style={s.grid}
          variants={containerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {reviews.map((review) => (
            <motion.div key={review.id} style={s.card} variants={cardReveal}>
              <div style={s.author}>
                <img
                  src={review.avatarUrl}
                  alt={review.name}
                  style={s.avatar}
                  loading="lazy"
                />
                <div>
                  <p style={s.name}>{review.name}</p>
                  <p style={s.location}>{review.location}</p>
                </div>
              </div>
              <div style={s.cardStars}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    strokeWidth={1.5}
                    fill="var(--color-ink)"
                    color="var(--color-ink)"
                  />
                ))}
              </div>
              <p style={s.text}>"{review.text}"</p>
              {review.product && (
                <p style={s.product}>Produk: {review.product}</p>
              )}
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
  ratingBand: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    padding: '1.75rem 2rem',
    backgroundColor: 'var(--color-canvas)',
    borderRadius: 'var(--radius-md)',
    marginBottom: '1.75rem',
    border: '1px solid var(--color-hairline-soft)',
  },
  ratingBig: {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontSize: '4.5rem',
    fontWeight: 500,
    color: 'var(--color-ink)',
    lineHeight: 1,
    letterSpacing: '-0.03em',
  },
  stars: { display: 'flex', gap: '0.1875rem', marginBottom: '0.375rem' },
  ratingLabel: { fontSize: '1rem', fontWeight: 600, color: 'var(--color-ink)' },
  ratingCount: { fontSize: '0.8125rem', color: 'var(--color-muted)', marginTop: '0.125rem' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '0.875rem',
  },
  card: {
    backgroundColor: 'var(--color-canvas)',
    borderRadius: 'var(--radius-md)',
    padding: '1.375rem',
    border: '1px solid var(--color-hairline-soft)',
  },
  author: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '0.75rem',
  },
  avatar: {
    width: '2.625rem',
    height: '2.625rem',
    borderRadius: '9999px',
    flexShrink: 0,
    objectFit: 'cover',
  },
  name: { fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-ink)' },
  location: { fontSize: '0.75rem', color: 'var(--color-muted)' },
  cardStars: { display: 'flex', gap: '0.125rem', marginBottom: '0.5rem' },
  text: { fontSize: '0.875rem', color: 'var(--color-body-text)', lineHeight: 1.65 },
  product: {
    fontSize: '0.75rem',
    color: 'var(--color-mengkudu)',
    fontWeight: 500,
    marginTop: '0.625rem',
  },
};
