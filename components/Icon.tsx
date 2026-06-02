'use client';

/**
 * Icon.tsx — résout un nom d'icône lucide (string venant de la data générée)
 * vers le composant React. Whitelist explicite : si Claude renvoie un nom hors
 * liste, on retombe sur une icône neutre plutôt que de casser le rendu.
 */
import {
  Wrench, Droplets, Search, Bath, Flame, Zap, Wind, Hammer, Thermometer,
  ShieldCheck, Clock, Phone, Hand, Snowflake, Plug, Gauge, Home, Settings,
  CheckCircle2, Sparkles, Building2, Paintbrush, Ruler, type LucideIcon,
} from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  Wrench, Droplets, Search, Bath, Flame, Zap, Wind, Hammer, Thermometer,
  ShieldCheck, Clock, Phone, Hand, Snowflake, Plug, Gauge, Home, Settings,
  CheckCircle2, Sparkles, Building2, Paintbrush, Ruler,
};

export function Icon({ name, ...props }: { name: string } & React.ComponentProps<LucideIcon>) {
  const Cmp = ICONS[name] || Wrench;
  return <Cmp {...props} />;
}
