import React from 'react'
import { useTranslation } from '../utils/i18n'

export default function Team() {
  const { t } = useTranslation()
  const members = [
    { name: 'Edward Kigecha', role: 'Chief Engineer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' },
    { name: 'Jane Mwangi', role: 'Lead Architect', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200' },
    { name: 'Samuel Otieno', role: 'Head of AI', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' }
  ]

  return (
    <section className="py-32 px-6 bg-white dark:bg-slate-900 text-center overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="reveal-on-scroll mb-20">
          <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase mb-4 text-slate-900 dark:text-white">Our Amazing Team</h2>
          <p className="font-script text-2xl text-primary italic">Precision minds at work</p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {members.map((m, i) => (
            <div key={i} className="reveal-on-scroll" style={{ transitionDelay: `${i * 200}ms` }}>
              <div className="w-56 h-56 rounded-full border-[7px] border-slate-100 dark:border-slate-800 overflow-hidden mx-auto mb-8 shadow-xl">
                 <img src={m.img} alt={m.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-pro-base" />
              </div>
              <h4 className="font-heading font-bold text-2xl mb-1 text-slate-900 dark:text-white uppercase">{m.name}</h4>
              <p className="text-slate-500 font-medium italic mb-6">{m.role}</p>
              <div className="flex justify-center gap-4">
                 <a href="#" className="w-10 h-10 rounded-full bg-slate-900 dark:bg-slate-800 flex items-center justify-center text-white hover:bg-primary transition-colors">in</a>
                 <a href="#" className="w-10 h-10 rounded-full bg-slate-900 dark:bg-slate-800 flex items-center justify-center text-white hover:bg-primary transition-colors">X</a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-2xl mx-auto reveal-on-scroll">
           <p className="text-slate-500 leading-relaxed italic">
             Our team is dedicated to engineering excellence, combining years of experience in high-stakes environments with a passion for future-forward technology.
           </p>
        </div>
      </div>
    </section>
  )
}
