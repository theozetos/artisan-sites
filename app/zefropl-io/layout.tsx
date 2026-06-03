import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Couvreur Urgence 24h/24 en Nouvelle-Aquitaine | LAPLACE SAS",
  description: "Dépannage toiture 7j/7 : fuite, tuile arrachée, bâchage d'urgence. Intervention rapide dans un rayon de 100 km. Appelez le 06 78 09 37 24.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
