import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App(){
  const location = useLocation()
  useEffect(()=>{
    // Basic SEO: update document title per route
    const titleMap = {
      '/': 'Eleviq Technologies — Elevating Digital Intelligence',
      '/about': 'About — Eleviq Technologies',
      '/services': 'Services — Eleviq Technologies',
      '/portfolio': 'Portfolio — Eleviq Technologies',
      '/contact': 'Contact — Eleviq Technologies'
    }
    document.title = titleMap[location.pathname] || 'Eleviq Technologies'
    window.scrollTo(0,0)
  },[location])

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
