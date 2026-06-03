// Généré automatiquement — site zefropl-io. Édite data/sites/zefropl-io.json pour le contenu.
'use client';
import SiteRenderer from '@/components/SiteRenderer';
import data from '@/data/sites/zefropl-io.json';
import type { ArtisanSite } from '@/lib/site-schema';

export default function Page() {
  return <SiteRenderer data={data as unknown as ArtisanSite} />;
}
