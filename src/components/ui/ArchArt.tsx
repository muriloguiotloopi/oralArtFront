import { useId } from 'react'

const TOOTH_COUNT = 14

/**
 * Emblema da arcada dentária em traço fino dourado — visual do hero.
 *
 * PLACEHOLDER editorial: substitui a foto do cliente sem parecer
 * inacabado. Para usar foto real, troque este componente por
 * <img className="size-full object-cover" … /> dentro da mesma moldura.
 */
export default function ArchArt({ className = '' }: { className?: string }) {
  const uid = useId().replace(/:/g, '')
  const strokeId = `arch-stroke-${uid}`
  const glowId = `arch-glow-${uid}`

  const teeth = Array.from({ length: TOOTH_COUNT }, (_, index) => {
    const angle = 180 + ((index + 0.5) * 180) / TOOTH_COUNT
    const radians = (angle * Math.PI) / 180
    const cx = 200 + 118 * Math.cos(radians)
    const cy = 214 + 150 * Math.sin(radians)
    // 0 nos incisivos (frente), 1 nos molares (fundo)
    const backness = Math.abs(angle - 270) / 90
    const width = 15 + 13 * backness
    const height = 27 - 7 * backness
    return {
      key: index,
      cx,
      cy,
      width,
      height,
      rotation: angle - 270,
      emphasis: backness < 0.36,
    }
  })

  return (
    <svg viewBox="0 0 400 420" className={className} role="presentation" aria-hidden="true">
      <defs>
        <linearGradient id={strokeId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6ecd2" />
          <stop offset="55%" stopColor="#c9a227" />
          <stop offset="100%" stopColor="#7c6115" />
        </linearGradient>
        <radialGradient id={glowId}>
          <stop offset="0%" stopColor="#c9a227" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="200" cy="215" rx="185" ry="175" fill={`url(#${glowId})`} />

      {/* arcos concêntricos de apoio */}
      <g fill="none" stroke={`url(#${strokeId})`}>
        <path d="M32 214 A168 168 0 0 0 368 214" strokeOpacity="0.28" strokeWidth="0.8" />
        <path d="M62 214 A138 138 0 0 0 338 214" strokeOpacity="0.16" strokeWidth="0.6" />
        <path d="M8 214 H392" strokeOpacity="0.22" strokeWidth="0.6" />
      </g>

      {/* arcada */}
      <g stroke={`url(#${strokeId})`}>
        {teeth.map((tooth) => (
          <rect
            key={tooth.key}
            x={tooth.cx - tooth.width / 2}
            y={tooth.cy - tooth.height / 2}
            width={tooth.width}
            height={tooth.height}
            rx="5"
            fill={tooth.emphasis ? '#c9a227' : 'none'}
            fillOpacity={tooth.emphasis ? 0.12 : 0}
            strokeWidth="1"
            strokeOpacity={tooth.emphasis ? 0.95 : 0.55}
            transform={`rotate(${tooth.rotation} ${tooth.cx} ${tooth.cy})`}
          />
        ))}
      </g>

      {/* losango ornamental + filete */}
      <g stroke={`url(#${strokeId})`} fill="none" strokeWidth="0.9">
        <rect x="194" y="330" width="12" height="12" transform="rotate(45 200 336)" />
        <path d="M70 336 H176" strokeOpacity="0.35" />
        <path d="M224 336 H330" strokeOpacity="0.35" />
      </g>
    </svg>
  )
}
