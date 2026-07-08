import React, { useState } from 'react'
import { useTranslation } from '../utils/i18n'

export default function SupportHub() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [chatStep, setChatStep] = useState('greet') // greet, answer

  const faqs = [
    { q: t('bot_faq_q1'), a: t('bot_faq_a1') },
    { q: t('bot_faq_q2'), a: t('bot_faq_a2') },
    { q: t('bot_faq_q3'), a: t('bot_faq_a3') }
  ]

  const [currentAnswer, setCurrentAnswer] = useState('')

  const phone = "254790683823"
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent("Hello Eleviq, I'd like to speak with a human.")}`

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[60] flex flex-col items-end">

      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-3rem)] sm:w-96 pro-glass rounded-[2rem] shadow-2xl overflow-hidden border border-white/20 dark:border-slate-800/20 animate-in fade-in slide-in-from-bottom-4 duration-pro-base">
          {/* Header */}
          <div className="bg-primary p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">🤖</div>
              <div>
                <p className="text-slate-900 font-black uppercase tracking-widest text-[10px]">Eleviq AI</p>
                <p className="text-slate-900/60 text-[8px] font-bold uppercase tracking-widest">Always Active</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-900/50 hover:text-slate-900 transition-colors">✕</button>
          </div>

          {/* Body */}
          <div className="p-8 h-96 overflow-y-auto bg-white/50 dark:bg-slate-950/50 space-y-6 scrollbar-none">
            {/* Bot Message */}
            <div className="flex flex-col items-start gap-2">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 dark:border-slate-800 max-w-[85%]">
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {t('bot_greeting')}
                </p>
              </div>
            </div>

            {chatStep === 'answer' && (
              <div className="flex flex-col items-start gap-2 animate-in fade-in slide-in-from-left-2">
                 <div className="bg-primary/10 p-4 rounded-2xl rounded-tl-none border border-primary/20 max-w-[85%]">
                   <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                     {currentAnswer}
                   </p>
                 </div>
                 <button onClick={() => setChatStep('greet')} className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline ml-1">
                   ← {t('bot_back')}
                 </button>
              </div>
            )}

            {chatStep === 'greet' && (
              <div className="grid gap-2 pt-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{t('bot_select_q')}</p>
                {faqs.map((f, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentAnswer(f.a)
                      setChatStep('answer')
                    }}
                    className="text-left p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary transition-all active:scale-95"
                  >
                    {f.q}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800">
             <a
               href={whatsappUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:shadow-lg transition-all active:scale-95"
             >
               <span className="text-lg">💬</span> {t('bot_connect_human')}
             </a>
          </div>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-[2rem] flex items-center justify-center shadow-soft hover:shadow-cyan-glow transition-all duration-pro-base active:scale-90 relative overflow-hidden ${isOpen ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900' : 'bg-primary text-slate-900'}`}
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity"></div>
        {isOpen ? (
          <span className="text-2xl font-light">✕</span>
        ) : (
          <div className="flex flex-col items-center leading-none">
             <span className="text-2xl">🤖</span>
          </div>
        )}
      </button>
    </div>
  )
}
