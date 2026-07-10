import React, { useState } from 'react'
import { useTranslation } from '../utils/i18n'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const AGENT_TYPES = [
  { id: 'analyst', name: 'Market Strategist', icon: '📊', desc: 'Analyzes market trends and identifies opportunities' },
  { id: 'architect', name: 'Solutions Architect', icon: '🏗️', desc: 'Designs scalable technical architectures' },
  { id: 'developer', name: 'Lead Developer', icon: '💻', desc: 'Reviews code feasibility and tech stack' },
  { id: 'qa', name: 'QA Engineer', icon: '🔍', desc: 'Identifies quality risks and test strategies' },
  { id: 'devops', name: 'DevOps Engineer', icon: '🚀', desc: 'Plans deployment and infrastructure' },
]

export default function AIDashboard() {
  const { t } = useTranslation()
  const [industry, setIndustry] = useState('')
  const [goal, setGoal] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [selectedAgents, setSelectedAgents] = useState(['analyst', 'architect'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!industry.trim() || !goal.trim()) return

    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await fetch(`${API_BASE}/kickoff-agent-team`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_industry: industry,
          project_goal: goal,
          agents: selectedAgents
        })
      })

      if (!response.ok) {
        throw new Error('Failed to generate strategy')
      }

      const data = await response.json()
      setResult(data.agent_output)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const toggleAgent = (id) => {
    setSelectedAgents(prev =>
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    )
  }

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            AI-Powered Analysis
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase mb-6 text-slate-900 dark:text-white">
            Agent <span className="text-primary">Dashboard</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Deploy our AI agent team to analyze your project and generate a comprehensive strategy
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="reveal-on-scroll">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <h2 className="font-heading text-2xl font-bold mb-6 text-slate-900 dark:text-white uppercase">
                Project Details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
                    Industry
                  </label>
                  <input
                    type="text"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    placeholder="e.g., FinTech, Healthcare, E-commerce"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
                    Project Goal
                  </label>
                  <textarea
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    placeholder="Describe what you want to build or achieve..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wider">
                    Select Agents
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {AGENT_TYPES.map(agent => (
                      <button
                        key={agent.id}
                        type="button"
                        onClick={() => toggleAgent(agent.id)}
                        className={`p-3 rounded-xl border-2 transition-all text-left ${
                          selectedAgents.includes(agent.id)
                            ? 'border-primary bg-primary/10'
                            : 'border-slate-200 dark:border-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{agent.icon}</span>
                          <span className="text-sm font-bold text-slate-900 dark:text-white">{agent.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading || selectedAgents.length === 0}
                  className="w-full py-4 bg-primary text-slate-900 font-black uppercase tracking-widest rounded-xl hover:shadow-cyan-glow hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Analyzing...
                    </span>
                  ) : (
                    'Launch Agent Team'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Results Panel */}
          <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 min-h-[500px]">
              <h2 className="font-heading text-2xl font-bold mb-6 text-slate-900 dark:text-white uppercase">
                Strategy Output
              </h2>

              {error && (
                <div className="p-4 bg-error/10 border border-error/20 rounded-xl text-error">
                  {error}
                </div>
              )}

              {result && (
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <div className="whitespace-pre-wrap text-slate-700 dark:text-slate-300 leading-relaxed">
                    {result}
                  </div>
                </div>
              )}

              {!result && !error && !loading && (
                <div className="flex flex-col items-center justify-center h-80 text-center">
                  <div className="text-6xl mb-6">🤖</div>
                  <p className="text-slate-500 dark:text-slate-400">
                    Your AI strategy will appear here
                  </p>
                  <p className="text-sm text-slate-400 dark:text-slate-500 mt-2">
                    Fill in the form and launch the agent team
                  </p>
                </div>
              )}

              {loading && (
                <div className="flex flex-col items-center justify-center h-80 text-center">
                  <div className="flex gap-2 mb-6">
                    {selectedAgents.map((_, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 150}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 font-medium">
                    Agents are collaborating...
                  </p>
                  <p className="text-sm text-slate-400 dark:text-slate-500 mt-2">
                    This may take 30-60 seconds
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}