import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paint: {
          yellow: '#FFD700',
          'yellow-light': '#FFE44D',
          'yellow-neon': '#FFFF00',
          'yellow-dim': '#CC9900',
          dark: '#0D0D0D',
          'dark-2': '#141414',
          'dark-3': '#1E1E1E',
          'dark-4': '#2A2A2A',
          gray: '#888888',
          'gray-light': '#CCCCCC',
        },
      },
      fontFamily: {
        oswald: ['var(--font-oswald)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 8px #FFD700, 0 0 20px #FFD700, 0 0 40px rgba(255,215,0,0.4)',
        'neon-sm': '0 0 4px #FFD700, 0 0 10px rgba(255,215,0,0.6)',
        'neon-lg': '0 0 20px #FFD700, 0 0 50px #FFD700, 0 0 80px rgba(255,215,0,0.3)',
      },
      animation: {
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        'glitch': 'glitch 4s infinite',
        'float': 'float 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 4px #FFD700, 0 0 10px rgba(255,215,0,0.5)' },
          '50%': { boxShadow: '0 0 20px #FFD700, 0 0 40px #FFD700, 0 0 60px rgba(255,215,0,0.3)' },
        },
        glitch: {
          '0%, 88%, 100%': { transform: 'translate(0)' },
          '90%': { transform: 'translate(-2px, 1px)' },
          '92%': { transform: 'translate(2px, -1px)' },
          '94%': { transform: 'translate(-1px, 2px)' },
          '96%': { transform: 'translate(1px, -1px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
