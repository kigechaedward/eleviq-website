import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Hero(){
  useEffect(()=>{
    if (typeof window === 'undefined') return
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if(reduce) return

    const onScroll = () =>{
      const sc = window.scrollY
      document.querySelectorAll('[data-parallax]').forEach(el=>{
        const speed = parseFloat(el.getAttribute('data-speed') || '0.25')
        el.style.transform = `translateY(${sc * speed}px)`
      })
    }
    window.addEventListener('scroll', onScroll, {passive:true})
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-900/50 dark:to-slate-900 overflow-hidden relative">
      {/* Animated background orbs with parallax */}
      <div data-parallax data-speed="0.15" className="absolute top-20 right-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl orb-anim parallax"></div>
      <div data-parallax data-speed="-0.08" className="absolute bottom-10 -left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl orb-anim parallax" style={{animationDelay: '1s'}}></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <div className="inline-block mb-4 px-4 py-1.5 bg-cyan-100 dark:bg-cyan-900/30 rounded-full">
              <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-400">🚀 Digital Innovation</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900 dark:text-white mb-6">
              Elevating <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Digital Intelligence</span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Custom software, AI automation, cloud solutions, and digital transformation services. We help startups and enterprises scale with modern technology from Nairobi to the world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/contact" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all">
                Get Started
              </Link>
              <Link to="/services" className="px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold rounded-lg transition-all">
                Our Services
              </Link>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 font-medium">Starting from:</p>
              <div className="flex gap-6 flex-wrap">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Web Development</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">$2,500</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Mobile Apps</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">$5,000</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">AI Solutions</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">$10k+</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 dark:from-cyan-900/30 dark:to-blue-900/20 rounded-2xl p-8 border border-cyan-200/30 dark:border-cyan-800/30 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg backdrop-blur-xs">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">HobbyPlan</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">SaaS monetization platform</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg backdrop-blur-xs">
                  <span className="text-2xl">📦</span>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Abiri</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Route optimization & logistics</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg backdrop-blur-xs">
                  <span className="text-2xl">🦁</span>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">AniTrace</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Wildlife tracking & conservation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg backdrop-blur-xs">
                  <span className="text-2xl">🤖</span>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">AuraFlow</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Enterprise automation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
