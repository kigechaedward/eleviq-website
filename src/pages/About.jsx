import React from 'react'
import { useTranslation } from '../utils/i18n'

export default function About(){
  const { t } = useTranslation()

  const milestones = [
    { year: '2019-2020', title: 'The Genesis', desc: 'Eleviq was founded in Nairobi with a mission to bridge the gap between African innovation and global scale.', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=200' },
    { year: '2021', title: 'Fintech Breakthrough', desc: 'We launched our first major route optimization platform, increasing efficiency for logistics partners by 27%.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=200' },
    { year: '2022-2023', title: 'AI Integration', desc: 'Shifted focus to AI-native applications, integrating machine learning into enterprise workflows across East Africa.', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=200' },
    { year: '2024', title: 'Global Evolution', desc: 'Expanded our operations to support international partners while maintaining our core design-led engineering approach.', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=200' }
  ]

  return (
    <div className="bg-white dark:bg-slate-900">
      {/* Header */}
      <section className="pt-40 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto reveal-on-scroll">
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase mb-6 text-slate-900 dark:text-white">{t('about')}</h1>
          <p className="font-script text-2xl text-primary mb-8 italic">{t('about_desc').split('.')[0]}</p>
        </div>
      </section>

      {/* Timeline Section - Agency Theme Style */}
      <section className="py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">

          {/* Vertical Line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 dark:bg-slate-800 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-20 relative z-10">
            {milestones.map((m, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Content Side */}
                <div className={`w-full md:w-1/2 px-8 text-left ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'} reveal-on-scroll`}>
                  <p className="font-heading font-bold text-xl mb-2 text-slate-900 dark:text-white uppercase tracking-tighter">{m.year}</p>
                  <h4 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-4 uppercase">{m.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">{m.desc}</p>
                </div>

                {/* Circle Image Side */}
                <div className="relative flex justify-center w-full md:w-auto">
                  <div className="w-40 h-40 rounded-full border-[7px] border-slate-100 dark:border-slate-800 overflow-hidden bg-slate-900 shadow-xl reveal-on-scroll scale-in">
                    <img src={m.img} alt={m.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-pro-base" />
                  </div>
                </div>

                {/* Empty Side for Balance */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}

            {/* Ending Circle */}
            <div className="flex justify-center">
               <div className="w-40 h-40 rounded-full bg-primary flex items-center justify-center text-center p-6 shadow-cyan-glow reveal-on-scroll">
                  <p className="font-heading font-bold text-slate-900 uppercase leading-tight text-sm">
                    Be Part <br/> Of Our <br/> Story!
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Section */}
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
