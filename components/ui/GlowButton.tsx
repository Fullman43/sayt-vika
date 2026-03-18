import Link from 'next/link'

interface GlowButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function GlowButton({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
}: GlowButtonProps) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const variants = {
    primary:
      'bg-paint-yellow text-paint-dark hover:bg-paint-yellow-light hover:shadow-neon disabled:opacity-50 disabled:cursor-not-allowed',
    outline:
      'bg-transparent text-paint-yellow border-2 border-paint-yellow hover:bg-paint-yellow hover:text-paint-dark hover:shadow-neon disabled:opacity-50 disabled:cursor-not-allowed',
  }

  const base = `inline-flex items-center justify-center gap-2 font-oswald font-bold tracking-wider uppercase rounded transition-all duration-200 shadow-neon-sm ${sizes[size]} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={base} disabled={disabled}>
      {children}
    </button>
  )
}
