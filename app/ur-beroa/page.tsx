'use client';

import { motion } from 'framer-motion';
import { Phone, Star, MapPin, Quote, Wrench, Droplets, Flame, ShowerHead } from 'lucide-react';
import { useState } from 'react';
import { clients, fakeReviews } from '@/lib/clients';

const c = clients.urBeroa;
const reviews = fakeReviews.urBeroa;

const services = [
  { icon: Droplets, name: 'Plomberie', desc: 'Installation et rénovation complète. Robinetterie, canalisations, ballon d\'eau chaude.' },
  { icon: Flame, name: 'Chauffage', desc: 'Chaudière, radiateurs, plancher chauffant. Entretien annuel et dépannage.' },
  { icon: ShowerHead, name: 'Sanitaire', desc: 'Salle de bain clé en main, douche italienne, faïence. Conception sur mesure.' },
  { icon: Wrench, name: 'Dépannage', desc: 'Fuites, débouchage, urgences. Intervention rapide à Bayonne et alentours.' },
];

export default function Page() {
  const [form, setForm] = useState({ nom: '', tel: '', besoin: '' });

  return (
    <main>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-ur-cream/95 backdrop-blur border-b border-ur-olive/10">
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-ur-red text-ur-cream flex items-center justify-center font-fraunces font-bold text-lg rounded-full">U</div>
            <div>
              <div className="font-fraunces text-xl font-bold leading-none">Ur Beroa</div>
              <div className="text-[10px] uppercase tracking-widest text-ur-olive/60 mt-1">Plombier · Bayonne</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#metiers" className="hover:text-ur-red transition-colors">Métiers</a>
            <a href="#histoire" className="hover:text-ur-red transition-colors">Notre histoire</a>
            <a href="#zones" className="hover:text-ur-red transition-colors">Zones</a>
            <a href="#avis" className="hover:text-ur-red transition-colors">Avis</a>
            <a href="#contact" className="hover:text-ur-red transition-colors">Contact</a>
          </nav>
          <a href={`tel:${c.phone}`} className="bg-ur-red text-ur-cream px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-ur-olive transition-colors">
            <Phone size={14} /> <span className="hidden sm:inline">{c.phoneDisplay}</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden lauburu-bg">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-ur-red" />
              <span className="text-xs uppercase tracking-[0.3em] text-ur-red font-medium">Euskal Herria · Pays Basque</span>
            </div>
            <h1 className="font-fraunces text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight mb-6">
              Plomberie à<br />
              <span className="text-ur-red">Bayonne.</span>
            </h1>
            <p className="font-fraunces italic text-2xl md:text-3xl text-ur-wood mb-3">
              Berotasuna eta kalitatea.
            </p>
            <p className="text-lg text-ur-olive/70 max-w-xl mb-10 leading-relaxed">
              Chaleur et qualité depuis 2015. Une plomberie artisanale, transmise de père en fils,
              au service du Pays Basque.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a href={`tel:${c.phone}`} className="bg-ur-red text-ur-cream px-7 py-4 rounded-full font-medium flex items-center gap-3 hover:bg-ur-olive transition-colors">
                <Phone size={18} /> Appeler Raphael
              </a>
              <a href="#contact" className="px-7 py-4 rounded-full font-medium border border-ur-olive/30 hover:border-ur-red hover:text-ur-red transition-colors">
                Demander un devis
              </a>
            </div>
            <div className="flex items-center gap-8 pt-6 border-t border-ur-olive/10">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#BC1F26" stroke="#BC1F26" />)}
                </div>
                <div className="text-xs uppercase tracking-widest text-ur-olive/60">{c.rating}/5 · {c.reviews} avis</div>
              </div>
              <div>
                <div className="font-fraunces text-3xl font-bold text-ur-red">10</div>
                <div className="text-xs uppercase tracking-widest text-ur-olive/60">ans à Bayonne</div>
              </div>
              <div>
                <div className="font-fraunces text-3xl font-bold text-ur-red">100%</div>
                <div className="text-xs uppercase tracking-widest text-ur-olive/60">artisan local</div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative">
              <img src="/ur-beroa/hero.jpg" alt="Bayonne — Pays Basque" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ur-red/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-ur-cream border border-ur-red/20 p-5 rounded-2xl shadow-xl max-w-[240px]">
              <div className="text-xs uppercase tracking-widest text-ur-red mb-2">Bayonne, France</div>
              <p className="font-fraunces text-base leading-snug italic">"Le plombier qu'il faut au Pays Basque."</p>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-ur-red rounded-full flex items-center justify-center text-ur-cream font-fraunces font-bold leading-tight text-center text-sm">
              Artisan<br />Bayonnais
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services / Métiers */}
      <section id="metiers" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-3xl">
            <h2 className="font-fraunces text-4xl md:text-6xl font-bold leading-tight">
              Du robinet qui fuit<br />
              <span className="italic text-ur-wood">à la salle de bain entière.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-10 border-l-2 border-ur-red/20 hover:border-ur-red transition-colors"
              >
                <s.icon className="text-ur-red mb-6" size={40} strokeWidth={1.5} />
                <h3 className="font-fraunces text-3xl font-bold mb-3">{s.name}</h3>
                <p className="text-ur-olive/70 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre histoire */}
      <section id="histoire" className="py-24 bg-ur-olive text-ur-cream relative overflow-hidden">
        <div className="absolute inset-0 lauburu-bg opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight mb-8">
              Ur Beroa.<br />
              <span className="italic font-light">Eau chaude, en basque.</span>
            </h2>
            <div className="space-y-5 text-ur-cream/80 leading-relaxed text-lg">
              <p>
                Raphael Pacou crée Ur Beroa en 2015, à Bayonne. L'idée : remettre l'humain au centre
                du métier. Un seul interlocuteur, du devis à la dernière finition.
              </p>
              <p>
                Dix ans plus tard, c'est plus d'un millier d'interventions sur tout le Pays Basque.
                Des chaudières installées à Cambo, des salles de bain refaites à Anglet, des fuites
                réparées en pleine nuit à Biarritz.
              </p>
              <p className="font-fraunces italic text-xl text-ur-cream">
                "Je travaille comme si chaque maison était la mienne. Et chaque client, un voisin."
              </p>
              <div className="text-sm uppercase tracking-widest text-ur-red">— Raphael Pacou</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img src="/ur-beroa/raphael.jpg" alt="Raphael Pacou, plombier à Bayonne" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Zones d'intervention */}
      <section id="zones" className="py-24 bg-ur-cream">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-3xl">
            <h2 className="font-fraunces text-4xl md:text-6xl font-bold leading-tight">
              Tout le Pays Basque<br />
              <span className="italic text-ur-wood">jusqu'à la frontière.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {c.zones.map((z, i) => (
              <motion.div
                key={z}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex items-center gap-4 p-6 bg-white border border-ur-olive/10 rounded-2xl hover:border-ur-red hover:shadow-lg transition-all"
              >
                <MapPin className="text-ur-red shrink-0" size={24} />
                <div>
                  <div className="font-fraunces text-xl font-bold">{z}</div>
                  <div className="text-xs uppercase tracking-widest text-ur-olive/60 mt-1">
                    {i === 0 ? 'Siège · 64100' : `À ${(i * 7) + 3} km`}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="avis" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight">
              Ce que disent nos voisins.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative p-10 bg-ur-cream rounded-2xl"
              >
                <Quote className="absolute -top-4 left-8 text-ur-red bg-white p-2 rounded-full" size={40} />
                <div className="flex gap-1 mb-4 mt-3">
                  {Array.from({ length: r.rating }).map((_, s) => <Star key={s} size={16} fill="#BC1F26" stroke="#BC1F26" />)}
                </div>
                <p className="font-fraunces italic text-lg text-ur-olive leading-relaxed mb-6">"{r.text}"</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{r.name}</span>
                  <span className="text-ur-olive/50">{r.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking + Contact */}
      <section id="contact" className="py-24 bg-ur-red text-ur-cream relative overflow-hidden">
        <div className="absolute inset-0 lauburu-bg opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight mb-8">
              Raphael vous reçoit<br />ou se déplace.
            </h2>
            <div className="bg-ur-cream text-ur-olive rounded-2xl p-6">
              <div className="text-sm font-medium mb-4">Cette semaine</div>
              <div className="grid grid-cols-5 gap-2 mb-4 text-center text-xs">
                {['Lun 27', 'Mar 28', 'Mer 29', 'Jeu 30', 'Ven 31'].map((d, i) => (
                  <div key={d} className={`p-3 rounded-lg ${i === 2 ? 'bg-ur-red text-ur-cream' : 'border border-ur-olive/10'}`}>
                    <div className="text-[10px] uppercase opacity-70">{d.split(' ')[0]}</div>
                    <div className="font-fraunces text-lg font-bold">{d.split(' ')[1]}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {['08:30', '10:00', '11:30', '14:00', '15:30', '17:00'].map((t, i) => (
                  <button key={t} className={`p-3 rounded-lg text-sm font-medium transition-colors ${i === 3 ? 'bg-ur-wood text-ur-cream' : 'border border-ur-olive/10 hover:border-ur-red'}`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-fraunces text-3xl md:text-4xl font-bold mb-8">Décrivez votre besoin.</h3>
            <form onSubmit={(e) => { e.preventDefault(); console.log(form); alert('Demande envoyée'); }} className="space-y-4">
              <input type="text" required placeholder="Votre nom" value={form.nom} onChange={(e) => setForm({...form, nom: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-ur-cream/10 border border-ur-cream/30 focus:border-ur-cream outline-none transition-colors placeholder:text-ur-cream/60" />
              <input type="tel" required placeholder="Téléphone" value={form.tel} onChange={(e) => setForm({...form, tel: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-ur-cream/10 border border-ur-cream/30 focus:border-ur-cream outline-none transition-colors placeholder:text-ur-cream/60" />
              <textarea required rows={5} placeholder="Votre besoin" value={form.besoin} onChange={(e) => setForm({...form, besoin: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-ur-cream/10 border border-ur-cream/30 focus:border-ur-cream outline-none transition-colors placeholder:text-ur-cream/60 resize-none" />
              <button type="submit" className="w-full bg-ur-cream text-ur-red py-4 rounded-xl font-bold hover:bg-white transition-colors">
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ur-olive text-ur-cream py-16">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-10">
          <div>
            <div className="font-fraunces text-2xl font-bold mb-2">Ur Beroa</div>
            <p className="font-fraunces italic text-ur-cream/70 mb-4">Berotasuna eta kalitatea.</p>
            <p className="text-sm text-ur-cream/60 leading-relaxed">{c.legalName}</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-ur-red mb-4">Contact</div>
            <a href={`tel:${c.phone}`} className="block text-sm hover:text-ur-red">{c.phoneDisplay}</a>
            <p className="text-sm text-ur-cream/70 mt-2">{c.address}</p>
            <p className="text-sm text-ur-cream/70 mt-1">Fondée en {c.founded}</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-ur-red mb-4">Pays Basque</div>
            <div className="flex flex-wrap gap-1.5">
              {c.zones.map(z => (
                <span key={z} className="text-xs px-2 py-1 border border-ur-cream/20 rounded-full">{z}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-12 pt-8 border-t border-ur-cream/10 flex flex-wrap justify-between gap-4 text-xs text-ur-cream/50">
          <div>© {new Date().getFullYear()} Ur Beroa · Raphael Pacou</div>
          <div className="font-fraunces italic">Eskerrik asko · Merci</div>
        </div>
      </footer>
    </main>
  );
}
