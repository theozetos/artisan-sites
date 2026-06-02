'use client';

import { motion } from 'framer-motion';
import { Phone, Star, Hammer, Zap, Droplets, Home, HardHat, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { clients, fakeReviews } from '@/lib/clients';

const c = clients.maisonpro;
const reviews = fakeReviews.maisonpro;

const trades = [
  { icon: Droplets, name: 'Plomberie', count: '6 artisans' },
  { icon: Zap, name: 'Électricité', count: '4 artisans' },
  { icon: Hammer, name: 'Maçonnerie', count: '8 artisans' },
  { icon: Home, name: 'Couverture', count: '3 artisans' },
  { icon: Layers, name: 'Isolation', count: '2 artisans' },
  { icon: HardHat, name: 'Direction de chantier', count: '2 chefs' },
];

const projects = [
  { title: 'Rénovation maison 140 m²', loc: 'Avrillé · 2024', duration: '4 mois', budget: '120 K€' },
  { title: 'Extension + couverture', loc: 'Trélazé · 2024', duration: '7 semaines', budget: '48 K€' },
  { title: 'Réfection plomberie + élec', loc: 'Angers · 2024', duration: '3 semaines', budget: '22 K€' },
  { title: 'Salle de bain clé en main', loc: 'Beaucouzé · 2025', duration: '2 semaines', budget: '14 K€' },
];

export default function Page() {
  const [form, setForm] = useState({ nom: '', tel: '', email: '', projet: '' });

  return (
    <main className="font-inter bg-mp-bone text-mp-graphite min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-mp-graphite text-mp-bone">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-mp-orange flex items-center justify-center font-bold text-mp-graphite">MP</div>
            <div>
              <div className="font-bold text-sm leading-tight">MaisonPro Bati</div>
              <div className="text-[10px] text-mp-bone/55 uppercase tracking-widest">Tous corps d'état · 49</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#equipe" className="hover:text-mp-orange transition-colors">L'équipe</a>
            <a href="#chantiers" className="hover:text-mp-orange transition-colors">Chantiers</a>
            <a href="#avis" className="hover:text-mp-orange transition-colors">Avis</a>
            <a href="#devis" className="hover:text-mp-orange transition-colors">Demander un devis</a>
          </nav>
          <a href={`tel:${c.phone}`} className="bg-mp-orange text-mp-graphite px-4 py-2 rounded-md text-sm font-bold flex items-center gap-2 hover:bg-mp-orange-dk transition-colors">
            <Phone size={14} />
            <span className="hidden sm:inline">{c.phoneDisplay}</span>
            <span className="sm:hidden">Appeler</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-mp-graphite text-mp-bone py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(45deg, #FF6B35 25%, transparent 25%, transparent 50%, #FF6B35 50%, #FF6B35 75%, transparent 75%, transparent)', backgroundSize: '40px 40px' }} />
        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-mp-orange/35 text-mp-orange text-xs font-bold uppercase tracking-widest rounded-sm mb-7">
              Depuis 2008 · {c.employees}
            </div>
            <h1 className="font-fraunces text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-7">
              L'entrepreneur unique<br />
              <span className="text-mp-orange italic">pour tous vos travaux.</span>
            </h1>
            <p className="text-lg text-mp-bone/75 mb-9 max-w-xl leading-relaxed">
              25 artisans, 6 corps d'état, 1 chef de chantier dédié. Vous parlez à une seule personne, du devis à la livraison.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#devis" className="bg-mp-orange text-mp-graphite px-7 py-4 rounded-md font-bold flex items-center gap-2 hover:bg-mp-orange-dk transition-colors">
                Demander un devis <ArrowRight size={16} />
              </a>
              <a href={`tel:${c.phone}`} className="px-7 py-4 rounded-md font-bold border-2 border-mp-bone/25 hover:border-mp-orange hover:text-mp-orange transition-colors flex items-center gap-2">
                <Phone size={16} /> {c.phoneDisplay}
              </a>
            </div>
            <div className="grid grid-cols-4 gap-5 pt-7 border-t border-mp-bone/15">
              <div>
                <div className="font-fraunces text-3xl font-bold text-mp-orange">17</div>
                <div className="text-xs text-mp-bone/55 uppercase tracking-wider mt-1">Ans d'expérience</div>
              </div>
              <div>
                <div className="font-fraunces text-3xl font-bold text-mp-orange">25</div>
                <div className="text-xs text-mp-bone/55 uppercase tracking-wider mt-1">Artisans salariés</div>
              </div>
              <div>
                <div className="font-fraunces text-3xl font-bold text-mp-orange">450+</div>
                <div className="text-xs text-mp-bone/55 uppercase tracking-wider mt-1">Chantiers livrés</div>
              </div>
              <div>
                <div className="font-fraunces text-3xl font-bold text-mp-orange">{c.rating}</div>
                <div className="text-xs text-mp-bone/55 uppercase tracking-wider mt-1">{c.reviews} avis Google</div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border-l-4 border-mp-orange shadow-2xl">
              <img src="/maisonpro/hero.jpg" alt="Équipe MaisonPro Bati en plan de chantier" width={1312} height={816} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-mp-graphite via-mp-graphite/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-mp-orange mb-2">
                  <HardHat size={14} /> Chantier en cours
                </div>
                <div className="font-fraunces text-xl font-bold leading-tight text-mp-bone mb-3">Rénovation maison 1930 — Avrillé · 165 m²</div>
                <div className="bg-mp-graphite/30 rounded h-1.5 mb-2 backdrop-blur">
                  <div className="bg-mp-orange h-full rounded" style={{ width: '62%' }} />
                </div>
                <div className="text-xs text-mp-bone/80 font-semibold">62% · Livraison sous 2 mois · 142 000 € TTC</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ÉQUIPE / CORPS D'ÉTAT */}
      <section id="equipe" className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight">
                25 artisans salariés.<br />
                <span className="text-mp-orange italic">6 corps d'état.</span>
              </h2>
              <p className="mt-5 text-mp-graphite/70 leading-relaxed">
                Tous nos artisans sont en CDI. Pas de sous-traitance, pas de surprise. C'est notre garantie de qualité depuis 2008.
              </p>
            </div>
            <div className="rounded-sm overflow-hidden aspect-[16/9] border-l-4 border-mp-orange">
              <img src="/maisonpro/equipe.jpg" alt="L'équipe MaisonPro Bati devant le fourgon" width={1376} height={768} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trades.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 bg-mp-bone border-l-4 border-mp-orange rounded-sm hover:bg-white hover:shadow-md transition-all flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-md bg-mp-graphite text-mp-orange flex items-center justify-center flex-shrink-0">
                  <t.icon size={22} strokeWidth={1.7} />
                </div>
                <div>
                  <div className="font-fraunces text-xl font-bold leading-tight">{t.name}</div>
                  <div className="text-xs text-mp-steel uppercase tracking-wider mt-1 font-semibold">{t.count}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRIGEANT */}
      <section className="py-20 md:py-24 bg-mp-bone">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img src="/maisonpro/stephane.jpg" alt="Stéphane Lefèvre, dirigeant MaisonPro Bati" width={928} height={1152} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-mp-orange text-mp-graphite p-5 rounded-sm shadow-xl max-w-[220px]">
              <div className="text-[10px] uppercase tracking-widest font-bold mb-1">Dirigeant</div>
              <div className="font-fraunces text-lg font-bold leading-tight">Stéphane Lefèvre</div>
              <div className="text-xs text-mp-graphite/75 mt-1">17 ans à Angers</div>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-mp-orange font-bold mb-4">Le dirigeant</div>
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight mb-6">
              "Je passe sur tous<br />
              <span className="text-mp-orange italic">les chantiers."</span>
            </h2>
            <p className="text-mp-graphite/75 mb-5 leading-relaxed">
              Stéphane Lefèvre a fondé MaisonPro Bati en 2008 après 12 ans de chefferie de chantier. Aujourd'hui, son entreprise compte 25 artisans en CDI, tous corps d'état, et a livré plus de 450 chantiers sur Angers et l'Anjou.
            </p>
            <p className="text-mp-graphite/75 mb-7 leading-relaxed">
              "On grandit doucement. Quand on prend un nouvel artisan, on le forme 2 mois avant de l'envoyer en autonomie. C'est le prix de la qualité."
            </p>
            <div className="flex flex-wrap gap-2">
              {c.certifications?.map((cert) => (
                <span key={cert} className="text-xs px-3 py-1.5 bg-mp-graphite text-mp-orange rounded-sm font-bold uppercase tracking-wider">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHANTIERS */}
      <section id="chantiers" className="py-20 md:py-24 bg-mp-graphite text-mp-bone">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 grid lg:grid-cols-5 gap-10 items-end">
            <div className="lg:col-span-3">
              <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight">
                Quelques chantiers récents,<br />
                <span className="text-mp-orange italic">livrés dans les temps.</span>
              </h2>
            </div>
            <div className="lg:col-span-2 aspect-[3/2] rounded-sm overflow-hidden">
              <img src="/maisonpro/chantier.jpg" alt="Chantier de rénovation en cours" width={1264} height={848} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 bg-mp-bone/5 border border-mp-bone/10 rounded-sm hover:border-mp-orange/45 transition-colors"
              >
                <div className="text-xs uppercase tracking-widest text-mp-orange font-bold mb-3">{p.loc}</div>
                <h3 className="font-fraunces text-2xl font-bold mb-5 leading-tight">{p.title}</h3>
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-mp-bone/10 text-sm">
                  <div>
                    <div className="text-mp-bone/55 text-xs uppercase tracking-wider mb-1">Durée</div>
                    <div className="font-semibold">{p.duration}</div>
                  </div>
                  <div>
                    <div className="text-mp-bone/55 text-xs uppercase tracking-wider mb-1">Budget</div>
                    <div className="font-semibold">{p.budget}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AVIS GOOGLE */}
      <section id="avis" className="py-20 md:py-24 bg-mp-bone">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-white border border-mp-graphite/10 rounded-sm">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-sm font-bold">{c.rating} / 5 · {c.reviews} avis Google</span>
            </div>
            <h2 className="font-fraunces text-3xl md:text-4xl font-bold leading-tight">156 clients qu'on a aidés depuis 2008.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {reviews.map((r, i) => {
              const colors = ['#FF6B35', '#1a73e8', '#34a853', '#ea4335'];
              const bg = colors[i % colors.length];
              const initial = r.name.charAt(0).toUpperCase();
              return (
                <article key={i} className="p-6 bg-white rounded-sm border border-mp-graphite/8 hover:shadow-md transition-shadow">
                  <header className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: bg }}>
                        {initial}
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{r.name}</div>
                        <div className="text-xs text-mp-steel">{r.date}</div>
                      </div>
                    </div>
                  </header>
                  <div className="flex items-center gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={13} fill={s <= r.rating ? '#fbbc04' : '#e0e0e0'} stroke={s <= r.rating ? '#fbbc04' : '#e0e0e0'} />
                    ))}
                  </div>
                  <p className="text-mp-graphite/85 leading-relaxed text-sm">{r.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEVIS */}
      <section id="devis" className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight mb-6">
              Décrivez votre projet,<br />
              <span className="text-mp-orange italic">on chiffre en 48h.</span>
            </h2>
            <p className="text-mp-graphite/75 mb-8 leading-relaxed">
              Stéphane vous appelle pour comprendre votre projet, on se déplace pour le métré, on revient avec un devis détaillé sous 48 heures.
            </p>
            <ul className="space-y-3">
              {['Visite + métré gratuit', 'Devis détaillé sous 48h', 'Garantie décennale Qualibat', 'Un chef de chantier dédié'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="text-mp-orange flex-shrink-0" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Demande envoyée'); }} className="space-y-3 bg-mp-bone p-6 rounded-sm border-l-4 border-mp-orange">
              <input type="text" required placeholder="Votre nom" value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} className="w-full px-4 py-3 rounded-sm border border-mp-graphite/15 focus:border-mp-orange outline-none" />
              <div className="grid sm:grid-cols-2 gap-3">
                <input type="tel" required placeholder="Téléphone" value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} className="w-full px-4 py-3 rounded-sm border border-mp-graphite/15 focus:border-mp-orange outline-none" />
                <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-sm border border-mp-graphite/15 focus:border-mp-orange outline-none" />
              </div>
              <textarea required placeholder="Décrivez votre projet (surface, corps d'état souhaités, délai…)" rows={5} value={form.projet} onChange={(e) => setForm({ ...form, projet: e.target.value })} className="w-full px-4 py-3 rounded-sm border border-mp-graphite/15 focus:border-mp-orange outline-none resize-none" />
              <button type="submit" className="w-full bg-mp-graphite text-mp-bone py-4 rounded-sm font-bold hover:bg-mp-orange hover:text-mp-graphite transition-colors flex items-center justify-center gap-2">
                Demander mon devis <ArrowRight size={16} />
              </button>
              <p className="text-xs text-mp-steel text-center">Réponse sous 24h ouvrées</p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-mp-graphite-dk text-mp-bone py-14">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-8">
          <div>
            <div className="font-fraunces text-2xl font-bold mb-3">MaisonPro Bati</div>
            <p className="text-sm text-mp-bone/65 leading-relaxed">{c.legalName}</p>
            <p className="text-sm text-mp-bone/65 mt-2">Fondée en {c.founded}</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-mp-orange mb-3 font-bold">Contact</div>
            <a href={`tel:${c.phone}`} className="block text-sm hover:text-mp-orange">{c.phoneDisplay}</a>
            <a href={`mailto:${c.email}`} className="block text-sm hover:text-mp-orange mt-1">{c.email}</a>
            <p className="text-sm text-mp-bone/65 mt-2">{c.address}</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-mp-orange mb-3 font-bold">Certifications</div>
            <ul className="space-y-1.5 text-sm text-mp-bone/75">
              {c.certifications?.map((cert) => <li key={cert}>{cert}</li>)}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-mp-orange mb-3 font-bold">Zone d'intervention</div>
            <div className="flex flex-wrap gap-1.5">
              {c.zones?.map((z) => (
                <span key={z} className="text-xs px-2 py-1 border border-mp-bone/20 rounded-sm">{z}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-10 pt-6 border-t border-mp-bone/10 flex flex-wrap justify-between gap-3 text-xs text-mp-bone/50">
          <div>© {new Date().getFullYear()} MaisonPro Bati. Tous droits réservés.</div>
          <div>Angers · Maine-et-Loire · Anjou</div>
        </div>
      </footer>
    </main>
  );
}
