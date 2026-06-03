'use client';

/**
 * EcochauffTemplate — design "ecochauff" (énergies / RGE), vert + accent jaune.
 * Data-driven, thème via variables CSS. Angle "économies / aides" porté par la copy.
 */
import { motion } from 'framer-motion';
import { Phone, Star, CheckCircle2, Leaf } from 'lucide-react';
import { useState } from 'react';
import type { ArtisanSite } from '@/lib/site-schema';
import { ctaButtonLabel } from '@/lib/site-schema';
import { Icon } from '@/components/Icon';

function themeVars(t: ArtisanSite['theme']): React.CSSProperties {
  const mix = (c: string, pct: number, other = 'white') => `color-mix(in srgb, ${c} ${pct}%, ${other})`;
  return {
    ['--c-primary' as any]: t.primary,
    ['--c-primary-dk' as any]: t.primaryDark,
    ['--c-accent' as any]: t.accent,
    ['--c-bg' as any]: t.bg,
    ['--c-ink' as any]: t.ink,
    ['--c-primary-10' as any]: mix(t.primary, 10, 'transparent'),
    ['--c-ink-75' as any]: mix(t.ink, 75, 'transparent'),
    ['--c-ink-60' as any]: mix(t.ink, 60, 'transparent'),
    ['--c-ink-10' as any]: mix(t.ink, 10, 'transparent'),
    backgroundColor: 'var(--c-bg)',
    color: 'var(--c-ink)',
  };
}

export default function EcochauffTemplate({ data }: { data: ArtisanSite }) {
  const { identity: id, copy, reviews, assets, theme } = data;
  const [form, setForm] = useState({ nom: '', tel: '', projet: '' });
  const monogram = (id.name || 'A').trim().charAt(0).toUpperCase();
  const portraitImg = assets.portraitUrl || assets.heroUrl || 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=900&q=80';

  return (
    <main className="font-inter min-h-screen" style={themeVars(theme)}>
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur border-b" style={{ background: 'color-mix(in srgb, var(--c-bg) 95%, transparent)', borderColor: 'var(--c-primary-10)' }}>
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {assets.logoUrl ? <img src={assets.logoUrl} alt={id.name} className="h-9 w-auto" /> : <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white" style={{ background: 'var(--c-primary)' }}>{monogram}</div>}
            <span className="font-bold text-lg tracking-tight">{id.name}</span>
          </div>
          <nav className="hidden md:flex gap-7 text-sm font-medium">
            <a href="#services" className="transition-colors hover:opacity-70">Nos solutions</a>
            <a href="#avis" className="transition-colors hover:opacity-70">Avis</a>
            <a href="#contact" className="transition-colors hover:opacity-70">Contact</a>
          </nav>
          <a href={`tel:${id.phone}`} className="text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2" style={{ background: 'var(--c-primary)' }}>
            <Phone size={14} /> <span className="hidden sm:inline">{id.phoneDisplay}</span><span className="sm:hidden">Appeler</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${theme.primary}0d, transparent, ${theme.accent}1a)` }} />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24 grid lg:grid-cols-5 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="lg:col-span-3">
            {copy.hero.badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full mb-7" style={{ background: 'var(--c-primary-10)', color: 'var(--c-primary)' }}>
                <Leaf size={14} /> {copy.hero.badge}
              </div>
            )}
            <h1 className="font-fraunces text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-7">
              {copy.hero.titleLines.map((line, i) => (
                <span key={i}><span style={i === copy.hero.titleLines.length - 1 ? { color: 'var(--c-primary)', fontStyle: 'italic' } : undefined}>{line}</span>{i < copy.hero.titleLines.length - 1 && <br />}</span>
              ))}
            </h1>
            <p className="text-lg mb-9 max-w-xl leading-relaxed" style={{ color: 'var(--c-ink-75)' }}>{copy.hero.subtitle}</p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#contact" className="text-white px-7 py-4 rounded-full font-semibold" style={{ background: 'var(--c-primary)' }}>Demander un devis gratuit</a>
              <a href={`tel:${id.phone}`} className="px-7 py-4 rounded-full font-semibold border-2 flex items-center gap-2" style={{ borderColor: 'var(--c-primary)', color: 'var(--c-primary)' }}><Phone size={16} /> {id.phoneDisplay}</a>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-7 border-t" style={{ borderColor: 'var(--c-ink-10)' }}>
              <div>
                <div className="flex items-center gap-1 mb-1">{[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill={theme.accent} stroke={theme.accent} />)}</div>
                <div className="font-bold text-lg">{id.rating} / 5</div>
                <div className="text-xs" style={{ color: 'var(--c-ink-60)' }}>{id.reviews} avis Google</div>
              </div>
              {copy.hero.proofs.slice(1).map((p, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold" style={{ color: 'var(--c-primary)' }}>{p.label}</div>
                  <div className="text-xs" style={{ color: 'var(--c-ink-60)' }}>{p.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="lg:col-span-2">
            <div className="text-white p-7 rounded-3xl shadow-xl" style={{ background: 'var(--c-primary)' }}>
              <div className="text-xs uppercase tracking-widest mb-2 font-semibold" style={{ color: 'var(--c-accent)' }}>Pourquoi nous</div>
              <div className="text-2xl font-fraunces font-bold leading-tight mb-5">Ce qu'on vous garantit</div>
              <ul className="space-y-3 text-sm">
                {copy.ctaBullets.map((b) => <li key={b} className="flex items-center gap-2"><CheckCircle2 size={16} style={{ color: 'var(--c-accent)' }} /> {b}</li>)}
              </ul>
              <a href="#contact" className="mt-6 block text-center py-3 rounded-full font-semibold" style={{ background: 'var(--c-accent)', color: theme.ink }}>Lancer mon projet</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-2xl"><h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight">{copy.servicesIntro}</h2></div>
          <div className="grid md:grid-cols-2 gap-5">
            {copy.services.map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="group p-7 border rounded-2xl transition-all flex items-start gap-4" style={{ borderColor: 'var(--c-ink-10)', background: 'color-mix(in srgb, var(--c-bg) 50%, white)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--c-primary-10)' }}><Icon name={s.icon} size={22} style={{ color: 'var(--c-primary)' }} strokeWidth={1.7} /></div>
                <div>
                  <h3 className="font-fraunces text-2xl font-bold mb-2">{s.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--c-ink-75)' }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTRAIT / À PROPOS */}
      {copy.about.length > 0 && (
        <section className="py-20 md:py-24" style={{ background: 'var(--c-bg)' }}>
          <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="text-xs uppercase tracking-widest font-bold mb-4" style={{ color: 'var(--c-primary)' }}>À propos</div>
              <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight mb-6">{id.owner ? id.owner.split(' ')[0] : id.name}, <span className="italic" style={{ color: 'var(--c-primary)' }}>{id.trade}</span></h2>
              {copy.about.map((p, i) => <p key={i} className="mb-5 leading-relaxed" style={{ color: 'var(--c-ink-75)' }}>{p}</p>)}
            </div>
            <div className="order-1 lg:order-2"><div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl"><img src={portraitImg} alt={id.owner} className="w-full h-full object-cover" /></div></div>
          </div>
        </section>
      )}

      {/* AVIS */}
      <section id="avis" className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-full" style={{ background: 'var(--c-primary-10)' }}>
              <span className="text-sm font-bold">{id.rating} / 5 sur Google · {id.reviews} avis</span>
            </div>
            <h2 className="font-fraunces text-3xl md:text-4xl font-bold leading-tight">Nos clients en parlent mieux que nous</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {reviews.map((r, i) => (
              <article key={i} className="p-6 rounded-2xl border" style={{ background: 'var(--c-bg)', borderColor: 'var(--c-ink-10)' }}>
                <header className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-medium text-sm" style={{ background: ['#2D5A3F', '#1a73e8', '#34a853', '#ea4335'][i % 4] }}>{r.name.charAt(0).toUpperCase()}</div>
                  <div><div className="font-medium text-sm">{r.name}</div><div className="text-xs" style={{ color: 'var(--c-ink-60)' }}>{r.date}</div></div>
                </header>
                <div className="flex items-center gap-0.5 mb-3">{[1, 2, 3, 4, 5].map((s) => <Star key={s} size={13} fill={s <= r.rating ? '#fbbc04' : '#e0e0e0'} stroke={s <= r.rating ? '#fbbc04' : '#e0e0e0'} />)}</div>
                <p className="leading-relaxed text-sm" style={{ color: 'color-mix(in srgb, var(--c-ink) 85%, transparent)' }}>{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-24" style={{ background: 'var(--c-bg)' }}>
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight mb-6">{copy.ctaTitle}</h2>
            <p className="mb-8 leading-relaxed" style={{ color: 'var(--c-ink-75)' }}>{copy.ctaSubtitle}</p>
            <ul className="space-y-3">{copy.ctaBullets.map((item) => <li key={item} className="flex items-center gap-3 text-sm"><CheckCircle2 style={{ color: 'var(--c-primary)' }} size={18} /><span>{item}</span></li>)}</ul>
          </div>
          <div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Demande envoyée'); }} className="space-y-3 bg-white p-6 rounded-2xl border" style={{ borderColor: 'var(--c-ink-10)' }}>
              <input type="text" required placeholder="Votre nom" value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} className="w-full px-4 py-3 rounded-xl border outline-none" style={{ borderColor: 'var(--c-ink-10)' }} />
              <input type="tel" required placeholder="Téléphone" value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} className="w-full px-4 py-3 rounded-xl border outline-none" style={{ borderColor: 'var(--c-ink-10)' }} />
              <textarea required placeholder="Votre projet" rows={5} value={form.projet} onChange={(e) => setForm({ ...form, projet: e.target.value })} className="w-full px-4 py-3 rounded-xl border outline-none resize-none" style={{ borderColor: 'var(--c-ink-10)' }} />
              <button type="submit" className="w-full text-white py-4 rounded-xl font-semibold" style={{ background: 'var(--c-primary)' }}>{ctaButtonLabel(data.booking?.contactPref)}</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-14 text-white" style={{ background: 'var(--c-ink)' }}>
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8">
          <div><div className="font-fraunces text-2xl font-bold mb-3">{id.name}</div><p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>{id.legalName}</p>{id.founded && <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.65)' }}>Fondée en {id.founded}</p>}</div>
          <div><div className="text-xs uppercase tracking-widest mb-3 font-bold" style={{ color: 'var(--c-accent)' }}>Contact</div><a href={`tel:${id.phone}`} className="block text-sm hover:opacity-70">{id.phoneDisplay}</a>{id.email && <a href={`mailto:${id.email}`} className="block text-sm hover:opacity-70 mt-1">{id.email}</a>}<p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.65)' }}>{id.address}</p></div>
          <div><div className="text-xs uppercase tracking-widest mb-3 font-bold" style={{ color: 'var(--c-accent)' }}>Zone d'intervention</div><div className="flex flex-wrap gap-1.5">{id.zones.map((z) => <span key={z} className="text-xs px-2 py-1 border rounded-full" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>{z}</span>)}</div></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-10 pt-6 border-t flex flex-wrap justify-between gap-3 text-xs" style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
          <div>© {new Date().getFullYear()} {id.name}. Tous droits réservés.</div><div>{id.cityMain}</div>
        </div>
      </footer>
    </main>
  );
}
