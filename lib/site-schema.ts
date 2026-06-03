/**
 * site-schema.ts — Contrat de données unique pour les sites artisans générés.
 *
 * C'est le KEYSTONE du pipeline d'auto-génération :
 *   brief-artisans  ──►  Claude (génère un ArtisanSite)  ──►  template paramétrable  ──►  preview
 *
 * Trois consommateurs de ce fichier :
 *   1. Le générateur (api/generate-site.js) : `artisanSiteJsonSchema` est passé à Claude
 *      en tool-use → la sortie est validée structurellement (impossible de casser le build
 *      avec du TSX bancal, on ne génère QUE de la data).
 *   2. Le template paramétrable (Phase 2) : consomme un objet `ArtisanSite` typé.
 *   3. Le brief (api/brief-artisans.js) : `mapBriefToSeed()` pré-remplit ce qu'on connaît déjà,
 *      Claude ne complète/rédige que le reste.
 *
 * RÈGLE D'OR : le thème passe par des variables CSS (theme.colors → --site-*), JAMAIS par
 * de nouveaux tokens Tailwind. Ajouter un client ne touche donc jamais tailwind.config.ts
 * ni globals.css → zéro risque de casser le build des autres sites.
 */

// ──────────────────────────────────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────────────────────────────────

/**
 * Les templates disponibles = les 6 designs de démo existants, que l'artisan
 * peut pointer comme préférence dans le brief. On en livre UN seul (on canalise).
 * Tant qu'un template n'est pas encore "data-driven", on le route vers le plus
 * proche déjà converti via `RESOLVED_TEMPLATES`.
 */
export type SiteVariant =
  | 'gs-climatech' // premium, navy + cuivre
  | 'h2eau' // dark mode, cyan glow, urgences
  | 'ur-beroa' // régional, rouge basque + crème
  | 'ecochauff' // vert, énergies renouvelables / RGE
  | 'maisonpro' // graphite + orange, multi-corps d'état / TPE
  | 'aquajeune'; // bleu clair + corail, plombier moderne / solo

/** Templates déjà convertis en data-driven (rendus sans risque de build). */
export const RESOLVED_TEMPLATES: SiteVariant[] = ['aquajeune', 'gs-climatech', 'h2eau'];

/** Template de repli tant que tous ne sont pas convertis. */
export const FALLBACK_TEMPLATE: SiteVariant = 'aquajeune';

/** Palette du site, injectée en variables CSS sur le <main> du template. */
export interface SiteTheme {
  /** Couleur principale (marque) — ex "#3A8DDE". Mappée sur --site-primary. */
  primary: string;
  /** Variante foncée de la principale (hover, textes forts). --site-primary-dark. */
  primaryDark: string;
  /** Couleur d'accent / CTA — ex "#FF7F6E". --site-accent. */
  accent: string;
  /** Accent foncé (hover CTA). --site-accent-dark. */
  accentDark: string;
  /** Fond clair dominant — ex "#FBFCFE". --site-bg. */
  bg: string;
  /** Couleur du texte principal — ex "#0F1B2C". --site-ink. */
  ink: string;
  /** Mode global d'ambiance : 'light' ou 'dark' (ex H2eau). */
  mode: 'light' | 'dark';
}

export interface SiteService {
  /** Nom court du service — ex "Recherche de fuite". */
  name: string;
  /** 1 phrase concrète et orientée bénéfice client. */
  desc: string;
  /** Nom d'icône lucide-react (PascalCase) — ex "Search", "Droplets", "Wrench". */
  icon: string;
}

export interface SitePrice {
  /** Prestation — ex "Débouchage canalisation". */
  name: string;
  /** Prix d'appel — ex "129 €" ou "Sur devis". */
  from: string;
  /** Précision courte — ex "Lavabo / évier / WC · garantie 6 mois". */
  desc: string;
}

export interface SiteFaq {
  q: string;
  a: string;
}

export interface SiteReview {
  name: string;
  rating: number; // 1..5
  text: string;
  date: string; // ex "il y a 2 semaines"
}

export interface SiteAssets {
  /** URL du logo (Blob client) ou null → le template affiche un monogramme. */
  logoUrl: string | null;
  /** Photo héro principale (Blob client > stock). */
  heroUrl: string | null;
  /** Portrait artisan / équipe, si fourni (portrait_ok). */
  portraitUrl: string | null;
  /** Galerie chantier (Blob client), 0..n. */
  galleryUrls: string[];
}

/** Une micro-preuve du héro : libellé fort + sous-libellé. */
export interface SiteProof {
  /** Valeur forte — ex "5 / 5", "1h chrono", "RGE". */
  label: string;
  /** Précision — ex "64 avis Google", "Sur Valence", "Certifié Qualibat". */
  sub: string;
}

/** Bloc héro. */
export interface SiteHero {
  /** Badge de dispo au-dessus du H1 — ex "Disponible aujourd'hui". Optionnel. */
  badge?: string;
  /** Lignes du H1 (1 à 3). Le template stylise alternativement primary/accent. */
  titleLines: string[];
  /** Sous-titre — 1 à 2 phrases, promesse claire. */
  subtitle: string;
  /** 3 micro-preuves (label + sous-libellé). La 1re affiche les étoiles. */
  proofs: SiteProof[];
}

/** Le contenu rédactionnel généré par Claude (le reste vient du brief). */
export interface SiteCopy {
  hero: SiteHero;
  /** Intro courte du bloc services. */
  servicesIntro: string;
  services: SiteService[];
  /** Texte "à propos" (2-3 paragraphes), ton calé sur brief.tone. */
  about: string[];
  /** Tarifs indicatifs (optionnel — vide si l'artisan ne veut pas les afficher). */
  prices: SitePrice[];
  faq: SiteFaq[];
  /** Accroche du bloc contact/RDV. */
  ctaTitle: string;
  ctaSubtitle: string;
  /** 3-4 réassurances listées près du formulaire. */
  ctaBullets: string[];
}

/** SEO local — métier + ville. */
export interface SiteSeo {
  title: string;
  description: string;
}

/** Identité + données factuelles (majoritairement issues du brief, pas inventées). */
export interface SiteIdentity {
  /** slug technique (route + branche git) — ex "gs-climatech". */
  slug: string;
  /** Nom commercial affiché — ex "GS Climatech". */
  name: string;
  /** Raison sociale légale (footer / mentions). */
  legalName: string;
  /** Gérant / contact — ex "Laurent Caillaud". */
  owner: string;
  /** Métier principal — ex "Plombier chauffagiste". */
  trade: string;
  address: string;
  /** Téléphone format intl tel: — ex "+33 6 30 01 38 51". */
  phone: string;
  /** Téléphone format affiché — ex "06 30 01 38 51". */
  phoneDisplay: string;
  /** WhatsApp pro (format wa.me sans +) ou null. */
  whatsapp: string | null;
  /** Email pro affiché. */
  email: string;
  founded: number | null;
  siret: string | null;
  /** Nom de domaine souhaité — ex "gs-climatech.fr". */
  domain: string;
  rating: number;
  reviews: number;
  googleMapsUrl: string;
  /** Ville principale (titre SEO). */
  cityMain: string;
  /** Villes/zones d'intervention. */
  zones: string[];
}

/** Module RDV : lien Cal.com lié au calendrier client (brief.calendar_email). */
export interface SiteBooking {
  /** Lien Cal.com embarqué, ou null tant que non configuré. */
  calLink: string | null;
  rdvDuration: string | null;
  rdvBuffer: string | null;
  /** Canal de contact privilégié : "Appel" | "SMS" | "Email" | "Formulaire". */
  contactPref?: string | null;
}

/** Membre d'équipe (optionnel — section masquée si absente). */
export interface SiteTeamMember {
  name: string;
  role: string;
  /** URL photo (Blob) ou null. */
  img: string | null;
}

/** Objet racine : tout ce qu'il faut pour rendre un site, rien de plus. */
export interface ArtisanSite {
  identity: SiteIdentity;
  variant: SiteVariant;
  theme: SiteTheme;
  assets: SiteAssets;
  copy: SiteCopy;
  reviews: SiteReview[];
  booking: SiteBooking;
  seo: SiteSeo;
  /** Équipe (optionnel) — utilisé par les templates premium (ex gs-climatech). */
  team?: SiteTeamMember[];
  /** Statut pipeline — piloté par les fonctions API, pas par Claude. */
  status?: 'received' | 'generated' | 'in_review' | 'v1_sent' | 'live';
  /** Métadonnées de génération (debug / traçabilité). */
  meta?: {
    generatedAt?: string;
    model?: string;
    briefReceivedAt?: string;
  };
}

// ──────────────────────────────────────────────────────────────────────────
// Mapping modèle brief → variante template
// ──────────────────────────────────────────────────────────────────────────

/**
 * Le brief propose un champ `model` (préférence) : soit une des 6 démos nommées,
 * soit du texte libre / inspiration. On normalise vers un des 6 templates.
 * Défaut : 'aquajeune' (le plus polyvalent).
 */
export function modelToVariant(model: string | undefined | null): SiteVariant {
  const m = (model || '').toLowerCase();
  // Match direct sur un nom de démo
  if (/gs.?climatech|climatech/.test(m)) return 'gs-climatech';
  if (/h2.?eau|h₂eau/.test(m)) return 'h2eau';
  if (/ur.?beroa|beroa|basque/.test(m)) return 'ur-beroa';
  if (/[ée]co.?chauff|ecochauff/.test(m)) return 'ecochauff';
  if (/maison.?pro|maisonpro/.test(m)) return 'maisonpro';
  if (/aqua.?jeune|aquajeune/.test(m)) return 'aquajeune';
  // Sinon, inférence par intention
  if (/(urgence|d[ée]pannage|24|7j|express|nuit)/.test(m)) return 'h2eau';
  if (/(premium|haut de gamme|luxe|chic|\\d{2}\\s?ans)/.test(m)) return 'gs-climatech';
  if (/(r[ée]gional|local|terroir|village|proximit|breton)/.test(m)) return 'ur-beroa';
  if (/(rge|[ée]nergie|renouvelable|pompe|solaire|photovolta)/.test(m)) return 'ecochauff';
  if (/(tous corps|multi|b[âa]timent|r[ée]novation compl)/.test(m)) return 'maisonpro';
  return 'aquajeune';
}

/**
 * Canalise une préférence vers un template RÉELLEMENT disponible (data-driven).
 * Tant que les 6 ne sont pas convertis, on retombe sur le plus proche prêt.
 */
export function resolveTemplate(preferred: SiteVariant): SiteVariant {
  if (RESOLVED_TEMPLATES.includes(preferred)) return preferred;
  // Repli par archétype proche tant que les 6 ne sont pas tous convertis
  const premiumLike: SiteVariant[] = ['gs-climatech', 'maisonpro', 'ecochauff', 'ur-beroa'];
  if (premiumLike.includes(preferred) && RESOLVED_TEMPLATES.includes('gs-climatech')) return 'gs-climatech';
  return FALLBACK_TEMPLATE;
}

/** Thèmes par défaut par template — surchargeables par la couleur du brief. */
export const defaultThemes: Record<SiteVariant, SiteTheme> = {
  'gs-climatech': {
    primary: '#0A1628', primaryDark: '#060E1A',
    accent: '#B87333', accentDark: '#9A5E29',
    bg: '#F5F1E8', ink: '#0A1628', mode: 'light',
  },
  h2eau: {
    primary: '#00E5FF', primaryDark: '#00A3B8',
    accent: '#FF006E', accentDark: '#D80059',
    bg: '#0A0A0A', ink: '#F4F4F5', mode: 'dark',
  },
  'ur-beroa': {
    primary: '#BC1F26', primaryDark: '#8E161C',
    accent: '#A0763C', accentDark: '#7E5C2E',
    bg: '#FAF7F2', ink: '#2A2118', mode: 'light',
  },
  ecochauff: {
    primary: '#2D5A3F', primaryDark: '#1F3F2C',
    accent: '#F4C430', accentDark: '#E5B520',
    bg: '#F8F6F0', ink: '#1A2418', mode: 'light',
  },
  maisonpro: {
    primary: '#2A2D34', primaryDark: '#1A1D24',
    accent: '#FF6B35', accentDark: '#E05525',
    bg: '#F5F5F2', ink: '#2A2D34', mode: 'light',
  },
  aquajeune: {
    primary: '#3A8DDE', primaryDark: '#2C6EB0',
    accent: '#FF7F6E', accentDark: '#E66355',
    bg: '#FBFCFE', ink: '#0F1B2C', mode: 'light',
  },
};

// ──────────────────────────────────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────────────────────────────────

/** Libellé du bouton CTA selon le canal de contact privilégié de l'artisan. */
export function ctaButtonLabel(contactPref?: string | null): string {
  switch ((contactPref || '').toLowerCase()) {
    case 'appel': return 'Être rappelé rapidement';
    case 'sms': return 'Recevoir un créneau par SMS';
    case 'email': return 'Envoyer ma demande par email';
    case 'formulaire': return 'Envoyer ma demande';
    default: return 'Envoyer ma demande';
  }
}

/** Slugify FR — "GS Climatech" → "gs-climatech". */
export function slugify(input: string): string {
  return String(input || '')
    .normalize('NFD').replace(/[̀-ͯ]/g, '') // retire les accents
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48);
}

/** Téléphone FR → format wa.me (33XXXXXXXXX) ou null. */
export function toWaMe(rawPhone: string | undefined | null): string | null {
  let p = String(rawPhone || '').replace(/[\s().\-_/]/g, '');
  if (p.startsWith('+33')) p = '0' + p.slice(3);
  else if (p.startsWith('0033')) p = '0' + p.slice(4);
  if (/^0[1-9][0-9]{8}$/.test(p)) return '33' + p.slice(1);
  return null;
}

/** Téléphone → format intl tel: ("+33 6 ...") best-effort, sinon brut. */
export function toTelIntl(rawPhone: string | undefined | null): string {
  const wa = toWaMe(rawPhone);
  if (!wa) return String(rawPhone || '').trim();
  const n = wa.slice(2); // 9 digits
  return `+33 ${n[0]} ${n.slice(1, 3)} ${n.slice(3, 5)} ${n.slice(5, 7)} ${n.slice(7, 9)}`;
}

/**
 * Graine pré-remplie depuis le brief. On ne fabrique rien ici : on recopie le
 * factuel connu. Claude reçoit cette graine + le brief brut et complète UNIQUEMENT
 * la partie rédactionnelle (copy) + les choix de style, sans réécrire le factuel.
 *
 * `brief` = le body POST de brief-artisans (mêmes clés que api/brief-artisans.js).
 */
export function mapBriefToSeed(brief: Record<string, any>): {
  identity: Omit<SiteIdentity, 'rating' | 'reviews' | 'googleMapsUrl'> & {
    rating?: number; reviews?: number; googleMapsUrl?: string;
  };
  variant: SiteVariant;
  booking: SiteBooking;
} {
  const name = String(brief.company || '').trim();
  const slug = slugify(brief.domain ? brief.domain.replace(/\.(fr|com|net|eu)$/i, '') : name);
  const variant = modelToVariant(brief.model);

  const zones = String(brief.cities_other || '')
    .split(/[,\n;/]+/).map((s) => s.trim()).filter(Boolean);
  const cityMain = String(brief.city_main || '').trim();
  if (cityMain && !zones.includes(cityMain)) zones.unshift(cityMain);

  return {
    identity: {
      slug,
      name,
      legalName: name,
      owner: `${String(brief.firstname || '').trim()} ${String(brief.lastname || '').trim()}`.trim(),
      trade: String(brief.trade || '').trim(),
      address: String(brief.address || '').trim(),
      phone: toTelIntl(brief.phone),
      phoneDisplay: String(brief.phone || '').trim(),
      whatsapp: toWaMe(brief.whatsapp || brief.phone),
      email: String(brief.email || '').trim(),
      founded: brief.founded ? parseInt(String(brief.founded), 10) || null : null,
      siret: String(brief.siret || '').trim() || null,
      domain: String(brief.domain || '').trim(),
      cityMain,
      zones,
      googleMapsUrl: String(brief.google_url || '').trim(),
    },
    variant,
    booking: {
      calLink: null, // configuré après coup via brief.calendar_email
      rdvDuration: String(brief.rdv_duration || '').trim() || null,
      rdvBuffer: String(brief.rdv_buffer || '').trim() || null,
      contactPref: String(brief.contact_pref || '').trim() || null,
    },
  };
}

// ──────────────────────────────────────────────────────────────────────────
// JSON Schema pour Claude (tool use) — ne décrit QUE ce que Claude doit rédiger.
// Le factuel (identity, googleMapsUrl, etc.) est fourni en contexte, pas regénéré.
// ──────────────────────────────────────────────────────────────────────────

export const artisanSiteJsonSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['variant', 'theme', 'copy', 'reviews', 'seo'],
  properties: {
    variant: { type: 'string', enum: ['gs-climatech', 'h2eau', 'ur-beroa', 'ecochauff', 'maisonpro', 'aquajeune'] },
    theme: {
      type: 'object',
      additionalProperties: false,
      required: ['primary', 'primaryDark', 'accent', 'accentDark', 'bg', 'ink', 'mode'],
      properties: {
        primary: { type: 'string', description: 'hex #RRGGBB, couleur de marque (calée sur brief.color si fourni)' },
        primaryDark: { type: 'string' },
        accent: { type: 'string' },
        accentDark: { type: 'string' },
        bg: { type: 'string' },
        ink: { type: 'string' },
        mode: { type: 'string', enum: ['light', 'dark'] },
      },
    },
    copy: {
      type: 'object',
      additionalProperties: false,
      required: ['hero', 'servicesIntro', 'services', 'about', 'prices', 'faq', 'ctaTitle', 'ctaSubtitle', 'ctaBullets'],
      properties: {
        hero: {
          type: 'object',
          additionalProperties: false,
          required: ['titleLines', 'subtitle', 'proofs'],
          properties: {
            badge: { type: 'string', description: "badge de dispo court, ex 'Disponible aujourd'hui' — optionnel" },
            titleLines: { type: 'array', items: { type: 'string' }, minItems: 1, maxItems: 3 },
            subtitle: { type: 'string' },
            proofs: {
              type: 'array', minItems: 2, maxItems: 3,
              items: {
                type: 'object', additionalProperties: false, required: ['label', 'sub'],
                properties: { label: { type: 'string' }, sub: { type: 'string' } },
              },
            },
          },
        },
        servicesIntro: { type: 'string' },
        services: {
          type: 'array', minItems: 3, maxItems: 6,
          items: {
            type: 'object', additionalProperties: false,
            required: ['name', 'desc', 'icon'],
            properties: {
              name: { type: 'string' },
              desc: { type: 'string' },
              icon: { type: 'string', description: 'nom lucide-react PascalCase, ex Wrench, Droplets, Flame, Zap, Search, Bath, Wind, Hammer' },
            },
          },
        },
        about: { type: 'array', items: { type: 'string' }, minItems: 1, maxItems: 4 },
        prices: {
          type: 'array', minItems: 0, maxItems: 6,
          items: {
            type: 'object', additionalProperties: false,
            required: ['name', 'from', 'desc'],
            properties: {
              name: { type: 'string' }, from: { type: 'string' }, desc: { type: 'string' },
            },
          },
        },
        faq: {
          type: 'array', minItems: 3, maxItems: 5,
          items: {
            type: 'object', additionalProperties: false,
            required: ['q', 'a'],
            properties: { q: { type: 'string' }, a: { type: 'string' } },
          },
        },
        ctaTitle: { type: 'string' },
        ctaSubtitle: { type: 'string' },
        ctaBullets: { type: 'array', items: { type: 'string' }, minItems: 3, maxItems: 4 },
      },
    },
    reviews: {
      type: 'array', minItems: 3, maxItems: 6,
      description: 'Avis plausibles inspirés du métier/ville SI le client n\'a pas fourni ses vrais avis. À remplacer par les vrais avant mise en ligne.',
      items: {
        type: 'object', additionalProperties: false,
        required: ['name', 'rating', 'text', 'date'],
        properties: {
          name: { type: 'string' },
          rating: { type: 'integer', minimum: 4, maximum: 5 },
          text: { type: 'string' },
          date: { type: 'string' },
        },
      },
    },
    seo: {
      type: 'object', additionalProperties: false,
      required: ['title', 'description'],
      properties: {
        title: { type: 'string', description: 'métier + ville, < 60 caractères' },
        description: { type: 'string', description: '< 155 caractères' },
      },
    },
  },
} as const;
