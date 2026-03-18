import Link from 'next/link'

const services = [
  {
    slug: 'pokraska',
    title: 'Покраска оборудования СБ',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 16a6 6 0 016-6h20a6 6 0 016 6v16a6 6 0 01-6 6H14a6 6 0 01-6-6V16z" />
        <circle cx="24" cy="24" r="7" />
        <circle cx="24" cy="24" r="3" />
        <path d="M8 20h4M36 20h4" strokeLinecap="round" />
      </svg>
    ),
    description: 'Видеокамеры, турникеты, стойки СКУД в любой цвет RAL',
  },
  {
    slug: 'restavratsiya',
    title: 'Реставрация БУ оборудования',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 36l4-16h16l4 16H12z" />
        <path d="M20 20V14a4 4 0 018 0v6" />
        <path d="M16 30h16M18 34h12" strokeLinecap="round" />
        <path d="M24 4v4M8 12l3 3M40 12l-3 3" strokeLinecap="round" />
      </svg>
    ),
    description: 'Возвращаем товарный вид подержанному оборудованию',
  },
  {
    slug: 'lakozashchita',
    title: 'Лакозащитное покрытие',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 6l14 8v16L24 38 10 30V14L24 6z" />
        <path d="M24 6v32M10 14l14 8 14-8" strokeLinecap="round" />
        <circle cx="24" cy="22" r="4" />
      </svg>
    ),
    description: 'Защитный лаковый слой для долговечности покрытия',
  },
  {
    slug: 'antikorroziya',
    title: 'Антикоррозийная обработка',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 10C16 10 10 16 10 24s6 14 14 14 14-6 14-14S32 10 24 10z" />
        <path d="M24 16v8l6 4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 8l-4-4M32 8l4-4M8 24H4M44 24h-4" strokeLinecap="round" />
      </svg>
    ),
    description: 'Защита металла от ржавчины в агрессивной среде',
  },
  {
    slug: 'anti-dozhd',
    title: 'Антидождь / Антигрязь',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 8c0 0-12 10-12 20a12 12 0 0024 0C36 18 24 8 24 8z" />
        <path d="M20 30c2 3 6 3 8 0" strokeLinecap="round" />
        <path d="M16 14l-4-4M32 14l4-4" strokeLinecap="round" />
      </svg>
    ),
    description: 'Гидрофобное покрытие — вода и грязь скатываются',
  },
  {
    slug: 'brendirovanie',
    title: 'Брендирование',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="14" width="32" height="22" rx="3" />
        <path d="M18 25l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 8h16M20 40h8" strokeLinecap="round" />
      </svg>
    ),
    description: 'Логотип и корпоративные цвета на оборудовании',
  },
  {
    slug: 'kolorist',
    title: 'Выезд колориста',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="20" r="8" />
        <path d="M24 28v12M16 38l8 2 8-2" strokeLinecap="round" />
        <circle cx="24" cy="20" r="3" fill="currentColor" />
        <path d="M12 12l-4-4M36 12l4-4" strokeLinecap="round" />
      </svg>
    ),
    description: 'Подбор цвета на объекте с профессиональным оборудованием',
  },
  {
    slug: 'gabarity',
    title: 'Покрасим всё',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="18" width="20" height="18" rx="2" />
        <rect x="28" y="10" width="14" height="14" rx="2" />
        <rect x="30" y="28" width="10" height="8" rx="2" />
        <path d="M14 14V10M38 26v4" strokeLinecap="round" />
      </svg>
    ),
    description: 'Негабаритные и нестандартные заказы любой сложности',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-paint-dark-2 grunge-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="font-oswald font-bold text-4xl sm:text-5xl text-white uppercase tracking-wider mb-4">
            НАШИ <span className="text-paint-yellow neon-text">УСЛУГИ</span>
          </h2>
          <div className="section-line mx-auto mb-4" />
          <p className="text-gray-400 font-inter text-lg max-w-xl mx-auto">
            Полный цикл покраски и защитной обработки оборудования систем безопасности
          </p>
        </div>

        {/* Hex grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative flex flex-col items-center text-center p-6 rounded-xl border border-paint-yellow/10 bg-paint-dark-3 hover:border-paint-yellow/50 hover:bg-paint-dark-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-neon"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-paint-dark-2 border border-paint-yellow/20 flex items-center justify-center text-paint-yellow mb-4 group-hover:border-paint-yellow/60 group-hover:shadow-neon-sm transition-all duration-300">
                {service.icon}
              </div>
              {/* Title */}
              <h3 className="font-oswald font-semibold text-sm sm:text-base text-white uppercase tracking-wide leading-tight mb-2 group-hover:text-paint-yellow transition-colors">
                {service.title}
              </h3>
              {/* Description */}
              <p className="text-gray-500 text-xs font-inter leading-relaxed hidden sm:block">
                {service.description}
              </p>
              {/* Arrow */}
              <div className="mt-3 flex items-center gap-1 text-paint-yellow/0 group-hover:text-paint-yellow/80 transition-all duration-300 translate-x-0 group-hover:translate-x-1 text-xs font-oswald uppercase tracking-wider">
                Подробнее
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-paint-yellow/0 border-r-paint-yellow/0 group-hover:border-t-paint-yellow/40 group-hover:border-r-paint-yellow/40 transition-all duration-300 rounded-tr-xl" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 bg-paint-yellow text-paint-dark font-oswald font-bold tracking-wider uppercase px-8 py-4 rounded hover:bg-paint-yellow-light transition-all shadow-neon hover:shadow-neon-lg text-base"
          >
            Рассчитать стоимость
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
