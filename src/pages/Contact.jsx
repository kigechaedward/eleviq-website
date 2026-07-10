import React, { useState } from 'react'
import { useTranslation } from '../utils/i18n'

export default function Contact(){
  const { t } = useTranslation()
  const [status, setStatus] = useState(null)
  const [errors, setErrors] = useState({})
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT

  const validateForm = (form) => {
    const newErrors = {}
    const name = form.get('name')?.trim()
    const email = form.get('email')?.trim()
    const message = form.get('message')?.trim()

    if (!name || name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!message || message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e){
    e.preventDefault()
    const form = new FormData(e.target)

    if (!validateForm(form)) return

    const payload = Object.fromEntries(form)

    if(endpoint){
      try{
        setStatus('sending')
        const res = await fetch(endpoint, {
          method:'POST',
          headers:{'Content-Type':'application/json', 'Accept': 'application/json'},
          body:JSON.stringify(payload)
        })
        if(res.ok) {
          setStatus('sent')
          e.target.reset()
          setErrors({})
        }
        else setStatus('error')
      }catch(err){
        setStatus('error')
      }
    } else {
      const subject = encodeURIComponent('Inquiry: ' + payload.name)
      const body = encodeURIComponent(`${payload.message}\n\nPhone: ${payload.phone || 'Not provided'}\nEmail: ${payload.email}`)
      window.location.href = `mailto:info@eleviqtechnologies.net?subject=${subject}&body=${body}`
    }
  }

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Column: Info */}
          <div className="reveal-on-scroll">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
              {t('initiate_contact')} <br/> <span className="text-primary">{t('contact_span')}</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 max-w-md leading-relaxed">
              {t('contact_desc')}
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                 <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-xl">📍</div>
                 <div>
                    <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-xs mb-1">{t('hq_location')}</h4>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">Nairobi, Kenya</p>
                 </div>
              </div>
              <div className="flex gap-6 items-start">
                 <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-xl">📧</div>
                 <div>
                    <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-xs mb-1">{t('direct_transmission')}</h4>
                    <a href="mailto:info@eleviqtechnologies.net" className="text-slate-500 dark:text-slate-400 font-medium hover:text-primary transition-colors">info@eleviqtechnologies.net</a>
                 </div>
              </div>
              <div className="flex gap-6 items-start">
                 <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-xl">📞</div>
                 <div>
                    <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-xs mb-1">{t('voice_line')}</h4>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">+254 790 683 823</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
            <div className="pro-card p-10 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">{t('full_name')}</label>
                    <input 
                      name="name" 
                      required 
                      placeholder="John Doe" 
                      className={`w-full bg-slate-50 dark:bg-slate-800/50 border rounded-xl px-4 py-4 text-sm focus:border-primary outline-none transition-all ${
                        errors.name ? 'border-red-500' : 'border-slate-200/50 dark:border-slate-700/50'
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">{t('email_address')}</label>
                    <input 
                      name="email" 
                      type="email" 
                      required 
                      placeholder="john@company.com" 
                      className={`w-full bg-slate-50 dark:bg-slate-800/50 border rounded-xl px-4 py-4 text-sm focus:border-primary outline-none transition-all ${
                        errors.email ? 'border-red-500' : 'border-slate-200/50 dark:border-slate-700/50'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">{t('phone_optional')}</label>
                  <input name="phone" placeholder="+254..." className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-xl px-4 py-4 text-sm focus:border-primary outline-none transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">{t('message_brief')}</label>
                  <textarea 
                    name="message" 
                    rows="5" 
                    required 
                    placeholder="Tell us about your project..." 
                    className={`w-full bg-slate-50 dark:bg-slate-800/50 border rounded-xl px-4 py-4 text-sm focus:border-primary outline-none transition-all ${
                      errors.message ? 'border-red-500' : 'border-slate-200/50 dark:border-slate-700/50'
                    }`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button type="submit" disabled={status === 'sending'} className="w-full py-5 bg-primary text-slate-900 font-black uppercase tracking-[0.2em] rounded-2xl hover:shadow-cyan-glow transition-all active:scale-[0.98] disabled:opacity-50">
                  {status === 'sending' ? t('transmitting') : t('send_contact')}
                </button>

                {status === 'sent' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-600 dark:text-green-400 text-xs font-bold text-center animate-pulse">
                    {t('success_msg')}
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-600 dark:text-red-400 text-xs font-bold text-center">
                    {t('error_msg')}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}