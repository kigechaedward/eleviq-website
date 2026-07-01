import React from 'react'

export default function ServiceCard({title, children}){
  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-slate-600 dark:text-slate-300">{children}</p>
    </div>
  )
}
