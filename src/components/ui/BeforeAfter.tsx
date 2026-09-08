import { useState } from 'react'
import { MoveHorizontal } from 'lucide-react'
import SmileArt from './SmileArt'

type Props = {
  beforeColor: string
  afterColor: string
  label?: string
}

/**
 * Comparador antes/depois com arraste.
 * Acessibilidade: um <input type="range"> transparente cobre a area,
 * o que entrega arraste com mouse/toque e navegacao por teclado de graca.
 */
export default function BeforeAfter({ beforeColor, afterColor, label = 'Resultado' }: Props) {
  const [position, setPosition] = useState(52)

  return (
    <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-noir-900 select-none">
      {/* depois (base) */}
      <SmileArt variant="after" background={afterColor} className="absolute inset-0 size-full" />

      {/* antes (recortado ate a posicao do slider) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        aria-hidden="true"
      >
        <SmileArt variant="before" background={beforeColor} className="size-full" />
      </div>

      {/* etiquetas */}
      <span className="absolute top-4 left-4 border border-white/15 bg-noir-950/70 px-3 py-1.5 font-sans text-[0.55rem] tracking-[0.24em] text-cream-300 uppercase backdrop-blur-sm">
        Antes
      </span>
      <span className="absolute top-4 right-4 border border-gold-500/50 bg-noir-950/70 px-3 py-1.5 font-sans text-[0.55rem] tracking-[0.24em] text-gold-300 uppercase backdrop-blur-sm">
        Depois
      </span>

      {/* linha divisoria + alca */}
      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-gold-400/80"
        style={{ left: `${position}%` }}
      >
        <span className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold-500/60 bg-noir-950/85 text-gold-300 backdrop-blur transition duration-300 group-hover:scale-105 group-hover:border-gold-400">
          <MoveHorizontal size={16} aria-hidden="true" />
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label={`${label}: arraste para comparar antes e depois`}
        className="absolute inset-0 size-full cursor-ew-resize appearance-none bg-transparent opacity-0"
      />
    </div>
  )
}
