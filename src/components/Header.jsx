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
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect width="24" height="24" rx="6" fill="url(#g)" />
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0" stopColor="#00E6FF" />
                <stop offset="1" stopColor="#2DB7FF" />
              </linearGradient>
            </defs>
          </svg>
          <div className="text-sm font-semibold">Eleviq Technologies</div>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          {nav.map(item=> (
            <Link key={item.to} to={item.to} className={`text-sm ${location.pathname===item.to? 'font-semibold text-navy dark:text-white':'text-slate-700 dark:text-slate-300'}`}>
              {item.label}
            </Link>
          ))}
          <button aria-label="Toggle dark mode" onClick={()=>setDark(d=>!d)} className="text-sm px-3 py-1 rounded-md ring-1 ring-slate-200 dark:ring-slate-700">
            {dark? 'Light' : 'Dark'}
          </button>
        </nav>

        <div className="md:hidden">
          <Link to="/contact" className="text-sm px-3 py-2 bg-cyan-400 text-navy rounded-md font-semibold">Contact</Link>
        </div>
      </div>
    </header>
  )
}
