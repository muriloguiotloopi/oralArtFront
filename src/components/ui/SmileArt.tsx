import { useId } from 'react'

type Props = {
  variant: 'before' | 'after'
  /** Cor de fundo do quadro; use "transparent" para herdar o fundo do container. */
  background?: string
  className?: string
}

/* Larguras dos dentes superiores, do canino esquerdo ao direito. */
const TOOTH_WIDTHS = [30, 30, 24, 21, 21, 24, 30, 30]

/* Desalinhamentos deterministicos usados apenas no estado "antes". */
const BEFORE_OFFSET = [
  { dx: -3, dy: 4, rot: -5 },
  { dx: -1, dy: 1, rot: 3 },
  { dx: 2, dy: 5, rot: 6 },
  { dx: 1, dy: -2, rot: -3 },
  { dx: -2, dy: 3, rot: 4 },
  { dx: 3, dy: 6, rot: -6 },
  { dx: 1, dy: 0, rot: 2 },
  { dx: 4, dy: 3, rot: 5 },
]

const MOUTH = 'M58 132 Q200 60 342 132 Q200 214 58 132 Z'

/**
 * Ilustracao vetorial de um sorriso (antes/depois), em tons marfim sobre
 * fundo escuro, com contorno dourado.
 *
 * PLACEHOLDER: existe para o layout ficar completo sem usar fotos de
 * pacientes reais. Ao entregar para o cliente, troque o componente por
 * <img src={caso.foto} /> mantendo a mesma proporcao (4/3).
 */
export default function SmileArt({ variant, background = 'transparent', className = '' }: Props) {
  const isAfter = variant === 'after'
  const gap = isAfter ? 2 : 3.5
  const totalWidth =
    TOOTH_WIDTHS.reduce((sum, w) => sum + w, 0) + gap * (TOOTH_WIDTHS.length - 1)

  const startX = 200 - totalWidth / 2
  const teeth = TOOTH_WIDTHS.map((width, index) => {
    const precedingWidth = TOOTH_WIDTHS.slice(0, index).reduce((sum, w) => sum + w, 0)
    const x = startX + precedingWidth + gap * index
    const center = x + width / 2
    const curve = (center - 200) ** 2
    const top = 94 + curve * 0.0005
    const bottom = 156 - curve * 0.0012
    const offset = isAfter ? { dx: 0, dy: 0, rot: 0 } : BEFORE_OFFSET[index]
    return {
      key: index,
      x: x + offset.dx,
      y: top + offset.dy,
      width,
      height: Math.max(bottom - top, 22),
      rotation: offset.rot,
      cx: center + offset.dx,
      cy: (top + bottom) / 2,
    }
  })

  // ids unicos: varios SmileArt convivem na mesma pagina
  const uid = useId().replace(/:/g, '')
  const gradientId = `smile-${variant}-${uid}`
  const glowId = `glow-${variant}-${uid}`
  const clipId = `clip-${variant}-${uid}`

  return (
    <svg
      viewBox="0 0 400 260"
      className={className}
      role="img"
      aria-label={isAfter ? 'Ilustração do sorriso depois' : 'Ilustração do sorriso antes'}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          {isAfter ? (
            <>
              <stop offset="0%" stopColor="#fffdf7" />
              <stop offset="100%" stopColor="#e6dcc6" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#cdc2a8" />
              <stop offset="100%" stopColor="#9c927c" />
            </>
          )}
        </linearGradient>
        <radialGradient id={glowId}>
          <stop offset="0%" stopColor="#c9a227" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
        </radialGradient>
        <clipPath id={clipId}>
          <path d={MOUTH} />
        </clipPath>
      </defs>

      {background !== 'transparent' ? (
        <rect width="400" height="260" fill={background} />
      ) : null}

      {isAfter ? <ellipse cx="200" cy="132" rx="170" ry="86" fill={`url(#${glowId})`} /> : null}

      {/* interior da boca */}
      <path d={MOUTH} fill="#1a1512" />

      <g clipPath={`url(#${clipId})`}>
        {/* gengiva, discreta */}
        <path d="M40 46 Q200 28 360 46 L360 110 Q200 82 40 110 Z" fill="#6b4340" opacity="0.7" />

        {teeth.map((tooth) => (
          <rect
            key={tooth.key}
            x={tooth.x}
            y={tooth.y}
            width={tooth.width}
            height={tooth.height}
            rx="6"
            fill={`url(#${gradientId})`}
            stroke={isAfter ? '#c9a227' : '#6f6353'}
            strokeOpacity={isAfter ? 0.35 : 0.5}
            strokeWidth="0.7"
            transform={`rotate(${tooth.rotation} ${tooth.cx} ${tooth.cy})`}
          />
        ))}

        {/* dentes inferiores, apenas sugeridos */}
        <path
          d="M78 170 Q200 150 322 170 L322 198 Q200 220 78 198 Z"
          fill={isAfter ? '#d9cfb8' : '#8c8271'}
          opacity="0.75"
        />

        {isAfter ? (
          <>
            <path d="M118 102 L146 102 L126 142 L98 142 Z" fill="#ffffff" opacity="0.45" />
            <circle cx="250" cy="114" r="5" fill="#ffffff" opacity="0.6" />
          </>
        ) : (
          <>
            <ellipse cx="176" cy="128" rx="9" ry="14" fill="#7a6b4f" opacity="0.55" />
            <rect x="214" y="98" width="8" height="13" rx="3" fill="#1a1512" opacity="0.5" />
          </>
        )}
      </g>

      {/* contorno dos labios */}
      <path
        d={MOUTH}
        fill="none"
        stroke={isAfter ? '#c9a227' : '#5b5347'}
        strokeOpacity={isAfter ? 0.55 : 0.6}
        strokeWidth="1.6"
      />
    </svg>
  )
}
