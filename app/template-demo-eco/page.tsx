/** /template-demo-eco — vérification (non prod). Comparer à /ecochauff. */
'use client';
import EcochauffTemplate from '@/components/templates/EcochauffTemplate';
import { clients, fakeReviews } from '@/lib/clients';
import { defaultThemes, type ArtisanSite } from '@/lib/site-schema';

const c = clients.ecochauff;
const data: ArtisanSite = {
  identity: {
    slug: 'ecochauff', name: c.name, legalName: c.legalName, owner: c.owner, trade: 'Chauffagiste RGE',
    address: c.address, phone: c.phone, phoneDisplay: c.phoneDisplay, whatsapp: null, email: c.email || 'contact@ecochauff.fr',
    founded: c.founded, siret: null, domain: 'ecochauff.fr', rating: c.rating, reviews: c.reviews,
    googleMapsUrl: c.googleMapsUrl, cityMain: 'Rennes', zones: c.zones || [],
  },
  variant: 'ecochauff', theme: defaultThemes.ecochauff,
  assets: { logoUrl: null, heroUrl: '/ecochauff/hero.jpg', portraitUrl: '/ecochauff/julien.jpg', galleryUrls: [] },
  copy: {
    hero: { badge: 'Installateur RGE QualiPAC · Rennes', titleLines: ['Votre maison sans gaz,', 'sans regret'], subtitle: 'Pompe à chaleur, chaudière biomasse, photovoltaïque. On monte votre dossier MaPrimeRénov complet, on installe, on assure le SAV 10 ans.', proofs: [{ label: '11 000 €', sub: "d'aides en moyenne" }, { label: 'RGE', sub: 'QualiPAC + Qualibois' }] },
    servicesIntro: 'Chauffer mieux, payer moins',
    services: [
      { name: 'Pompes à chaleur', desc: 'Air/eau, air/air, géothermie. Marques certifiées RGE QualiPAC.', icon: 'Flame' },
      { name: 'Photovoltaïque', desc: 'Panneaux solaires en autoconsommation ou revente. Étude de rentabilité offerte.', icon: 'Sparkles' },
      { name: 'Chaudières biomasse', desc: 'Granulés, bois bûche, hybride. Énergie locale et neutre en carbone.', icon: 'Flame' },
      { name: 'Audit énergétique', desc: 'Diagnostic complet par un thermicien certifié. Plan de travaux chiffré.', icon: 'Gauge' },
    ],
    about: ["J'ai démarré ÉcoChauff en 2021 parce que je voyais des particuliers payer 3 000€ de fioul par hiver. Aujourd'hui on installe une dizaine de pompes à chaleur par mois sur Rennes.", 'Je passe encore sur la moitié des chantiers moi-même. Pour comprendre, pour vérifier, et parce que ça me plaît.'],
    prices: [],
    faq: [{ q: 'Vous gérez les aides ?', a: 'Oui, MaPrimeRénov, CEE, éco-PTZ : on monte tout le dossier.' }, { q: 'Êtes-vous RGE ?', a: 'Oui, QualiPAC et Qualibois.' }, { q: 'Devis gratuit ?', a: 'Oui, étude énergétique offerte jusqu\'à la signature.' }],
    ctaTitle: 'Votre simulation sous 24h',
    ctaSubtitle: 'On vous rappelle, on chiffre les aides, on planifie une visite. Tout est gratuit jusqu\'à la signature du devis.',
    ctaBullets: ['Étude énergétique offerte', 'Devis + aides sous 48h', 'Garantie décennale incluse', 'SAV 10 ans sur les PAC'],
  },
  reviews: fakeReviews.ecochauff,
  booking: { calLink: null, rdvDuration: null, rdvBuffer: null, contactPref: 'Formulaire' },
  seo: { title: 'ÉcoChauff — Pompe à chaleur RGE · Rennes', description: 'Chauffagiste RGE à Rennes. Pompe à chaleur, photovoltaïque, biomasse. Aides MaPrimeRénov gérées.' },
};
export default function Page() { return <EcochauffTemplate data={data} />; }
