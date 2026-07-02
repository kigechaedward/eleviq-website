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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Our Services</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Comprehensive solutions for every stage of your digital journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <div key={service.title} className="group p-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-400 hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-4xl mb-4">
                  {['⚙️', '🌐', '📱', '🤖', '💡', '☁️', '📊', '🔍', '🛍️'][i]}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 transition-colors">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Why Eleviq?</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">We combine technical excellence with business acumen</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {title: 'Proven Delivery', desc: 'Years of experience across fintech, logistics, agritech, and enterprise sectors with a track record of successful launches.', icon: '✓'},
              {title: 'Design-Led Engineering', desc: 'Beautiful, scalable code that prioritizes user experience without compromising performance or security.', icon: '🎨'},
              {title: 'Data-Driven Strategy', desc: 'Every decision backed by analytics and business metrics. We measure success by your ROI.', icon: '📈'}
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Showcasing our recent work</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {PROJECTS.map(project => (
              <div key={project.name} className="group p-6 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-400 hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">{project.name}</h4>
                  <span className="text-xs font-semibold px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 rounded-full">{project.type}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{project.desc}</p>

                            {/* Device mockup preview for larger screens */}
                            <div className="mt-4 hidden md:block">
                              <div className="device-mockup w-56 h-36 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 relative">
                                <div className="device-screen w-full h-full bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-sm text-slate-500">{project.name} preview</div>
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-slate-200 dark:bg-slate-700" />
                              </div>
                            </div>

                            <p className="mt-4 text-sm text-cyan-600 dark:text-cyan-400 font-semibold">→ Case study coming soon</p>
                          </div>
                        ))}
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
