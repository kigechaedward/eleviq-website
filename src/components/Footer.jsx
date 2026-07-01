import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold">Eleviq Technologies</h4>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Elevating Digital Intelligence — Nairobi, Kenya</p>
          <p className="mt-3 text-sm">Email: <a href="mailto:info@eleviqtechnologies.net" className="underline">info@eleviqtechnologies.net</a></p>
          <p className="text-sm">Phone: +254790683823</p>
        </div>
        <div className="flex flex-col">
          <h5 className="font-medium">Quick links</h5>
          <nav className="mt-3 flex flex-col gap-2 text-sm">
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>
        <div>
          <h5 className="font-medium">Follow</h5>
          <div className="mt-3 flex gap-3">
            <a aria-label="Twitter" href="#" className="text-slate-600 dark:text-slate-300">Twitter</a>
            <a aria-label="LinkedIn" href="#" className="text-slate-600 dark:text-slate-300">LinkedIn</a>
            <a aria-label="GitHub" href="#" className="text-slate-600 dark:text-slate-300">GitHub</a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100 dark:border-slate-800 text-center text-sm py-4">© {new Date().getFullYear()} Eleviq Technologies — All rights reserved</div>
    </footer>
  )
}
