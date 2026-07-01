import React from 'react'

export default function Testimonial({name, role, quote}){
  return (
    <blockquote className="p-6 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-800">
      <p className="text-slate-700 dark:text-slate-200">“{quote}”</p>
      <footer className="mt-4 text-sm text-slate-600 dark:text-slate-400">— {name}, {role}</footer>
    </blockquote>
  )
}
