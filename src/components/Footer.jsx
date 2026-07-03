import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  const year = new Date().getFullYear()
  
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-4 mb-8 group">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src="/logo.png" alt="Eleviq Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black tracking-tighter">Eleviq</span>
                <span className="text-[10px] text-primary font-black uppercase tracking-[0.2em]">Technologies</span>
              </div>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-sm">
              Evolving with Technology. We build high-performance digital ecosystems for global innovators.
            </p>
            <div className="flex gap-4">
              <a href="mailto:info@eleviqtechnologies.net" className="text-sm font-bold text-white hover:text-primary transition-colors">info@eleviqtechnologies.net</a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-slate-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-8">Connect</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter (X)</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Clutch</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
             <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md">
                <p className="text-xs font-bold text-slate-400 mb-4">Newsletter</p>
                <div className="flex flex-col gap-2">
                   <input type="email" placeholder="Email Address" className="bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-primary outline-none transition-all" />
                   <button className="bg-white text-slate-900 text-[10px] font-black uppercase tracking-widest py-3 rounded-xl hover:bg-primary hover:text-white transition-all">Subscribe</button>
                </div>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-black uppercase tracking-widest text-slate-500">
          <p>© {year} Eleviq Technologies. All rights reserved.</p>
          <div className="flex gap-8">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
          <p className="flex items-center gap-2">Handcrafted in Nairobi <span className="text-sm">🇰🇪</span></p>
        </div>
      </div>
    </footer>
  )
}
