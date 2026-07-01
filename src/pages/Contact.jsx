import React, { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState(null)
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT // set this in your GitHub Pages repo as an env during build if using Formspree or similar

  async function handleSubmit(e){
    e.preventDefault()
    const form = new FormData(e.target)
    const payload = Object.fromEntries(form)

    if(endpoint){
      try{
        setStatus('sending')
        const res = await fetch(endpoint, {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)})
        if(res.ok) setStatus('sent')
        else setStatus('error')
      }catch(err){
        setStatus('error')
      }
    } else {
      // Fallback: open mail client
      const subject = encodeURIComponent('Website inquiry from ' + payload.name)
      const body = encodeURIComponent(`${payload.message}\n\nPhone: ${payload.phone}\nEmail: ${payload.email}`)
      window.location.href = `mailto:info@eleviqtechnologies.net?subject=${subject}&body=${body}`
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Reach out for a quote or consultation — Nairobi, Kenya.</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm">Name</span>
          <input name="name" required className="mt-1 w-full px-4 py-2 rounded-md border" />
        </label>
        <label className="block">
          <span className="text-sm">Email</span>
          <input name="email" type="email" required className="mt-1 w-full px-4 py-2 rounded-md border" />
        </label>
        <label className="block">
          <span className="text-sm">Phone</span>
          <input name="phone" className="mt-1 w-full px-4 py-2 rounded-md border" />
        </label>
        <label className="block">
          <span className="text-sm">Message</span>
          <textarea name="message" rows="6" required className="mt-1 w-full px-4 py-2 rounded-md border" />
        </label>

        <div>
          <button type="submit" className="px-5 py-3 bg-navy text-white rounded-md font-semibold">Send message</button>
          {status === 'sending' && <span className="ml-3 text-sm">Sending…</span>}
          {status === 'sent' && <span className="ml-3 text-sm text-green-600">Message sent — we will reply soon.</span>}
          {status === 'error' && <span className="ml-3 text-sm text-red-600">Error sending message. Try again or email info@eleviqtechnologies.net</span>}
        </div>
      </form>

      <section className="mt-12 text-sm text-slate-600 dark:text-slate-300">
        <h4 className="font-semibold">Contact Information</h4>
        <p>Email: <a href="mailto:info@eleviqtechnologies.net" className="underline">info@eleviqtechnologies.net</a></p>
        <p>Phone: +254790683823</p>
        <p>Location: Nairobi, Kenya</p>
      </section>
    </div>
  )
}
