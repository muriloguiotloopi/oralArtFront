import type { LucideIcon } from 'lucide-react'
import {
  Anchor,
  CalendarCheck,
  CreditCard,
  FileText,
  HeartPulse,
  Microscope,
  ScanLine,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Sun,
  Wand2,
} from 'lucide-react'

/**
 * Mapa nome -> icone. Permite que o mock data (clinic.ts) seja
 * 100% serializavel, referenciando icones por string.
 */
const iconMap: Record<string, LucideIcon> = {
  Anchor,
  CalendarCheck,
  CreditCard,
  FileText,
  HeartPulse,
  Microscope,
  ScanLine,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Sun,
  Wand2,
}

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles
}
