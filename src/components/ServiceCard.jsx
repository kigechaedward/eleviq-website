import React from 'react'

export default function ServiceCard({title, children, icon}){
  return (
    <div className="group p-6 bg-white dark:bg-dark-surface rounded-xl shadow-md hover:shadow-xl border border-accent/30 dark:border-dark-muted/20 transition-all duration-base hover:-translate-y-1">
      <div className="flex items-start gap-3 mb-3">
        {icon && <span className="text-2xl">{icon}</span>}
        <h4 className="font-semibold text-secondary dark:text-white group-hover:text-primary transition-colors duration-fast">{title}</h4>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{children}</p>
    </div>
  )
}
