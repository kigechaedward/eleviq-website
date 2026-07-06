import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../utils/i18n'

export default function Hero(){
  const { t } = useTranslation()

  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 bg-slate-900 relative overflow-hidden text-center">
      {/* Background Image / Overlay - Agency Style */}
      <div className="absolute inset-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
          alt="Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="reveal-on-scroll">
          <p className="font-script text-2xl md:text-4xl text-primary mb-8 tracking-wide">
            {t('hero_status')}
          </p>

          <h1 className="font-heading text-5xl md:text-8xl font-bold text-white mb-12 uppercase tracking-tighter leading-tight">
            {t('hero_title')} <br/>
            <span className="text-primary">{t('hero_span')}</span>
          </h1>

          <Link to="/services" className="inline-block px-12 py-6 bg-primary text-slate-900 font-heading font-bold text-lg uppercase tracking-widest rounded-lg hover:bg-white transition-all duration-pro-base active:scale-95 shadow-lg">
            {t('start_evolution')}
          </Link>
        </div>
      </div>

      {/* Decorative center line - scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] uppercase font-black tracking-[0.3em]">Explore</span>
        <div className="w-[2px] h-16 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  )
}
