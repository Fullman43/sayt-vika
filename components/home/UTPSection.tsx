const utps = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Красим как для себя',
    description:
      'Мы следим за установленным оборудованием на объектах. Периодически выезжаем и проверяем состояние покрытия — потому что нам не всё равно.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'Качество превыше всего',
    description:
      'Используем только дорогостоящие профессиональные материалы. При этом сохраняем доступную стоимость для каждого клиента.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Кратчайшие сроки',
    description:
      'Выстроенный технологический процесс позволяет выполнять заказы быстро без потери качества. Ваше оборудование вернётся в срок.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: 'Профессиональные материалы',
    description:
      'Работаем с лучшими красками и покрытиями для максимальной стойкости. Ваше оборудование будет выглядеть отлично долгие годы.',
  },
]

export default function UTPSection() {
  return (
    <section id="utp" className="py-20 lg:py-28 bg-paint-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="font-oswald font-bold text-4xl sm:text-5xl text-white uppercase tracking-wider mb-4">
            ПОЧЕМУ <span className="text-paint-yellow neon-text-half">ПОКРАСОЧНАЯ №1</span>
          </h2>
          <div className="section-line section-line-soft mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {utps.map((item, i) => (
            <div
              key={i}
              className="relative group p-6 rounded-xl bg-paint-dark-3 border-l-4 border-paint-yellow card-hover-glow"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-paint-yellow/10 border border-paint-yellow/30 flex items-center justify-center text-paint-yellow mb-5 group-hover:bg-paint-yellow/20 group-hover:border-paint-yellow/60 group-hover:shadow-neon-sm transition-all duration-300">
                {item.icon}
              </div>
              {/* Title */}
              <h3 className="font-oswald font-bold text-lg text-white uppercase tracking-wide mb-3 group-hover:text-paint-yellow transition-colors duration-300">
                {item.title}
              </h3>
              {/* Description */}
              <p className="text-gray-400 text-sm font-inter leading-relaxed">
                {item.description}
              </p>
              {/* Number */}
              <div className="absolute top-4 right-4 font-oswald font-bold text-5xl text-paint-yellow/5 group-hover:text-paint-yellow/10 transition-colors duration-300 leading-none select-none">
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
