import React from 'react'
import { Link } from 'react-router-dom'

export default function Careers() {
  const positions = [
    { title: 'Senior Full Stack Engineer', type: 'Remote / Nairobi', dept: 'Engineering' },
    { title: 'UI/UX Product Designer', type: 'Remote', dept: 'Design' },
    { title: 'AI/ML Specialist', type: 'Nairobi', dept: 'Data Science' },
    { title: 'Technical Project Manager', type: 'Hybrid', dept: 'Operations' }
  ]

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="reveal-on-scroll mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none">
            Join the <span className="text-primary">Evolution</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            We're looking for high-performance individuals who want to build the future of digital ecosystems.
            At Eleviq, we value precision, aesthetics, and results.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 reveal-on-scroll">Open Positions</h2>
          {positions.map((job, i) => (
            <div key={i} className="reveal-on-scroll pro-card p-8 flex flex-col md:flex-row md:items-center justify-between group cursor-pointer" style={{ transitionDelay: `${i * 100}ms` }}>
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{job.dept}</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{job.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{job.type}</p>
              </div>
              <div className="mt-6 md:mt-0">
                <Link to="/contact" className="px-6 py-3 bg-slate-900 dark:bg-slate-800 text-white text-xs font-black uppercase tracking-widest rounded-xl group-hover:bg-primary transition-all">
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] border border-slate-200/50 dark:border-slate-800/50 reveal-on-scroll text-center">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Don't see a fit?</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-8">We're always looking for exceptional talent. Send us a transmission.</p>
          <a href="mailto:careers@eleviqtechnologies.net" className="text-primary font-bold uppercase tracking-widest text-sm">careers@eleviqtechnologies.net →</a>
        </div>
      </div>
    </div>
  )
}
