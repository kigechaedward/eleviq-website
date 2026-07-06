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
    {to:'/', label: t('home')},
    {to:'/about', label: t('about')},
    {to:'/services', label: t('services')},
    {to:'/portfolio', label: t('portfolio')},
    {to:'/contact', label: t('contact')}
  ]

  const currentLang = LANGUAGES.find(l => l.code === lang)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/50 dark:border-slate-800/50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-pro-fast">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Eleviq Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold text-slate-900 dark:text-white tracking-tighter">Eleviq</span>
            <span className="text-[10px] text-primary font-bold uppercase tracking-widest">Technologies</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center bg-slate-900/10 dark:bg-slate-800/10 px-6 py-2 rounded-full backdrop-blur-sm">
          {nav.map(item=> (
            <Link key={item.to} to={item.to} className={`font-heading text-xs font-bold uppercase tracking-widest transition-all duration-pro-fast ${location.pathname===item.to? 'text-primary':'text-slate-700 dark:text-slate-300 hover:text-primary'}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-soft hover:shadow-soft-hover transition-all text-lg"
            >
              {currentLang?.flag}
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-40 pro-glass rounded-2xl shadow-soft-hover overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-pro-fast z-50">
                {LANGUAGES.map(l => (
                  <button
                    key={l.code}
                    onClick={() => {
                      changeLanguage(l.code);
                      setLangOpen(false);
                      window.location.reload();
                    }}
                    className={`w-full px-4 py-2 flex items-center gap-3 text-xs font-bold uppercase tracking-widest hover:bg-primary/10 transition-colors ${lang === l.code ? 'text-primary' : 'text-slate-600 dark:text-slate-400'}`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <button aria-label="Toggle dark mode" onClick={()=>setDark(d=>!d)} className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-soft hover:shadow-soft-hover transition-all">
            {dark? '☀️' : '🌙'}
          </button>

          {/* Hire Us Button (Desktop) */}
          <Link to="/contact" className="hidden md:block text-[10px] uppercase tracking-widest px-6 py-3 bg-slate-900 dark:bg-primary text-white dark:text-slate-900 rounded-xl font-black hover:shadow-cyan-glow transition-all active:scale-95">
            {t('hire_us')}
          </Link>

          {/* Mobile Burger Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-slate-900 dark:bg-primary text-white dark:text-slate-900 flex flex-col items-center justify-center gap-1.5 shadow-soft active:scale-90 transition-all"
            aria-label="Toggle Menu"
          >
            <span className={`w-5 h-0.5 bg-current transition-all duration-pro-base ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-current transition-all duration-pro-base ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-current transition-all duration-pro-base ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-pro-base ease-pro-max ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)}></div>
        <nav className={`absolute top-0 right-0 h-full w-72 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-pro-base ease-pro-max ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-8 flex flex-col h-full">
            <div className="flex items-center justify-between mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-primary">{t('navigation')}</span>
              <button onClick={() => setMenuOpen(false)} className="text-slate-400 hover:text-primary transition-colors">✕</button>
            </div>

            <ul className="space-y-6">
              {nav.map(item => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`text-2xl font-black tracking-tighter hover:text-primary transition-colors ${location.pathname === item.to ? 'text-primary' : 'text-slate-900 dark:text-white'}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8 border-t border-slate-100 dark:border-slate-800">
               <Link to="/contact" className="block w-full text-center py-4 bg-primary text-slate-900 text-xs font-black uppercase tracking-widest rounded-2xl shadow-soft">
                 {t('hire_us')}
               </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
