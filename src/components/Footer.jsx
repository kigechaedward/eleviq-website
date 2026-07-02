import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  const year = new Date().getFullYear()
  
  return (
    <footer className="bg-slate-900 dark:bg-black text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="font-bold">Eleviq</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">Evolving with Technology. Modern tech solutions from Nairobi.</p>
            <p className="text-sm"><a href="mailto:info@eleviqtechnologies.net" className="text-cyan-400 hover:text-cyan-300">info@eleviqtechnologies.net</a></p>
            <p className="text-sm text-slate-400">+254790683823</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors">X</a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors">in</a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors">gh</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {year} Eleviq Technologies. All rights reserved.</p>
          <p>Handcrafted in Nairobi, Kenya 🇰🇪</p>
        </div>
      </div>
    </footer>
  )
}
