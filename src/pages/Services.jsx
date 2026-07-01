import React from 'react'
import { SERVICES } from '../data/services'
import ServiceCard from '../components/ServiceCard'

export default function Services(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold">Services</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Comprehensive services across the digital product lifecycle.</p>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {SERVICES.map(s=> <ServiceCard key={s.title} title={s.title}>{s.desc}</ServiceCard>)}
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Pricing</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Starting prices (indicative): Web: $2,500 • Mobile: $5,000 • AI: $10,000. Custom quotes available — request a consultation.</p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 space-y-4 text-slate-600 dark:text-slate-300">
          <details className="p-4 bg-white dark:bg-slate-800 rounded-md">
            <summary className="font-medium">How long does a typical project take?</summary>
            <p className="mt-2">Depends on scope; small sites in 2–6 weeks, larger platforms 3–6+ months.</p>
          </details>
          <details className="p-4 bg-white dark:bg-slate-800 rounded-md">
            <summary className="font-medium">Do you provide maintenance?</summary>
            <p className="mt-2">Yes — SLA-based support and managed services are available.</p>
          </details>
        </div>
      </section>
    </div>
  )
}
