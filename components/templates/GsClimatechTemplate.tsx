'use client';

/**
 * GsClimatechTemplate — version data-driven du design "gs-climatech" (premium).
 *
 * Navy + cuivre, clientèle aisée. Thème via variables CSS (color-mix).
 * Sections équipe (data.team) et galerie chantiers (assets.galleryUrls) masquées
 * automatiquement si vides → fonctionne aussi pour un artisan solo.
 *
 * Convention thème pour ce template : primary = navy (sections sombres),
 * accent = cuivre, bg = crème, ink = navy.
 */
import { motion } from 'framer-motion';
import { Phone, Star, ChevronRight, Clock, MapPin, Award } from 'lucide-react';
import { useState } from 'react';
import type { ArtisanSite } from '@/lib/site-schema';
import { Icon } from '@/components/Icon';

function themeVars(t: ArtisanSite['theme']): React.CSSProperties {
  const mix = (c: string, pct: number, other = 'white') => `color-mix(in srgb, ${c} ${pct}%, ${other})`;
  return {
    ['--c-primary' as any]: t.primary,
    ['--c-primary-dk' as any]: t.primaryDark,
    ['--c-accent' as any]: t.accent,
    ['--c-accent-dk' as any]: t.accentDark,
    ['--c-bg' as any]: t.bg,
    ['--c-ink' as any]: t.ink,
    ['--c-accent-10' as any]: mix(t.accent, 10, 'transparent'),
    ['--c-ink-85' as any]: mix(t.ink, 85, 'transparent'),
    ['--c-ink-70' as any]: mix(t.ink, 70, 'transparent'),
    ['--c-ink-60' as any]: mix(t.ink, 60, 'transparent'),
    ['--c-ink-50' as any]: mix(t.ink, 50, 'transparent'),
    ['--c-ink-10' as any]: mix(t.ink, 10, 'transparent'),
    ['--c-cream-70' as any]: mix(t.bg, 70, 'transparent'),
    backgroundColor: 'var(--c-bg)',
    color: 'var(--c-ink)',
  };
}

export default function GsClimatechTemplate({ data }: { data: ArtisanSite }) {
  const { identity: id, copy, reviews, assets, theme } = data;
  const [form, setForm] = useState({ nom: '', tel: '', besoin: '' });
  const monogram = (id.name || 'A').trim().slice(0, 2).toUpperCase();
  const heroImg = assets.heroUrl || 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80';
  const team = data.team || [];
  const gallery = assets.galleryUrls || [];

  return (
    <main style={themeVars(theme)}>
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur border-b" style={{ background: 'color-mix(in srgb, var(--c-bg) 90%, transparent)', borderColor: 'var(--c-ink-10)' }}>
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {assets.logoUrl ? <img src={assets.logoUrl} alt={id.name} className="h-8 w-auto" /> : (
              <div className="w-8 h-8 flex items-center justify-center font-fraunces font-bold rounded text-white" style={{ background: 'var(--c-primary)' }}>{monogram}</div>
            )}
            <span className="font-fraunces text-lg font-bold tracking-tight">{id.name}</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#expertises" className="transition-colors hover:opacity-70">Expertises</a>
            {team.length > 0 && <a href="#equipe" className="transition-colors hover:opacity-70">L'équipe</a>}
            {gallery.length > 0 && <a href="#chantiers" className="transition-colors hover:opacity-70">Chantiers</a>}
            <a href="#avis" className="transition-colors hover:opacity-70">Avis</a>
            <a href="#contact" className="transition-colors hover:opacity-70">Contact</a>
          </nav>
          <a href={`tel:${id.phone}`} className="text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors" style={{ background: 'var(--c-primary)' }}>
            <Phone size={14} />
            <span className="hidden sm:inline">{id.phoneDisplay}</span>
            <span className="sm:hidden">Appeler</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="font-fraunces text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight mb-8">
              {copy.hero.titleLines.map((line, i) => (
                <span key={i}>
                  <span style={i === copy.hero.titleLines.length - 1 ? { color: 'var(--c-accent)', fontStyle: 'italic' } : undefined}>{line}</span>
                  {i < copy.hero.titleLines.length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="text-lg mb-8 max-w-xl leading-relaxed" style={{ color: 'var(--c-ink-70)' }}>{copy.hero.subtitle}</p>
            <div className="flex flex-wrap gap-4 items-center mb-10">
              <a href={`tel:${id.phone}`} className="text-white px-6 py-4 rounded-full font-medium flex items-center gap-3 transition-colors group" style={{ background: 'var(--c-primary)' }}>
                <Phone size={18} /> Appeler maintenant
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-6 py-4 rounded-full font-medium border transition-colors" style={{ borderColor: 'var(--c-ink-10)' }}>Demander un devis</a>
            </div>
            <div className="flex items-center gap-6 pt-8 border-t" style={{ borderColor: 'var(--c-ink-10)' }}>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={18} fill={theme.accent} stroke={theme.accent} />)}
                </div>
                <div className="text-3xl font-fraunces font-bold">{id.rating} / 5</div>
                <div className="text-xs uppercase tracking-widest" style={{ color: 'var(--c-ink-60)' }}>{id.reviews} avis Google</div>
              </div>
              {copy.hero.proofs.slice(1).map((proof, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="h-12 w-px" style={{ background: 'var(--c-ink-10)' }} />
                  <div>
                    <div className="text-3xl font-fraunces font-bold">{proof.label}</div>
                    <div className="text-xs uppercase tracking-widest" style={{ color: 'var(--c-ink-60)' }}>{proof.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img src={heroImg} alt={`${id.trade} ${id.cityMain}`} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-4 -right-4 p-4 rounded-2xl border-2" style={{ background: 'var(--c-bg)', borderColor: 'var(--c-accent)' }}>
              <Award style={{ color: 'var(--c-accent)' }} size={32} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERTISES */}
      <section id="expertises" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-3xl">
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight">{copy.servicesIntro}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {copy.services.map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group p-8 border rounded-2xl transition-all" style={{ borderColor: 'var(--c-ink-10)', background: 'color-mix(in srgb, var(--c-bg) 40%, white)' }}>
                <Icon name={s.icon} size={36} strokeWidth={1.5} className="mb-6" style={{ color: 'var(--c-primary)' }} />
                <h3 className="font-fraunces text-2xl font-bold mb-3">{s.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--c-ink-70)' }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉQUIPE (optionnel) */}
      {team.length > 0 && (
        <section id="equipe" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-16 mb-16">
              <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight">Une équipe, une même exigence</h2>
              {copy.about[0] && <p className="text-lg leading-relaxed self-end" style={{ color: 'var(--c-ink-70)' }}>{copy.about[0]}</p>}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {team.map((m) => (
                <div key={m.name} className="group">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4" style={{ background: 'var(--c-ink-10)' }}>
                    {m.img && <img src={m.img} alt={m.name} className="w-full h-full object-cover object-[center_25%] grayscale group-hover:grayscale-0 transition-all duration-500" />}
                  </div>
                  <div className="font-fraunces text-xl font-bold">{m.name}</div>
                  <div className="text-sm" style={{ color: 'var(--c-ink-60)' }}>{m.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CHANTIERS (optionnel) */}
      {gallery.length > 0 && (
        <section id="chantiers" className="py-24 text-white" style={{ background: 'var(--c-primary)' }}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16">
              <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight max-w-2xl">Nos chantiers, partout à {id.cityMain}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {gallery.map((src, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className={`relative overflow-hidden rounded-2xl ${i === 0 || i === 4 ? 'md:row-span-2 aspect-auto md:aspect-[3/5]' : 'aspect-square'}`}>
                  <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, color-mix(in srgb, var(--c-primary) 80%, transparent), transparent)' }} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AVIS */}
      <section id="avis" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-5xl mx-auto mb-12 bg-white border rounded-3xl p-8 md:p-10 shadow-[0_8px_32px_-12px_rgba(10,22,40,0.12)]" style={{ borderColor: 'var(--c-ink-10)' }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="flex items-center gap-6">
                <svg viewBox="0 0 24 24" className="w-12 h-12 flex-shrink-0" aria-label="Google">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-fraunces text-5xl font-bold leading-none">{id.rating.toFixed(1).replace('.', ',')}</span>
                    <span className="text-lg" style={{ color: 'var(--c-ink-60)' }}>/ 5</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={18} fill="#fbbc04" stroke="#fbbc04" />)}
                  </div>
                  <div className="text-sm mt-2" style={{ color: 'var(--c-ink-60)' }}>Basé sur <strong style={{ color: 'var(--c-ink)' }}>{id.reviews} avis Google</strong> vérifiés</div>
                </div>
              </div>
              {id.googleMapsUrl && (
                <a href={id.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-white px-6 py-3.5 rounded-full font-medium text-sm transition-colors whitespace-nowrap" style={{ background: 'var(--c-primary)' }}>
                  Voir les avis sur Google
                </a>
              )}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {reviews.map((r, i) => {
              const colors = ['#1a73e8', '#34a853', '#ea4335', '#fbbc04', '#9c27b0', '#00acc1'];
              return (
                <article key={i} className="p-6 bg-white border rounded-2xl transition-shadow" style={{ borderColor: 'var(--c-ink-10)' }}>
                  <header className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-sm flex-shrink-0" style={{ background: colors[i % colors.length] }}>
                        {r.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{r.name}</div>
                        <div className="text-xs" style={{ color: 'var(--c-ink-50)' }}>Avis local · {r.date}</div>
                      </div>
                    </div>
                  </header>
                  <div className="flex items-center gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill={s <= r.rating ? '#fbbc04' : '#e0e0e0'} stroke={s <= r.rating ? '#fbbc04' : '#e0e0e0'} />)}
                  </div>
                  <p className="leading-relaxed text-[15px]" style={{ color: 'var(--c-ink-85)' }}>{r.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24" style={{ background: 'var(--c-bg)' }}>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight mb-8">{copy.ctaTitle}</h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--c-ink-70)' }}>{copy.ctaSubtitle}</p>
            <ul className="space-y-3">
              {copy.ctaBullets.map((item, i) => (
                <li key={i} className="flex items-center gap-3"><Clock size={16} style={{ color: 'var(--c-accent)' }} /><span>{item}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-fraunces text-3xl font-bold mb-8">Décrivez-nous votre besoin</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Demande envoyée'); }} className="space-y-4">
              <input type="text" required placeholder="Votre nom" value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} className="w-full px-5 py-4 rounded-xl bg-white border outline-none transition-colors" style={{ borderColor: 'var(--c-ink-10)' }} />
              <input type="tel" required placeholder="Téléphone" value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} className="w-full px-5 py-4 rounded-xl bg-white border outline-none transition-colors" style={{ borderColor: 'var(--c-ink-10)' }} />
              <textarea required placeholder="Votre besoin" rows={5} value={form.besoin} onChange={(e) => setForm({ ...form, besoin: e.target.value })} className="w-full px-5 py-4 rounded-xl bg-white border outline-none transition-colors resize-none" style={{ borderColor: 'var(--c-ink-10)' }} />
              <button type="submit" className="w-full text-white py-4 rounded-xl font-medium transition-colors" style={{ background: 'var(--c-primary)' }}>Demander un devis gratuit</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 text-white" style={{ background: 'var(--c-primary)' }}>
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-10">
          <div>
            <div className="font-fraunces text-2xl font-bold mb-4">{id.name}</div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--c-cream-70)' }}>{id.legalName}</p>
            {id.founded && <p className="text-sm mt-2" style={{ color: 'var(--c-cream-70)' }}>Fondée en {id.founded}</p>}
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--c-accent)' }}>Contact</div>
            <a href={`tel:${id.phone}`} className="block text-sm hover:opacity-70">{id.phoneDisplay}</a>
            <p className="text-sm mt-2" style={{ color: 'var(--c-cream-70)' }}>{id.address}</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--c-accent)' }}>Expertises</div>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--c-cream-70)' }}>
              {copy.services.map((s) => <li key={s.name}>{s.name}</li>)}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--c-accent)' }}>Zone d'intervention</div>
            <div className="flex flex-wrap gap-1.5">
              {id.zones.map((z) => <span key={z} className="text-xs px-2 py-1 border rounded-full" style={{ borderColor: 'color-mix(in srgb, var(--c-bg) 20%, transparent)' }}>{z}</span>)}
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-12 pt-6 border-t flex flex-wrap justify-between gap-4 text-xs" style={{ borderColor: 'color-mix(in srgb, var(--c-bg) 10%, transparent)', color: 'var(--c-cream-70)' }}>
          <div>© {new Date().getFullYear()} {id.name}. Tous droits réservés.</div>
          <div className="flex items-center gap-2"><MapPin size={12} /> {id.cityMain}</div>
        </div>
      </footer>
    </main>
  );
}
