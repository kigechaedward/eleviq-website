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
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Eleviq" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-base font-bold text-slate-900 dark:text-white tracking-tighter">Eleviq</span>
            <span className="text-[8px] text-primary font-bold uppercase tracking-widest">Technologies</span>
          </div>
        </Link>

        {/* Universal Navigation - No Burger */}
        <nav className="flex items-center bg-slate-900/5 dark:bg-white/5 p-1 rounded-xl border border-black/5 dark:border-white/5 overflow-x-auto no-scrollbar max-w-full">
          {nav.map(item=> (
            <Link
              key={item.to}
              to={item.to}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-heading text-[10px] md:text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all ${location.pathname===item.to? 'bg-primary text-slate-900 shadow-sm':'text-slate-600 dark:text-slate-400 hover:text-primary'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Global Selectors */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm hover:shadow-md transition-all text-sm md:text-lg"
              title="Change Language"
            >
              {currentLang?.flag}
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-32 md:w-40 pro-glass rounded-xl shadow-xl overflow-hidden py-1 z-50 border border-black/5 dark:border-white/5 animate-in fade-in slide-in-from-top-1">
                {LANGUAGES.map(l => (
                  <button
                    key={l.code}
                    onClick={() => {
                      changeLanguage(l.code);
                      setLangOpen(false);
                      window.location.reload();
                    }}
                    className={`w-full px-4 py-2 flex items-center gap-3 text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-primary/10 transition-colors ${lang === l.code ? 'text-primary' : 'text-slate-600 dark:text-slate-400'}`}
                  >
                    <span>{l.flag}</span>
                    <span className="truncate">{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            aria-label="Toggle dark mode"
            onClick={()=>setDark(d=>!d)}
            className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm hover:shadow-md transition-all text-sm md:text-lg"
          >
            {dark? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  )
}
