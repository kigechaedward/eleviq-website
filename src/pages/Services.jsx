import React from 'react'
import { SERVICES } from '../data/services'
import { useTranslation } from '../utils/i18n'

export default function Services(){
  const { t } = useTranslation()

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="reveal-on-scroll mb-20">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">{t('services')}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">{t('services_desc')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <div key={service.title}
                 className="reveal-on-scroll pro-card p-10 group"
                 style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-14 h-14 mb-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-primary group-hover:text-white transition-all">
                {['⚡', '🌐', '📱', '🤖', '💡', '☁️', '📊', '🔍', '🛍️'][i] || '⚙️'}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-32 reveal-on-scroll">
          <h2 className="text-3xl font-bold mb-12 tracking-tight">Technical FAQ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: "How long does a typical project take?", a: "Depends on scope; small sites in 2–6 weeks, larger platforms 3–6+ months." },
              { q: "Do you provide maintenance?", a: "Yes — SLA-based support and managed services are available." }
            ].map((faq, i) => (
              <div key={i} className="p-8 pro-card">
                 <h4 className="font-bold text-slate-900 dark:text-white mb-3">{faq.q}</h4>
                 <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
