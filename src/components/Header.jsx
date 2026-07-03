import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation, LANGUAGES } from '../utils/i18n'

export default function Header(){
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const [langOpen, setLangOpen] = useState(false)
  const { t, lang, changeLanguage } = useTranslation()
  const location = useLocation()

  useEffect(()=>{
    document.documentElement.classList.toggle('dark', dark)
  },[dark])

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

        <nav className="hidden md:flex gap-8 items-center bg-slate-100/50 dark:bg-slate-800/50 px-6 py-2 rounded-full border border-slate-200/50 dark:border-slate-700/50">
          {nav.map(item=> (
            <Link key={item.to} to={item.to} className={`text-[10px] font-black uppercase tracking-wider transition-all duration-pro-fast ${location.pathname===item.to? 'text-primary':'text-slate-500 dark:text-slate-400 hover:text-primary'}`}>
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
                      window.location.reload(); // Force reload to apply translations globally
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

          <button aria-label="Toggle dark mode" onClick={()=>setDark(d=>!d)} className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-soft hover:shadow-soft-hover transition-all">
            {dark? '☀️' : '🌙'}
          </button>

          <Link to="/contact" className="hidden sm:block text-[10px] uppercase tracking-widest px-6 py-3 bg-slate-900 dark:bg-primary text-white dark:text-slate-900 rounded-xl font-black hover:shadow-cyan-glow transition-all active:scale-95">
            {t('hire_us')}
          </Link>
        </div>
      </div>
    </header>
  )
}
