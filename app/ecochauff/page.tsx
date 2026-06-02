'use client';

import { motion } from 'framer-motion';
import { Phone, Star, Leaf, Sun, Flame, Calculator, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { clients, fakeReviews } from '@/lib/clients';

const c = clients.ecochauff;
const reviews = fakeReviews.ecochauff;

const services = [
  {
    icon: Flame,
    name: 'Pompes à chaleur',
    desc: 'Air/eau, air/air, géothermie. Marques certifiées RGE QualiPAC : Daikin, Atlantic, Mitsubishi.',
    detail: 'Réduction jusqu\'à 70% de la facture de chauffage',
  },
  {
    icon: Sun,
    name: 'Photovoltaïque',
    desc: 'Panneaux solaires en autoconsommation ou revente. Étude de rentabilité offerte.',
    detail: 'Production estimée 4 500 kWh/an pour 3 kWc',
  },
  {
    icon: Leaf,
    name: 'Chaudières biomasse',
    desc: 'Granulés, bois bûche, hybride. Une énergie locale et neutre en carbone.',
    detail: 'Aides cumulables jusqu\'à 11 000 €',
  },
  {
    icon: Calculator,
    name: 'Audit énergétique',
    desc: 'Diagnostic complet de votre logement par un thermicien certifié. Plan de travaux chiffré.',
    detail: 'Pris en charge à 100% par MaPrimeRénov\'',
  },
];

const aides = [
  { name: 'MaPrimeRénov\'', value: 'Jusqu\'à 11 000 €', desc: 'Selon vos revenus et le type de travaux' },
  { name: 'CEE — Certificats Économies d\'Énergie', value: 'Jusqu\'à 4 000 €', desc: 'Cumulables avec MaPrimeRénov\'' },
  { name: 'Éco-prêt à taux zéro', value: 'Jusqu\'à 30 000 €', desc: 'Pas d\'intérêts, sur 15 ans max' },
  { name: 'TVA réduite à 5,5%', value: 'Économies directes', desc: 'Automatique sur les travaux éligibles' },
];

export default function Page() {
  const [form, setForm] = useState({ nom: '', tel: '', projet: '' });

  return (
    <main className="font-inter bg-eco-cream text-eco-ink min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-eco-cream/95 backdrop-blur border-b border-eco-green/10">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-eco-green text-eco-cream flex items-center justify-center font-bold">É</div>
            <span className="font-bold text-lg tracking-tight">ÉcoChauff</span>
          </div>
          <nav className="hidden md:flex gap-7 text-sm font-medium">
            <a href="#services" className="hover:text-eco-green transition-colors">Nos solutions</a>
            <a href="#aides" className="hover:text-eco-green transition-colors">Aides de l'État</a>
            <a href="#avis" className="hover:text-eco-green transition-colors">Avis</a>
            <a href="#contact" className="hover:text-eco-green transition-colors">Contact</a>
          </nav>
          <a href={`tel:${c.phone}`} className="bg-eco-green text-eco-cream px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-eco-green-dk transition-colors">
            <Phone size={14} />
            <span className="hidden sm:inline">{c.phoneDisplay}</span>
            <span className="sm:hidden">Appeler</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-eco-green/5 via-eco-cream to-eco-yellow/10" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24 grid lg:grid-cols-5 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-eco-green/10 text-eco-green text-xs font-semibold uppercase tracking-widest rounded-full mb-7">
              <Leaf size={14} /> Installateur RGE QualiPAC · Rennes
            </div>
            <h1 className="font-fraunces text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-7">
              Votre maison sans gaz,<br />
              <span className="text-eco-green italic">sans regret.</span>
            </h1>
            <p className="text-lg text-eco-ink/75 mb-9 max-w-xl leading-relaxed">
              Pompe à chaleur, chaudière biomasse, photovoltaïque. On monte votre dossier MaPrimeRénov complet, on installe, on assure le SAV pendant 10 ans.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#contact" className="bg-eco-green text-eco-cream px-7 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-eco-green-dk transition-colors">
                Simulation MaPrimeRénov' gratuite
              </a>
              <a href={`tel:${c.phone}`} className="px-7 py-4 rounded-full font-semibold border-2 border-eco-green text-eco-green hover:bg-eco-green hover:text-eco-cream transition-colors flex items-center gap-2">
                <Phone size={16} /> {c.phoneDisplay}
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-7 border-t border-eco-ink/10">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} fill="#F4C430" stroke="#F4C430" />
                  ))}
                </div>
                <div className="font-bold text-lg">{c.rating} / 5</div>
                <div className="text-xs text-eco-ink/60">{c.reviews} avis Google</div>
              </div>
              <div>
                <div className="text-eco-green text-2xl font-bold">11 000 €</div>
                <div className="text-xs text-eco-ink/60">D'aides en moyenne</div>
              </div>
              <div>
                <div className="text-eco-green text-2xl font-bold">RGE</div>
                <div className="text-xs text-eco-ink/60">QualiPAC + Qualibois</div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="lg:col-span-2">
            <div className="bg-eco-green text-eco-cream p-7 rounded-3xl shadow-xl">
              <div className="text-xs uppercase tracking-widest text-eco-yellow mb-2 font-semibold">Simulateur express</div>
              <div className="text-2xl font-fraunces font-bold leading-tight mb-5">Vos aides en 2 minutes</div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between pb-2 border-b border-eco-cream/15">
                  <span className="text-eco-cream/75">Maison 100 m² · revenu moyen</span>
                  <span className="font-bold">PAC air/eau</span>
                </div>
                <div className="flex justify-between"><span className="text-eco-cream/75">Devis travaux</span><span className="font-bold">15 800 €</span></div>
                <div className="flex justify-between"><span className="text-eco-cream/75">MaPrimeRénov'</span><span className="font-bold text-eco-yellow">- 9 000 €</span></div>
                <div className="flex justify-between"><span className="text-eco-cream/75">CEE</span><span className="font-bold text-eco-yellow">- 4 000 €</span></div>
                <div className="flex justify-between pt-2 mt-2 border-t border-eco-cream/15">
                  <span className="font-semibold">Reste à charge</span><span className="font-bold text-2xl">2 800 €</span>
                </div>
              </div>
              <a href="#contact" className="mt-5 block text-center bg-eco-yellow text-eco-ink py-3 rounded-full font-semibold hover:bg-eco-yellow-dk transition-colors">
                Lancer ma simulation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-2xl">
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight">
              4 façons de chauffer mieux,<br />
              <span className="text-eco-green italic">et payer moins.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group p-7 border border-eco-ink/10 rounded-2xl hover:border-eco-green hover:shadow-md transition-all bg-eco-cream/40"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-eco-green/10 flex items-center justify-center flex-shrink-0">
                    <s.icon size={22} className="text-eco-green" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="font-fraunces text-2xl font-bold mb-2">{s.name}</h3>
                    <p className="text-eco-ink/70 mb-3 leading-relaxed text-sm">{s.desc}</p>
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-eco-green">
                      <CheckCircle2 size={14} /> {s.detail}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTRAIT FONDATEUR */}
      <section className="py-20 md:py-24 bg-eco-cream">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-xs uppercase tracking-widest text-eco-green font-bold mb-4">Le fondateur</div>
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight mb-6">
              Julien, 38 ans,<br />
              <span className="text-eco-green italic">chauffagiste convaincu.</span>
            </h2>
            <p className="text-eco-ink/75 mb-5 leading-relaxed">
              "J'ai démarré ÉcoChauff en 2021 parce que je voyais des particuliers payer 3 000€ de fioul par hiver alors que leur maison méritait mieux. Aujourd'hui, on installe une dizaine de pompes à chaleur par mois sur Rennes et la couronne, avec des aides qui vont jusqu'à 11 000€."
            </p>
            <p className="text-eco-ink/75 mb-7 leading-relaxed">
              "Je passe encore sur la moitié des chantiers moi-même. Pour comprendre, pour vérifier, et parce que c'est ce qui me plaît."
            </p>
            <div className="flex flex-wrap gap-2">
              {c.certifications?.map((cert) => (
                <span key={cert} className="text-xs px-3 py-1.5 bg-eco-green/10 text-eco-green rounded-full font-semibold">
                  {cert}
                </span>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <img src="/ecochauff/julien.jpg" alt="Julien Marchand, fondateur ÉcoChauff" width={928} height={1152} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* AIDES */}
      <section id="aides" className="py-20 md:py-24 bg-eco-green text-eco-cream">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-eco-yellow font-bold mb-3">L'État vous aide</div>
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight">
              On monte votre dossier,<br />
              <span className="text-eco-yellow italic">on récupère vos aides.</span>
            </h2>
            <p className="mt-5 text-eco-cream/80 leading-relaxed max-w-xl">
              Les démarches MaPrimeRénov', CEE, éco-PTZ sont incluses dans nos devis. Vous n'avez rien à faire. On vous rend la confirmation des aides avant les travaux.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {aides.map((a, i) => (
              <div key={i} className="p-6 bg-eco-cream/8 border border-eco-cream/15 rounded-2xl">
                <div className="text-xs uppercase tracking-widest text-eco-yellow font-bold mb-2">{a.name}</div>
                <div className="font-fraunces text-2xl font-bold mb-2">{a.value}</div>
                <div className="text-sm text-eco-cream/75">{a.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="#contact" className="inline-block bg-eco-yellow text-eco-ink px-7 py-4 rounded-full font-bold hover:bg-eco-cream transition-colors">
              Voir mes aides en 2 minutes
            </a>
          </div>
        </div>
      </section>

      {/* GALERIE EN IMAGES */}
      <section className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-2xl">
            <h2 className="font-fraunces text-3xl md:text-4xl font-bold leading-tight">
              Quelques chantiers,<br />
              <span className="text-eco-green italic">en images.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
              <img src="/ecochauff/hero.jpg" alt="Julien en atelier — pompe à chaleur" width={1312} height={816} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-eco-ink/90 to-transparent">
                <div className="text-white text-sm font-semibold">Pose PAC — atelier ÉcoChauff</div>
              </div>
            </div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
              <img src="/ecochauff/solaire.jpg" alt="Panneaux solaires installés en Bretagne" width={1024} height={1024} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-eco-ink/90 to-transparent">
                <div className="text-white text-sm font-semibold">12 panneaux · Cesson-Sévigné</div>
              </div>
            </div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
              <img src="/ecochauff/audit.jpg" alt="Audit énergétique caméra thermique" width={896} height={1200} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-eco-ink/90 to-transparent">
                <div className="text-white text-sm font-semibold">Audit thermique · Vern-sur-Seiche</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AVIS GOOGLE */}
      <section id="avis" className="py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-full bg-eco-green/10">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-sm font-bold text-eco-ink">{c.rating} / 5 sur Google · {c.reviews} avis</span>
            </div>
            <h2 className="font-fraunces text-3xl md:text-4xl font-bold leading-tight">Nos clients en parlent mieux que nous.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {reviews.map((r, i) => {
              const colors = ['#1a73e8', '#34a853', '#ea4335', '#fbbc04'];
              const bg = colors[i % colors.length];
              const initial = r.name.charAt(0).toUpperCase();
              return (
                <article key={i} className="p-6 bg-eco-cream/50 rounded-2xl border border-eco-ink/5">
                  <header className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-medium text-sm" style={{ background: bg }}>
                        {initial}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{r.name}</div>
                        <div className="text-xs text-eco-ink/50">{r.date}</div>
                      </div>
                    </div>
                  </header>
                  <div className="flex items-center gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={13} fill={s <= r.rating ? '#fbbc04' : '#e0e0e0'} stroke={s <= r.rating ? '#fbbc04' : '#e0e0e0'} />
                    ))}
                  </div>
                  <p className="text-eco-ink/85 leading-relaxed text-sm">{r.text}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-9 text-center">
            <a href={c.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-eco-green text-sm font-semibold hover:underline">
              Voir les {c.reviews} avis sur Google →
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-24 bg-eco-cream">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-fraunces text-4xl md:text-5xl font-bold leading-tight mb-6">
              Votre simulation,<br />
              <span className="text-eco-green italic">sous 24h.</span>
            </h2>
            <p className="text-eco-ink/75 mb-8 leading-relaxed">
              On vous rappelle, on chiffre les aides, on planifie une visite de votre logement. Tout est gratuit jusqu'à la signature du devis.
            </p>
            <ul className="space-y-3">
              {['Étude énergétique offerte', 'Devis travaux + aides en 48h', 'Garantie décennale incluse', 'SAV 10 ans sur pompes à chaleur'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="text-eco-green flex-shrink-0" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Demande envoyée'); }} className="space-y-3 bg-white p-6 rounded-2xl border border-eco-ink/10">
              <input type="text" required placeholder="Votre nom" value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-eco-ink/15 focus:border-eco-green outline-none" />
              <input type="tel" required placeholder="Téléphone" value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-eco-ink/15 focus:border-eco-green outline-none" />
              <textarea required placeholder="Votre projet (PAC, panneaux solaires, audit…)" rows={5} value={form.projet} onChange={(e) => setForm({ ...form, projet: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-eco-ink/15 focus:border-eco-green outline-none resize-none" />
              <button type="submit" className="w-full bg-eco-green text-eco-cream py-4 rounded-xl font-semibold hover:bg-eco-green-dk transition-colors">
                Recevoir ma simulation
              </button>
              <p className="text-xs text-eco-ink/55 text-center">Réponse sous 24h · Aucun engagement</p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-eco-ink text-eco-cream py-14">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-8">
          <div>
            <div className="font-fraunces text-2xl font-bold mb-3">ÉcoChauff</div>
            <p className="text-sm text-eco-cream/65 leading-relaxed">{c.legalName}</p>
            <p className="text-sm text-eco-cream/65 mt-2">Fondée en {c.founded}</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-eco-yellow mb-3 font-bold">Contact</div>
            <a href={`tel:${c.phone}`} className="block text-sm hover:text-eco-yellow">{c.phoneDisplay}</a>
            <a href={`mailto:${c.email}`} className="block text-sm hover:text-eco-yellow mt-1">{c.email}</a>
            <p className="text-sm text-eco-cream/65 mt-2">{c.address}</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-eco-yellow mb-3 font-bold">Certifications</div>
            <ul className="space-y-1.5 text-sm text-eco-cream/75">
              {c.certifications?.map((cert) => <li key={cert}>{cert}</li>)}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-eco-yellow mb-3 font-bold">Zone d'intervention</div>
            <div className="flex flex-wrap gap-1.5">
              {c.zones?.map((z) => (
                <span key={z} className="text-xs px-2 py-1 border border-eco-cream/20 rounded-full">{z}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-10 pt-6 border-t border-eco-cream/10 flex flex-wrap justify-between gap-3 text-xs text-eco-cream/50">
          <div>© {new Date().getFullYear()} ÉcoChauff. Tous droits réservés.</div>
          <div className="flex items-center gap-2"><MapPin size={11} /> Rennes · Bretagne</div>
        </div>
      </footer>
    </main>
  );
}
