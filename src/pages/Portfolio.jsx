import React from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import { useTranslation } from '../utils/i18n'

export default function Portfolio(){
  const { t } = useTranslation()

  const projectImages = [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1586864387917-f5da179679f2?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1596495573105-d1f6a9d1617b?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1554224155-169641357599?auto=format&fit=crop&q=80&w=800'
  ]

  return (
    <div className="bg-slate-50 dark:bg-slate-950/50 min-h-screen">
      <section className="pt-40 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto reveal-on-scroll">
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase mb-6 text-slate-900 dark:text-white">{t('portfolio')}</h1>
          <p className="font-script text-2xl text-primary mb-8 italic">{t('artifacts_desc').split('.')[0]}</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {PROJECTS.map((p, i) => (
              <div key={i} className="reveal-on-scroll group cursor-pointer" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="relative overflow-hidden rounded-t-lg aspect-[4/3] bg-slate-900">
                  <img
                    src={projectImages[i]}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-pro-base"
                  />
                  <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-pro-base">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-5xl font-light">
                      +
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-8 text-center rounded-b-lg shadow-sm border border-slate-100 dark:border-slate-800">
                  <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white uppercase mb-2 group-hover:text-primary transition-colors tracking-tighter">
                    {p.name}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium italic text-xs uppercase tracking-widest">
                    {p.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 text-center">
        <div className="reveal-on-scroll">
           <h3 className="font-heading text-3xl font-bold uppercase mb-8 text-slate-900 dark:text-white">{t('portfolio_cta')}</h3>
           <Link to="/contact" className="inline-block px-10 py-5 bg-slate-900 dark:bg-primary text-white dark:text-slate-900 font-heading font-bold uppercase tracking-[0.2em] text-[10px] rounded-lg transition-all active:scale-95 shadow-lg">
              {t('start_conv')}
           </Link>
        </div>
      </section>
    </div>
  )
}
