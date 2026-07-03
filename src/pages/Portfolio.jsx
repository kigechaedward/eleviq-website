import React from 'react'
import { PROJECTS } from '../data/projects'
import { useTranslation } from '../utils/i18n'

export default function Portfolio(){
  const { t } = useTranslation()

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="reveal-on-scroll mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">{t('portfolio')}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{t('artifacts_desc')}</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {PROJECTS.map((p, i) => (
            <article key={p.name}
                     className="reveal-on-scroll pro-card p-10 group"
                     style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="flex items-start justify-between mb-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 rounded-full">{p.type}</span>
                <span className="text-slate-300 dark:text-slate-700 font-bold text-xs italic">#00{i+1}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">{p.name}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">{p.desc}</p>
              <Link to="/contact" className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white group-hover:text-primary flex items-center gap-2">
                {t('deep_dive')} <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

// Ensure Link is imported
import { Link } from 'react-router-dom'
