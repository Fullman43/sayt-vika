'use client'

import { useState, useRef, useCallback, useEffect } from 'react'

interface BeforeAfterSliderProps {
  beforeLabel?: string
  afterLabel?: string
  className?: string
}

export default function BeforeAfterSlider({
  beforeLabel = 'ДО',
  afterLabel = 'ПОСЛЕ',
  className = '',
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.max(2, Math.min(98, (x / rect.width) * 100))
    setPosition(percent)
  }, [])

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging.current) return
      updatePosition(e.clientX)
    },
    [updatePosition]
  )

  const handleMouseUp = useCallback(() => {
    isDragging.current = false
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleMouseMove, handleMouseUp])

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault()
    updatePosition(e.touches[0].clientX)
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-video rounded-xl overflow-hidden cursor-col-resize select-none border border-paint-yellow/30 ${className}`}
      onMouseDown={handleMouseDown}
      onTouchMove={handleTouchMove}
      onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
    >
      {/* BEFORE — old rusty camera (dark) */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <svg viewBox="0 0 200 140" className="w-3/4 h-3/4" fill="none">
            <rect x="30" y="40" width="140" height="70" rx="8" fill="#555" />
            <circle cx="100" cy="75" r="25" fill="#333" />
            <circle cx="100" cy="75" r="18" fill="#222" />
            <circle cx="100" cy="75" r="10" fill="#111" />
            <rect x="30" y="50" width="20" height="10" rx="2" fill="#444" />
          </svg>
        </div>
        <div className="absolute inset-0">
          {/* rust texture simulation */}
          <div className="absolute top-1/3 left-1/4 w-20 h-16 rounded-full bg-orange-900/30 blur-xl" />
          <div className="absolute bottom-1/3 right-1/4 w-16 h-12 rounded-full bg-red-900/20 blur-lg" />
          <div className="absolute top-1/2 left-1/2 w-32 h-24 rounded-full bg-amber-900/20 blur-2xl" />
        </div>
        <div className="absolute inset-0 flex items-end justify-center pb-4">
          <div className="text-center">
            <div className="font-oswald text-zinc-400 text-sm tracking-widest uppercase">Старый вид</div>
            <div className="font-inter text-zinc-500 text-xs">Коррозия, потёртости</div>
          </div>
        </div>
      </div>

      {/* AFTER — freshly painted yellow (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/60 via-paint-dark-3 to-paint-dark-2">
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <svg viewBox="0 0 200 140" className="w-3/4 h-3/4" fill="none">
              <rect x="30" y="40" width="140" height="70" rx="8" fill="#FFD700" />
              <circle cx="100" cy="75" r="25" fill="#CC9900" />
              <circle cx="100" cy="75" r="18" fill="#111" />
              <circle cx="100" cy="75" r="10" fill="#000" />
              <rect x="30" y="50" width="20" height="10" rx="2" fill="#FFE44D" />
            </svg>
          </div>
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/3 w-32 h-32 rounded-full bg-paint-yellow/10 blur-2xl" />
            <div className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full bg-paint-yellow/8 blur-xl" />
          </div>
          <div className="absolute inset-0 flex items-end justify-center pb-4">
            <div className="text-center">
              <div className="font-oswald text-paint-yellow text-sm tracking-widest uppercase neon-text-sm">Новый вид</div>
              <div className="font-inter text-paint-yellow/60 text-xs">Профессиональная покраска</div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-paint-yellow shadow-neon z-10"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        {/* Handle circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-paint-yellow shadow-neon flex items-center justify-center cursor-col-resize">
          <svg className="w-5 h-5 text-paint-dark" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.59 16.59L4 12l4.59-4.59L10 8.83 6.83 12 10 15.17zM15.41 7.41L20 12l-4.59 4.59L14 15.17 17.17 12 14 8.83z" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-20 bg-paint-dark-2/90 text-paint-gray font-oswald font-bold text-sm px-3 py-1.5 rounded border border-gray-600/50 backdrop-blur-sm">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 z-20 bg-paint-yellow text-paint-dark font-oswald font-bold text-sm px-3 py-1.5 rounded shadow-neon-sm">
        {afterLabel}
      </div>
    </div>
  )
}
