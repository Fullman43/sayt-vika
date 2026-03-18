'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Услуги', href: '/#services' },
  { label: 'Калькулятор', href: '/calculator' },
  { label: 'Портфолио', href: '/#portfolio' },
  { label: 'О нас', href: '/#utp' },
  { label: 'Контакты', href: '/contacts' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paint-dark/95 backdrop-blur-md border-b border-paint-yellow/20 shadow-lg shadow-paint-yellow/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <Image
                src="/logo.png"
                alt="Покрасочная №1"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-oswald font-bold text-lg leading-tight text-white group-hover:text-paint-yellow transition-colors">
                ПОКРАСОЧНАЯ
              </div>
              <div className="font-oswald font-bold text-2xl leading-none text-paint-yellow neon-text-sm">
                №1
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link font-oswald font-medium text-sm tracking-wider uppercase text-gray-300 hover:text-paint-yellow transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2 bg-paint-yellow text-paint-dark font-oswald font-bold text-sm tracking-wider uppercase px-6 py-3 rounded hover:bg-paint-yellow-light transition-all duration-200 shadow-neon-sm hover:shadow-neon"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Рассчитать стоимость
            </Link>
          </div>

          {/* Mobile Burger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Меню"
          >
            <span className={`block w-6 h-0.5 bg-paint-yellow transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-paint-yellow transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-paint-yellow transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-paint-dark-2 border-t border-paint-yellow/20 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block font-oswald font-medium text-base tracking-wider uppercase text-gray-300 hover:text-paint-yellow py-3 px-2 border-b border-paint-dark-4 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="/calculator"
              className="block text-center bg-paint-yellow text-paint-dark font-oswald font-bold text-sm tracking-wider uppercase px-6 py-3 rounded hover:bg-paint-yellow-light transition-all"
            >
              Рассчитать стоимость
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
