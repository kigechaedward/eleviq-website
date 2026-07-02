import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header(){
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const location = useLocation()
  useEffect(()=>{
    document.documentElement.classList.toggle('dark', dark)
  },[dark])

  const nav = [
    {to:'/',label:'Home'},
    {to:'/about',label:'About'},
    {to:'/services',label:'Services'},
    {to:'/portfolio',label:'Portfolio'},
    {to:'/contact',label:'Contact'}
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/95 dark:bg-dark-surface/95 border-b border-accent/20 dark:border-dark-muted/20 shadow-sm">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden className="group-hover:scale-110 transition-transform duration-fast">
            <rect width="24" height="24" rx="6" fill="url(#grad)" />
            <circle cx="12" cy="12" r="4" fill="white" opacity="0.9" />
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#00D4FF" />
                <stop offset="1" stopColor="#0A1F3F" />
              </linearGradient>
            </defs>
          </svg>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-secondary dark:text-white">Eleviq</span>
            <span className="text-xs text-primary font-semibold tracking-wide">Technologies</span>
          </div>
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          {nav.map(item=> (
            <Link key={item.to} to={item.to} className={`text-sm font-medium transition-colors duration-fast ${location.pathname===item.to? 'text-primary font-semibold':'text-slate-700 dark:text-slate-300 hover:text-primary'}`}>
              {item.label}
            </Link>
          ))}
          <button aria-label="Toggle dark mode" onClick={()=>setDark(d=>!d)} className="px-3 py-2 rounded-lg bg-accent/50 hover:bg-accent text-secondary dark:bg-dark-muted/30 dark:hover:bg-dark-muted/50 dark:text-white font-medium text-sm transition-all duration-fast">
            {dark? '☀️ Light' : '🌙 Dark'}
          </button>
        </nav>

        <div className="md:hidden">
          <Link to="/contact" className="text-sm px-4 py-2 bg-primary hover:bg-primary/90 text-secondary rounded-lg font-semibold transition-all duration-fast">Contact</Link>
        </div>
      </div>
    </header>
  )
}
