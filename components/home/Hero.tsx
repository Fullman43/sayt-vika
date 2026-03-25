'use client'

import { useEffect, useRef } from 'react'
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const tryPlay = async () => {
      try {
        await v.play()
      } catch {
        // Autoplay can be blocked; user can start manually if needed.
      }
    }
    tryPlay()
  }, [])

  const freezeOnLastFrame = () => {
    const v = videoRef.current
    if (!v) return
    v.pause()
    if (Number.isFinite(v.duration) && v.duration > 0) {
      v.currentTime = Math.max(0, v.duration - 0.05)
    }
  }

  return (
    <section className="relative bg-paint-dark overflow-hidden">
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

      {/* Top video (full width) */}
      <div className="relative w-full pt-20 md:pt-24">
        <div className="relative w-full aspect-[21/9] md:aspect-[24/9] bg-black/30 overflow-hidden">
          <video
            ref={videoRef}
            src="/hero.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={freezeOnLastFrame}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-paint-dark/50 via-transparent to-paint-dark" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-10 md:pt-14">
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
                <span className="text-paint-yellow neon-text-half block animate-glitch">
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
            <p className="text-center text-gray-500 text-sm font-inter mt-3 flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-paint-yellow/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
              Перетащите для сравнения
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
