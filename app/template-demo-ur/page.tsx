/**
 * /template-demo-ur — route de VÉRIFICATION (non prod).
 * Compare avec /ur-beroa pour valider le rendu du template régional.
 * À supprimer après validation.
 */
'use client';

import UrBeroaTemplate from '@/components/templates/UrBeroaTemplate';
import { clients, fakeReviews } from '@/lib/clients';
import { defaultThemes, type ArtisanSite } from '@/lib/site-schema';

const c = clients.urBeroa;

const data: ArtisanSite = {
  identity: {
    slug: 'ur-beroa', name: c.name, legalName: c.legalName, owner: c.owner, trade: 'Plombier',
    address: c.address, phone: c.phone, phoneDisplay: c.phoneDisplay, whatsapp: null,
    email: 'contact@ur-beroa.fr', founded: c.founded, siret: null, domain: 'ur-beroa.fr',
    rating: c.rating, reviews: c.reviews, googleMapsUrl: c.googleMapsUrl,
    cityMain: 'Bayonne', zones: c.zones || [],
  },
  variant: 'ur-beroa',
  theme: defaultThemes['ur-beroa'],
  assets: { logoUrl: null, heroUrl: '/ur-beroa/hero.jpg', portraitUrl: '/ur-beroa/raphael.jpg', galleryUrls: [] },
  copy: {
    hero: {
      badge: 'Artisan local · Pays Basque',
      titleLines: ['Plomberie à', 'Bayonne'],
      subtitle: 'Chaleur et qualité depuis 2015. Une plomberie artisanale, transmise de père en fils, au service du Pays Basque.',
      proofs: [{ label: '10', sub: 'ans à Bayonne' }, { label: '100%', sub: 'artisan local' }],
    },
    servicesIntro: 'Du robinet qui fuit à la salle de bain entière',
    services: [
      { name: 'Plomberie', desc: "Installation et rénovation complète. Robinetterie, canalisations, ballon d'eau chaude.", icon: 'Droplets' },
      { name: 'Chauffage', desc: 'Chaudière, radiateurs, plancher chauffant. Entretien annuel et dépannage.', icon: 'Flame' },
      { name: 'Sanitaire', desc: 'Salle de bain clé en main, douche italienne, faïence. Conception sur mesure.', icon: 'Bath' },
      { name: 'Dépannage', desc: 'Fuites, débouchage, urgences. Intervention rapide à Bayonne et alentours.', icon: 'Wrench' },
    ],
    about: [
      "Raphael Pacou crée Ur Beroa en 2015, à Bayonne. L'idée : remettre l'humain au centre du métier. Un seul interlocuteur, du devis à la dernière finition.",
      "Dix ans plus tard, c'est plus d'un millier d'interventions sur tout le Pays Basque.",
      '"Je travaille comme si chaque maison était la mienne. Et chaque client, un voisin."',
    ],
    prices: [],
    faq: [
      { q: 'Intervenez-vous en urgence ?', a: 'Oui, dépannage rapide sur Bayonne et alentours.' },
      { q: 'Faites-vous les salles de bain complètes ?', a: 'Oui, de la conception à la pose, clé en main.' },
      { q: 'Devis gratuit ?', a: 'Oui, sans engagement.' },
    ],
    ctaTitle: 'Raphael vous reçoit ou se déplace',
    ctaSubtitle: 'Décrivez votre besoin, on vous recontacte rapidement avec un créneau et un devis.',
    ctaBullets: ['Un seul interlocuteur', 'Artisan local depuis 2015', 'Devis gratuit sans engagement'],
  },
  reviews: fakeReviews.urBeroa,
  booking: { calLink: null, rdvDuration: null, rdvBuffer: null, contactPref: 'Appel' },
  seo: { title: 'Ur Beroa — Plombier à Bayonne', description: 'Plombier artisanal à Bayonne et Pays Basque depuis 2015. Plomberie, chauffage, sanitaire, dépannage.' },
};

export default function TemplateDemoUrPage() {
  return <UrBeroaTemplate data={data} />;
}
