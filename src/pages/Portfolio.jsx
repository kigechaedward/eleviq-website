import React from 'react'
import { PROJECTS } from '../data/projects'

export default function Portfolio(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold">Portfolio</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Selected projects and case studies.</p>

      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PROJECTS.map(p=> (
          <article key={p.name} className="bg-white dark:bg-slate-800 rounded-lg p-4 border dark:border-slate-700">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
            <div className="mt-3 text-xs text-slate-500">Placeholder — case study coming soon</div>
          </article>
        ))}
      </div>
    </div>
  )
}
