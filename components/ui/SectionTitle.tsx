interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionTitleProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="font-oswald font-bold text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-wider mb-4">
        {title.split(' ').map((word, i) =>
          word.startsWith('*') ? (
            <span key={i} className="text-paint-yellow neon-text">
              {' '}
              {word.slice(1)}
            </span>
          ) : (
            <span key={i}>{i === 0 ? '' : ' '}{word}</span>
          )
        )}
      </h2>
      <div className={`section-line ${centered ? 'mx-auto' : ''} mb-4`} />
      {subtitle && (
        <p className="text-gray-400 font-inter text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
