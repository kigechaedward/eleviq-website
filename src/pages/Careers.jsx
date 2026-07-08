import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../utils/i18n'

export default function Careers() {
  const { t } = useTranslation()

  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="reveal-on-scroll mb-24 text-center">
          <p className="font-script text-3xl text-primary mb-4 italic">{t('careers')}</p>
          <h1 className="font-heading text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8 leading-none">
            {t('join_evolution').split(' ').slice(0, -1).join(' ')} <br/> <span className="text-primary">{t('join_evolution').split(' ').slice(-1)}</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t('careers_desc')}
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mb-12 text-center">{t('open_positions')}</h2>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="reveal-on-scroll pro-card p-10 flex flex-col md:flex-row md:items-center justify-between group cursor-pointer" style={{ transitionDelay: `${i * 100}ms` }}>
              <div>
                <p className="font-heading text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-3">{t(`job${i}_d`)}</p>
                <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors uppercase tracking-tighter">{t(`job${i}_t`)}</h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-2 italic">{t(`job${i}_ty`)}</p>
              </div>
              <div className="mt-8 md:mt-0">
                <Link to="/contact" className="inline-block px-8 py-4 bg-slate-900 dark:bg-slate-800 text-white font-heading font-bold text-[10px] uppercase tracking-[0.2em] rounded-lg group-hover:bg-primary group-hover:text-slate-900 transition-all duration-pro-base shadow-lg">
                  {t('apply_now')}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-16 bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] border border-slate-200/50 dark:border-slate-800/50 reveal-on-scroll text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32"></div>
          <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-6 uppercase">{t('dont_see_fit')}</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-10 text-lg italic">{t('exceptional_talent')}</p>
          <a href="mailto:careers@eleviqtechnologies.net" className="font-heading font-bold uppercase tracking-[0.3em] text-primary text-sm hover:underline">careers@eleviqtechnologies.net →</a>
        </div>
      </div>
    </div>
  )
}
