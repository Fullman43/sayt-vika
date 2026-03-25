const steps = [
  {
    number: '01',
    title: 'Приёмка и подготовка',
    description:
      'Принимаем оборудование, проводим осмотр, очищаем поверхность от загрязнений, коррозии и старого покрытия. Мелкозернистый шлифовальный подбор.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Грунтовка и покраска',
    description:
      'Наносим антикоррозийный грунт, затем профессиональную краску нужного RAL-цвета в несколько слоёв. Равномерное покрытие без подтёков.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Сушка и контроль качества',
    description:
      'Профессиональная сушка при нужной температуре. Проверяем каждое изделие — однородность покрытия, прочность, соответствие цвету RAL.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Выдача и мониторинг',
    description:
      'Выдаём готовое оборудование. Периодически проверяем состояние покрытия на объектах — следим за качеством долгосрочно.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
]

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-paint-dark-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="font-oswald font-bold text-4xl sm:text-5xl text-white uppercase tracking-wider mb-4">
            ПРОЦЕСС <span className="text-paint-yellow neon-text-half">РАБОТЫ</span>
          </h2>
          <div className="section-line section-line-soft mx-auto" />
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px bg-gradient-to-r from-transparent via-paint-yellow/40 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative group text-center">
                {/* Number + icon circle */}
                <div className="relative inline-flex flex-col items-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-paint-dark-3 border-2 border-paint-yellow/40 flex items-center justify-center text-paint-yellow group-hover:border-paint-yellow group-hover:shadow-neon transition-all duration-300 relative z-10 bg-paint-dark">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-paint-yellow flex items-center justify-center z-20 shadow-neon-sm">
                    <span className="font-oswald font-bold text-paint-dark text-xs">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-oswald font-bold text-lg text-white uppercase tracking-wide mb-3 group-hover:text-paint-yellow transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm font-inter leading-relaxed">
                  {step.description}
                </p>

                {/* Connector arrow (mobile) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 text-paint-yellow/30">
                    <svg className="w-6 h-6 rotate-90 sm:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
