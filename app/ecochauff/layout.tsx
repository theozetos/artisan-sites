import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ÉcoChauff — Pompes à chaleur & énergies renouvelables · Rennes',
  description:
    "Installateur RGE QualiPAC et Qualibois à Rennes. Pompes à chaleur, photovoltaïque, audit énergétique. On monte votre dossier MaPrimeRénov de A à Z.",
};

export default function EcoChauffLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
