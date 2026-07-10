// Simple analytics utility
// Replace with Google Analytics, Plausible, or your preferred analytics service

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

// Initialize Google Analytics (gtag.js)
export const initAnalytics = () => {
  if (!GA_MEASUREMENT_ID) {
    console.log('Analytics: No measurement ID configured')
    return
  }

  // Load gtag.js script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  // Initialize gtag
  window.dataLayer = window.dataLayer || []
  function gtag() { window.dataLayer.push(arguments) }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href
  })
}

// Track page views (for SPA)
export const trackPageView = (path) => {
  if (!GA_MEASUREMENT_ID || !window.gtag) return
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
    page_title: document.title
  })
}

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (!GA_MEASUREMENT_ID || !window.gtag) return
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}