'use client'

import { useState } from 'react'
import QuizForm from './components/QuizForm'
import ProposalView from './components/ProposalView'
import CalendlyEmbed from './components/CalendlyEmbed'

export default function Home() {
  const [stage, setStage] = useState<'quiz' | 'booking' | 'proposal'>('quiz')
  const [quizData, setQuizData] = useState<any>(null)
  const [proposal, setProposal] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const handleQuizSubmit = async (data: any) => {
    setQuizData(data)
    setStage('booking')
  }

  const handleBookingComplete = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/generate-proposal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quizData),
      })
      const result = await response.json()
      setProposal(result.proposal)
      setStage('proposal')
    } catch (error) {
      console.error('Error generating proposal:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gavel-red rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">GS</span>
            </div>
            <h1 className="text-2xl font-bold text-gavel-dark">Gavel Speaks</h1>
          </div>
          <p className="text-gray-600 mt-2">Free Legal Consultation</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {stage === 'quiz' && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gavel-dark mb-2">
                Tell us about your legal matter
              </h2>
              <p className="text-gray-600">
                Answer a few quick questions and we'll help you determine next steps.
              </p>
            </div>
            <QuizForm onSubmit={handleQuizSubmit} />
          </div>
        )}

        {stage === 'booking' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gavel-dark mb-2">
                Schedule your free consultation
              </h2>
              <p className="text-gray-600">
                Pick a time that works for you. We'll send you a proposal while you're thinking about it.
              </p>
            </div>
            <CalendlyEmbed onComplete={handleBookingComplete} />
          </div>
        )}

        {stage === 'proposal' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gavel-dark mb-2">
                Your consultation proposal
              </h2>
              <p className="text-gray-600 mb-6">
                Here's what we'd discuss on our call. Check your email for this as well.
              </p>
            </div>
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gavel-red"></div>
              </div>
            ) : (
              <ProposalView proposal={proposal} />
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 mt-16 py-8 text-center text-sm text-gray-600">
        <p>© 2026 Gavel Speaks. All rights reserved.</p>
      </div>
    </main>
  )
}
