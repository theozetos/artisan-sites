import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Plombier Paris 7j/7 | Dépannage & Salle de Bain – Plomberie Test 2",
  description: "Plombier à Paris : dépannage 7j/7, installation salle de bain, recherche de fuite. 15 ans d'expérience. Devis gratuit. Intervention Paris, Boulogne, Neuilly.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
