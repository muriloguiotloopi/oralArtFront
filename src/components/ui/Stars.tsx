import { Star } from 'lucide-react'

type Props = {
  rating: number
  size?: number
  className?: string
}

/** Linha de estrelas cheias/vazias — usada nas avaliacoes. */
export default function Stars({ rating, size = 16, className = '' }: Props) {
  return (
    <div
      className={`flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`Nota ${rating.toFixed(1).replace('.', ',')} de 5`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          strokeWidth={0}
          className={i <= Math.round(rating) ? 'fill-[#e3b23c]' : 'fill-white/15'}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}
