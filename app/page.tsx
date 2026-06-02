import Link from 'next/link';

const demos = [
  {
    href: '/gs-climatech',
    name: 'GS Climatech',
    city: 'Écouflant · Anjou',
    owner: 'Laurent Caillaud',
    vibe: 'Chauffagiste · 20 ans · 209 avis Google',
    bg: 'from-[#0A1628] to-[#B87333]',
    font: 'font-fraunces',
    img: '/home-cards/gs-climatech.jpg',
  },
  {
    href: '/h2eau',
    name: 'H₂eau',
    city: 'Amiens',
    owner: 'Giovanni Vicini',
    vibe: 'Plombier dépannage · Intervention 60 min',
    bg: 'from-[#0A0A0A] to-[#00E5FF]',
    font: 'font-geist',
    img: '/home-cards/h2eau.jpg',
  },
  {
    href: '/ur-beroa',
    name: 'Ur Beroa',
    city: 'Bayonne · Pays Basque',
    owner: 'Raphael Pacou',
    vibe: 'Plombier régional · Identité locale',
    bg: 'from-[#BC1F26] to-[#A0763C]',
    font: 'font-fraunces',
    img: '/home-cards/ur-beroa.jpg',
  },
  {
    href: '/ecochauff',
    name: 'ÉcoChauff',
    city: 'Rennes · Bretagne',
    owner: 'Julien Marchand',
    vibe: 'Chauffagiste RGE · PAC & aides MaPrimeRénov',
    bg: 'from-[#1F3F2C] to-[#F4C430]',
    font: 'font-fraunces',
    img: '/home-cards/ecochauff.jpg',
  },
  {
    href: '/maisonpro',
    name: 'MaisonPro Bati',
    city: 'Angers · Maine-et-Loire',
    owner: 'Stéphane Lefèvre',
    vibe: 'Entreprise tous corps d\'état · 25 artisans',
    bg: 'from-[#1A1D24] to-[#FF6B35]',
    font: 'font-fraunces',
    img: '/home-cards/maisonpro.jpg',
  },
  {
    href: '/aquajeune',
    name: 'Aqua Jeune',
    city: 'Valence · Drôme',
    owner: 'Maxime Bertrand',
    vibe: 'Plombier moderne · Tarifs publics · RDV en ligne',
    bg: 'from-[#2C6EB0] to-[#FF7F6E]',
    font: 'font-fraunces',
    img: '/home-cards/aquajeune.jpg',
  },
];

const valueProps = [
  {
    title: 'Conçus pour convertir',
    desc: 'Chaque site est pensé pour transformer un visiteur en demande de devis ou en rendez-vous.',
  },
  {
    title: 'Sur mesure, jamais générique',
    desc: 'On part de votre métier, votre zone, vos avis Google. Pas de template recyclé.',
  },
  {
    title: 'Prêts en 7 jours',
    desc: 'De l\'appel pour faire connaissance jusqu\'à la mise en ligne, une semaine top chrono.',
  },
];

// Logo OE (même SVG que sur outboundempire.com)
function OutboundEmpireLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3v18" />
      <path d="M12 3c4.2 0 4.2 8 0 8" />
      <path d="M6 11l12 10" />
      <path d="M18 11L6 21" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-inter">
      {/* HEADER / NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a
            href="https://www.outboundempire.com"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2.5 group"
          >
            <OutboundEmpireLogo className="w-[18px] h-[18px] text-[#d4a574] flex-shrink-0" />
            <span className="text-white text-sm font-medium tracking-tight group-hover:text-white/80 transition-colors">
              Outbound Empire
            </span>
          </a>
          <div className="hidden sm:flex items-center gap-8">
            <a
              href="https://www.outboundempire.com/sites-artisans"
              target="_blank"
              rel="noopener"
              className="text-white/60 text-sm hover:text-white transition-colors"
            >
              L&apos;offre
            </a>
            <a
              href="https://www.outboundempire.com/sites-artisans#prix"
              target="_blank"
              rel="noopener"
              className="text-white/60 text-sm hover:text-white transition-colors"
            >
              Tarif
            </a>
            <a
              href="https://www.outboundempire.com/sites-artisans#contact"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Recevoir un exemple
              <span>→</span>
            </a>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-16">
        {/* HEADER (centré, condensé pour above-the-fold) */}
        <header className="mb-8 lg:mb-10 max-w-6xl mx-auto text-center">
          <h1 className="font-fraunces text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
            Nos modèles de sites internet<br />
            <span className="text-white/40">pour faire sonner votre téléphone</span>
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
            Trois modèles conçus pour des artisans français. Pensés pour transformer vos avis Google en
            demandes de devis et en rendez-vous.
          </p>
        </header>

        {/* DEMO CARDS — aspect réduit pour tenir above-the-fold */}
        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="group relative overflow-hidden rounded-3xl border border-white/10 aspect-[5/6] lg:aspect-[4/5] flex flex-col justify-end p-6 lg:p-7 transition-all hover:border-white/30 hover:-translate-y-1"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${d.img})` }}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${d.bg} opacity-60 group-hover:opacity-50 transition-opacity mix-blend-multiply`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="relative z-10">
                <div className="text-xs uppercase tracking-widest text-white/70 mb-2">{d.city}</div>
                <h2 className={`${d.font} text-3xl lg:text-4xl font-bold mb-2`}>{d.name}</h2>
                <div className="text-sm text-white/80 mb-1">{d.owner}</div>
                <div className="text-xs text-white/60 mb-4">{d.vibe}</div>
                <div className="text-sm font-medium inline-flex items-center gap-2">
                  Visiter le site
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* VALUE PROPS (centré) */}
        <section className="mt-32">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="font-fraunces text-3xl sm:text-5xl font-bold leading-[1.05] tracking-tight">
              Trois choses non-négociables<br />
              <span className="text-white/40">sur tous nos sites</span>
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {valueProps.map((v, i) => (
              <div key={i} className="border-t border-white/10 pt-6">
                <div className="text-xs text-white/40 mb-3">0{i + 1}</div>
                <h3 className="font-fraunces text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA (centré) */}
        <section className="mt-32 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-10 sm:p-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-fraunces text-3xl sm:text-5xl font-bold leading-[1.05] tracking-tight mb-6">
              Un site comme ça,<br />
              <span className="text-white/40">fait pour votre métier</span>
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-10">
              250&nbsp;€ à la création, puis 40&nbsp;€ par mois. Engagement 4 ans, tout compris :
              hébergement, entretien, prise de rendez-vous, demandes de devis par SMS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.outboundempire.com/sites-artisans"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-colors"
              >
                Voir le détail de l&apos;offre
                <span>→</span>
              </a>
              <a
                href="https://www.outboundempire.com/sites-artisans#contact"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/20 text-white/80 font-medium text-sm hover:border-white/40 hover:text-white transition-colors"
              >
                Recevoir un exemple par SMS
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row flex-wrap justify-between items-center gap-4 text-xs text-white/40">
          <div className="flex items-center gap-2.5">
            <OutboundEmpireLogo className="w-[14px] h-[14px] text-[#d4a574]" />
            <span>© {new Date().getFullYear()} Outbound Empire — Sites internet pour artisans</span>
          </div>
          <div>
            <a
              href="https://www.outboundempire.com"
              target="_blank"
              rel="noopener"
              className="hover:text-white/70 transition-colors"
            >
              outboundempire.com
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
