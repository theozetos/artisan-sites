import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'H₂eau — Plombier 60 min à Amiens · Recherche de fuite enterrée',
  description: 'Une fuite ? Giovanni chez vous en 60 minutes. Plomberie, chauffage, recherche de fuite enterrée à Amiens.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="font-inter bg-h2-black text-h2-white">{children}</div>;
}
