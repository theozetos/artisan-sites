// Généré automatiquement — site plomberie-test-3. Édite data/sites/plomberie-test-3.json pour le contenu.
'use client';
import SiteRenderer from '@/components/SiteRenderer';
import data from '@/data/sites/plomberie-test-3.json';
import type { ArtisanSite } from '@/lib/site-schema';

export default function Page() {
  return <SiteRenderer data={data as unknown as ArtisanSite} />;
}
