import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { SERVICES } from '../data/services'
import { PROJECTS } from '../data/projects'

export default function Home(){
  return (
    <div className="pt-16">
      <Hero />

      {/* Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-h2 font-bold text-slate-900 dark:text-white mb-4 tracking-tight leading-display">
                Engineered for <span className="text-primary">Performance</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">Comprehensive solutions for every stage of your digital journey, built with Swiss-style precision.</p>
            </div>
            <Link to="/services" className="text-primary font-semibold flex items-center gap-2 group hover:translate-x-1 transition-transform duration-pro-fast">
              View all services <span className="text-xl">→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service, i) => (
              <div key={service.title}
                   className="group p-8 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-soft hover:shadow-soft-hover hover:border-primary/30 transition-all duration-pro-base ease-pro-max hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-pro-base"></div>
                <div className="w-12 h-12 mb-6 bg-accent dark:bg-primary/10 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-pro-base">
                  {['⚡', '🌐', '📱', '🤖', '💡', '☁️'][i] || '⚙️'}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Portfolio */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Featured <span className="text-primary">Impact</span></h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">A selection of our most challenging and rewarding transformations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full md:h-[600px]">
            {/* Main Featured Item */}
            <div className="md:col-span-2 md:row-span-2 group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-soft hover:shadow-soft-hover transition-all duration-pro-base">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 p-8 z-20">
                <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full mb-4 inline-block">Flagship Project</span>
                <h3 className="text-2xl font-bold text-white mb-2">{PROJECTS[0]?.name || 'Abiri Logistics'}</h3>
                <p className="text-slate-300 text-sm mb-4 line-clamp-2">{PROJECTS[0]?.desc || 'Route optimization and digital freight management platform.'}</p>
                <Link to="/portfolio" className="text-white font-semibold flex items-center gap-2 text-sm group-hover:gap-3 transition-all">
                  View Case Study <span>→</span>
                </Link>
              </div>
            </div>

            {/* Side Items */}
            <div className="md:col-span-2 group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-soft hover:shadow-soft-hover transition-all duration-pro-base">
              <div className="p-8 h-full flex flex-col justify-center">
                <span className="text-primary text-xs font-bold mb-2 uppercase tracking-widest">SaaS Architecture</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{PROJECTS[1]?.name || 'HobbyPlan'}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-1">{PROJECTS[1]?.desc || 'SaaS monetization and user management system.'}</p>
              </div>
            </div>

            <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-blue-600 shadow-soft hover:shadow-soft-hover transition-all duration-pro-base">
              <div className="p-8 h-full flex flex-col justify-center text-white">
                <h3 className="text-3xl font-bold mb-1">27%</h3>
                <p className="text-cyan-100 text-xs font-medium uppercase">Efficiency Gain</p>
                <div className="mt-4 h-1 w-12 bg-white/30 rounded-full overflow-hidden">
                  <div className="h-full bg-white w-2/3"></div>
                </div>
              </div>
            </div>

            <div className="group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-soft hover:shadow-soft-hover transition-all duration-pro-base">
              <div className="p-8 h-full flex flex-col justify-center">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">AniTrace</h3>
                <p className="text-slate-500 text-xs font-medium">IoT Wildlife Tracking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-black dark:to-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Clients Say</h2>
            <p className="text-lg text-slate-300">Trusted by founders and technical leaders</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {name: 'Jane Mwangi', role: 'CTO, Abiri', quote: 'Eleviq delivered a robust platform that improved route efficiency by 27%. Exceptional team and communication throughout.'},
              {name: 'Samuel Otieno', role: 'Founder, FuaSmart', quote: 'They understood our agricultural domain and delivered quality code fast. Best value for investment we\'ve experienced.'}
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white/10 dark:bg-slate-900/30 rounded-xl border border-white/20 backdrop-blur">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-lg leading-relaxed mb-6">"{item.quote}"</p>
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Build Something Great?</h2>
          <p className="text-lg text-cyan-100 mb-8">Let's discuss your next project. Free consultation, no obligation.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="px-8 py-3 bg-white hover:bg-slate-100 text-cyan-600 font-semibold rounded-lg transition-all shadow-lg">
              Request Consultation
            </Link>
            <a href="mailto:info@eleviqtechnologies.net" className="px-8 py-3 border-2 border-white hover:bg-white/10 text-white font-semibold rounded-lg transition-all">
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
