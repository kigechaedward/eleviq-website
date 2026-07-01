import React from 'react'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import Testimonial from '../components/Testimonial'
import { SERVICES } from '../data/services'
import { PROJECTS } from '../data/projects'

export default function Home(){
  return (
    <div>
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map(s=> (
            <ServiceCard key={s.title} title={s.title}>{s.desc}</ServiceCard>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-900/60">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold">Why Choose Us</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">Experienced team, proven delivery, and focus on measurable outcomes. Nairobi-based with global delivery capabilities.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-slate-800 rounded-lg">Proven delivery
              <p className="text-sm text-slate-500 mt-2">Years of experience across sectors.</p></div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-lg">Trusted partners
              <p className="text-sm text-slate-500 mt-2">Working with startups and enterprises.</p></div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-lg">Data-first
              <p className="text-sm text-slate-500 mt-2">Decisions driven by analytics and ops.</p></div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PROJECTS.map(p=> (
            <div key={p.name} className="p-4 bg-white dark:bg-slate-800 rounded-lg border dark:border-slate-700">
              <h4 className="font-semibold">{p.name}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold">Client Testimonials</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Testimonial name="Jane Mwangi" role="CTO, Abiri" quote="Eleviq delivered a robust platform that improved route efficiency by 27%." />
          <Testimonial name="Samuel Otieno" role="Founder, FuaSmart" quote="Their team understood our domain and shipped quickly." />
        </div>
      </section>
    </div>
  )
}
