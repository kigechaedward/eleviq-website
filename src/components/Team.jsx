import React from 'react'
import { useTranslation } from '../utils/i18n'

export default function Team() {
  const { t } = useTranslation()
  const members = [
    {
      name: 'Edward Kigecha',
      role: t('role_ce'),
      linkedin: 'https://www.linkedin.com/in/edward-kigecha/'
    }
  ]

  return (
    <section className="py-32 px-6 bg-white dark:bg-slate-900 text-center overflow-hidden border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="reveal-on-scroll mb-20">
          <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase mb-4 text-slate-900 dark:text-white">{t('team_title')}</h2>
          <p className="font-script text-2xl text-primary italic">{t('team_tagline')}</p>
        </div>

        <div className="flex justify-center">
          {members.map((m, i) => (
            <div key={i} className="reveal-on-scroll group max-w-sm" style={{ transitionDelay: `${i * 200}ms` }}>
              <div className="w-56 h-56 rounded-full border-[7px] border-slate-50 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:bg-primary/10 transition-colors duration-pro-base relative overflow-hidden">
                 <img
                   src="https://media.licdn.com/dms/image/v2/D4D03AQE1z4E_1Q6r-A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718222442442?e=1743638400&v=beta&t=H-8_v-P9-f-p-y-e-e-e-e-e-e-e-e-e-e-e-e-e-e"
                   alt={m.name}
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                   onError={(e) => {
                     e.target.style.display = 'none';
                     e.target.nextSibling.style.display = 'block';
                   }}
                 />
                 <svg
                   viewBox="0 0 24 24"
                   className="w-24 h-24 text-slate-300 dark:text-slate-600 group-hover:text-primary transition-colors hidden"
                   fill="none"
                   stroke="currentColor"
                   strokeWidth="1.5"
                 >
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                 </svg>
              </div>
              <h4 className="font-heading font-bold text-2xl mb-1 text-slate-900 dark:text-white uppercase">{m.name}</h4>
              <p className="text-slate-500 font-medium italic mb-6">{m.role}</p>
              <div className="flex justify-center gap-4">
                 <a
                   href={m.linkedin}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"
                 >
                   <span className="font-bold">in</span>
                 </a>
                 <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 cursor-not-allowed">X</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-2xl mx-auto reveal-on-scroll">
           <p className="text-slate-500 leading-relaxed italic">
             {t('team_desc')}
           </p>
        </div>
      </div>
    </section>
  )
}
