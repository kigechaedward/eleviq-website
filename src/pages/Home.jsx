import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { SERVICES } from '../data/services'
import { PROJECTS } from '../data/projects'
import { useTranslation } from '../utils/i18n'

export default function Home(){
  const { t } = useTranslation()

  return (
    <div className="pt-16">
      <Hero />

      {/* Services - Soft UI Evolution */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 reveal-on-scroll">
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-widest mb-4">
                {t('capabilities')}
              </div>
              <h2 className="text-h2 font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
                {t('engineered_for')} <br/> <span className="text-primary">{t('performance')}</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                We bridge the gap between complex engineering and intuitive design.
              </p>
            </div>
            <Link to="/services" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white hover:text-primary transition-colors">
              {t('view_all_services')} <span className="w-10 h-[2px] bg-slate-900 dark:bg-white group-hover:bg-primary group-hover:w-16 transition-all duration-pro-base"></span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service, i) => (
              <div key={service.title}
                   className={`reveal-on-scroll group p-10 pro-card relative overflow-hidden`}
                   style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-slow ease-pro-max"></div>

                <div className="w-14 h-14 mb-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-primary group-hover:text-white group-hover:shadow-cyan-glow transition-all duration-pro-base ease-pro-max">
                  {['⚡', '🌐', '📱', '🤖', '💡', '☁️'][i] || '⚙️'}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors duration-pro-fast">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {service.desc}
                </p>

                <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-pro-base">
                   <Link to="/contact" className="text-xs font-bold uppercase tracking-widest text-primary hover:underline">
                     {t('discuss_project')} →
                   </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Portfolio - Visual Impact */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-955/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="text-h2 font-extrabold text-slate-900 dark:text-white mb-4 tracking-tighter">{t('selected_artifacts')}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">Where high-stakes engineering meets high-end aesthetics.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6 h-full md:h-[700px]">
            {/* Primary Bento - Featured */}
            <div className="md:col-span-8 md:row-span-2 reveal-on-scroll group relative rounded-[2rem] overflow-hidden bg-slate-900 border border-slate-800 shadow-soft">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity duration-pro-base">
                <span className="text-9xl font-black text-white select-none">{PROJECTS[1]?.name || 'ABIRI'}</span>
              </div>
              <div className="absolute bottom-0 p-12 z-20 w-full">
                <div className="flex items-center gap-4 mb-6">
                   <span className="px-4 py-1.5 bg-primary/20 backdrop-blur-md text-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-full">Flagship</span>
                   <span className="w-12 h-[1px] bg-white/20"></span>
                   <span className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Case 001</span>
                </div>
                <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">{PROJECTS[1]?.name || 'Abiri Logistics'}</h3>
                <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">{PROJECTS[1]?.desc || 'Enterprise-grade route optimization for the next generation of logistics.'}</p>
                <Link to="/portfolio" className="inline-flex items-center gap-4 px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-primary hover:text-white transition-all duration-pro-base transform active:scale-95">
                  {t('deep_dive')} <span>→</span>
                </Link>
              </div>
            </div>

            {/* Metric Bento */}
            <div className="md:col-span-4 reveal-on-scroll group relative rounded-[2rem] overflow-hidden bg-primary shadow-cyan-glow p-10 flex flex-col justify-between" style={{ transitionDelay: '200ms' }}>
              <div className="text-white/30 text-8xl font-black absolute -top-4 -right-4 select-none italic tracking-tighter">27%</div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl mb-6 flex items-center justify-center text-white text-2xl">📈</div>
                <h3 className="text-5xl font-black text-white mb-2 italic">27%</h3>
                <p className="text-cyan-100 font-bold uppercase tracking-widest text-xs">{t('operational_gain')}</p>
              </div>
              <p className="text-white/80 text-sm font-medium leading-relaxed relative z-10">Average efficiency improvement delivered across our fintech and logistics portfolio.</p>
            </div>

            {/* Small Bento - Secondary */}
            <div className="md:col-span-4 reveal-on-scroll group relative rounded-[2rem] overflow-hidden pro-card p-10 flex flex-col justify-center" style={{ transitionDelay: '400ms' }}>
               <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">{PROJECTS[0]?.name || 'HobbyPlan'}</h3>
                  <div className="w-8 h-8 rounded-lg bg-accent dark:bg-slate-800 flex items-center justify-center text-primary group-hover:rotate-45 transition-transform">↗</div>
               </div>
               <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">{PROJECTS[0]?.desc}</p>
               <div className="flex gap-2">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 rounded-md">React</span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 rounded-md">Node.js</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
        <div className="max-w-5xl mx-auto reveal-on-scroll">
          <div className="relative rounded-[3rem] bg-slate-900 dark:bg-slate-800 overflow-hidden p-12 md:p-24 text-center">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -ml-48 -mb-48"></div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter relative z-10 leading-[1.1]">
               Ready to Evolve <br/> <span className="text-primary">Your Digital DNA?</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10">
              Let's discuss your next project. Free consultation, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <Link to="/contact" className="px-12 py-5 bg-primary text-slate-900 font-black uppercase tracking-widest rounded-2xl hover:shadow-cyan-glow hover:scale-105 transition-all duration-pro-base">
                Initiate Project
              </Link>
              <a href="mailto:info@eleviqtechnologies.net" className="px-12 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all duration-pro-base">
                Send Transmission
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
