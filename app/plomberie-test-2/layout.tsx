import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Plomberie Test 2 - Plombier Paris, Boulogne, Neuilly | Dépannage 7j/7",
  description: "Plombier à Paris avec 15 ans d'expérience. Dépannage urgent 7j/7, rénovation salle de bain, recherche de fuite. Devis gratuit. Appelez Jean Dupont au 06 12 34 56 78.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
