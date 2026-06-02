import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ur Beroa — Plombier à Bayonne · Pays Basque · Raphael Pacou',
  description: 'Plomberie, chauffage, sanitaire à Bayonne et au Pays Basque. Berotasuna eta kalitatea depuis 2015.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="font-lora bg-ur-cream text-ur-olive">{children}</div>;
}
