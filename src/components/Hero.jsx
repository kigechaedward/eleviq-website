import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../utils/i18n'

export default function Hero(){
  const { t } = useTranslation()

  useEffect(()=>{
    if (typeof window === 'undefined') return
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if(reduce) return

    const onScroll = () =>{
      const sc = window.scrollY
      document.querySelectorAll('[data-parallax]').forEach(el=>{
        const speed = parseFloat(el.getAttribute('data-speed') || '0.25')
        el.style.transform = `translateY(${sc * speed}px)`
      })
    }
    window.addEventListener('scroll', onScroll, {passive:true})
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <section className="min-h-screen flex items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 overflow-hidden relative">
      <div data-parallax data-speed="0.15" className="absolute top-[10%] right-[5%] w-96 h-96 bg-primary/10 rounded-full blur-[120px] orb-anim"></div>
      <div data-parallax data-speed="-0.1" className="absolute bottom-[10%] -left-[5%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] orb-anim" style={{animationDelay: '2s'}}></div>

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="reveal-on-scroll inline-flex items-center gap-3 mb-8 px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-full shadow-soft">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Status: Innovating</span>
            </div>
            
            <h1 className="reveal-on-scroll text-6xl md:text-8xl font-black leading-[0.95] text-slate-900 dark:text-white mb-8 tracking-tighter">
              {t('hero_title')} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary to-blue-600">{t('hero_span')}</span>
            </h1>
            
            <p className="reveal-on-scroll text-xl text-slate-500 dark:text-slate-400 leading-relaxed mb-12 max-w-xl font-medium" style={{ transitionDelay: '200ms' }}>
              {t('hero_desc')}
            </p>

            <div className="reveal-on-scroll flex flex-col sm:flex-row gap-6 mb-16" style={{ transitionDelay: '400ms' }}>
              <Link to="/contact" className="px-10 py-5 bg-slate-900 dark:bg-primary text-white dark:text-slate-900 text-sm font-black uppercase tracking-widest rounded-2xl shadow-soft hover:shadow-cyan-glow hover:-translate-y-1 transition-all duration-pro-base active:scale-95">
                {t('start_evolution')}
              </Link>
              <Link to="/portfolio" className="px-10 py-5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm font-black uppercase tracking-widest rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-pro-base">
                {t('view_artifacts')}
              </Link>
            </div>

            <div className="reveal-on-scroll grid grid-cols-3 gap-8 pt-12 border-t border-slate-100 dark:border-slate-900" style={{ transitionDelay: '600ms' }}>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{t('efficiency_gain')}</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white tracking-tighter">+27%</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Velocity</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white tracking-tighter">2.4x</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Projects</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white tracking-tighter">50+</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block reveal-on-scroll" style={{ transitionDelay: '800ms' }}>
            <div className="relative z-10 w-full aspect-square rounded-[3rem] bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-200/50 dark:border-slate-800/50 shadow-soft overflow-hidden p-8">
               <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10"></div>
               <div className="w-full h-full border border-primary/20 rounded-[2rem] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" className="w-3/4 animate-pulse" />
                  </div>
                  <div className="relative z-10 space-y-4 w-full px-8">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-16 w-full pro-glass rounded-2xl flex items-center gap-4 px-6 animate-pulse" style={{ animationDelay: `${i * 0.5}s` }}>
                        <div className="w-8 h-8 rounded-lg bg-primary/20"></div>
                        <div className="space-y-2 flex-1">
                          <div className="h-2 w-24 bg-primary/20 rounded-full"></div>
                          <div className="h-1.5 w-12 bg-primary/10 rounded-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
