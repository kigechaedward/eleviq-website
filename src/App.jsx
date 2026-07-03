import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { initScrollReveal } from './utils/scrollReveal'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App(){
  const location = useLocation()

  useEffect(() => {
    // Initialize UI/UX Pro Max Scroll Animations
    const cleanup = initScrollReveal()
    return () => cleanup()
  }, [location.pathname]) // Re-run when switching pages

  useEffect(()=>{
    // Basic SEO: update document title per route
    const titleMap = {
      '/': 'Eleviq Technologies — Evolving with Technology',
      '/about': 'About — Eleviq Technologies',
      '/services': 'Services — Eleviq Technologies',
      '/portfolio': 'Portfolio — Eleviq Technologies',
      '/contact': 'Contact — Eleviq Technologies',
      '/careers': 'Careers — Eleviq Technologies',
      '/privacy': 'Privacy Policy — Eleviq Technologies',
      '/terms': 'Terms of Service — Eleviq Technologies'
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
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
