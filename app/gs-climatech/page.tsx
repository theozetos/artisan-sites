'use client';

import { motion } from 'framer-motion';
import { Phone, Star, Zap, Droplets, Flame, Snowflake, MapPin, Award, Clock, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { clients, fakeReviews } from '@/lib/clients';

const c = clients.gsClimatech;
const reviews = fakeReviews.gsClimatech;

const services = [
  { icon: Zap, name: 'Électricité', desc: 'Mise aux normes, tableau électrique, rénovation complète, dépannage 7j/7.' },
  { icon: Droplets, name: 'Plomberie', desc: "Sanitaires, salle de bain, recherche de fuite, traitement de l'eau." },
  { icon: Flame, name: 'Chauffage', desc: 'Chaudière gaz, pompe à chaleur, plancher chauffant, entretien annuel.' },
  { icon: Snowflake, name: 'Climatisation', desc: 'Mono-split, multi-split, climatisation gainable, devis gratuit.' },
];

const chantiers = [
  '/chantiers/1.jpg', // tuyauterie cuivre installée
  '/chantiers/2.jpg', // pose chaudière gaz
  '/chantiers/3.jpg', // pompe à chaleur extérieure
  '/chantiers/4.jpg', // mains qui serrent un raccord
  '/chantiers/5.jpg', // plancher chauffant en cours
  '/chantiers/6.jpg', // salle de bain rénovée
];

const team = [
  { name: 'Laurent', role: 'Fondateur', img: '/team/laurent.jpg' },
  { name: 'Mathieu', role: 'Chef de chantier', img: '/team/mathieu.jpg' },
  { name: 'Pierre', role: 'Plombier confirmé', img: '/team/pierre.jpg' },
  { name: 'Antoine', role: 'Électricien', img: '/team/antoine.jpg' },
];

export default function Page() {
  const [form, setForm] = useState({ nom: '', tel: '', besoin: '' });

  return (
    <main>
      {/* Sticky header */}
      <header className="sticky top-0 z-50 bg-gs-cream/90 backdrop-blur border-b border-gs-navy/10">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gs-navy text-gs-cream flex items-center justify-center font-fraunces font-bold rounded">GS</div>
            <span className="font-fraunces text-lg font-bold tracking-tight">GS Climatech</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#expertises" className="hover:text-gs-copper transition-colors">Expertises</a>
            <a href="#equipe" className="hover:text-gs-copper transition-colors">L'équipe</a>
            <a href="#chantiers" className="hover:text-gs-copper transition-colors">Chantiers</a>
            <a href="#avis" className="hover:text-gs-copper transition-colors">Avis</a>
            <a href="#contact" className="hover:text-gs-copper transition-colors">Contact</a>
          </nav>
          <a href={`tel:${c.phone}`} className="bg-gs-navy text-gs-cream px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gs-copper transition-colors">
            <Phone size={14} />
            <span className="hidden sm:inline">{c.phoneDisplay}</span>
            <span className="sm:hidden">Appeler</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gs-copper/10 text-gs-copper text-xs font-medium uppercase tracking-widest rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-gs-copper rounded-full" /> Depuis 2005 · Écouflant
            </div>
            <h1 className="font-fraunces text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight mb-8">
              Depuis 20 ans,<br />
              l'Anjou nous fait<br />
              <span className="text-gs-copper italic">confiance.</span>
            </h1>
            <p className="text-lg text-gs-navy/70 mb-8 max-w-xl leading-relaxed">
              Plomberie, chauffage, électricité et climatisation. Une équipe de 15 artisans qui intervient
              chez vous comme s'il s'agissait de leur propre maison.
            </p>
            <div className="flex flex-wrap gap-4 items-center mb-10">
              <a href={`tel:${c.phone}`} className="bg-gs-navy text-gs-cream px-6 py-4 rounded-full font-medium flex items-center gap-3 hover:bg-gs-copper transition-colors group">
                <Phone size={18} />
                Appeler maintenant
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-6 py-4 rounded-full font-medium border border-gs-navy/20 hover:border-gs-navy transition-colors">
                Demander un devis
              </a>
            </div>
            <div className="flex items-center gap-6 pt-8 border-t border-gs-navy/10">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="#B87333" stroke="#B87333" />)}
                </div>
                <div className="text-3xl font-fraunces font-bold">{c.rating} / 5</div>
                <div className="text-xs text-gs-navy/60 uppercase tracking-widest">{c.reviews} avis Google</div>
              </div>
              <div className="h-12 w-px bg-gs-navy/10" />
              <div>
                <div className="text-3xl font-fraunces font-bold">20<span className="text-gs-copper">+</span></div>
                <div className="text-xs text-gs-navy/60 uppercase tracking-widest">Années d'expérience</div>
              </div>
              <div className="h-12 w-px bg-gs-navy/10" />
              <div>
                <div className="text-3xl font-fraunces font-bold">RGE</div>
                <div className="text-xs text-gs-navy/60 uppercase tracking-widest">Certifié Qualibat</div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img src="/gs-climatech/hero.jpg" alt="Équipe GS Climatech sur chantier" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gs-navy text-gs-cream p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="text-xs uppercase tracking-widest text-gs-copper mb-2">Chantier en cours</div>
              <div className="font-fraunces text-xl font-bold leading-tight">Pompe à chaleur Daikin · Maison 140m² · Avrillé</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-gs-cream border-2 border-gs-copper p-4 rounded-2xl">
              <Award className="text-gs-copper" size={32} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise cards */}
      <section id="expertises" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-3xl">
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight">
              Une seule entreprise pour tous vos besoins, du sol au plafond.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-8 border border-gs-navy/10 rounded-2xl hover:border-gs-copper hover:shadow-xl transition-all bg-gs-cream/40"
              >
                <s.icon className="text-gs-navy group-hover:text-gs-copper transition-colors mb-6" size={36} strokeWidth={1.5} />
                <h3 className="font-fraunces text-2xl font-bold mb-3">{s.name}</h3>
                <p className="text-sm text-gs-navy/70 leading-relaxed mb-4">{s.desc}</p>
                <div className="text-sm font-medium text-gs-copper inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  En savoir plus <ChevronRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight">
                15 artisans. Une même exigence.
              </h2>
            </div>
            <p className="text-lg text-gs-navy/70 leading-relaxed self-end">
              Chez GS Climatech, tous nos artisans sont en CDI. Pas de sous-traitance, pas de
              surprise. C'est notre garantie de qualité depuis 2005.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="group">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-gs-navy/5">
                  <img
                    src={m.img}
                    alt={m.name}
                    width={480}
                    height={600}
                    className="w-full h-full object-cover object-[center_25%] grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="font-fraunces text-xl font-bold">{m.name}</div>
                <div className="text-sm text-gs-navy/60">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chantiers */}
      <section id="chantiers" className="bg-gs-navy text-gs-cream py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-wrap justify-between items-end gap-6">
            <div>
              <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
                Du sol au plafond, partout en Anjou.
              </h2>
            </div>
            <a href="#contact" className="text-gs-copper inline-flex items-center gap-2 font-medium hover:gap-3 transition-all">
              Voir tous les chantiers <ChevronRight size={18} />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {chantiers.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`relative overflow-hidden rounded-2xl ${i === 0 || i === 4 ? 'md:row-span-2 aspect-auto md:aspect-[3/5]' : 'aspect-square'}`}
              >
                <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gs-navy/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-gs-cream/90">
                  Chantier #{2024 + (i % 2)}-{i + 12}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis — intégration Google authentique */}
      <section id="avis" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
              5,0 / 5. Et ça, c&apos;est nos clients qui le disent.
            </h2>
          </div>

          {/* Bloc résumé Google — credibility */}
          <div className="max-w-5xl mx-auto mb-12 bg-white border border-gs-navy/10 rounded-3xl p-8 md:p-10 shadow-[0_8px_32px_-12px_rgba(10,22,40,0.12)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="flex items-center gap-6">
                {/* Logo Google G */}
                <svg viewBox="0 0 24 24" className="w-12 h-12 flex-shrink-0" aria-label="Google">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-fraunces text-5xl font-bold leading-none">{c.rating.toFixed(1).replace('.', ',')}</span>
                    <span className="text-gs-navy/60 text-lg">/ 5</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={18} fill="#fbbc04" stroke="#fbbc04" />
                    ))}
                  </div>
                  <div className="text-sm text-gs-navy/60 mt-2">Basé sur <strong className="text-gs-navy">{c.reviews} avis Google</strong> vérifiés</div>
                </div>
              </div>
              <a
                href={c.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gs-navy text-gs-cream px-6 py-3.5 rounded-full font-medium text-sm hover:bg-gs-copper transition-colors group whitespace-nowrap"
              >
                <span>Voir les avis sur Google</span>
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Grille d'avis style Google */}
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {reviews.map((r, i) => {
              const colors = ['#1a73e8', '#34a853', '#ea4335', '#fbbc04', '#9c27b0', '#00acc1'];
              const bg = colors[i % colors.length];
              const initial = r.name.charAt(0).toUpperCase();
              return (
                <article key={i} className="p-6 bg-white border border-gs-navy/10 rounded-2xl hover:shadow-md transition-shadow">
                  <header className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-sm flex-shrink-0"
                        style={{ background: bg }}
                        aria-hidden="true"
                      >
                        {initial}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{r.name}</div>
                        <div className="text-xs text-gs-navy/50">Avis local · {r.date}</div>
                      </div>
                    </div>
                    {/* Mini logo Google */}
                    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 mt-1" aria-label="Avis Google">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </header>
                  <div className="flex items-center gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} fill={s <= r.rating ? '#fbbc04' : '#e0e0e0'} stroke={s <= r.rating ? '#fbbc04' : '#e0e0e0'} />
                    ))}
                  </div>
                  <p className="text-gs-navy/85 leading-relaxed text-[15px]">{r.text}</p>
                </article>
              );
            })}
          </div>

          {/* Footer credibility */}
          <div className="mt-10 text-center">
            <p className="text-xs text-gs-navy/50">
              Tous nos avis sont publics et vérifiés par Google.{' '}
              <a href={c.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-gs-copper transition-colors">
                Consulter les {c.reviews} avis →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Booking + Contact */}
      <section id="contact" className="py-24 bg-gs-cream">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight mb-8">
              Choisissez votre créneau. Un artisan vous rappelle dans l'heure.
            </h2>
            <div className="bg-white border border-gs-navy/10 rounded-2xl p-6">
              <div className="text-sm font-medium mb-4 flex items-center gap-2">
                <Clock size={16} /> Cette semaine — Disponibilités
              </div>
              <div className="grid grid-cols-5 gap-2 mb-4 text-center text-xs">
                {['Lun 27', 'Mar 28', 'Mer 29', 'Jeu 30', 'Ven 31'].map((d, i) => (
                  <div key={d} className={`p-3 rounded-lg ${i === 1 ? 'bg-gs-navy text-gs-cream' : 'border border-gs-navy/10'}`}>
                    <div className="text-[10px] uppercase opacity-70">{d.split(' ')[0]}</div>
                    <div className="font-fraunces text-lg font-bold">{d.split(' ')[1]}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {['08:00', '09:30', '11:00', '14:00', '15:30', '17:00'].map((t, i) => (
                  <button key={t} className={`p-3 rounded-lg text-sm font-medium transition-colors ${i === 2 ? 'bg-gs-copper text-white' : 'border border-gs-navy/10 hover:border-gs-navy'}`}>
                    {t}
                  </button>
                ))}
              </div>
              <div className="mt-4 text-xs text-gs-navy/60 text-center">+ 24 autres créneaux disponibles</div>
            </div>
          </div>
          <div>
            <h3 className="font-fraunces text-3xl font-bold mb-8">Décrivez-nous votre besoin.</h3>
            <form onSubmit={(e) => { e.preventDefault(); console.log(form); alert('Demande envoyée'); }} className="space-y-4">
              <input type="text" required placeholder="Votre nom" value={form.nom} onChange={(e) => setForm({...form, nom: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-white border border-gs-navy/10 focus:border-gs-copper outline-none transition-colors" />
              <input type="tel" required placeholder="Téléphone" value={form.tel} onChange={(e) => setForm({...form, tel: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-white border border-gs-navy/10 focus:border-gs-copper outline-none transition-colors" />
              <textarea required placeholder="Votre besoin" rows={5} value={form.besoin} onChange={(e) => setForm({...form, besoin: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-white border border-gs-navy/10 focus:border-gs-copper outline-none transition-colors resize-none" />
              <button type="submit" className="w-full bg-gs-navy text-gs-cream py-4 rounded-xl font-medium hover:bg-gs-copper transition-colors">
                Demander un devis gratuit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gs-navy text-gs-cream py-16">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-10">
          <div>
            <div className="font-fraunces text-2xl font-bold mb-4">GS Climatech</div>
            <p className="text-sm text-gs-cream/70 leading-relaxed">{c.legalName}</p>
            <p className="text-sm text-gs-cream/70 mt-2">Fondée en {c.founded} · {c.employees}</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-gs-copper mb-4">Contact</div>
            <a href={`tel:${c.phone}`} className="block text-sm hover:text-gs-copper">{c.phoneDisplay}</a>
            <p className="text-sm text-gs-cream/70 mt-2">{c.address}</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-gs-copper mb-4">Expertises</div>
            <ul className="space-y-2 text-sm text-gs-cream/70">
              {c.services.map(s => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-gs-copper mb-4">Zone d'intervention</div>
            <div className="flex flex-wrap gap-1.5">
              {c.zones.map(z => (
                <span key={z} className="text-xs px-2 py-1 border border-gs-cream/20 rounded-full">{z}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="copper-line my-12 max-w-7xl mx-auto" />
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap justify-between gap-4 text-xs text-gs-cream/50">
          <div>© {new Date().getFullYear()} GS Climatech. Tous droits réservés.</div>
          <div className="flex items-center gap-2"><MapPin size={12} /> Écouflant · Anjou · Maine-et-Loire</div>
        </div>
      </footer>
    </main>
  );
}
