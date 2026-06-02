/**
 * /template-demo-gs — route de VÉRIFICATION (non prod).
 * Compare avec /gs-climatech pour valider la parité du template premium.
 * À supprimer après validation.
 */
'use client';

import GsClimatechTemplate from '@/components/templates/GsClimatechTemplate';
import { clients, fakeReviews } from '@/lib/clients';
import { defaultThemes, type ArtisanSite } from '@/lib/site-schema';

const c = clients.gsClimatech;

const data: ArtisanSite = {
  identity: {
    slug: 'gs-climatech',
    name: c.name,
    legalName: c.legalName,
    owner: c.owner,
    trade: 'Plomberie · Chauffage · Électricité',
    address: c.address,
    phone: c.phone,
    phoneDisplay: c.phoneDisplay,
    whatsapp: null,
    email: 'contact@gs-climatech.fr',
    founded: c.founded,
    siret: null,
    domain: 'gs-climatech.fr',
    rating: c.rating,
    reviews: c.reviews,
    googleMapsUrl: c.googleMapsUrl,
    cityMain: 'Écouflant',
    zones: c.zones || [],
  },
  variant: 'gs-climatech',
  theme: defaultThemes['gs-climatech'],
  assets: {
    logoUrl: null,
    heroUrl: '/gs-climatech/hero.jpg',
    portraitUrl: null,
    galleryUrls: ['/chantiers/1.jpg', '/chantiers/2.jpg', '/chantiers/3.jpg', '/chantiers/4.jpg', '/chantiers/5.jpg', '/chantiers/6.jpg'],
  },
  team: [
    { name: 'Laurent', role: 'Fondateur', img: '/team/laurent.jpg' },
    { name: 'Mathieu', role: 'Chef de chantier', img: '/team/mathieu.jpg' },
    { name: 'Pierre', role: 'Plombier confirmé', img: '/team/pierre.jpg' },
    { name: 'Antoine', role: 'Électricien', img: '/team/antoine.jpg' },
  ],
  copy: {
    hero: {
      titleLines: ['Depuis 20 ans,', "l'Anjou nous fait", 'confiance.'],
      subtitle: "Plomberie, chauffage, électricité et climatisation. Une équipe de 15 artisans qui intervient chez vous comme s'il s'agissait de leur propre maison.",
      proofs: [
        { label: '5 / 5', sub: 'avis Google' },
        { label: '20+', sub: "Années d'expérience" },
        { label: 'RGE', sub: 'Certifié Qualibat' },
      ],
    },
    servicesIntro: 'Une seule entreprise pour tous vos besoins, du sol au plafond.',
    services: [
      { name: 'Électricité', desc: 'Mise aux normes, tableau électrique, rénovation complète, dépannage 7j/7.', icon: 'Zap' },
      { name: 'Plomberie', desc: "Sanitaires, salle de bain, recherche de fuite, traitement de l'eau.", icon: 'Droplets' },
      { name: 'Chauffage', desc: 'Chaudière gaz, pompe à chaleur, plancher chauffant, entretien annuel.', icon: 'Flame' },
      { name: 'Climatisation', desc: 'Mono-split, multi-split, climatisation gainable, devis gratuit.', icon: 'Snowflake' },
    ],
    about: [
      'Chez GS Climatech, tous nos artisans sont en CDI. Pas de sous-traitance, pas de surprise. C\'est notre garantie de qualité depuis 2005.',
    ],
    prices: [],
    faq: [
      { q: 'Vous êtes certifiés RGE ?', a: 'Oui, Qualibat RGE — vous pouvez bénéficier des aides à la rénovation énergétique.' },
      { q: 'Intervenez-vous en urgence ?', a: 'Oui, dépannage 7j/7 sur l\'agglomération d\'Angers.' },
      { q: 'Faites-vous des devis gratuits ?', a: 'Oui, tout devis est gratuit et sans engagement.' },
    ],
    ctaTitle: 'Choisissez votre créneau, un artisan vous rappelle dans l\'heure',
    ctaSubtitle: 'Décrivez votre besoin, on vous recontacte rapidement avec un créneau et un devis.',
    ctaBullets: ['Devis gratuit sous 48h', 'Équipe RGE en CDI', 'Intervention sur tout l\'Anjou'],
  },
  reviews: fakeReviews.gsClimatech,
  booking: { calLink: null, rdvDuration: null, rdvBuffer: null },
  seo: {
    title: 'GS Climatech — Plomberie Chauffage Électricité · Écouflant',
    description: 'Depuis 2005, plomberie, chauffage, électricité et climatisation en Anjou. Équipe RGE, 209 avis Google 5/5.',
  },
};

export default function TemplateDemoGsPage() {
  return <GsClimatechTemplate data={data} />;
}
