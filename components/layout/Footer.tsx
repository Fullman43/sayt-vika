import Link from 'next/link'
import Image from 'next/image'

const services = [
  { label: 'Покраска оборудования СБ', href: '/services/pokraska' },
  { label: 'Реставрация БУ оборудования', href: '/services/restavratsiya' },
  { label: 'Лакозащитное покрытие', href: '/services/lakozashchita' },
  { label: 'Антикоррозийная обработка', href: '/services/antikorroziya' },
  { label: 'Покрытие антидождь/антигрязь', href: '/services/anti-dozhd' },
  { label: 'Брендирование', href: '/services/brendirovanie' },
  { label: 'Выезд колориста', href: '/services/kolorist' },
  { label: 'Покрасим всё', href: '/services/gabarity' },
]

const links = [
  { label: 'Главная', href: '/' },
  { label: 'Калькулятор', href: '/calculator' },
  { label: 'Контакты', href: '/contacts' },
]

export default function Footer() {
  return (
    <footer className="bg-paint-dark-2 border-t border-paint-yellow/10 mt-0">
      {/* Top bar */}
      <div className="border-b border-paint-yellow/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-14 h-14">
                <Image
                  src="/logo-pokr.png?v=2"
                  alt="Покрасочная №1"
                  fill
                  className="object-contain"
                  unoptimized
                  quality={100}
                />
              </div>
              <div>
                <div className="font-oswald font-bold text-xl text-white">ПОКРАСОЧНАЯ</div>
                <div className="font-oswald font-bold text-3xl text-paint-yellow neon-text-sm leading-none">№1</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-inter">
              Профессиональная покраска оборудования систем безопасности в любой цвет по RAL.
              Качество, которое видно.
            </p>
            <div className="flex gap-3">
              <a
                href="tel:+7XXXXXXXXXX"
                className="flex items-center gap-2 text-paint-yellow hover:text-paint-yellow-light transition-colors text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +7 (XXX) XXX-XX-XX
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-oswald font-bold text-lg text-white uppercase tracking-wider mb-4">
              Услуги
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-gray-400 hover:text-paint-yellow transition-colors text-sm font-inter flex items-start gap-2 group"
                  >
                    <span className="text-paint-yellow/40 group-hover:text-paint-yellow transition-colors mt-0.5">›</span>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links + CTA */}
          <div>
            <h3 className="font-oswald font-bold text-lg text-white uppercase tracking-wider mb-4">
              Навигация
            </h3>
            <ul className="space-y-2 mb-6">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-gray-400 hover:text-paint-yellow transition-colors text-sm font-inter flex items-center gap-2 group"
                  >
                    <span className="text-paint-yellow/40 group-hover:text-paint-yellow transition-colors">›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 bg-paint-yellow text-paint-dark font-oswald font-bold text-sm tracking-wider uppercase px-5 py-3 rounded hover:bg-paint-yellow-light transition-all shadow-neon-sm hover:shadow-neon"
            >
              Рассчитать стоимость
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600 font-inter">
        <span>© {new Date().getFullYear()} Покрасочная №1. Все права защищены.</span>
        <span>pokrasochnaya.com</span>
      </div>
    </footer>
  )
}
