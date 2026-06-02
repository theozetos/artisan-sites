import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GS Climatech — Plomberie · Chauffage · Électricité · Climatisation à Écouflant',
  description: "Depuis 20 ans, GS Climatech accompagne les particuliers de l'Anjou. 209 avis 5★ Google.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="font-intertight bg-gs-cream text-gs-navy">{children}</div>;
}
