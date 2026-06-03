/**
 * /template-demo-h2 — route de VÉRIFICATION (non prod).
 * Compare avec /h2eau pour valider le rendu du template dark/urgences.
 * À supprimer après validation.
 */
'use client';

import H2eauTemplate from '@/components/templates/H2eauTemplate';
import { clients, fakeReviews } from '@/lib/clients';
import { defaultThemes, type ArtisanSite } from '@/lib/site-schema';

const c = clients.h2eau;

const data: ArtisanSite = {
  identity: {
    slug: 'h2eau',
    name: 'H2eau',
    legalName: c.legalName,
    owner: c.owner,
    trade: 'Plombier',
    address: c.address,
    phone: c.phone,
    phoneDisplay: c.phoneDisplay,
    whatsapp: null,
    email: c.email || 'h2eau.amiens@gmail.com',
    founded: c.founded,
    siret: null,
    domain: 'h2eau.fr',
    rating: c.rating,
    reviews: c.reviews,
    googleMapsUrl: c.googleMapsUrl,
    cityMain: 'Amiens',
    zones: ['Amiens', 'Longueau', 'Salouël', 'Rivery', 'Camon'],
  },
  variant: 'h2eau',
  theme: defaultThemes.h2eau,
  assets: { logoUrl: null, heroUrl: '/h2eau/recherche-fuite.jpg', portraitUrl: null, galleryUrls: [] },
  copy: {
    hero: {
      badge: 'Giovanni · Disponible · Amiens',
      titleLines: ['Une fuite ?', '60 min.', 'Chez vous.'],
      subtitle: 'Plombier nouvelle génération à Amiens. Détection de fuite enterrée par caméra thermique. Sans casse. Sans surprise.',
      proofs: [
        { label: '60', sub: 'min d\'intervention' },
        { label: '98%', sub: 'fuites localisées' },
      ],
    },
    servicesIntro: 'Tout ce que je sais faire',
    services: [
      { name: 'Recherche fuite enterrée', desc: '', icon: 'Search' },
      { name: 'Plomberie générale', desc: '', icon: 'Droplets' },
      { name: 'Dépannage 24/7', desc: '', icon: 'Wrench' },
      { name: 'Chauffage', desc: '', icon: 'Flame' },
      { name: 'Climatisation', desc: '', icon: 'Wind' },
      { name: 'Débouchage', desc: '', icon: 'Droplets' },
    ],
    about: [
      'Caméra thermique, gaz traceur, corrélateur acoustique : 3 technologies pour localiser votre fuite au centimètre près, sans casser un seul carrelage.',
      'Plombier nouvelle génération, je réponds vite et je communique par SMS avant chaque intervention.',
    ],
    prices: [],
    faq: [
      { q: 'Vous intervenez en combien de temps ?', a: 'En général sous 60 minutes sur Amiens pour les urgences.' },
      { q: 'La recherche de fuite casse-t-elle les murs ?', a: 'Non, détection thermique sans casse, rapport fourni.' },
      { q: 'Disponible le week-end ?', a: 'Oui, service 7j/7 pour les urgences.' },
    ],
    ctaTitle: 'Réservez votre créneau',
    ctaSubtitle: 'Décrivez votre problème, je vous rappelle et je viens. Devis transparent avant intervention.',
    ctaBullets: ['Intervention sous 60 min', 'Recherche fuite sans casse', 'Devis gratuit transparent', 'Disponible 7j/7'],
  },
  reviews: fakeReviews.h2eau,
  booking: { calLink: null, rdvDuration: null, rdvBuffer: null, contactPref: 'Appel' },
  seo: { title: 'H2eau — Plombier · Recherche de fuite · Amiens', description: 'Plombier à Amiens. Recherche de fuite sans casse, intervention sous 60 min, 7j/7.' },
};

export default function TemplateDemoH2Page() {
  return <H2eauTemplate data={data} />;
}
