'use client'

import { useState } from 'react'

interface QuizFormProps {
  onSubmit: (data: any) => void
}

export default function QuizForm({ onSubmit }: QuizFormProps) {
  const [formData, setFormData] = useState({
    matterType: '',
    timeline: '',
    priorConsultation: '',
    represented: '',
    name: '',
    email: '',
    phone: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    onSubmit(formData)
  }

  const isComplete = formData.matterType && formData.timeline && formData.priorConsultation && formData.represented && formData.name && formData.email && formData.phone

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-lg">
      {/* Question 1 */}
      <div>
        <label className="block text-sm font-semibold text-gavel-dark mb-3">
          What type of legal matter do you need help with?
        </label>
        <select
          name="matterType"
          value={formData.matterType}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gavel-red focus:border-transparent"
          required
        >
          <option value="">Select one...</option>
          <option value="personal-injury">Personal Injury</option>
          <option value="family-law">Family Law</option>
          <option value="estate-planning">Estate Planning</option>
          <option value="business">Business/Corporate</option>
          <option value="employment">Employment</option>
          <option value="criminal">Criminal Defense</option>
          <option value="immigration">Immigration</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Question 2 */}
      <div>
        <label className="block text-sm font-semibold text-gavel-dark mb-3">
          When do you need legal assistance?
        </label>
        <select
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gavel-red focus:border-transparent"
          required
        >
          <option value="">Select one...</option>
          <option value="immediately">Immediately (this week)</option>
          <option value="soon">Soon (within 2-4 weeks)</option>
          <option value="within-month">Within a month</option>
          <option value="exploring">Just exploring options</option>
        </select>
      </div>

      {/* Question 3 */}
      <div>
        <label className="block text-sm font-semibold text-gavel-dark mb-3">
          Have you consulted with another attorney?
        </label>
        <select
          name="priorConsultation"
          value={formData.priorConsultation}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gavel-red focus:border-transparent"
          required
        >
          <option value="">Select one...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="unsure">Not sure</option>
        </select>
      </div>

      {/* Question 4 */}
      <div>
        <label className="block text-sm font-semibold text-gavel-dark mb-3">
          Are you currently represented by an attorney?
        </label>
        <select
          name="represented"
          value={formData.represented}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gavel-red focus:border-transparent"
          required
        >
          <option value="">Select one...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="considering">Considering options</option>
        </select>
      </div>

      {/* Contact Info */}
      <div className="border-t border-gray-300 pt-6">
        <h3 className="font-semibold text-gavel-dark mb-4">Contact Information</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gavel-red focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gavel-red focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gavel-red focus:border-transparent"
              required
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!isComplete || submitted}
        className="w-full bg-gavel-red hover:bg-red-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition-colors"
      >
        {submitted ? 'Processing...' : 'Continue to Booking'}
      </button>
    </form>
  )
}
