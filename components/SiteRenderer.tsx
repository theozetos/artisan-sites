'use client';

/**
 * SiteRenderer — point d'entrée des pages générées.
 *
 * Une page artisan générée fait juste :
 *   import data from '@/data/sites/{slug}.json';
 *   export default () => <SiteRenderer data={data} />;
 *
 * Le bon template est choisi selon data.variant, canalisé vers un template
 * réellement disponible (resolveTemplate). Tant que les 6 ne sont pas tous
 * convertis, on retombe proprement sur le template de repli.
 */
import type { ArtisanSite, SiteVariant } from '@/lib/site-schema';
import { resolveTemplate } from '@/lib/site-schema';
import AquaJeuneTemplate from '@/components/templates/AquaJeuneTemplate';
import GsClimatechTemplate from '@/components/templates/GsClimatechTemplate';
import H2eauTemplate from '@/components/templates/H2eauTemplate';
import UrBeroaTemplate from '@/components/templates/UrBeroaTemplate';

const TEMPLATES: Partial<Record<SiteVariant, React.ComponentType<{ data: ArtisanSite }>>> = {
  aquajeune: AquaJeuneTemplate,
  'gs-climatech': GsClimatechTemplate,
  h2eau: H2eauTemplate,
  'ur-beroa': UrBeroaTemplate,
  // ecochauff, maisonpro → à brancher au fur et à mesure
};

export default function SiteRenderer({ data }: { data: ArtisanSite }) {
  const resolved = resolveTemplate(data.variant);
  const Template = TEMPLATES[resolved] || AquaJeuneTemplate;
  return <Template data={data} />;
}
