import { motion } from 'framer-motion';
import { ShieldCheck, RotateCcw, Package } from 'lucide-react';

// PRD image: https://unsplash.com/s/photos/indonesian-batik-fashion-model (1920×1080)
// Replace HERO_IMAGE_URL below with the actual Unsplash CDN URL after picking a photo.
const HERO_IMAGE_URL =
  'https://picsum.photos/seed/wastra-hero/1920/1080';

const subBannerItems = [
  { icon: ShieldCheck, text: 'Free shipping di atas Rp 750.000' },
  { icon: RotateCcw, text: '30-day return' },
  { icon: Package, text: '100% Made in Java' },
];

const heroReveal = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const contentReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
};

const itemReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const bannerReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.2 },
  },
};

export default function Hero() {
  return (
    <section style={s.section}>
      {/* Background image */}
      <motion.div
        style={s.bgWrap}
        variants={heroReveal}
        initial="hidden"
        animate="visible"
      >
        <img
          src={HERO_IMAGE_URL}
          alt="Model mengenakan batik modern Wastraloka"
          style={s.bgImg}
          fetchpriority="high"
        />
      </motion.div>

      {/* Dark gradient overlay */}
      <div style={s.overlay} />

      {/* Content */}
      <motion.div
        style={s.content}
        variants={contentReveal}
        initial="hidden"
        animate="visible"
      >
        <motion.p style={s.eyebrow} variants={itemReveal}>
          Koleksi Senja Rimba — 2026
        </motion.p>

        <motion.h1 style={s.headline} variants={itemReveal}>
          Batik, Tapi<br />
          <em style={s.headlineEm}>Bukan Yang Biasa.</em>
        </motion.h1>

        <motion.p style={s.sub} variants={itemReveal}>
          Wastraloka merancang batik modern untuk wanita &amp; pria yang mencintai
          detail. Dibatik dan dijahit di Jawa oleh tangan-tangan terbaik.
        </motion.p>

        <motion.div style={s.ctas} variants={itemReveal}>
          <a href="#new-collection" style={s.btnPrimary}>
            Shop New Collection
          </a>
          <a href="#the-craft" style={s.btnOutline}>
            Our Story
          </a>
        </motion.div>
      </motion.div>

      {/* Sub-banner */}
      <motion.div
        style={s.subBanner}
        variants={bannerReveal}
        initial="hidden"
        animate="visible"
      >
        {subBannerItems.map(({ icon: Icon, text }) => (
          <div key={text} style={s.subItem}>
            <Icon size={15} color="#c4714f" strokeWidth={1.75} style={{ flexShrink: 0 }} />
            {text}
          </div>
        ))}
      </motion.div>
    </section>
  );
}

const s: Record<string, React.CSSProperties> = {
  section: {
    position: 'relative',
    height: '92vh',
    minHeight: '580px',
    overflow: 'hidden',
    backgroundColor: '#1e1a15',
  },
  bgWrap: {
    position: 'absolute',
    inset: 0,
  },
  bgImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center top',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(to right, rgba(20,14,8,0.78) 0%, rgba(20,14,8,0.5) 55%, rgba(20,14,8,0.18) 100%)',
  },
  content: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 5rem 5.5rem',
    maxWidth: '640px',
  },
  eyebrow: {
    fontSize: '0.6875rem',
    fontWeight: 600,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.65)',
    marginBottom: '1rem',
    fontFamily: 'Inter, sans-serif',
  },
  headline: {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontSize: 'clamp(2.75rem, 7vw, 5rem)',
    fontWeight: 500,
    color: '#ffffff',
    lineHeight: 1.02,
    letterSpacing: '-0.03em',
    marginBottom: '1.25rem',
  },
  headlineEm: {
    fontStyle: 'italic',
    color: 'rgba(255,255,255,0.88)',
  },
  sub: {
    fontSize: '1.0625rem',
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 1.65,
    maxWidth: '420px',
    marginBottom: '2.25rem',
    fontFamily: 'Inter, sans-serif',
  },
  ctas: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap' as const,
  },
  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: '#c4714f',
    color: '#ffffff',
    fontSize: '0.9375rem',
    fontWeight: 500,
    padding: '0.875rem 1.625rem',
    borderRadius: '8px',
    fontFamily: 'Inter, sans-serif',
    textDecoration: 'none',
    whiteSpace: 'nowrap' as const,
  },
  btnOutline: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    color: '#ffffff',
    fontSize: '0.9375rem',
    fontWeight: 500,
    padding: '0.8125rem 1.5625rem',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.38)',
    fontFamily: 'Inter, sans-serif',
    textDecoration: 'none',
    whiteSpace: 'nowrap' as const,
  },
  subBanner: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(250,246,239,0.94)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderTop: '1px solid rgba(224,216,204,0.6)',
    padding: '0.875rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '3rem',
    flexWrap: 'wrap' as const,
  },
  subItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4375rem',
    fontSize: '0.8125rem',
    fontWeight: 500,
    color: '#3d3a34',
    fontFamily: 'Inter, sans-serif',
  },
};
