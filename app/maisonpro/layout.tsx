import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MaisonPro Bati — Entreprise tous corps d\'état · Angers',
  description:
    "L'entrepreneur unique pour tous vos travaux. Plomberie, électricité, maçonnerie, couverture, rénovation complète. 25 artisans à Angers depuis 2008.",
};

export default function MaisonProLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
