import { siteConfig } from '../../data/clinic'

type Props = {
  /** Versao reduzida para o topo fixo quando o usuario ja rolou a pagina. */
  compact?: boolean
}

/**
 * Marca: monograma dourado + wordmark serifado com subtítulo espaçado.
 * Substituível por um SVG do logo real do cliente.
 */
export default function Logo({ compact = false }: Props) {
  return (
    <span className="flex items-center gap-3.5">
      <span
        className={`relative flex shrink-0 items-center justify-center transition-all duration-500 ${
          compact ? 'size-9' : 'size-11'
        }`}
      >
        <svg viewBox="0 0 48 48" className="absolute inset-0 size-full" aria-hidden="true">
          <defs>
            <linearGradient id="logo-gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f6ecd2" />
              <stop offset="45%" stopColor="#c9a227" />
              <stop offset="100%" stopColor="#7c6115" />
            </linearGradient>
          </defs>
          <circle cx="24" cy="24" r="23" fill="none" stroke="url(#logo-gold)" strokeWidth="1" />
          <circle cx="24" cy="24" r="19" fill="none" stroke="url(#logo-gold)" strokeWidth="0.4" opacity="0.5" />
          {/* dente estilizado */}
          <path
            d="M24 13.5c-1.5 0-2.1.6-3.7.6-2.2 0-3.7 1.6-3.7 4.1 0 2.1.6 3.4 1.1 5.2.5 1.6.7 3.1.9 4.6.2 1.2.7 1.9 1.6 1.9.9 0 1.3-.8 1.6-2.1l.6-3c.2-.8.4-1.2 1-1.2s.8.4 1 1.2l.6 3c.3 1.3.7 2.1 1.6 2.1.9 0 1.4-.7 1.6-1.9.2-1.5.4-3 .9-4.6.5-1.8 1.1-3.1 1.1-5.2 0-2.5-1.5-4.1-3.7-4.1-1.6 0-2.2-.6-3.7-.6Z"
            fill="url(#logo-gold)"
          />
        </svg>
      </span>

      <span className="leading-none">
        <span
          className={`block font-display font-medium tracking-wide text-cream-50 transition-all duration-500 ${
            compact ? 'text-[1.15rem]' : 'text-[1.35rem]'
          }`}
        >
          {siteConfig.name}
        </span>
        <span className="mt-1 block font-sans text-[0.55rem] font-medium tracking-[0.42em] text-gold-500 uppercase">
          Odontologia
        </span>
      </span>
    </span>
  )
}
