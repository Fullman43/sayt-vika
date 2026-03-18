'use client'

import Link from 'next/link'
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-paint-dark overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-1 bg-paint-yellow shadow-neon opacity-60" />
        <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-paint-yellow/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full bg-paint-yellow/5 blur-3xl" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,215,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-paint-yellow/40 bg-paint-yellow/5 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-paint-yellow animate-glow-pulse" />
              <span className="font-oswald text-paint-yellow text-sm tracking-wider uppercase">
                Профессиональная покраска
              </span>
            </div>

            {/* Main heading */}
            <div>
              <h1 className="font-oswald font-bold text-4xl sm:text-5xl lg:text-6xl uppercase leading-tight">
                <span className="text-white block">БЕЗОПАСНОСТЬ,</span>
                <span className="text-white block">КОТОРАЯ</span>
                <span className="text-paint-yellow neon-text block animate-glitch">
                  ВПИСЫВАЕТСЯ
                </span>
                <span className="text-white block">В ИНТЕРЬЕР</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed font-inter max-w-lg">
              Красим камеры, СКУД, кронштейны и любое оборудование безопасности
              в любой цвет по RAL. Работаем так, как будто это наше собственное оборудование.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: '8+', label: 'Услуг' },
                { value: 'RAL', label: 'Любой цвет' },
                { value: '100%', label: 'Гарантия' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-oswald font-bold text-3xl text-paint-yellow neon-text-sm">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm font-inter uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/calculator"
                className="inline-flex items-center gap-2 bg-paint-yellow text-paint-dark font-oswald font-bold tracking-wider uppercase px-8 py-4 rounded hover:bg-paint-yellow-light transition-all shadow-neon hover:shadow-neon-lg text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Рассчитать стоимость
              </Link>
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-transparent text-paint-yellow border-2 border-paint-yellow font-oswald font-bold tracking-wider uppercase px-8 py-4 rounded hover:bg-paint-yellow hover:text-paint-dark transition-all shadow-neon-sm text-base"
              >
                Наши услуги
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Before/After Slider */}
          <div className="relative">
            <div className="relative">
              {/* Glow frame */}
              <div className="absolute -inset-2 bg-paint-yellow/10 rounded-2xl blur-xl" />
              <div className="relative rounded-xl overflow-hidden border border-paint-yellow/30 shadow-neon">
                <BeforeAfterSlider />
              </div>
            </div>
            {/* Helper text */}
            <p className="text-center text-gray-500 text-sm font-inter mt-3 flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-paint-yellow/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
              Перетащите для сравнения
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs text-gray-500 font-oswald tracking-widest uppercase">Прокрутить</span>
          <div className="w-px h-8 bg-gradient-to-b from-paint-yellow to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
