import type { Metadata } from 'next'
import { Oswald, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const oswald = Oswald({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Покрасочная №1 — Покраска оборудования систем безопасности',
  description:
    'Профессиональная покраска видеокамер, СКУД и оборудования безопасности в любой цвет по RAL. Реставрация, брендирование, антикоррозийная обработка.',
  keywords:
    'покраска камер видеонаблюдения, покраска СКУД, антикоррозийная обработка, брендирование, покраска по RAL',
  openGraph: {
    title: 'Покрасочная №1',
    description: 'Покраска оборудования систем безопасности в любой цвет по RAL',
    url: 'https://pokrasochnaya.com',
    siteName: 'Покрасочная №1',
    locale: 'ru_RU',
    type: 'website',
  },
  metadataBase: new URL('https://pokrasochnaya.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${oswald.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-paint-dark text-white antialiased font-inter">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
