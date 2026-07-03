import React from 'react'
import { useTranslation } from '../utils/i18n'

export default function About(){
  const { t } = useTranslation()

  return (
    <div className="max-w-6xl mx-auto px-6 py-32">
      <div className="reveal-on-scroll">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">{t('about_title')}</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
          {t('about_desc')}
        </p>
      </div>

      <section className="mt-24 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
        <h3 className="text-3xl font-bold mb-8 tracking-tight">{t('process_title')}</h3>
        <div className="grid md:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="pro-card p-8 relative overflow-hidden">
              <span className="text-6xl font-black text-slate-100 dark:text-slate-800 absolute top-0 right-0 -mr-4 -mt-4 select-none italic">
                {i}
              </span>
              <p className="font-bold text-slate-900 dark:text-white relative z-10 leading-tight">
                {t(`step_${i}`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
        <h3 className="text-3xl font-bold mb-8 tracking-tight">{t('stack_title')}</h3>
        <div className="pro-card p-12 bg-slate-50 dark:bg-slate-900/50">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            React, Node.js, Python, TypeScript, Docker, AWS / Azure / GCP, PostgreSQL, Redis, TensorFlow / PyTorch for ML, and modern devops tools.
          </p>
        </div>
      </section>
    </div>
  )
}
