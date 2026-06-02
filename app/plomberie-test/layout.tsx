import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Plomberie Test – Plombier à Paris | Dépannage & Salle de bain",
  description: "Plombier à Paris, 15 ans d'expérience. Dépannage urgent 7j/7, installation de salle de bain, recherche de fuite. Devis gratuit. Intervention rapide à Paris, Boulogne, Neuilly.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
