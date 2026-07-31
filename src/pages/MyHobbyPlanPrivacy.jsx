import React from 'react'

export default function MyHobbyPlanPrivacy() {
  const lastUpdated = "July 31, 2026"

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="reveal-on-scroll mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-black uppercase tracking-widest mb-6">
            App Privacy Policy
          </div>
          <h1 className="text-5xl font-black tracking-tighter mb-4 uppercase">MyHobbyPlan <br/><span className="text-primary">Privacy Policy</span></h1>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Effective Date: {lastUpdated}</p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none reveal-on-scroll space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white uppercase tracking-tight">1. Introduction</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              MyHobbyPlan ("we," "us," or "our") respects your privacy. This Privacy Policy describes how we collect, use, and protect your information when you use our mobile application. We follow a "local-first" design philosophy, meaning most of your personal data never leaves your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white uppercase tracking-tight">2. Information Collection and Use</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              To provide weather-aware hobby planning services, we collect the following:
            </p>
            <div className="space-y-6">
              <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h3 className="text-lg font-bold mb-2 text-primary">Location Data</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  We collect Approximate and Precise location data from your device. This data is used solely to retrieve current weather conditions and forecasts for your specific area via the OpenWeather API. You can choose to provide this via GPS or by entering a city manually.
                </p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h3 className="text-lg font-bold mb-2 text-primary">Personal Information</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  We may collect your Name (or nickname) purely for personalizing the app's user interface (e.g., home screen greetings). This is stored locally on your device.
                </p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h3 className="text-lg font-bold mb-2 text-primary">Device and Advertising Identifiers</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  We collect Device IDs and Advertising IDs (such as the Google Advertising ID). These are used by the Google AdMob SDK to serve relevant advertisements, prevent ad fraud, and provide performance analytics.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white uppercase tracking-tight">3. Third-Party Services</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Our app integrates the following third-party services which may process data according to their own policies:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <p className="text-slate-600 dark:text-slate-400"><strong className="text-slate-900 dark:text-white">Google AdMob:</strong> Used for monetization. AdMob shares device identifiers with advertising partners to provide personalized ads.</p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <p className="text-slate-600 dark:text-slate-400"><strong className="text-slate-900 dark:text-white">OpenWeather API:</strong> Used to retrieve weather data based on your location coordinates.</p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white uppercase tracking-tight">4. Data Storage and Security</h2>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <p className="text-slate-600 dark:text-slate-400"><strong className="text-slate-900 dark:text-white">Local Storage:</strong> All of your hobby plans, schedules, and notes are stored locally on your device. We do not maintain external servers to store your personal hobby information.</p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <p className="text-slate-600 dark:text-slate-400"><strong className="text-slate-900 dark:text-white">Encryption:</strong> Data transmitted to third-party APIs (Weather and Ads) is secured using industry-standard HTTPS encryption.</p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white uppercase tracking-tight">5. Data Retention and Deletion</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">Because your data is stored locally, you have full control over it:</p>
            <ul className="space-y-3 pl-6">
              <li className="list-disc text-slate-600 dark:text-slate-400">You can delete specific hobby entries within the app.</li>
              <li className="list-disc text-slate-600 dark:text-slate-400">You can permanently delete all app data by going to Android Settings &gt; Apps &gt; MyHobbyPlan &gt; Storage &gt; Clear Data.</li>
              <li className="list-disc text-slate-600 dark:text-slate-400">Uninstalling the app will also remove all locally stored information.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white uppercase tracking-tight">6. Children’s Privacy</h2>
            <p className="text-slate-600 dark:text-slate-400">
              MyHobbyPlan is not intended for use by children under the age of 13. We do not knowingly collect personal data from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white uppercase tracking-tight">7. Consent</h2>
            <p className="text-slate-600 dark:text-slate-400">
              By using MyHobbyPlan, you consent to the collection and use of information as outlined in this policy.
            </p>
          </section>

          <section className="p-8 bg-slate-900 rounded-3xl border border-primary/20 shadow-cyan-glow">
            <h2 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight">8. Contact Us</h2>
            <p className="text-slate-400 mb-6">For any questions regarding this policy, please visit our website:</p>
            <a
              href="https://kigechaedward.github.io/eleviq-website/"
              className="inline-block px-8 py-4 bg-primary text-slate-900 font-black uppercase tracking-widest text-xs rounded-xl hover:scale-105 transition-transform"
            >
              Contact Support
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}
