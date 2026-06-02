'use client';

import { motion } from 'framer-motion';
import { Phone, Star, Wrench, Droplets, Search, Bath, Clock, CheckCircle2, ChevronRight, Smartphone, Calendar } from 'lucide-react';
import { useState } from 'react';
import { clients, fakeReviews } from '@/lib/clients';

const c = clients.aquajeune;
const reviews = fakeReviews.aquajeune;

const prices = [
  { name: 'Déplacement', from: '49 €', desc: 'Sur Valence & alentours (gratuit si devis accepté)' },
  { name: 'Débouchage canalisation', from: '129 €', desc: 'Lavabo / évier / WC · garantie 6 mois' },
  { name: 'Réparation fuite simple', from: '95 €', desc: 'Pièce + main d\'œuvre · 1h max' },
  { name: 'Pose chauffe-eau', from: '290 €', desc: 'Hors fourniture · garantie 2 ans' },
  { name: 'Recherche de fuite (caméra)', from: '180 €', desc: 'Détection sans casse · rapport remis' },
  { name: 'Salle de bain complète', from: '4 500 €', desc: 'Devis détaillé en 24h · sur mesure' },
];

const services = [
  { icon: Wrench, name: 'Dépannage rapide', desc: 'Fuite, débouchage, remplacement de pièce — sur place en 1h sur Valence.' },
  { icon: Droplets, name: 'Installation sanitaire', desc: 'Chauffe-eau, robinetterie, WC suspendu, mitigeurs thermostatiques.' },
  { icon: Search, name: 'Recherche de fuite', desc: 'Caméra thermique + gaz traceur. Détection sans casser un seul carrelage.' },
  { icon: Bath, name: 'Salle de bain clé en main', desc: 'Devis fixe, pas de surprise. De la dépose à la mise en service.' },
];

export default function Page() {
  const [form, setForm] = useState({ nom: '', tel: '', besoin: '' });

  return (
    <main className="font-inter bg-aj-bone text-aj-ink min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-aj-bone/95 backdrop-blur border-b border-aj-blue/10">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-aj-blue text-white flex items-center justify-center font-bold">A</div>
            <div>
              <div className="font-bold text-lg leading-tight">Aqua Jeune</div>
              <div className="text-[10px] text-aj-ink/55 uppercase tracking-widest -mt-0.5">Plombier · Valence</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-semibold">
            <a href="#tarifs" className="hover:text-aj-blue transition-colors">Tarifs</a>
            <a href="#services" className="hover:text-aj-blue transition-colors">Services</a>
            <a href="#avis" className="hover:text-aj-blue transition-colors">Avis</a>
            <a href="#rdv" className="hover:text-aj-blue transition-colors">Rendez-vous</a>
          </nav>
          <a href={`tel:${c.phone}`} className="bg-aj-coral text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-aj-coral-dk transition-colors">
            <Phone size={14} />
            <span className="hidden sm:inline">Appeler</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-aj-blue-pale rounded-full -translate-y-1/3 translate-x-1/3 opacity-50" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-aj-coral/8 rounded-full translate-y-1/2 -translate-x-1/3" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-aj-coral/10 text-aj-coral-dk text-xs font-bold uppercase tracking-widest rounded-full mb-7">
              <span className="w-2 h-2 bg-aj-coral rounded-full animate-pulse" /> Disponible aujourd'hui
            </div>
            <h1 className="font-fraunces text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-7">
              Plombier moderne.<br />
              <span className="text-aj-blue italic">Tarifs clairs.</span><br />
              <span className="text-aj-coral italic">Sur place en 1h.</span>
            </h1>
            <p className="text-lg text-aj-ink/72 mb-8 max-w-lg leading-relaxed">
              Vous tapez votre besoin, vous voyez le prix, vous prenez RDV. Pas d'appel commercial. Pas de surprise sur la facture.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#rdv" className="bg-aj-blue text-white px-7 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-aj-blue-dk transition-colors">
                <Calendar size={16} /> Prendre RDV en 3 clics
              </a>
              <a href={`tel:${c.phone}`} className="px-7 py-4 rounded-full font-bold border-2 border-aj-ink/10 text-aj-ink hover:border-aj-coral hover:text-aj-coral transition-colors flex items-center gap-2">
                <Phone size={16} /> {c.phoneDisplay}
              </a>
            </div>
            <div className="flex items-center gap-6 mt-10 pt-7 border-t border-aj-ink/8">
              <div>
                <div className="flex items-center gap-0.5 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="#fbbc04" stroke="#fbbc04" />)}
                </div>
                <div className="text-sm font-bold">{c.rating} / 5</div>
                <div className="text-xs text-aj-ink/55">{c.reviews} avis Google</div>
              </div>
              <div className="h-12 w-px bg-aj-ink/10" />
              <div>
                <div className="text-sm font-bold text-aj-blue">1h chrono</div>
                <div className="text-xs text-aj-ink/55">Sur Valence et alentours</div>
              </div>
              <div className="h-12 w-px bg-aj-ink/10" />
              <div>
                <div className="text-sm font-bold text-aj-coral">Tarifs publics</div>
                <div className="text-xs text-aj-ink/55">Affichés sur le site</div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img src="/aquajeune/hero.jpg" alt="Maxime en intervention cuisine" width={1312} height={816} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl max-w-[240px] border-l-4 border-aj-coral">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-aj-blue mb-2">
                <Smartphone size={11} /> Prochain créneau
              </div>
              <div className="font-bold text-base leading-tight mb-1">Aujourd'hui · 16h30</div>
              <div className="text-xs text-aj-ink/65">Maxime est disponible</div>
              <a href="#rdv" className="mt-3 block text-center bg-aj-blue text-white py-2 rounded-full text-xs font-bold hover:bg-aj-blue-dk transition-colors">
                Réserver ce créneau
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUI SUIS-JE */}
      <section className="py-20 md:py-24 bg-aj-blue-pale/30">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-xs uppercase tracking-widest text-aj-blue font-bold mb-4">Le plombier</div>
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight mb-6">
              Salut, c'est Maxime.<br />
              <span className="text-aj-coral italic">Plombier à Valence.</span>
            </h2>
            <p className="text-aj-ink/75 mb-5 leading-relaxed">
              "J'ai installé Aqua Jeune en 2023 parce que j'en avais marre de voir les Valentinois galérer à trouver un plombier qui donne ses prix. Aujourd'hui, je suis seul, je gère mon planning depuis mon smartphone, et je tiens mes engagements."
            </p>
            <p className="text-aj-ink/75 mb-7 leading-relaxed">
              "Mes tarifs sont publics. Mon agenda est en ligne. Si je suis pas dispo, mon site vous le dit. Bref, je vous fais gagner du temps."
            </p>
            <div className="flex flex-wrap gap-3 text-xs">
              <span className="px-3 py-1.5 bg-aj-blue/10 text-aj-blue rounded-full font-bold">Diplômé BTS Fluides Énergies 2018</span>
              <span className="px-3 py-1.5 bg-aj-coral/10 text-aj-coral-dk rounded-full font-bold">Assurance décennale MAAF</span>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <img src="/aquajeune/maxime.jpg" alt="Maxime Bertrand, plombier à Valence" width={928} height={1152} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* TARIFS PUBLICS */}
      <section id="tarifs" className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight">
                Mes tarifs,<br />
                <span className="text-aj-coral italic">en clair.</span>
              </h2>
              <p className="mt-5 text-aj-ink/70 leading-relaxed">
                Marre des plombiers qui ne donnent jamais leur prix au téléphone ? Voilà mes tarifs à partir desquels je travaille. Devis ferme avant chaque intervention.
              </p>
            </div>
            <div className="aspect-[16/9] rounded-2xl overflow-hidden">
              <img src="/aquajeune/tarifs.jpg" alt="Tarifs affichés sur tablette" width={1376} height={768} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {prices.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 bg-aj-bone border border-aj-ink/8 rounded-2xl hover:border-aj-blue/40 hover:shadow-md transition-all"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <div className="font-bold text-base leading-tight">{p.name}</div>
                  <div className="text-aj-blue font-fraunces text-2xl font-bold">{p.from}</div>
                </div>
                <p className="text-xs text-aj-ink/65 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-aj-ink/55 mt-5 text-center">
            Tarifs TTC indicatifs · TVA 10% sur la main-d'œuvre · Devis détaillé remis avant intervention
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-24 bg-aj-blue-pale/30">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 grid lg:grid-cols-5 gap-10 items-end">
            <div className="lg:col-span-3">
              <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight">
                Ce que je fais,<br />
                <span className="text-aj-blue italic">tous les jours.</span>
              </h2>
            </div>
            <div className="lg:col-span-2 aspect-square rounded-2xl overflow-hidden">
              <img src="/aquajeune/fuite.jpg" alt="Recherche de fuite par caméra thermique" width={1024} height={1024} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-6 bg-white rounded-2xl hover:shadow-md transition-shadow flex gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-aj-blue/10 flex items-center justify-center flex-shrink-0">
                  <s.icon className="text-aj-blue" size={22} strokeWidth={1.7} />
                </div>
                <div>
                  <h3 className="font-fraunces text-xl font-bold mb-1.5">{s.name}</h3>
                  <p className="text-sm text-aj-ink/70 leading-relaxed">{s.desc}</p>
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
            <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-full bg-aj-blue-pale/60">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-sm font-bold">{c.rating} / 5 sur Google · {c.reviews} avis</span>
            </div>
            <h2 className="font-fraunces text-3xl md:text-4xl font-bold leading-tight">Les Valentinois me notent <span className="italic text-aj-coral">à fond.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {reviews.map((r, i) => {
              const colors = ['#3A8DDE', '#FF7F6E', '#1a73e8', '#34a853'];
              const bg = colors[i % colors.length];
              const initial = r.name.charAt(0).toUpperCase();
              return (
                <article key={i} className="p-6 bg-aj-bone rounded-2xl border border-aj-ink/5">
                  <header className="flex items-start gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: bg }}>
                      {initial}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{r.name}</div>
                      <div className="text-xs text-aj-ink/55">{r.date}</div>
                    </div>
                  </header>
                  <div className="flex items-center gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={13} fill={s <= r.rating ? '#fbbc04' : '#e0e0e0'} stroke={s <= r.rating ? '#fbbc04' : '#e0e0e0'} />
                    ))}
                  </div>
                  <p className="text-aj-ink/85 leading-relaxed text-sm">{r.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* RDV / CONTACT */}
      <section id="rdv" className="py-20 md:py-24 bg-aj-blue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-aj-coral/10 rounded-full -translate-y-1/3 translate-x-1/3" />
        <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight mb-6">
              Décrivez votre souci,<br />
              <span className="text-aj-coral italic">je vous appelle dans la foulée.</span>
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              On échange 5 min au téléphone, je vous donne un prix ferme, je viens. Vous pouvez aussi prendre RDV directement en ligne, je décale mes créneaux si urgence.
            </p>
            <ul className="space-y-3">
              {['Devis ferme avant intervention', 'Intervention en 1h sur Valence', 'Garantie 6 mois minimum sur tout', 'Paiement par CB sur place'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="text-aj-coral flex-shrink-0" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Demande envoyée'); }} className="space-y-3 bg-white text-aj-ink p-6 rounded-3xl">
              <input type="text" required placeholder="Votre prénom" value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-aj-ink/15 focus:border-aj-blue outline-none" />
              <input type="tel" required placeholder="Téléphone (pour le SMS de confirmation)" value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-aj-ink/15 focus:border-aj-blue outline-none" />
              <textarea required placeholder="Décrivez votre problème : fuite ? installation ? rénovation ?" rows={5} value={form.besoin} onChange={(e) => setForm({ ...form, besoin: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-aj-ink/15 focus:border-aj-blue outline-none resize-none" />
              <button type="submit" className="w-full bg-aj-coral text-white py-4 rounded-xl font-bold hover:bg-aj-coral-dk transition-colors flex items-center justify-center gap-2">
                <Clock size={16} /> Recevoir mon créneau par SMS
              </button>
              <p className="text-xs text-aj-ink/55 text-center">Réponse en moins d'1h · Sans engagement</p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-aj-ink text-aj-bone py-12">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-fraunces text-2xl font-bold mb-3">Aqua Jeune</div>
            <p className="text-sm text-aj-bone/65 leading-relaxed">{c.legalName}</p>
            <p className="text-sm text-aj-bone/65 mt-2">Fondé en {c.founded}</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-aj-coral mb-3 font-bold">Contact</div>
            <a href={`tel:${c.phone}`} className="block text-sm hover:text-aj-coral">{c.phoneDisplay}</a>
            <a href={`mailto:${c.email}`} className="block text-sm hover:text-aj-coral mt-1">{c.email}</a>
            <p className="text-sm text-aj-bone/65 mt-2">{c.address}</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-aj-coral mb-3 font-bold">Zone d'intervention</div>
            <div className="flex flex-wrap gap-1.5">
              {c.zones?.map((z) => (
                <span key={z} className="text-xs px-2 py-1 border border-aj-bone/20 rounded-full">{z}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 mt-10 pt-6 border-t border-aj-bone/10 flex flex-wrap justify-between gap-3 text-xs text-aj-bone/50">
          <div>© {new Date().getFullYear()} Aqua Jeune. Tous droits réservés.</div>
          <div>Valence · Drôme · Ardèche</div>
        </div>
      </footer>
    </main>
  );
}
