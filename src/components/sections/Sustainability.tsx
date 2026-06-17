import { motion } from 'framer-motion';
import { Handshake, Leaf, Recycle, Package } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Commitment {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const commitments: Commitment[] = [
  {
    icon: Handshake,
    title: 'Fair Pricing for Artisans',
    desc: 'Membayar 25% di atas harga pasar untuk setiap pengrajin mitra — karena keahlian yang langka layak dihargai setimpal.',
  },
  {
    icon: Leaf,
    title: 'Natural Dye When Possible',
    desc: 'Indigo, mengkudu, soga — pewarna alami yang aman untuk kulit dan tidak mencemari sungai di sekitar workshop.',
  },
  {
    icon: Recycle,
    title: 'Zero Waste Cutting',
    desc: 'Sisa kain tidak dibuang — dijahit menjadi scrunchie, pouch, dan aksesori yang dijual dengan harga terjangkau.',
  },
  {
    icon: Package,
    title: 'Plastic-Free Packaging',
    desc: 'Box karton recyclable, paper tape, dan tissue kertas — tanpa satu pun lembar plastik dalam setiap paket.',
  },
];

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

export default function Sustainability() {
  return (
    <section style={s.section}>
      <div className="container">
        <div style={s.header}>
          <p className="section-label">Komitmen Kami</p>
          <h2 className="section-heading">Lebih Dari Sekadar Fashion</h2>
          <p className="section-sub">
            Kami percaya, fashion yang baik adalah fashion yang menghormati orang dan bumi.
          </p>
        </div>

        <motion.div
          style={s.grid}
          variants={containerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {commitments.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} style={s.card} variants={cardReveal}>
              <div style={s.iconWrap}>
                <Icon
                  size={26}
                  strokeWidth={1.5}
                  color="var(--color-soga)"
                />
              </div>
              <h3 style={s.title}>{title}</h3>
              <p style={s.desc}>{desc}</p>
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
  header: { marginBottom: '2rem' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '0.875rem',
  },
  card: {
    backgroundColor: 'var(--color-surface-card)',
    borderRadius: 'var(--radius-md)',
    padding: '1.75rem 1.5rem',
    border: '1px solid var(--color-hairline-soft)',
  },
  iconWrap: {
    width: '3rem',
    height: '3rem',
    borderRadius: 'var(--radius-sm)',
    backgroundColor: 'var(--color-canvas)',
    border: '1px solid var(--color-hairline)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
    boxShadow: 'var(--shadow-card)',
  },
  title: {
    fontSize: '0.9375rem',
    fontWeight: 600,
    color: 'var(--color-ink)',
    marginBottom: '0.5rem',
    lineHeight: 1.3,
  },
  desc: {
    fontSize: '0.8125rem',
    color: 'var(--color-muted)',
    lineHeight: 1.65,
  },
};
