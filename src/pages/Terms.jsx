import React from 'react'

export default function Terms() {
  const lastUpdated = "July 2024"

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="reveal-on-scroll mb-16">
          <h1 className="text-5xl font-black tracking-tighter mb-4">Terms of <span className="text-primary">Service</span></h1>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Last Updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none reveal-on-scroll">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              By accessing or using the Eleviq Technologies website, you agree to be bound by these Terms of Service.
              If you disagree with any part of the terms, you may not access the website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Intellectual Property</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              The website and its original content, features, and functionality are and will remain the exclusive property
              of Eleviq Technologies and its licensors. Our trademarks and trade dress may not be used in connection
              with any product or service without the prior written consent of Eleviq Technologies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. Limitation of Liability</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              In no event shall Eleviq Technologies, nor its directors, employees, partners, agents, suppliers, or affiliates,
              be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation,
              loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of
              or inability to access or use the website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Governing Law</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of Kenya, without regard to its
              conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be
              considered a waiver of those rights.
            </p>
          </section>

          <div className="mt-16 p-8 border-t border-slate-100 dark:border-slate-800 text-center">
            <p className="text-slate-500 text-sm italic">
              Questions about our terms? Reach out to <a href="mailto:legal@eleviqtechnologies.net" className="text-primary not-italic font-bold">legal@eleviqtechnologies.net</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
