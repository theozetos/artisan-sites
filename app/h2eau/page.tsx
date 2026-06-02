'use client';

import { motion } from 'framer-motion';
import { Phone, Star, Zap, Droplet, Thermometer, Wind, Activity, CheckCircle2, ArrowRight, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { clients, fakeReviews } from '@/lib/clients';

const c = clients.h2eau;
const reviews = fakeReviews.h2eau;

function Particles() {
  const [dots, setDots] = useState<{ x: number; y: number; size: number; delay: number }[]>([]);
  useEffect(() => {
    setDots(Array.from({ length: 40 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
    })));
  }, []);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((d, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-h2-cyan"
          style={{ left: `${d.x}%`, top: `${d.y}%`, width: d.size, height: d.size }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
          transition={{ duration: 3 + d.delay, repeat: Infinity, delay: d.delay }}
        />
      ))}
    </div>
  );
}

function Countdown() {
  const [t, setT] = useState({ m: 60, s: 0 });
  useEffect(() => {
    const id = setInterval(() => {
      setT((prev) => {
        if (prev.m === 0 && prev.s === 0) return { m: 60, s: 0 };
        if (prev.s === 0) return { m: prev.m - 1, s: 59 };
        return { m: prev.m, s: prev.s - 1 };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="font-geistmono text-h2-cyan text-sm tabular-nums">
      {String(t.m).padStart(2, '0')}:{String(t.s).padStart(2, '0')}
    </div>
  );
}

const services = ['Recherche fuite enterrée', 'Plomberie générale', 'Dépannage 24/7', 'Chauffage', 'Climatisation', 'Sanitaires', 'Détection thermique', 'Débouchage'];

export default function Page() {
  const [form, setForm] = useState({ nom: '', tel: '', besoin: '' });

  return (
    <main className="relative">
      {/* Sticky header */}
      <header className="sticky top-0 z-50 bg-h2-black/80 backdrop-blur border-b border-h2-white/10">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="font-geist text-2xl font-black tracking-tight">
            H<sub className="text-h2-cyan text-base">2</sub>eau
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-h2-white/70">
            <a href="#services" className="hover:text-h2-cyan transition-colors">Services</a>
            <a href="#fuite" className="hover:text-h2-cyan transition-colors">Recherche de fuite</a>
            <a href="#avis" className="hover:text-h2-cyan transition-colors">Avis</a>
            <a href="#contact" className="hover:text-h2-cyan transition-colors">Contact</a>
          </nav>
          <a href={`tel:${c.phone}`} className="bg-h2-cyan text-h2-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-h2-white transition-colors">
            <Phone size={14} /> {c.phoneDisplay}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <Particles />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,229,255,0.15),_transparent_70%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 w-full">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="mb-8 inline-flex items-center gap-3 px-4 py-2 border border-h2-cyan/30 rounded-full bg-h2-cyan/5">
            <span className="w-2 h-2 bg-h2-cyan rounded-full animate-pulse" />
            <span className="text-xs font-geistmono uppercase tracking-widest text-h2-cyan">Giovanni · Disponible · Amiens</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-geist text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.85] mb-10"
          >
            UNE FUITE<span className="text-h2-magenta">?</span><br />
            <span className="h2-glow text-h2-cyan">60 MIN.</span><br />
            CHEZ VOUS.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }} className="text-lg md:text-xl text-h2-white/70 max-w-xl mb-10">
            Plombier nouvelle génération à Amiens. Détection de fuite enterrée par caméra thermique. Sans casse. Sans surprise.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="flex flex-wrap items-center gap-4">
            <a href={`tel:${c.phone}`} className="bg-h2-cyan text-h2-black px-8 py-5 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-[0_0_40px_rgba(0,229,255,0.4)]">
              <Phone size={20} /> Appeler Giovanni <ArrowRight size={20} />
            </a>
            <a href="#contact" className="px-8 py-5 rounded-full font-medium border border-h2-white/20 hover:border-h2-cyan hover:text-h2-cyan transition-colors">
              Demander un devis
            </a>
          </motion.div>

          {/* Live availability widget */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }} className="mt-16 inline-flex items-center gap-6 p-5 border border-h2-white/10 rounded-2xl bg-h2-white/5 backdrop-blur">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Giovanni est disponible</span>
            </div>
            <div className="h-6 w-px bg-h2-white/20" />
            <div className="text-sm text-h2-white/70">
              Prochaine intervention : <span className="text-h2-cyan font-bold">aujourd'hui 14h30</span>
            </div>
            <div className="h-6 w-px bg-h2-white/20" />
            <div className="flex items-center gap-2 text-sm">
              <span className="text-h2-white/50">Délai garanti</span>
              <Countdown />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services pills */}
      <section id="services" className="py-16 border-y border-h2-white/10 overflow-hidden">
        <div className="mb-8 px-6">
          <div className="font-geist text-2xl font-bold">Tout ce que je sais faire.</div>
        </div>
        <div className="flex gap-3 px-6 overflow-x-auto scrollbar-hide whitespace-nowrap pb-4">
          {services.map((s, i) => (
            <div key={s} className={`shrink-0 px-6 py-3 rounded-full border ${i % 3 === 0 ? 'bg-h2-cyan text-h2-black border-h2-cyan' : 'border-h2-white/20 text-h2-white/90'} font-medium`}>
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* Recherche de fuite — feature section */}
      <section id="fuite" className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-geist text-5xl md:text-6xl font-black leading-[0.95] tracking-tighter mb-8">
              Recherche de fuite <span className="text-h2-cyan">enterrée.</span><br />
              Sans casse.
            </h2>
            <p className="text-h2-white/70 text-lg leading-relaxed mb-8">
              Caméra thermique, gaz traceur, corrélateur acoustique. 3 technologies, 1 seul objectif :
              localiser votre fuite au centimètre près sans casser un seul carrelage.
            </p>
            <div className="space-y-4 mb-10">
              {[
                'Détection par imagerie thermique infrarouge',
                'Précision +/- 5cm sur réseau enterré',
                'Rapport photo + plan d\'intervention fourni',
                'Compatible expertise assurance',
              ].map((p) => (
                <div key={p} className="flex items-center gap-3">
                  <CheckCircle2 className="text-h2-cyan shrink-0" size={20} />
                  <span className="text-h2-white/90">{p}</span>
                </div>
              ))}
            </div>
            <a href={`tel:${c.phone}`} className="inline-flex items-center gap-3 text-h2-cyan font-bold hover:gap-4 transition-all">
              Demander une recherche de fuite <ArrowRight size={20} />
            </a>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-h2-cyan/20 blur-3xl rounded-full" />
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-h2-cyan/30">
              <img src="/h2eau/recherche-fuite.jpg" alt="Détection thermique d'une fuite enterrée par H2eau" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-h2-cyan/30 via-transparent to-h2-magenta/30 mix-blend-overlay" />
              {/* Scan overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border-2 border-h2-cyan rounded-full animate-ping opacity-30" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-h2-black/80 backdrop-blur border border-h2-cyan/30 rounded-xl">
                <div className="text-xs font-geistmono text-h2-cyan mb-1">SCAN_THERMIQUE_LIVE</div>
                <div className="font-bold">Fuite détectée · 42cm de profondeur</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section className="bg-gradient-to-r from-h2-cyan/10 via-h2-magenta/10 to-h2-cyan/10 border-y border-h2-white/10 py-12">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: '60', u: 'min', l: 'Délai d\'intervention' },
            { v: c.reviews, u: '', l: 'Avis 5★' },
            { v: '98', u: '%', l: 'Fuites localisées' },
            { v: '24', u: '/7', l: 'Service urgence' },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-geist text-5xl md:text-6xl font-black text-h2-cyan h2-glow tabular-nums">
                {s.v}<span className="text-h2-white/60 text-3xl">{s.u}</span>
              </div>
              <div className="text-xs font-geistmono uppercase tracking-widest text-h2-white/60 mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="avis" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-wrap justify-between items-end gap-6">
            <div>
              <h2 className="font-geist text-5xl md:text-6xl font-black leading-tight tracking-tighter">
                5,0 / 5.<br /><span className="text-h2-white/40">À l'unanimité.</span>
              </h2>
            </div>
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={32} fill="#00E5FF" stroke="#00E5FF" />)}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 border border-h2-white/10 rounded-2xl hover:border-h2-cyan/50 transition-colors group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="#00E5FF" stroke="#00E5FF" />)}
                  </div>
                  <div className="text-xs font-geistmono text-h2-white/40">{r.date}</div>
                </div>
                <p className="text-h2-white/80 leading-relaxed mb-6 text-lg">"{r.text}"</p>
                <div className="text-sm font-medium text-h2-cyan">— {r.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-h2-white/10">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-geist text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.95]">
              Réservez votre créneau.
            </h2>
            <div className="bg-h2-white/5 border border-h2-white/10 rounded-2xl p-6">
              <div className="text-sm font-geistmono uppercase tracking-widest text-h2-cyan mb-4">Aujourd'hui</div>
              <div className="grid grid-cols-4 gap-2 mb-3">
                {['11:30', '13:00', '14:30', '16:00'].map((t, i) => (
                  <button key={t} className={`p-3 rounded-lg font-geistmono text-sm transition-all ${i === 2 ? 'bg-h2-cyan text-h2-black font-bold' : 'border border-h2-white/10 hover:border-h2-cyan text-h2-white/80'}`}>
                    {t}
                  </button>
                ))}
              </div>
              <div className="text-xs font-geistmono uppercase tracking-widest text-h2-white/50 mt-6 mb-4">Demain</div>
              <div className="grid grid-cols-4 gap-2">
                {['08:00', '10:00', '14:00', '17:30'].map((t) => (
                  <button key={t} className="p-3 rounded-lg font-geistmono text-sm border border-h2-white/10 hover:border-h2-cyan text-h2-white/80 transition-colors">
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="text-xs font-geistmono uppercase tracking-widest text-h2-magenta mb-4">// Ou écrivez</div>
            <h3 className="font-geist text-4xl font-black tracking-tighter mb-8">Giovanni vous répond sous 1h.</h3>
            <form onSubmit={(e) => { e.preventDefault(); console.log(form); alert('Message envoyé'); }} className="space-y-4">
              <input type="text" required placeholder="Nom" value={form.nom} onChange={(e) => setForm({...form, nom: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-h2-white/5 border border-h2-white/10 focus:border-h2-cyan outline-none font-geistmono" />
              <input type="tel" required placeholder="Téléphone" value={form.tel} onChange={(e) => setForm({...form, tel: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-h2-white/5 border border-h2-white/10 focus:border-h2-cyan outline-none font-geistmono" />
              <textarea required rows={5} placeholder="Décrivez le problème" value={form.besoin} onChange={(e) => setForm({...form, besoin: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-h2-white/5 border border-h2-white/10 focus:border-h2-cyan outline-none font-geistmono resize-none" />
              <button type="submit" className="w-full bg-h2-cyan text-h2-black py-4 rounded-xl font-bold hover:bg-h2-white transition-colors flex items-center justify-center gap-2">
                Envoyer <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Floating mobile CTA */}
      <a href={`tel:${c.phone}`} className="md:hidden fixed bottom-6 left-6 right-6 z-40 bg-h2-cyan text-h2-black py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(0,229,255,0.5)]">
        <Phone size={18} /> Appeler maintenant
      </a>

      {/* Footer */}
      <footer className="border-t border-h2-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-10">
          <div>
            <div className="font-geist text-2xl font-black mb-4">H<sub className="text-h2-cyan text-base">2</sub>eau</div>
            <p className="text-sm text-h2-white/60 leading-relaxed">Plomberie · Chauffage · Recherche de fuite enterrée · Amiens et alentours.</p>
          </div>
          <div>
            <div className="text-xs font-geistmono uppercase tracking-widest text-h2-cyan mb-4">Contact</div>
            <a href={`tel:${c.phone}`} className="block text-sm font-geistmono">{c.phoneDisplay}</a>
            <a href={`mailto:${c.email}`} className="block text-sm font-geistmono text-h2-white/60 mt-1">{c.email}</a>
            <p className="text-sm text-h2-white/60 mt-2">{c.address}</p>
          </div>
          <div>
            <div className="text-xs font-geistmono uppercase tracking-widest text-h2-cyan mb-4">Garanties</div>
            <ul className="space-y-1 text-sm text-h2-white/60">
              <li>Intervention sous 60 min</li>
              <li>Devis gratuit transparent</li>
              <li>Recherche fuite sans casse</li>
              <li>Disponible 7j/7</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-12 pt-8 border-t border-h2-white/10 text-xs font-geistmono text-h2-white/40 flex flex-wrap justify-between gap-4">
          <div>© {new Date().getFullYear()} H2EAU · Giovanni Vicini · Fondée en {c.founded}</div>
          <div className="flex items-center gap-2"><Activity size={12} className="text-green-400" /> System operational</div>
        </div>
      </footer>
    </main>
  );
}
