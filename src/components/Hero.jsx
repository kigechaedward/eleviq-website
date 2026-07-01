import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-900/95">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Eleviq Technologies — Elevating Digital Intelligence</h1>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">Custom software, AI & automation, cloud solutions, and digital transformation services designed to scale your business.</p>

          <div className="mt-8 flex gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-navy text-white px-5 py-3 rounded-md font-semibold shadow hover:translate-y-[-2px]">Get a Quote</Link>
            <Link to="/services" className="inline-flex items-center gap-2 border border-slate-200 px-5 py-3 rounded-md text-slate-700 dark:text-slate-300">Our Services</Link>
          </div>

          <div className="mt-8 text-sm text-slate-500">Starting prices: Web from $2,500 • Mobile from $5,000 • AI projects from $10,000 — Custom quotes available</div>
        </div>

        <div className="flex-1">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
            <h4 className="font-semibold">Featured projects</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li>HobbyPlan — growth-focused SaaS</li>
              <li>Abiri — logistics & route optimization</li>
              <li>AniTrace — wildlife tracking & analytics</li>
              <li>AuraFlow — process automation</li>
              <li>FuaSmart — agricultural intelligence</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
