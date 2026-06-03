'use client';

/**
 * UrBeroaTemplate — version data-driven du design "ur-beroa" (régional / chaleureux).
 *
 * Tons chauds (rouge + bois + crème), storytelling artisanal local.
 * Générique : aucun hardcode basque ; l'ancrage local vient de la data (ville,
 * zones, badge, histoire). Thème via variables CSS.
 */
import { motion } from 'framer-motion';
import { Phone, Star, MapPin, Quote } from 'lucide-react';
import { useState } from 'react';
import type { ArtisanSite } from '@/lib/site-schema';
import { ctaButtonLabel } from '@/lib/site-schema';
import { Icon } from '@/components/Icon';

function themeVars(t: ArtisanSite['theme']): React.CSSProperties {
  const mix = (c: string, pct: number, other = 'white') => `color-mix(in srgb, ${c} ${pct}%, ${other})`;
  return {
    ['--c-primary' as any]: t.primary,
    ['--c-accent' as any]: t.accent,
    ['--c-bg' as any]: t.bg,
    ['--c-ink' as any]: t.ink,
    ['--c-primary-10' as any]: mix(t.primary, 10, 'transparent'),
    ['--c-primary-20' as any]: mix(t.primary, 20, 'transparent'),
    ['--c-ink-70' as any]: mix(t.ink, 70, 'transparent'),
    ['--c-ink-60' as any]: mix(t.ink, 60, 'transparent'),
    ['--c-ink-10' as any]: mix(t.ink, 10, 'transparent'),
    backgroundColor: 'var(--c-bg)',
    color: 'var(--c-ink)',
  };
}

export default function UrBeroaTemplate({ data }: { data: ArtisanSite }) {
  const { identity: id, copy, reviews, assets, theme } = data;
  const [form, setForm] = useState({ nom: '', tel: '', besoin: '' });
  const monogram = (id.name || 'A').trim().charAt(0).toUpperCase();
  const heroImg = assets.heroUrl || 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=900&q=80';
  const portraitImg = assets.portraitUrl || assets.heroUrl || heroImg;
  const firstName = (id.owner || '').split(' ')[0] || id.name;

  return (
    <main style={themeVars(theme)}>
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur border-b" style={{ background: 'color-mix(in srgb, var(--c-bg) 95%, transparent)', borderColor: 'var(--c-ink-10)' }}>
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {assets.logoUrl ? <img src={assets.logoUrl} alt={id.name} className="h-10 w-auto" /> : (
              <div className="w-10 h-10 flex items-center justify-center font-fraunces font-bold text-lg rounded-full text-white" style={{ background: 'var(--c-primary)' }}>{monogram}</div>
            )}
            <div>
              <div className="font-fraunces text-xl font-bold leading-none">{id.name}</div>
              <div className="text-[10px] uppercase tracking-widest mt-1" style={{ color: 'var(--c-ink-60)' }}>{id.trade} · {id.cityMain}</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#metiers" className="transition-colors hover:opacity-70">Métiers</a>
            <a href="#histoire" className="transition-colors hover:opacity-70">Histoire</a>
            <a href="#zones" className="transition-colors hover:opacity-70">Zones</a>
            <a href="#avis" className="transition-colors hover:opacity-70">Avis</a>
            <a href="#contact" className="transition-colors hover:opacity-70">Contact</a>
          </nav>
          <a href={`tel:${id.phone}`} className="px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 text-white" style={{ background: 'var(--c-primary)' }}>
            <Phone size={14} /> <span className="hidden sm:inline">{id.phoneDisplay}</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="lg:col-span-7">
            {copy.hero.badge && (
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12" style={{ background: 'var(--c-primary)' }} />
                <span className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: 'var(--c-primary)' }}>{copy.hero.badge}</span>
              </div>
            )}
            <h1 className="font-fraunces text-5xl md:text-7xl lg:text-[5rem] font-bold leading-[0.95] tracking-tight mb-6">
              {copy.hero.titleLines.map((line, i) => (
                <span key={i}>
                  <span style={i === copy.hero.titleLines.length - 1 ? { color: 'var(--c-primary)' } : undefined}>{line}</span>
                  {i < copy.hero.titleLines.length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="text-lg max-w-xl mb-10 leading-relaxed" style={{ color: 'var(--c-ink-70)' }}>{copy.hero.subtitle}</p>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a href={`tel:${id.phone}`} className="px-7 py-4 rounded-full font-medium flex items-center gap-3 text-white transition-colors" style={{ background: 'var(--c-primary)' }}>
                <Phone size={18} /> Appeler {firstName}
              </a>
              <a href="#contact" className="px-7 py-4 rounded-full font-medium border transition-colors" style={{ borderColor: 'var(--c-ink-10)' }}>Demander un devis</a>
            </div>
            <div className="flex items-center gap-8 pt-6 border-t" style={{ borderColor: 'var(--c-ink-10)' }}>
              <div>
                <div className="flex items-center gap-1 mb-1">{[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill={theme.primary} stroke={theme.primary} />)}</div>
                <div className="text-xs uppercase tracking-widest" style={{ color: 'var(--c-ink-60)' }}>{id.rating}/5 · {id.reviews} avis</div>
              </div>
              {copy.hero.proofs.slice(1).map((p, i) => (
                <div key={i}>
                  <div className="font-fraunces text-3xl font-bold" style={{ color: 'var(--c-primary)' }}>{p.label}</div>
                  <div className="text-xs uppercase tracking-widest" style={{ color: 'var(--c-ink-60)' }}>{p.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative">
              <img src={heroImg} alt={`${id.trade} ${id.cityMain}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--c-primary-20), transparent)' }} />
            </div>
            <div className="absolute -bottom-6 -left-6 p-5 rounded-2xl shadow-xl max-w-[240px] border" style={{ background: 'var(--c-bg)', borderColor: 'var(--c-primary-20)' }}>
              <div className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--c-primary)' }}>{id.cityMain}</div>
              <p className="font-fraunces text-base leading-snug italic">"L'artisan de confiance près de chez vous."</p>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center text-white font-fraunces font-bold leading-tight text-center text-sm" style={{ background: 'var(--c-primary)' }}>
              Artisan<br />local
            </div>
          </motion.div>
        </div>
      </section>

      {/* MÉTIERS */}
      <section id="metiers" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-3xl">
            <h2 className="font-fraunces text-4xl md:text-6xl font-bold leading-tight">{copy.servicesIntro}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {copy.services.map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group p-10 border-l-2 transition-colors" style={{ borderColor: 'var(--c-primary-20)' }}>
                <Icon name={s.icon} size={40} strokeWidth={1.5} className="mb-6" style={{ color: 'var(--c-primary)' }} />
                <h3 className="font-fraunces text-3xl font-bold mb-3">{s.name}</h3>
                <p className="leading-relaxed" style={{ color: 'var(--c-ink-70)' }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTOIRE */}
      {copy.about.length > 0 && (
        <section id="histoire" className="py-24 text-white relative overflow-hidden" style={{ background: 'var(--c-ink)' }}>
          <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight mb-8">{id.name}<br /><span className="italic font-light">Notre histoire</span></h2>
              <div className="space-y-5 leading-relaxed text-lg" style={{ color: 'rgba(255,255,255,0.8)' }}>
                {copy.about.map((p, i) => <p key={i} className={i === copy.about.length - 1 ? 'font-fraunces italic text-xl text-white' : ''}>{p}</p>)}
                {id.owner && <div className="text-sm uppercase tracking-widest" style={{ color: 'var(--c-primary)' }}>— {id.owner}</div>}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img src={portraitImg} alt={id.owner} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ZONES */}
      <section id="zones" className="py-24" style={{ background: 'var(--c-bg)' }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-3xl">
            <h2 className="font-fraunces text-4xl md:text-6xl font-bold leading-tight">Nos zones d'intervention<br /><span className="italic" style={{ color: 'var(--c-accent)' }}>autour de {id.cityMain}</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {id.zones.map((z, i) => (
              <motion.div key={z} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="group flex items-center gap-4 p-6 bg-white border rounded-2xl transition-all" style={{ borderColor: 'var(--c-ink-10)' }}>
                <MapPin className="shrink-0" size={24} style={{ color: 'var(--c-primary)' }} />
                <div className="font-fraunces text-xl font-bold">{z}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AVIS */}
      <section id="avis" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight">Ce que disent nos clients</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {reviews.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="relative p-10 rounded-2xl" style={{ background: 'var(--c-bg)' }}>
                <Quote className="absolute -top-4 left-8 bg-white p-2 rounded-full" size={40} style={{ color: 'var(--c-primary)' }} />
                <div className="flex gap-1 mb-4 mt-3">{Array.from({ length: r.rating }).map((_, s) => <Star key={s} size={16} fill={theme.primary} stroke={theme.primary} />)}</div>
                <p className="font-fraunces italic text-lg leading-relaxed mb-6" style={{ color: 'var(--c-ink)' }}>"{r.text}"</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{r.name}</span>
                  <span style={{ color: 'var(--c-ink-60)' }}>{r.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 text-white relative overflow-hidden" style={{ background: 'var(--c-primary)' }}>
        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight mb-8">{copy.ctaTitle}</h2>
            <p className="leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>{copy.ctaSubtitle}</p>
            <ul className="space-y-3">
              {copy.ctaBullets.map((b) => <li key={b} className="flex items-center gap-3"><Star size={16} fill="#fff" stroke="#fff" /><span>{b}</span></li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-fraunces text-3xl md:text-4xl font-bold mb-8">Décrivez votre besoin</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Demande envoyée'); }} className="space-y-4">
              <input type="text" required placeholder="Votre nom" value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} className="w-full px-5 py-4 rounded-xl outline-none transition-colors" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff' }} />
              <input type="tel" required placeholder="Téléphone" value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} className="w-full px-5 py-4 rounded-xl outline-none transition-colors" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff' }} />
              <textarea required rows={5} placeholder="Votre besoin" value={form.besoin} onChange={(e) => setForm({ ...form, besoin: e.target.value })} className="w-full px-5 py-4 rounded-xl outline-none transition-colors resize-none" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff' }} />
              <button type="submit" className="w-full py-4 rounded-xl font-bold transition-colors" style={{ background: '#fff', color: theme.primary }}>{ctaButtonLabel(data.booking?.contactPref)}</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 text-white" style={{ background: 'var(--c-ink)' }}>
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-10">
          <div>
            <div className="font-fraunces text-2xl font-bold mb-2">{id.name}</div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{id.legalName}</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--c-primary)' }}>Contact</div>
            <a href={`tel:${id.phone}`} className="block text-sm hover:opacity-70">{id.phoneDisplay}</a>
            <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.7)' }}>{id.address}</p>
            {id.founded && <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>Fondée en {id.founded}</p>}
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--c-primary)' }}>Zone</div>
            <div className="flex flex-wrap gap-1.5">
              {id.zones.map((z) => <span key={z} className="text-xs px-2 py-1 border rounded-full" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>{z}</span>)}
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-12 pt-8 border-t flex flex-wrap justify-between gap-4 text-xs" style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
          <div>© {new Date().getFullYear()} {id.name}{id.owner ? ` · ${id.owner}` : ''}</div>
          <div className="font-fraunces italic">Merci de votre confiance</div>
        </div>
      </footer>
    </main>
  );
}
