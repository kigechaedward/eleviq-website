import React from 'react'

export default function Privacy() {
  const lastUpdated = "July 2024"

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="reveal-on-scroll mb-16">
          <h1 className="text-5xl font-black tracking-tighter mb-4">Privacy <span className="text-primary">Policy</span></h1>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Last Updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none reveal-on-scroll">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              At Eleviq Technologies ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data.
              This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you
              about your privacy rights.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Data We Collect</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-600 dark:text-slate-400">
              <li><strong>Identity Data</strong> includes first name, last name, or similar identifier.</li>
              <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Data</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-600 dark:text-slate-400">
              <li>To provide you with information or services that you request from us.</li>
              <li>To notify you about changes to our service.</li>
              <li>To improve our website, services, marketing, or customer relationships.</li>
            </ul>
          </section>

          <section className="mb-12 p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200/50 dark:border-slate-800/50">
            <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Contact Our Data Team</h2>
            <p className="text-sm text-slate-500 mb-4">If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
            <a href="mailto:privacy@eleviqtechnologies.net" className="text-primary font-bold uppercase tracking-widest text-xs">privacy@eleviqtechnologies.net</a>
          </section>
        </div>
      </div>
    </div>
  )
}
