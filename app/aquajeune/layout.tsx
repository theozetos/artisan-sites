import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aqua Jeune — Plombier moderne · Valence',
  description:
    "Plombier à Valence. Tarifs clairs affichés, prise de rendez-vous en 3 clics, devis par SMS. Intervention en 1h sur Valence et alentours.",
};

export default function AquaJeuneLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
