'use client'

import { useEffect, useState } from 'react'

interface ProposalViewProps {
  proposal: string
}

export default function ProposalView({ proposal }: ProposalViewProps) {
  const [animateIn, setAnimateIn] = useState(false)

  useEffect(() => {
    setAnimateIn(true)
  }, [])

  const handleEmail = () => {
    // In a real implementation, this would send the proposal via email
    alert('Proposal has been sent to your email address.')
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div
      className={`transition-all duration-500 ${
        animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {/* Action Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={handleEmail}
          className="flex-1 bg-gavel-red hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          📧 Email Me This
        </button>
        <button
          onClick={handlePrint}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gavel-dark font-semibold py-3 rounded-lg transition-colors"
        >
          🖨️ Print
        </button>
      </div>

      {/* Proposal Content */}
      <div className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-sm">
        <div
          className="prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: proposal }}
        />

        {/* Footer */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600 mb-4">
            Ready to move forward? Book a time that works best for you above.
          </p>
          <p className="text-xs text-gray-500">
            © 2026 Gavel Speaks | ann@gavelspeaks.com | (555) 123-4567
          </p>
        </div>
      </div>
    </div>
  )
}
