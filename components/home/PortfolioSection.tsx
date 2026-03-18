'use client'

import { useState } from 'react'

const portfolioItems = [
  {
    title: 'Купольная камера в цвет интерьера',
    category: 'Покраска RAL',
    color: 'from-slate-700 to-slate-900',
    accent: 'bg-slate-500',
  },
  {
    title: 'Брендирование цилиндрических камер',
    category: 'Брендирование',
    color: 'from-blue-900 to-slate-900',
    accent: 'bg-blue-600',
  },
  {
    title: 'Антикоррозийная обработка кронштейнов',
    category: 'Антикоррозия',
    color: 'from-zinc-700 to-zinc-900',
    accent: 'bg-zinc-500',
  },
  {
    title: 'Реставрация ПТЗ-камеры',
    category: 'Реставрация',
    color: 'from-stone-700 to-stone-900',
    accent: 'bg-stone-500',
  },
  {
    title: 'Покраска монтажных коробок',
    category: 'Покраска RAL',
    color: 'from-neutral-700 to-neutral-900',
    accent: 'bg-neutral-500',
  },
  {
    title: 'Покрытие антидождь для уличных камер',
    category: 'Антидождь',
    color: 'from-cyan-900 to-slate-900',
    accent: 'bg-cyan-700',
  },
]

const categories = ['Все', 'Покраска RAL', 'Брендирование', 'Антикоррозия', 'Реставрация', 'Антидождь']

export default function PortfolioSection() {
  const [active, setActive] = useState('Все')

  const filtered =
    active === 'Все'
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-paint-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="font-oswald font-bold text-4xl sm:text-5xl text-white uppercase tracking-wider mb-4">
            НАШИ <span className="text-paint-yellow neon-text">РАБОТЫ</span>
          </h2>
          <div className="section-line mx-auto mb-4" />
          <p className="text-gray-400 font-inter text-lg">
            Реальные проекты — реальные результаты
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-oswald font-medium text-sm tracking-wider uppercase px-4 py-2 rounded transition-all duration-200 ${
                active === cat
                  ? 'bg-paint-yellow text-paint-dark shadow-neon-sm'
                  : 'bg-paint-dark-3 text-gray-400 border border-paint-yellow/20 hover:border-paint-yellow/50 hover:text-paint-yellow'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] border border-paint-yellow/10 hover:border-paint-yellow/40 transition-all duration-300 hover:shadow-neon cursor-pointer"
            >
              {/* Placeholder visual */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`}>
                {/* Camera icon placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <svg className="w-32 h-32" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={0.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                </div>
                {/* Photo placeholder text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3 border border-white/20">
                      <svg className="w-8 h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                    </div>
                    <span className="text-white/30 text-xs font-inter">Фото скоро</span>
                  </div>
                </div>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-paint-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                <div className={`w-2 h-2 rounded-full ${item.accent} mb-3`} />
                <h3 className="font-oswald font-bold text-lg text-white uppercase tracking-wide mb-2">
                  {item.title}
                </h3>
                <span className="font-oswald text-paint-yellow text-sm tracking-wider uppercase border border-paint-yellow/40 px-3 py-1 rounded">
                  {item.category}
                </span>
              </div>

              {/* Category badge */}
              <div className="absolute top-3 left-3 bg-paint-dark/80 backdrop-blur-sm border border-paint-yellow/30 text-paint-yellow font-oswald text-xs tracking-wider uppercase px-2 py-1 rounded group-hover:opacity-0 transition-opacity duration-300">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon notice */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm font-inter">
            Фотографии реальных работ будут добавлены в ближайшее время
          </p>
        </div>
      </div>
    </section>
  )
}
