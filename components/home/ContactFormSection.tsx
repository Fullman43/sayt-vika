'use client'

import { useState } from 'react'

export default function ContactFormSection() {
  const [form, setForm] = useState({ name: '', phone: '', comment: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'quick' }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', phone: '', comment: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-paint-dark-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h2 className="font-oswald font-bold text-4xl sm:text-5xl text-white uppercase tracking-wider mb-4">
              СВЯЗАТЬСЯ <span className="text-paint-yellow neon-text">С НАМИ</span>
            </h2>
            <div className="section-line mb-6" />
            <p className="text-gray-400 font-inter text-lg leading-relaxed mb-8">
              Оставьте контакты — перезвоним в течение 15 минут и ответим на все вопросы.
              Или воспользуйтесь калькулятором для точного расчёта.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-paint-yellow/10 border border-paint-yellow/30 flex items-center justify-center text-paint-yellow flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-500 text-xs font-inter uppercase tracking-wider">Телефон</div>
                  <a href="tel:+7XXXXXXXXXX" className="text-white font-oswald font-medium text-lg hover:text-paint-yellow transition-colors">
                    +7 (XXX) XXX-XX-XX
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-paint-yellow/10 border border-paint-yellow/30 flex items-center justify-center text-paint-yellow flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-500 text-xs font-inter uppercase tracking-wider">Email</div>
                  <a href="mailto:info@pokrasochnaya.com" className="text-white font-oswald font-medium text-lg hover:text-paint-yellow transition-colors">
                    info@pokrasochnaya.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-paint-yellow/10 rounded-2xl blur-xl" />
            <div className="relative bg-paint-dark-3 border border-paint-yellow/20 rounded-2xl p-8">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-paint-yellow/20 border border-paint-yellow flex items-center justify-center mx-auto mb-4 shadow-neon">
                    <svg className="w-8 h-8 text-paint-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-oswald font-bold text-2xl text-white uppercase mb-2">Заявка отправлена!</h3>
                  <p className="text-gray-400 font-inter">Перезвоним в течение 15 минут</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 font-oswald text-paint-yellow border border-paint-yellow/40 px-6 py-2 rounded hover:bg-paint-yellow/10 transition-all text-sm uppercase tracking-wider"
                  >
                    Отправить ещё
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-oswald font-bold text-2xl text-white uppercase tracking-wide mb-6">
                    Оставить заявку
                  </h3>

                  <div>
                    <label className="block text-gray-400 text-xs font-inter uppercase tracking-wider mb-1.5">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Иван Иванов"
                      className="w-full bg-paint-dark-2 border border-paint-yellow/20 rounded-lg px-4 py-3 text-white font-inter placeholder-gray-600 focus:outline-none focus:border-paint-yellow/60 focus:shadow-neon-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-xs font-inter uppercase tracking-wider mb-1.5">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-paint-dark-2 border border-paint-yellow/20 rounded-lg px-4 py-3 text-white font-inter placeholder-gray-600 focus:outline-none focus:border-paint-yellow/60 focus:shadow-neon-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-xs font-inter uppercase tracking-wider mb-1.5">
                      Комментарий
                    </label>
                    <textarea
                      rows={3}
                      value={form.comment}
                      onChange={(e) => setForm({ ...form, comment: e.target.value })}
                      placeholder="Опишите задачу..."
                      className="w-full bg-paint-dark-2 border border-paint-yellow/20 rounded-lg px-4 py-3 text-white font-inter placeholder-gray-600 focus:outline-none focus:border-paint-yellow/60 focus:shadow-neon-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-paint-yellow text-paint-dark font-oswald font-bold tracking-wider uppercase px-6 py-4 rounded hover:bg-paint-yellow-light transition-all shadow-neon hover:shadow-neon-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? 'Отправляем...' : 'Перезвоните мне'}
                  </button>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm font-inter text-center">
                      Ошибка отправки. Позвоните нам напрямую.
                    </p>
                  )}

                  <p className="text-gray-600 text-xs font-inter text-center">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
