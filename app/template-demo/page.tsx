/**
 * /template-demo — route de VÉRIFICATION (non destinée à la prod).
 *
 * Rend AquaJeuneTemplate avec les données d'aquajeune, pour comparer visuellement
 * avec l'original /aquajeune et valider qu'on ne perd aucune qualité avant de
 * basculer le pipeline sur le template data-driven.
 *
 * À supprimer une fois la parité validée.
 */
'use client';

import AquaJeuneTemplate from '@/components/templates/AquaJeuneTemplate';
import { clients, fakeReviews } from '@/lib/clients';
import { defaultThemes, type ArtisanSite } from '@/lib/site-schema';

const c = clients.aquajeune;

const data: ArtisanSite = {
  identity: {
    slug: 'aquajeune',
    name: c.name,
    legalName: c.legalName,
    owner: c.owner,
    trade: 'Plombier',
    address: c.address,
    phone: c.phone,
    phoneDisplay: c.phoneDisplay,
    whatsapp: null,
    email: c.email || 'maxime@aquajeune.fr',
    founded: c.founded,
    siret: null,
    domain: 'aquajeune.fr',
    rating: c.rating,
    reviews: c.reviews,
    googleMapsUrl: c.googleMapsUrl,
    cityMain: 'Valence',
    zones: c.zones || [],
  },
  variant: 'aquajeune',
  theme: defaultThemes.aquajeune,
  assets: {
    logoUrl: null,
    heroUrl: '/aquajeune/hero.jpg',
    portraitUrl: '/aquajeune/maxime.jpg',
    galleryUrls: [],
  },
  copy: {
    hero: {
      badge: "Disponible aujourd'hui",
      titleLines: ['Plombier moderne.', 'Tarifs clairs.', 'Sur place en 1h.'],
      subtitle: "Vous tapez votre besoin, vous voyez le prix, vous prenez RDV. Pas d'appel commercial. Pas de surprise sur la facture.",
      proofs: [
        { label: '5 / 5', sub: '64 avis Google' },
        { label: '1h chrono', sub: 'Sur Valence et alentours' },
        { label: 'Tarifs publics', sub: 'Affichés sur le site' },
      ],
    },
    servicesIntro: "Dépannage, installation, recherche de fuite, salle de bain — tout ce dont vous avez besoin, avec des prix annoncés à l'avance.",
    services: [
      { name: 'Dépannage rapide', desc: 'Fuite, débouchage, remplacement de pièce — sur place en 1h sur Valence.', icon: 'Wrench' },
      { name: 'Installation sanitaire', desc: 'Chauffe-eau, robinetterie, WC suspendu, mitigeurs thermostatiques.', icon: 'Droplets' },
      { name: 'Recherche de fuite', desc: 'Caméra thermique + gaz traceur. Détection sans casser un seul carrelage.', icon: 'Search' },
      { name: 'Salle de bain clé en main', desc: 'Devis fixe, pas de surprise. De la dépose à la mise en service.', icon: 'Bath' },
    ],
    about: [
      "J'ai installé Aqua Jeune en 2023 parce que j'en avais marre de voir les Valentinois galérer à trouver un plombier qui donne ses prix. Aujourd'hui, je gère mon planning depuis mon smartphone, et je tiens mes engagements.",
      "Mes tarifs sont publics. Mon agenda est en ligne. Si je suis pas dispo, mon site vous le dit. Bref, je vous fais gagner du temps.",
    ],
    prices: [
      { name: 'Déplacement', from: '49 €', desc: 'Sur Valence & alentours (gratuit si devis accepté)' },
      { name: 'Débouchage canalisation', from: '129 €', desc: 'Lavabo / évier / WC · garantie 6 mois' },
      { name: 'Réparation fuite simple', from: '95 €', desc: "Pièce + main d'œuvre · 1h max" },
      { name: 'Pose chauffe-eau', from: '290 €', desc: 'Hors fourniture · garantie 2 ans' },
      { name: 'Recherche de fuite (caméra)', from: '180 €', desc: 'Détection sans casse · rapport remis' },
      { name: 'Salle de bain complète', from: '4 500 €', desc: 'Devis détaillé en 24h · sur mesure' },
    ],
    faq: [
      { q: 'Vous intervenez en combien de temps ?', a: 'En général sous 1h sur Valence et la première couronne pour les urgences.' },
      { q: 'Les tarifs affichés sont-ils fermes ?', a: 'Ce sont des tarifs de départ. Un devis ferme vous est remis avant toute intervention.' },
      { q: 'Vous prenez la carte bancaire ?', a: 'Oui, paiement par CB sur place ou en ligne.' },
    ],
    ctaTitle: 'Décrivez votre souci, je vous appelle dans la foulée',
    ctaSubtitle: 'On échange 5 min au téléphone, je vous donne un prix ferme, je viens. Vous pouvez aussi prendre RDV directement en ligne.',
    ctaBullets: ['Devis ferme avant intervention', 'Intervention en 1h sur Valence', 'Garantie 6 mois minimum', 'Paiement par CB sur place'],
  },
  reviews: fakeReviews.aquajeune,
  booking: { calLink: null, rdvDuration: null, rdvBuffer: null },
  seo: {
    title: 'Aqua Jeune — Plombier moderne · Valence',
    description: 'Plombier à Valence. Tarifs clairs, RDV en 3 clics, devis par SMS. Intervention en 1h.',
  },
};

export default function TemplateDemoPage() {
  return <AquaJeuneTemplate data={data} />;
}
