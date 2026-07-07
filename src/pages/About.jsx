import React from 'react'
import { useTranslation } from '../utils/i18n'

export default function About(){
  const { t } = useTranslation()

  const milestones = [0, 1, 2, 3]

  return (
    <div className="bg-white dark:bg-slate-900">
      <section className="pt-40 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto reveal-on-scroll">
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase mb-6 text-slate-900 dark:text-white">{t('about')}</h1>
          <p className="font-script text-2xl text-primary mb-8 italic">{t('about_desc').split('.')[0]}</p>
        </div>
      </section>

      <section className="py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 dark:bg-slate-800 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-20 relative z-10">
            {milestones.map((i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`w-full md:w-1/2 px-8 text-left ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'} reveal-on-scroll`}>
                  <p className="font-heading font-bold text-xl mb-2 text-slate-900 dark:text-white uppercase tracking-tighter">{t(`milestone_${i}_y`)}</p>
                  <h4 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-4 uppercase">{t(`milestone_${i}_t`)}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">{t(`milestone_${i}_d`)}</p>
                </div>

                <div className="relative flex justify-center w-full md:w-auto">
                  <div className="w-40 h-40 rounded-full border-[7px] border-slate-100 dark:border-slate-800 overflow-hidden bg-slate-900 shadow-xl reveal-on-scroll scale-in">
                    <img src={`https://images.unsplash.com/photo-${[1519389950473, 1460925895917, 1550751827, 1451187580459][i]}?auto=format&fit=crop&q=80&w=200`} alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-pro-base" />
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}

            <div className="flex justify-center">
               <div className="w-40 h-40 rounded-full bg-primary flex items-center justify-center text-center p-6 shadow-cyan-glow reveal-on-scroll">
                  <p className="font-heading font-bold text-slate-900 uppercase leading-tight text-sm">
                    {t('story_end').split(' ').slice(0,2).join(' ')} <br/> {t('story_end').split(' ').slice(2,3).join(' ')} <br/> {t('story_end').split(' ').slice(3).join(' ')}
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-slate-50 dark:bg-slate-950/50">
        <div className="max-w-4xl mx-auto text-center reveal-on-scroll">
          <h3 className="font-heading text-4xl font-bold uppercase mb-12 text-slate-900 dark:text-white">{t('stack_title')}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Node.js', 'Python', 'AI/ML', 'Cloud', 'PostgreSQL', 'Docker'].map(tag => (
              <span key={tag} className="px-6 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full font-bold text-xs uppercase tracking-widest text-slate-600 dark:text-slate-400">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
