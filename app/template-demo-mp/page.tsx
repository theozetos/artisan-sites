/** /template-demo-mp — vérification (non prod). Comparer à /maisonpro. */
'use client';
import MaisonproTemplate from '@/components/templates/MaisonproTemplate';
import { clients, fakeReviews } from '@/lib/clients';
import { defaultThemes, type ArtisanSite } from '@/lib/site-schema';

const c = clients.maisonpro;
const data: ArtisanSite = {
  identity: {
    slug: 'maisonpro', name: c.name, legalName: c.legalName, owner: c.owner, trade: "Tous corps d'état",
    address: c.address, phone: c.phone, phoneDisplay: c.phoneDisplay, whatsapp: null, email: c.email || 'contact@maisonpro-bati.fr',
    founded: c.founded, siret: null, domain: 'maisonpro-bati.fr', rating: c.rating, reviews: c.reviews,
    googleMapsUrl: c.googleMapsUrl, cityMain: 'Angers', zones: c.zones || [],
  },
  variant: 'maisonpro', theme: defaultThemes.maisonpro,
  assets: { logoUrl: null, heroUrl: '/maisonpro/hero.jpg', portraitUrl: '/maisonpro/stephane.jpg', galleryUrls: [] },
  copy: {
    hero: { badge: 'Depuis 2008 · 20-49 salariés', titleLines: ["L'entrepreneur unique", 'pour tous vos travaux'], subtitle: '25 artisans, 6 corps d\'état, 1 chef de chantier dédié. Vous parlez à une seule personne, du devis à la livraison.', proofs: [{ label: '17', sub: "ans d'expérience" }, { label: '450+', sub: 'chantiers livrés' }, { label: '25', sub: 'artisans salariés' }] },
    servicesIntro: "25 artisans salariés, 6 corps d'état",
    services: [
      { name: 'Plomberie', desc: '6 artisans dédiés.', icon: 'Droplets' },
      { name: 'Électricité', desc: '4 artisans dédiés.', icon: 'Zap' },
      { name: 'Maçonnerie', desc: '8 artisans dédiés.', icon: 'Hammer' },
      { name: 'Couverture', desc: '3 artisans dédiés.', icon: 'Home' },
      { name: 'Isolation', desc: 'Performance énergétique.', icon: 'Ruler' },
      { name: 'Direction de chantier', desc: 'Un chef dédié par projet.', icon: 'Building2' },
    ],
    about: ['Stéphane Lefèvre a fondé MaisonPro Bati en 2008 après 12 ans de chefferie de chantier. 25 artisans en CDI, tous corps d\'état, plus de 450 chantiers livrés sur Angers et l\'Anjou.', '"On grandit doucement. Quand on prend un artisan, on le forme 2 mois avant l\'autonomie. C\'est le prix de la qualité."'],
    prices: [],
    faq: [{ q: 'Vous sous-traitez ?', a: 'Non, tous nos artisans sont en CDI.' }, { q: 'Un seul interlocuteur ?', a: 'Oui, un chef de chantier dédié du devis à la livraison.' }, { q: 'Délai de devis ?', a: 'Devis détaillé sous 48h après le métré.' }],
    ctaTitle: 'Décrivez votre projet, on chiffre en 48h',
    ctaSubtitle: 'On vous appelle, on se déplace pour le métré, on revient avec un devis détaillé sous 48 heures.',
    ctaBullets: ['Visite + métré gratuit', 'Devis détaillé sous 48h', 'Garantie décennale Qualibat', 'Un chef de chantier dédié'],
  },
  reviews: fakeReviews.maisonpro,
  booking: { calLink: null, rdvDuration: null, rdvBuffer: null, contactPref: 'Appel' },
  seo: { title: "MaisonPro Bati — Tous corps d'état · Angers", description: "Entreprise tous corps d'état à Angers depuis 2008. Rénovation complète, un seul interlocuteur, devis sous 48h." },
};
export default function Page() { return <MaisonproTemplate data={data} />; }
