import React from 'react'
import { SERVICES } from '../data/services'
import { useTranslation } from '../utils/i18n'

export default function Services(){
  const { t } = useTranslation()

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="reveal-on-scroll mb-20 text-center">
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase mb-6">{t('services')}</h1>
          <p className="font-script text-2xl text-primary italic max-w-2xl mx-auto">{t('services_desc')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((_, i) => (
            <div key={i}
                 className="reveal-on-scroll pro-card p-10 group"
                 style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-14 h-14 mb-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-primary group-hover:text-white transition-all">
                {['⚡', '🌐', '📱', '🤖', '💡', '☁️', '📊', '🔍', '🛍️'][i] || '⚙️'}
              </div>
              <h3 className="font-heading font-bold text-xl mb-4 text-slate-900 dark:text-white uppercase">{t(`s${i}_t`)}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{t(`s${i}_d`)}</p>
            </div>
          ))}
        </div>

        <div className="mt-32 reveal-on-scroll">
          <h2 className="font-heading text-3xl font-bold mb-12 tracking-tight uppercase text-center">{t('faq_title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[0, 1].map((i) => (
              <div key={i} className="p-8 pro-card">
                 <h4 className="font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-tighter">{t(`q${i}`)}</h4>
                 <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{t(`a${i}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
