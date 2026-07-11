import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Team from '../components/Team'
import { SERVICES } from '../data/services'
import { PROJECTS } from '../data/projects'
import { useTranslation } from '../utils/i18n'

export default function Home(){
  const { t } = useTranslation()

  return (
    <div className="pt-16">
      <Hero />

      {/* Services - Agency Style */}
      <section className="py-32 px-6 bg-white dark:bg-slate-900 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-on-scroll mb-20">
             <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase mb-4 text-slate-900 dark:text-white">{t('services')}</h2>
             <p className="font-script text-2xl text-primary italic">{t('services_desc')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {SERVICES.slice(0, 3).map((s, i) => (
              <div key={i} className="reveal-on-scroll" style={{ transitionDelay: `${i * 200}ms` }}>
                <div className="w-40 h-40 rounded-full bg-primary flex items-center justify-center text-5xl text-white mx-auto mb-8 shadow-cyan-glow group hover:scale-110 transition-transform">
                   {['⚡', '🌐', '📱'][i]}
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4 text-slate-900 dark:text-white uppercase">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed max-w-sm mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Team />

      {/* Modern CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
        <div className="max-w-5xl mx-auto reveal-on-scroll">
          <div className="relative rounded-[3rem] bg-slate-900 dark:bg-slate-800 overflow-hidden p-12 md:p-24 text-center">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -ml-48 -mb-48"></div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter relative z-10 leading-[1.1]">
               {t('ready_to_evolve')} <br/> <span className="text-primary">{t('your_digital_dna')}</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10">
              {t('cta_desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <Link to="/contact" className="px-12 py-5 bg-primary text-slate-900 font-black uppercase tracking-widest rounded-2xl hover:shadow-cyan-glow hover:scale-105 transition-all duration-pro-base">
                {t('initiate_project')}
              </Link>
              <a href="mailto:info@eleviqtechnologies.net" className="px-12 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all duration-pro-base">
                {t('send_transmission')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
