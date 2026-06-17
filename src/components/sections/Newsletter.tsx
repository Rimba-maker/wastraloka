import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type State = 'idle' | 'loading' | 'success';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<State>('idle');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setState('loading');
    // Simulate API call
    setTimeout(() => setState('success'), 1200);
  }

  return (
    <section style={styles.section}>
      <div className="container">
        <div style={styles.inner}>
          <p className="section-label" style={{ textAlign: 'center' }}>
            Newsletter
          </p>
          <h2 className="section-heading" style={{ textAlign: 'center' }}>
            Bergabung dengan Keluarga Wastraloka
          </h2>
          <p style={styles.sub}>
            Dapatkan akses early ke new collection, story di balik motif, dan
            diskon eksklusif <strong>10% untuk first order</strong>.
          </p>

          <AnimatePresence mode="wait">
            {state === 'success' ? (
              <motion.div
                key="success"
                style={styles.successBox}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <span style={styles.successIcon}>✓</span>
                <div>
                  <p style={styles.successTitle}>Selamat datang!</p>
                  <p style={styles.successText}>
                    Kode diskon 10% sudah dikirim ke email Anda.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                style={styles.form}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan email Anda"
                  required
                  aria-label="Email address"
                  style={styles.input}
                />
                <motion.button
                  type="submit"
                  disabled={state === 'loading'}
                  style={{
                    ...styles.submitBtn,
                    opacity: state === 'loading' ? 0.7 : 1,
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {state === 'loading' ? 'Mengirim...' : 'Dapatkan 10% Off'}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

          <p style={styles.note}>
            Dengan mendaftar, Anda menyetujui kebijakan privasi kami. Berhenti
            langganan kapan saja.
          </p>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    paddingBlock: '6rem',
    backgroundColor: 'var(--color-surface-soft)',
  },
  inner: {
    textAlign: 'center',
    maxWidth: '36rem',
    marginInline: 'auto',
  },
  sub: {
    fontSize: '1rem',
    color: 'var(--color-muted)',
    lineHeight: 1.65,
    margin: '0.75rem 0 1.75rem',
  },
  form: {
    display: 'flex',
    backgroundColor: 'var(--color-canvas)',
    border: '1px solid var(--color-hairline)',
    borderRadius: '9999px',
    padding: '0.5rem 0.5rem 0.5rem 1.5rem',
    alignItems: 'center',
    boxShadow: 'var(--shadow-card)',
    gap: '0.5rem',
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.9375rem',
    color: 'var(--color-ink)',
    backgroundColor: 'transparent',
    minWidth: 0,
  },
  submitBtn: {
    backgroundColor: 'var(--color-mengkudu)',
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.875rem',
    fontWeight: 500,
    padding: '0.75rem 1.375rem',
    borderRadius: '9999px',
    border: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    transition: 'background-color 0.2s ease',
  },
  successBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: 'var(--color-canvas)',
    border: '1px solid var(--color-hairline)',
    borderRadius: 'var(--radius-md)',
    padding: '1.25rem 1.5rem',
    boxShadow: 'var(--shadow-card)',
    textAlign: 'left',
  },
  successIcon: {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '9999px',
    backgroundColor: 'var(--color-mengkudu)',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    fontWeight: 700,
    flexShrink: 0,
  },
  successTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    color: 'var(--color-ink)',
  },
  successText: {
    fontSize: '0.875rem',
    color: 'var(--color-muted)',
    marginTop: '0.125rem',
  },
  note: {
    fontSize: '0.75rem',
    color: 'var(--color-muted-soft)',
    marginTop: '0.75rem',
  },
};
