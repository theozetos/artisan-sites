'use client';

/**
 * AquaJeuneTemplate — version data-driven du design "aquajeune".
 *
 * Rend un site artisan complet à partir d'un objet `ArtisanSite`.
 * Le thème est injecté en variables CSS sur le <main> (aucun token Tailwind
 * dédié → ajouter un client ne touche jamais tailwind.config.ts).
 * Les teintes pâles / opacités sont dérivées via color-mix() à partir des 6
 * couleurs de base du thème.
 *
 * Objectif de cette conversion : rendu identique à l'original aquajeune quand on
 * lui passe la data d'aquajeune (preuve de non-régression visuelle).
 */
import { motion } from 'framer-motion';
import { Phone, Star, Calendar, Smartphone, Clock, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import type { ArtisanSite } from '@/lib/site-schema';
import { ctaButtonLabel } from '@/lib/site-schema';
import { Icon } from '@/components/Icon';

/** Construit les variables CSS du thème (base + dérivées color-mix). */
function themeVars(t: ArtisanSite['theme']): React.CSSProperties {
  const mix = (c: string, pct: number, other = 'white') =>
    `color-mix(in srgb, ${c} ${pct}%, ${other})`;
  return {
    // base
    ['--c-primary' as any]: t.primary,
    ['--c-primary-dk' as any]: t.primaryDark,
    ['--c-accent' as any]: t.accent,
    ['--c-accent-dk' as any]: t.accentDark,
    ['--c-bg' as any]: t.bg,
    ['--c-ink' as any]: t.ink,
    // dérivées
    ['--c-primary-pale' as any]: mix(t.primary, 16),
    ['--c-primary-10' as any]: mix(t.primary, 10, 'transparent'),
    ['--c-accent-10' as any]: mix(t.accent, 10, 'transparent'),
    ['--c-ink-85' as any]: mix(t.ink, 85, 'transparent'),
    ['--c-ink-72' as any]: mix(t.ink, 72, 'transparent'),
    ['--c-ink-65' as any]: mix(t.ink, 65, 'transparent'),
    ['--c-ink-55' as any]: mix(t.ink, 55, 'transparent'),
    ['--c-ink-10' as any]: mix(t.ink, 10, 'transparent'),
    ['--c-ink-08' as any]: mix(t.ink, 8, 'transparent'),
    backgroundColor: 'var(--c-bg)',
    color: 'var(--c-ink)',
  };
}

export default function AquaJeuneTemplate({ data }: { data: ArtisanSite }) {
  const { identity: id, copy, reviews, assets } = data;
  const [form, setForm] = useState({ nom: '', tel: '', besoin: '' });

  const monogram = (id.name || 'A').trim().charAt(0).toUpperCase();
  const heroImg = assets.heroUrl || 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1312&q=80';
  const portraitImg = assets.portraitUrl || assets.heroUrl;

  return (
    <main className="font-inter min-h-screen" style={themeVars(data.theme)}>
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur border-b" style={{ background: 'color-mix(in srgb, var(--c-bg) 95%, transparent)', borderColor: 'var(--c-primary-10)' }}>
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {assets.logoUrl ? (
              <img src={assets.logoUrl} alt={id.name} className="h-9 w-auto" />
            ) : (
              <div className="w-9 h-9 rounded-2xl text-white flex items-center justify-center font-bold" style={{ background: 'var(--c-primary)' }}>{monogram}</div>
            )}
            <div>
              <div className="font-bold text-lg leading-tight">{id.name}</div>
              <div className="text-[10px] uppercase tracking-widest -mt-0.5" style={{ color: 'var(--c-ink-55)' }}>{id.trade} · {id.cityMain}</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-semibold">
            {copy.prices.length > 0 && <a href="#tarifs" className="transition-colors hover:opacity-70">Tarifs</a>}
            <a href="#services" className="transition-colors hover:opacity-70">Services</a>
            <a href="#avis" className="transition-colors hover:opacity-70">Avis</a>
            <a href="#rdv" className="transition-colors hover:opacity-70">Rendez-vous</a>
          </nav>
          <a href={`tel:${id.phone}`} className="text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-colors" style={{ background: 'var(--c-accent)' }}>
            <Phone size={14} />
            <span className="hidden sm:inline">Appeler</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full -translate-y-1/3 translate-x-1/3 opacity-50" style={{ background: 'var(--c-primary-pale)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full translate-y-1/2 -translate-x-1/3" style={{ background: 'var(--c-accent-10)' }} />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            {copy.hero.badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full mb-7" style={{ background: 'var(--c-accent-10)', color: 'var(--c-accent-dk)' }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--c-accent)' }} /> {copy.hero.badge}
              </div>
            )}
            <h1 className="font-fraunces text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-7">
              {copy.hero.titleLines.map((line, i) => (
                <span key={i}>
                  <span style={i === 0 ? undefined : { color: i % 2 === 1 ? 'var(--c-primary)' : 'var(--c-accent)', fontStyle: 'italic' }}>{line}</span>
                  {i < copy.hero.titleLines.length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="text-lg mb-8 max-w-lg leading-relaxed" style={{ color: 'var(--c-ink-72)' }}>{copy.hero.subtitle}</p>
            <div className="flex flex-wrap gap-3">
              <a href="#rdv" className="text-white px-7 py-4 rounded-full font-bold flex items-center gap-2 transition-colors" style={{ background: 'var(--c-primary)' }}>
                <Calendar size={16} /> Prendre RDV en 3 clics
              </a>
              <a href={`tel:${id.phone}`} className="px-7 py-4 rounded-full font-bold border-2 transition-colors flex items-center gap-2" style={{ borderColor: 'var(--c-ink-10)' }}>
                <Phone size={16} /> {id.phoneDisplay}
              </a>
            </div>
            <div className="flex items-center gap-6 mt-10 pt-7 border-t" style={{ borderColor: 'var(--c-ink-08)' }}>
              {copy.hero.proofs.map((proof, i) => (
                <div key={i} className="flex items-center gap-6">
                  {i > 0 && <div className="h-12 w-px" style={{ background: 'var(--c-ink-10)' }} />}
                  <div>
                    {i === 0 && (
                      <div className="flex items-center gap-0.5 mb-1">
                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="#fbbc04" stroke="#fbbc04" />)}
                      </div>
                    )}
                    <div className="text-sm font-bold" style={i === 1 ? { color: 'var(--c-primary)' } : i === 2 ? { color: 'var(--c-accent)' } : undefined}>{proof.label}</div>
                    <div className="text-xs" style={{ color: 'var(--c-ink-55)' }}>{proof.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img src={heroImg} alt={`${id.trade} ${id.cityMain}`} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl max-w-[240px] border-l-4" style={{ borderColor: 'var(--c-accent)' }}>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--c-primary)' }}>
                <Smartphone size={11} /> Prochain créneau
              </div>
              <div className="font-bold text-base leading-tight mb-1" style={{ color: '#0F1B2C' }}>Aujourd'hui · 16h30</div>
              <div className="text-xs" style={{ color: '#6b7280' }}>{id.owner.split(' ')[0]} est disponible</div>
              <a href="#rdv" className="mt-3 block text-center text-white py-2 rounded-full text-xs font-bold transition-colors" style={{ background: 'var(--c-primary)' }}>
                Réserver ce créneau
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUI SUIS-JE */}
      {copy.about.length > 0 && (
        <section className="py-20 md:py-24" style={{ background: 'var(--c-primary-10)' }}>
          <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight mb-6">
                {id.owner ? `Salut, c'est ${id.owner.split(' ')[0]}` : 'À propos'}<br />
                <span style={{ color: 'var(--c-accent)', fontStyle: 'italic' }}>{id.trade} à {id.cityMain}</span>
              </h2>
              {copy.about.map((para, i) => (
                <p key={i} className="mb-5 leading-relaxed" style={{ color: 'var(--c-ink-72)' }}>{para}</p>
              ))}
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                <img src={portraitImg || heroImg} alt={id.owner} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TARIFS */}
      {copy.prices.length > 0 && (
        <section id="tarifs" className="py-20 md:py-24 bg-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12">
              <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight">Mes tarifs, <span style={{ color: 'var(--c-accent)', fontStyle: 'italic' }}>en clair</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {copy.prices.map((p, i) => (
                <motion.div key={p.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="p-6 border rounded-2xl transition-all" style={{ background: 'var(--c-bg)', borderColor: 'var(--c-ink-08)' }}>
                  <div className="flex items-baseline justify-between mb-2">
                    <div className="font-bold text-base leading-tight">{p.name}</div>
                    <div className="font-fraunces text-2xl font-bold" style={{ color: 'var(--c-primary)' }}>{p.from}</div>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--c-ink-65)' }}>{p.desc}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-xs mt-5 text-center" style={{ color: 'var(--c-ink-55)' }}>Tarifs TTC indicatifs · Devis détaillé remis avant intervention</p>
          </div>
        </section>
      )}

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-24" style={{ background: 'var(--c-primary-10)' }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight mb-4">Ce que je fais, <span style={{ color: 'var(--c-primary)', fontStyle: 'italic' }}>tous les jours</span></h2>
            <p className="max-w-2xl leading-relaxed" style={{ color: 'var(--c-ink-72)' }}>{copy.servicesIntro}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {copy.services.map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="p-6 bg-white rounded-2xl transition-shadow flex gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--c-primary-10)' }}>
                  <Icon name={s.icon} size={22} strokeWidth={1.7} style={{ color: 'var(--c-primary)' }} />
                </div>
                <div>
                  <h3 className="font-fraunces text-xl font-bold mb-1.5">{s.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--c-ink-72)' }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AVIS GOOGLE */}
      <section id="avis" className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-full" style={{ background: 'var(--c-primary-pale)' }}>
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-sm font-bold">{id.rating} / 5 sur Google · {id.reviews} avis</span>
            </div>
            <h2 className="font-fraunces text-3xl md:text-4xl font-bold leading-tight">Ils me notent <span style={{ color: 'var(--c-accent)', fontStyle: 'italic' }}>à fond</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {reviews.map((r, i) => {
              const colors = ['var(--c-primary)', 'var(--c-accent)', '#1a73e8', '#34a853'];
              const bg = colors[i % colors.length];
              return (
                <article key={i} className="p-6 rounded-2xl border" style={{ background: 'var(--c-bg)', borderColor: 'var(--c-ink-08)' }}>
                  <header className="flex items-start gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: bg }}>
                      {r.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{r.name}</div>
                      <div className="text-xs" style={{ color: 'var(--c-ink-55)' }}>{r.date}</div>
                    </div>
                  </header>
                  <div className="flex items-center gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={13} fill={s <= r.rating ? '#fbbc04' : '#e0e0e0'} stroke={s <= r.rating ? '#fbbc04' : '#e0e0e0'} />
                    ))}
                  </div>
                  <p className="leading-relaxed text-sm" style={{ color: 'var(--c-ink-85)' }}>{r.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* RDV / CONTACT */}
      <section id="rdv" className="py-20 md:py-24 text-white relative overflow-hidden" style={{ background: 'var(--c-primary)' }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full -translate-y-1/3 translate-x-1/3" style={{ background: 'var(--c-accent-10)' }} />
        <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight mb-6">{copy.ctaTitle}</h2>
            <p className="text-white/80 mb-8 leading-relaxed">{copy.ctaSubtitle}</p>
            <ul className="space-y-3">
              {copy.ctaBullets.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="flex-shrink-0" size={18} style={{ color: 'var(--c-accent)' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Demande envoyée'); }} className="space-y-3 bg-white p-6 rounded-3xl" style={{ color: 'var(--c-ink)' }}>
              <input type="text" required placeholder="Votre prénom" value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} className="w-full px-4 py-3 rounded-xl border outline-none" style={{ borderColor: 'var(--c-ink-10)' }} />
              <input type="tel" required placeholder="Téléphone (pour le SMS de confirmation)" value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} className="w-full px-4 py-3 rounded-xl border outline-none" style={{ borderColor: 'var(--c-ink-10)' }} />
              <textarea required placeholder="Décrivez votre besoin" rows={5} value={form.besoin} onChange={(e) => setForm({ ...form, besoin: e.target.value })} className="w-full px-4 py-3 rounded-xl border outline-none resize-none" style={{ borderColor: 'var(--c-ink-10)' }} />
              <button type="submit" className="w-full text-white py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2" style={{ background: 'var(--c-accent)' }}>
                <Clock size={16} /> {ctaButtonLabel(data.booking?.contactPref)}
              </button>
              <p className="text-xs text-center" style={{ color: 'var(--c-ink-55)' }}>Réponse rapide · Sans engagement</p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-white" style={{ background: 'var(--c-ink)' }}>
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-fraunces text-2xl font-bold mb-3">{id.name}</div>
            <p className="text-sm text-white/65 leading-relaxed">{id.legalName}</p>
            {id.founded && <p className="text-sm text-white/65 mt-2">Fondé en {id.founded}</p>}
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest mb-3 font-bold" style={{ color: 'var(--c-accent)' }}>Contact</div>
            <a href={`tel:${id.phone}`} className="block text-sm hover:opacity-70">{id.phoneDisplay}</a>
            {id.email && <a href={`mailto:${id.email}`} className="block text-sm hover:opacity-70 mt-1">{id.email}</a>}
            <p className="text-sm text-white/65 mt-2">{id.address}</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest mb-3 font-bold" style={{ color: 'var(--c-accent)' }}>Zone d'intervention</div>
            <div className="flex flex-wrap gap-1.5">
              {id.zones.map((z) => (
                <span key={z} className="text-xs px-2 py-1 border border-white/20 rounded-full">{z}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 mt-10 pt-6 border-t border-white/10 flex flex-wrap justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} {id.name}. Tous droits réservés.</div>
          <div>{id.cityMain}</div>
        </div>
      </footer>
    </main>
  );
}
