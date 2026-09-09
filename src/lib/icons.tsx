import type { LucideIcon } from 'lucide-react'
import {
  Anchor,
  CalendarCheck,
  CreditCard,
  Crown,
  Droplets,
  FileText,
  Gem,
  GraduationCap,
  HeartPulse,
  Layers,
  Microscope,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Sun,
  Syringe,
} from 'lucide-react'

/**
 * Mapa nome -> icone. Permite que o mock data (clinic.ts) seja
 * 100% serializavel, referenciando icones por string.
 */
const iconMap: Record<string, LucideIcon> = {
  Anchor,
  CalendarCheck,
  CreditCard,
  Crown,
  Droplets,
  FileText,
  Gem,
  GraduationCap,
  HeartPulse,
  Layers,
  Microscope,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Sun,
  Syringe,
}

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles
}
