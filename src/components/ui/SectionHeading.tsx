type Props = {
  eyebrow: string
  title: string
  /** Trecho final do título exibido em itálico dourado. */
  accent?: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = 'center',
}: Props) {
  const isCenter = align === 'center'

  return (
    <div className={isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <span className="eyebrow">{eyebrow}</span>

      <span
        aria-hidden="true"
        className={`mt-5 block h-px w-14 bg-gold-500/70 ${isCenter ? 'mx-auto' : ''}`}
      />

      <h2 className="mt-6 font-display text-[2.1rem] leading-[1.12] sm:text-[2.9rem] lg:text-[3.35rem]">
        {title}
        {accent ? <em className="gold-text italic"> {accent}</em> : null}
      </h2>

      {description ? (
        <p className="mt-5 text-[0.95rem] leading-[1.85] font-light text-cream-500 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}
