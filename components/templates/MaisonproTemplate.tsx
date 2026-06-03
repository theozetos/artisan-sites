'use client';

/**
 * MaisonproTemplate — design "maisonpro" (multi-corps d'état), graphite + orange.
 * Esthétique anguleuse (coins droits). Data-driven, thème via variables CSS.
 */
import { motion } from 'framer-motion';
import { Phone, Star, ArrowRight, CheckCircle2, HardHat } from 'lucide-react';
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
    ['--c-ink-75' as any]: mix(t.ink, 75, 'transparent'),
    ['--c-ink-60' as any]: mix(t.ink, 60, 'transparent'),
    ['--c-ink-10' as any]: mix(t.ink, 10, 'transparent'),
    backgroundColor: 'var(--c-bg)',
    color: 'var(--c-ink)',
  };
}

export default function MaisonproTemplate({ data }: { data: ArtisanSite }) {
  const { identity: id, copy, reviews, assets, theme } = data;
  const [form, setForm] = useState({ nom: '', tel: '', email: '', projet: '' });
  const heroImg = assets.heroUrl || (assets.galleryUrls || [])[0] || 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1100&q=80';
  const portraitImg = assets.portraitUrl || heroImg;
  const proofs = copy.hero.proofs.slice(1);

  return (
    <main className="font-inter min-h-screen" style={themeVars(theme)}>
      {/* HEADER */}
      <header className="sticky top-0 z-50 text-white" style={{ background: 'var(--c-primary)' }}>
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {assets.logoUrl ? <img src={assets.logoUrl} alt={id.name} className="h-9 w-auto" /> : <div className="w-9 h-9 flex items-center justify-center font-bold" style={{ background: 'var(--c-accent)', color: theme.primary }}>{(id.name || 'MP').slice(0, 2).toUpperCase()}</div>}
            <div><div className="font-bold text-sm leading-tight">{id.name}</div><div className="text-[10px] uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.55)' }}>{id.trade}</div></div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#services" className="hover:opacity-70 transition">Métiers</a>
            <a href="#avis" className="hover:opacity-70 transition">Avis</a>
            <a href="#devis" className="hover:opacity-70 transition">Devis</a>
          </nav>
          <a href={`tel:${id.phone}`} className="px-4 py-2 rounded-md text-sm font-bold flex items-center gap-2" style={{ background: 'var(--c-accent)', color: theme.primary }}><Phone size={14} /><span className="hidden sm:inline">{id.phoneDisplay}</span><span className="sm:hidden">Appeler</span></a>
        </div>
      </header>

      {/* HERO (dark) */}
      <section className="text-white py-20 md:py-28 relative overflow-hidden" style={{ background: 'var(--c-primary)' }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(45deg, ${theme.accent} 25%, transparent 25%, transparent 50%, ${theme.accent} 50%, ${theme.accent} 75%, transparent 75%, transparent)`, backgroundSize: '40px 40px' }} />
        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="lg:col-span-7">
            {copy.hero.badge && <div className="inline-flex items-center gap-2 px-3 py-1.5 border text-xs font-bold uppercase tracking-widest rounded-sm mb-7" style={{ borderColor: 'color-mix(in srgb, var(--c-accent) 35%, transparent)', color: 'var(--c-accent)' }}>{copy.hero.badge}</div>}
            <h1 className="font-fraunces text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-7">
              {copy.hero.titleLines.map((line, i) => (<span key={i}><span style={i === copy.hero.titleLines.length - 1 ? { color: 'var(--c-accent)', fontStyle: 'italic' } : undefined}>{line}</span>{i < copy.hero.titleLines.length - 1 && <br />}</span>))}
            </h1>
            <p className="text-lg mb-9 max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>{copy.hero.subtitle}</p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#devis" className="px-7 py-4 rounded-md font-bold flex items-center gap-2" style={{ background: 'var(--c-accent)', color: theme.primary }}>Demander un devis <ArrowRight size={16} /></a>
              <a href={`tel:${id.phone}`} className="px-7 py-4 rounded-md font-bold border-2 flex items-center gap-2" style={{ borderColor: 'rgba(255,255,255,0.25)' }}><Phone size={16} /> {id.phoneDisplay}</a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-7 border-t" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
              <div><div className="font-fraunces text-3xl font-bold" style={{ color: 'var(--c-accent)' }}>{id.rating}</div><div className="text-xs uppercase tracking-wider mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>{id.reviews} avis Google</div></div>
              {proofs.map((p, i) => (<div key={i}><div className="font-fraunces text-3xl font-bold" style={{ color: 'var(--c-accent)' }}>{p.label}</div><div className="text-xs uppercase tracking-wider mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>{p.sub}</div></div>))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border-l-4 shadow-2xl" style={{ borderColor: 'var(--c-accent)' }}>
              <img src={heroImg} alt={`${id.trade} ${id.cityMain}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${theme.primary}, ${theme.primary}66, transparent)` }} />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--c-accent)' }}><HardHat size={14} /> {id.trade}</div>
                <div className="font-fraunces text-xl font-bold leading-tight">{id.name} · {id.cityMain}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MÉTIERS / CORPS D'ÉTAT */}
      <section id="services" className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-2xl"><h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight">{copy.servicesIntro}</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {copy.services.map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="p-6 border-l-4 rounded-sm transition-all" style={{ background: 'var(--c-bg)', borderColor: 'var(--c-accent)' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-md flex items-center justify-center flex-shrink-0 text-white" style={{ background: 'var(--c-primary)' }}><Icon name={s.icon} size={22} strokeWidth={1.7} style={{ color: 'var(--c-accent)' }} /></div>
                  <div><div className="font-fraunces text-xl font-bold leading-tight">{s.name}</div><div className="text-sm mt-1" style={{ color: 'var(--c-ink-60)' }}>{s.desc}</div></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRIGEANT */}
      {copy.about.length > 0 && (
        <section className="py-20 md:py-24" style={{ background: 'var(--c-bg)' }}>
          <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-1">
              <div className="aspect-[4/5] rounded-sm overflow-hidden"><img src={portraitImg} alt={id.owner} className="w-full h-full object-cover" /></div>
              {id.owner && <div className="absolute -bottom-5 -right-5 p-5 rounded-sm shadow-xl max-w-[220px]" style={{ background: 'var(--c-accent)', color: theme.primary }}><div className="text-[10px] uppercase tracking-widest font-bold mb-1">Dirigeant</div><div className="font-fraunces text-lg font-bold leading-tight">{id.owner}</div></div>}
            </div>
            <div className="order-2">
              <div className="text-xs uppercase tracking-widest font-bold mb-4" style={{ color: 'var(--c-accent)' }}>Le dirigeant</div>
              <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight mb-6">Un seul interlocuteur, <span className="italic" style={{ color: 'var(--c-accent)' }}>du devis à la livraison</span></h2>
              {copy.about.map((p, i) => <p key={i} className="mb-5 leading-relaxed" style={{ color: 'var(--c-ink-75)' }}>{p}</p>)}
            </div>
          </div>
        </section>
      )}

      {/* AVIS */}
      <section id="avis" className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 border rounded-sm" style={{ borderColor: 'var(--c-ink-10)' }}><span className="text-sm font-bold">{id.rating} / 5 · {id.reviews} avis Google</span></div>
            <h2 className="font-fraunces text-3xl md:text-4xl font-bold leading-tight">Ils nous ont fait confiance</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {reviews.map((r, i) => (
              <article key={i} className="p-6 bg-white rounded-sm border" style={{ borderColor: 'var(--c-ink-10)' }}>
                <header className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: ['#FF6B35', '#1a73e8', '#34a853', '#ea4335'][i % 4] }}>{r.name.charAt(0).toUpperCase()}</div>
                  <div><div className="font-semibold text-sm">{r.name}</div><div className="text-xs" style={{ color: 'var(--c-ink-60)' }}>{r.date}</div></div>
                </header>
                <div className="flex items-center gap-0.5 mb-3">{[1, 2, 3, 4, 5].map((s) => <Star key={s} size={13} fill={s <= r.rating ? '#fbbc04' : '#e0e0e0'} stroke={s <= r.rating ? '#fbbc04' : '#e0e0e0'} />)}</div>
                <p className="leading-relaxed text-sm" style={{ color: 'color-mix(in srgb, var(--c-ink) 85%, transparent)' }}>{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DEVIS */}
      <section id="devis" className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight mb-6">{copy.ctaTitle}</h2>
            <p className="mb-8 leading-relaxed" style={{ color: 'var(--c-ink-75)' }}>{copy.ctaSubtitle}</p>
            <ul className="space-y-3">{copy.ctaBullets.map((item) => <li key={item} className="flex items-center gap-3 text-sm"><CheckCircle2 style={{ color: 'var(--c-accent)' }} size={18} /><span>{item}</span></li>)}</ul>
          </div>
          <div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Demande envoyée'); }} className="space-y-3 p-6 rounded-sm border-l-4" style={{ background: 'var(--c-bg)', borderColor: 'var(--c-accent)' }}>
              <input type="text" required placeholder="Votre nom" value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} className="w-full px-4 py-3 rounded-sm border outline-none" style={{ borderColor: 'var(--c-ink-10)' }} />
              <div className="grid sm:grid-cols-2 gap-3">
                <input type="tel" required placeholder="Téléphone" value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} className="w-full px-4 py-3 rounded-sm border outline-none" style={{ borderColor: 'var(--c-ink-10)' }} />
                <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-sm border outline-none" style={{ borderColor: 'var(--c-ink-10)' }} />
              </div>
              <textarea required placeholder="Décrivez votre projet" rows={5} value={form.projet} onChange={(e) => setForm({ ...form, projet: e.target.value })} className="w-full px-4 py-3 rounded-sm border outline-none resize-none" style={{ borderColor: 'var(--c-ink-10)' }} />
              <button type="submit" className="w-full py-4 rounded-sm font-bold flex items-center justify-center gap-2 text-white" style={{ background: 'var(--c-primary)' }}>{ctaButtonLabel(data.booking?.contactPref)} <ArrowRight size={16} /></button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-14 text-white" style={{ background: 'var(--c-primary-dk)' }}>
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8">
          <div><div className="font-fraunces text-2xl font-bold mb-3">{id.name}</div><p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>{id.legalName}</p>{id.founded && <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.65)' }}>Fondée en {id.founded}</p>}</div>
          <div><div className="text-xs uppercase tracking-widest mb-3 font-bold" style={{ color: 'var(--c-accent)' }}>Contact</div><a href={`tel:${id.phone}`} className="block text-sm hover:opacity-70">{id.phoneDisplay}</a>{id.email && <a href={`mailto:${id.email}`} className="block text-sm hover:opacity-70 mt-1">{id.email}</a>}<p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.65)' }}>{id.address}</p></div>
          <div><div className="text-xs uppercase tracking-widest mb-3 font-bold" style={{ color: 'var(--c-accent)' }}>Zone d'intervention</div><div className="flex flex-wrap gap-1.5">{id.zones.map((z) => <span key={z} className="text-xs px-2 py-1 border rounded-sm" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>{z}</span>)}</div></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-10 pt-6 border-t flex flex-wrap justify-between gap-3 text-xs" style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}><div>© {new Date().getFullYear()} {id.name}. Tous droits réservés.</div><div>{id.cityMain}</div></div>
      </footer>
    </main>
  );
}
