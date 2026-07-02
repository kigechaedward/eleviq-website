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
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-dark-bg/80 border-b border-slate-200/50 dark:border-slate-800/50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-cyan-glow group-hover:rotate-6 transition-transform duration-pro-fast">
            <span className="text-white font-bold text-xl">E</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold text-slate-900 dark:text-white tracking-tighter">Eleviq</span>
            <span className="text-[10px] text-primary font-bold uppercase tracking-widest">Technologies</span>
          </div>
        </Link>

        <nav className="hidden md:flex gap-8 items-center bg-slate-100/50 dark:bg-slate-800/50 px-6 py-2 rounded-full border border-slate-200/50 dark:border-slate-700/50">
          {nav.map(item=> (
            <Link key={item.to} to={item.to} className={`text-xs font-bold uppercase tracking-wider transition-all duration-pro-fast ${location.pathname===item.to? 'text-primary':'text-slate-500 dark:text-slate-400 hover:text-primary'}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="Toggle dark mode" onClick={()=>setDark(d=>!d)} className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-soft hover:shadow-soft-hover transition-all">
            {dark? '☀️' : '🌙'}
          </button>
          <Link to="/contact" className="hidden sm:block text-xs uppercase tracking-widest px-6 py-3 bg-slate-900 dark:bg-primary text-white dark:text-slate-900 rounded-xl font-bold hover:shadow-lg transition-all active:scale-95">
            Hire Us
          </Link>
        </div>
      </div>
    </header>
  )
}
