import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Plomberie Test 3 – Plombier à Paris | Dépannage & Salle de bain 7j/7",
  description: "Plombier à Paris avec 15 ans d'expérience. Dépannage urgent 7j/7, installation salle de bain, détection de fuite. Intervention rapide à Paris, Boulogne, Neuilly.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
