import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation, LANGUAGES } from '../utils/i18n'

export default function Header(){
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const [langOpen, setLangOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, lang, changeLanguage } = useTranslation()
  const location = useLocation()

  useEffect(()=>{
    document.documentElement.classList.toggle('dark', dark)
  },[dark])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const nav = [
    {to:'/', label: t('home'), icon: '🏠'},
    {to:'/about', label: t('about'), icon: '🏢'},
    {to:'/services', label: t('services'), icon: '⚡'},
    {to:'/portfolio', label: t('portfolio'), icon: '💼'},
    {to:'/contact', label: t('contact'), icon: '📧'}
  ]

  const currentLang = LANGUAGES.find(l => l.code === lang)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/50 dark:border-slate-800/50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-pro-fast">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Eleviq Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-base md:text-lg font-bold text-slate-900 dark:text-white tracking-tighter">Eleviq</span>
            <span className="text-[9px] md:text-[10px] text-primary font-bold uppercase tracking-widest">Technologies</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center bg-slate-900/10 dark:bg-slate-800/10 px-6 py-2 rounded-full backdrop-blur-sm border border-black/5 dark:border-white/5">
          {nav.map(item=> (
            <Link key={item.to} to={item.to} className={`font-heading text-[10px] font-bold uppercase tracking-widest transition-all duration-pro-fast ${location.pathname===item.to? 'text-primary':'text-slate-700 dark:text-slate-300 hover:text-primary'}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          {/* Desktop Only Selectors */}
          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-soft hover:shadow-soft-hover transition-all text-lg"
              >
                {currentLang?.flag}
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-40 pro-glass rounded-2xl shadow-soft-hover overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-pro-fast z-50 border border-black/5 dark:border-white/5">
                  {LANGUAGES.map(l => (
                    <button
                      key={l.code}
                      onClick={() => {
                        changeLanguage(l.code);
                        setLangOpen(false);
                        window.location.reload();
                      }}
                      className={`w-full px-4 py-2 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest hover:bg-primary/10 transition-colors ${lang === l.code ? 'text-primary' : 'text-slate-600 dark:text-slate-400'}`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button aria-label="Toggle dark mode" onClick={()=>setDark(d=>!d)} className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-soft hover:shadow-soft-hover transition-all">
              {dark? '☀️' : '🌙'}
            </button>
          </div>

          <Link to="/contact" className="hidden md:block text-[10px] uppercase tracking-widest px-6 py-3 bg-slate-900 dark:bg-primary text-white dark:text-slate-900 rounded-xl font-black hover:shadow-cyan-glow transition-all active:scale-95">
            {t('hire_us')}
          </Link>

          {/* Mobile Burger Menu Button - CLEAR & BOLD */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-12 h-12 rounded-2xl bg-primary text-slate-900 flex flex-col items-center justify-center gap-1.5 shadow-soft active:scale-90 transition-all z-50"
            aria-label="Toggle Menu"
          >
            <span className={`w-6 h-0.5 bg-slate-900 transition-all duration-pro-base ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-slate-900 transition-all duration-pro-base ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-slate-900 transition-all duration-pro-base ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - REFINED CLARITY */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-pro-base ease-pro-max ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setMenuOpen(false)}></div>
        <nav className={`absolute top-0 right-0 h-full w-full sm:w-80 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-pro-base ease-pro-max ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-8 flex flex-col h-full pt-24">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">{t('navigation')}</span>
            </div>

            <ul className="space-y-4">
              {nav.map(item => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`group flex items-center justify-between p-5 rounded-[1.5rem] transition-all duration-pro-base ${location.pathname === item.to ? 'bg-primary text-slate-900 shadow-lg' : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white'}`}
                  >
                    <span className="text-2xl font-heading font-black uppercase tracking-tighter italic">{item.label}</span>
                    <span className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity">{item.icon}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile-Only Settings (Consolidated) */}
            <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-4">
               <button
                 onClick={()=>setDark(!dark)}
                 className="flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 gap-2"
               >
                 <span className="text-2xl">{dark? '☀️' : '🌙'}</span>
                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{dark? 'Light' : 'Dark'}</span>
               </button>

               <div className="relative group">
                 <button className="w-full flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 gap-2">
                   <span className="text-2xl">{currentLang?.flag}</span>
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{currentLang?.label}</span>
                 </button>
                 {/* Quick switch logic or nested lang selector could go here */}
               </div>
            </div>

            <div className="mt-auto pt-8">
               <Link to="/contact" className="block w-full text-center py-6 bg-slate-900 dark:bg-primary text-white dark:text-slate-900 text-[10px] font-black uppercase tracking-[0.3em] rounded-3xl shadow-soft">
                 {t('hire_us')}
               </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
