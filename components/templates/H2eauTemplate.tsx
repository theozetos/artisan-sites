'use client';

/**
 * H2eauTemplate — version data-driven du design "h2eau" (dark mode / urgences).
 *
 * Fond sombre, glow néon sur la couleur primaire, particules animées.
 * Thème via variables CSS + glow inline dérivé de theme.primary (plus de
 * dépendance à la classe .h2-glow figée en cyan).
 * Conçu pour l'archétype "urgences / dépannage rapide".
 */
import { motion } from 'framer-motion';
import { Phone, Star, ArrowRight, CheckCircle2, Activity } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { ArtisanSite } from '@/lib/site-schema';
import { ctaButtonLabel } from '@/lib/site-schema';

function themeVars(t: ArtisanSite['theme']): React.CSSProperties {
  const mix = (c: string, pct: number, other = 'transparent') => `color-mix(in srgb, ${c} ${pct}%, ${other})`;
  return {
    ['--c-primary' as any]: t.primary,
    ['--c-accent' as any]: t.accent,
    ['--c-bg' as any]: t.bg,
    ['--c-ink' as any]: t.ink,
    ['--c-ink-90' as any]: mix(t.ink, 90),
    ['--c-ink-70' as any]: mix(t.ink, 70),
    ['--c-ink-60' as any]: mix(t.ink, 60),
    ['--c-ink-40' as any]: mix(t.ink, 40),
    ['--c-ink-10' as any]: mix(t.ink, 10),
    ['--c-ink-05' as any]: mix(t.ink, 5),
    ['--c-primary-30' as any]: mix(t.primary, 30),
    ['--c-primary-10' as any]: mix(t.primary, 10),
    backgroundColor: 'var(--c-bg)',
    color: 'var(--c-ink)',
  };
}

function Particles({ color }: { color: string }) {
  const [dots, setDots] = useState<{ x: number; y: number; size: number; delay: number }[]>([]);
  useEffect(() => {
    setDots(Array.from({ length: 40 }, (_, i) => ({
      x: (i * 37) % 100,
      y: (i * 53) % 100,
      size: (i % 3) + 1,
      delay: (i % 5),
    })));
  }, []);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((d, i) => (
        <motion.div key={i} className="absolute rounded-full" style={{ left: `${d.x}%`, top: `${d.y}%`, width: d.size, height: d.size, background: color }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
          transition={{ duration: 3 + d.delay, repeat: Infinity, delay: d.delay }} />
      ))}
    </div>
  );
}

export default function H2eauTemplate({ data }: { data: ArtisanSite }) {
  const { identity: id, copy, reviews, assets, theme } = data;
  const [form, setForm] = useState({ nom: '', tel: '', besoin: '' });
  const glow = { textShadow: `0 0 24px ${theme.primary}, 0 0 48px ${theme.primary}88` };
  const featureImg = assets.heroUrl || (assets.galleryUrls || [])[0] || 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1024&q=80';
  const firstName = (id.owner || '').split(' ')[0] || id.name;

  return (
    <main className="relative font-geist" style={themeVars(theme)}>
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur border-b" style={{ background: 'color-mix(in srgb, var(--c-bg) 80%, transparent)', borderColor: 'var(--c-ink-10)' }}>
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          {assets.logoUrl ? <img src={assets.logoUrl} alt={id.name} className="h-8 w-auto" /> : <div className="text-2xl font-black tracking-tight">{id.name}</div>}
          <nav className="hidden md:flex gap-8 text-sm font-medium" style={{ color: 'var(--c-ink-70)' }}>
            <a href="#services" className="transition-colors hover:opacity-100">Services</a>
            <a href="#avis" className="transition-colors hover:opacity-100">Avis</a>
            <a href="#contact" className="transition-colors hover:opacity-100">Contact</a>
          </nav>
          <a href={`tel:${id.phone}`} className="px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2" style={{ background: 'var(--c-primary)', color: theme.bg }}>
            <Phone size={14} /> {id.phoneDisplay}
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <Particles color={theme.primary} />
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center, ${theme.primary}26, transparent 70%)` }} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 w-full">
          {copy.hero.badge && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="mb-8 inline-flex items-center gap-3 px-4 py-2 border rounded-full" style={{ borderColor: 'var(--c-primary-30)', background: 'var(--c-primary-10)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--c-primary)' }} />
              <span className="text-xs font-geistmono uppercase tracking-widest" style={{ color: 'var(--c-primary)' }}>{copy.hero.badge}</span>
            </motion.div>
          )}
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-10 uppercase">
            {copy.hero.titleLines.map((line, i) => (
              <span key={i}>
                <span style={i === 1 ? { ...glow, color: 'var(--c-primary)' } : undefined}>{line}</span>
                {i < copy.hero.titleLines.length - 1 && <br />}
              </span>
            ))}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }} className="text-lg md:text-xl max-w-xl mb-10" style={{ color: 'var(--c-ink-70)' }}>{copy.hero.subtitle}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="flex flex-wrap items-center gap-4">
            <a href={`tel:${id.phone}`} className="px-8 py-5 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform" style={{ background: 'var(--c-primary)', color: theme.bg, boxShadow: `0 0 40px ${theme.primary}66` }}>
              <Phone size={20} /> Appeler {firstName} <ArrowRight size={20} />
            </a>
            <a href="#contact" className="px-8 py-5 rounded-full font-medium border transition-colors" style={{ borderColor: 'var(--c-ink-10)' }}>Demander un devis</a>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }} className="mt-16 inline-flex flex-wrap items-center gap-6 p-5 border rounded-2xl backdrop-blur" style={{ borderColor: 'var(--c-ink-10)', background: 'var(--c-ink-05)' }}>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full animate-pulse" style={{ background: '#22c55e' }} />
              <span className="text-sm font-medium">{firstName} est disponible</span>
            </div>
            <div className="h-6 w-px" style={{ background: 'var(--c-ink-10)' }} />
            <div className="text-sm" style={{ color: 'var(--c-ink-70)' }}>Intervention rapide · {id.cityMain}</div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES pills */}
      <section id="services" className="py-16 border-y overflow-hidden" style={{ borderColor: 'var(--c-ink-10)' }}>
        <div className="mb-8 px-6"><div className="text-2xl font-bold">{copy.servicesIntro}</div></div>
        <div className="flex gap-3 px-6 overflow-x-auto whitespace-nowrap pb-4">
          {copy.services.map((s, i) => (
            <div key={s.name} className="shrink-0 px-6 py-3 rounded-full border font-medium"
              style={i % 3 === 0 ? { background: 'var(--c-primary)', color: theme.bg, borderColor: 'var(--c-primary)' } : { borderColor: 'var(--c-ink-10)', color: 'var(--c-ink-90)' }}>
              {s.name}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE (about + bullets + image) */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black leading-[0.95] tracking-tighter mb-8">
              {id.trade} <span style={{ color: 'var(--c-primary)' }}>à {id.cityMain}</span>
            </h2>
            {copy.about.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed mb-6" style={{ color: 'var(--c-ink-70)' }}>{p}</p>
            ))}
            <div className="space-y-4 mb-10">
              {copy.ctaBullets.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <CheckCircle2 className="shrink-0" size={20} style={{ color: 'var(--c-primary)' }} />
                  <span style={{ color: 'var(--c-ink-90)' }}>{b}</span>
                </div>
              ))}
            </div>
            <a href={`tel:${id.phone}`} className="inline-flex items-center gap-3 font-bold hover:gap-4 transition-all" style={{ color: 'var(--c-primary)' }}>
              Demander une intervention <ArrowRight size={20} />
            </a>
          </div>
          <div className="relative">
            <div className="absolute inset-0 blur-3xl rounded-full" style={{ background: 'var(--c-primary-30)' }} />
            <div className="relative aspect-square rounded-3xl overflow-hidden border" style={{ borderColor: 'var(--c-primary-30)' }}>
              <img src={featureImg} alt={`${id.trade} ${id.cityMain}`} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS banner */}
      <section className="border-y py-12" style={{ borderColor: 'var(--c-ink-10)', background: `linear-gradient(90deg, ${theme.primary}1a, ${theme.accent}1a, ${theme.primary}1a)` }}>
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[{ v: String(id.rating), u: '/5', l: 'Note Google' }, { v: String(id.reviews), u: '', l: 'Avis clients' }, ...copy.hero.proofs.slice(0, 2).map((p) => ({ v: p.label, u: '', l: p.sub }))].map((s, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-black tabular-nums" style={{ color: 'var(--c-primary)', ...glow }}>
                {s.v}<span className="text-3xl" style={{ color: 'var(--c-ink-60)' }}>{s.u}</span>
              </div>
              <div className="text-xs font-geistmono uppercase tracking-widest mt-2" style={{ color: 'var(--c-ink-60)' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="avis" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-wrap justify-between items-end gap-6">
            <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter">{id.rating} / 5<br /><span style={{ color: 'var(--c-ink-40)' }}>À l'unanimité</span></h2>
            <div className="flex gap-1">{[1, 2, 3, 4, 5].map((i) => <Star key={i} size={28} fill={theme.primary} stroke={theme.primary} />)}</div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-8 border rounded-2xl transition-colors" style={{ borderColor: 'var(--c-ink-10)' }}>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-1">{[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill={s <= r.rating ? theme.primary : 'transparent'} stroke={theme.primary} />)}</div>
                  <div className="text-xs font-geistmono" style={{ color: 'var(--c-ink-40)' }}>{r.date}</div>
                </div>
                <p className="leading-relaxed mb-6 text-lg" style={{ color: 'var(--c-ink-90)' }}>"{r.text}"</p>
                <div className="text-sm font-medium" style={{ color: 'var(--c-primary)' }}>— {r.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 border-t" style={{ borderColor: 'var(--c-ink-10)' }}>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-[0.95]">{copy.ctaTitle}</h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--c-ink-70)' }}>{copy.ctaSubtitle}</p>
            <ul className="mt-8 space-y-3">
              {copy.ctaBullets.map((b) => (
                <li key={b} className="flex items-center gap-3"><CheckCircle2 size={18} style={{ color: 'var(--c-primary)' }} /><span style={{ color: 'var(--c-ink-90)' }}>{b}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-black tracking-tighter mb-8">{firstName} vous répond vite</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Message envoyé'); }} className="space-y-4">
              <input type="text" required placeholder="Nom" value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} className="w-full px-5 py-4 rounded-xl border outline-none font-geistmono" style={{ background: 'var(--c-ink-05)', borderColor: 'var(--c-ink-10)', color: 'var(--c-ink)' }} />
              <input type="tel" required placeholder="Téléphone" value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} className="w-full px-5 py-4 rounded-xl border outline-none font-geistmono" style={{ background: 'var(--c-ink-05)', borderColor: 'var(--c-ink-10)', color: 'var(--c-ink)' }} />
              <textarea required rows={5} placeholder="Décrivez le problème" value={form.besoin} onChange={(e) => setForm({ ...form, besoin: e.target.value })} className="w-full px-5 py-4 rounded-xl border outline-none font-geistmono resize-none" style={{ background: 'var(--c-ink-05)', borderColor: 'var(--c-ink-10)', color: 'var(--c-ink)' }} />
              <button type="submit" className="w-full py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2" style={{ background: 'var(--c-primary)', color: theme.bg }}>
                {ctaButtonLabel(data.booking?.contactPref)} <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-16" style={{ borderColor: 'var(--c-ink-10)' }}>
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-2xl font-black mb-4">{id.name}</div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--c-ink-60)' }}>{id.trade} · {id.cityMain} et alentours.</p>
          </div>
          <div>
            <div className="text-xs font-geistmono uppercase tracking-widest mb-4" style={{ color: 'var(--c-primary)' }}>Contact</div>
            <a href={`tel:${id.phone}`} className="block text-sm font-geistmono">{id.phoneDisplay}</a>
            {id.email && <a href={`mailto:${id.email}`} className="block text-sm font-geistmono mt-1" style={{ color: 'var(--c-ink-60)' }}>{id.email}</a>}
            <p className="text-sm mt-2" style={{ color: 'var(--c-ink-60)' }}>{id.address}</p>
          </div>
          <div>
            <div className="text-xs font-geistmono uppercase tracking-widest mb-4" style={{ color: 'var(--c-primary)' }}>Zone</div>
            <div className="flex flex-wrap gap-1.5">
              {id.zones.map((z) => <span key={z} className="text-xs px-2 py-1 border rounded-full" style={{ borderColor: 'var(--c-ink-10)', color: 'var(--c-ink-60)' }}>{z}</span>)}
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-12 pt-8 border-t text-xs font-geistmono flex flex-wrap justify-between gap-4" style={{ borderColor: 'var(--c-ink-10)', color: 'var(--c-ink-40)' }}>
          <div>© {new Date().getFullYear()} {id.name}{id.founded ? ` · Fondée en ${id.founded}` : ''}</div>
          <div className="flex items-center gap-2"><Activity size={12} style={{ color: '#22c55e' }} /> Disponible 7j/7</div>
        </div>
      </footer>
    </main>
  );
}
