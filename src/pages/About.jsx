import React from 'react'

export default function About(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold">About Eleviq Technologies</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">Based in Nairobi, Kenya, Eleviq helps organizations adopt modern software, AI, and cloud practices to accelerate growth. Our team focuses on design-led engineering, security, and measurable results.</p>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold">Our Development Process</h3>
        <ol className="mt-4 list-decimal pl-6 space-y-3 text-slate-600 dark:text-slate-300">
          <li>Discovery & scoping</li>
          <li>Architecture & design</li>
          <li>Agile implementation</li>
          <li>QA, security & performance</li>
          <li>Launch & continued support</li>
        </ol>
      </section>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold">Technology Stack</h3>
        <p className="mt-2 text-slate-600 dark:text-slate-300">React, Node.js, Python, TypeScript, Docker, AWS / Azure / GCP, PostgreSQL, Redis, TensorFlow / PyTorch for ML, and modern devops tools.</p>
      </section>
    </div>
  )
}
