'use client'

import { useEffect } from 'react'

interface CalendlyEmbedProps {
  onComplete: () => void
}

export default function CalendlyEmbed({ onComplete }: CalendlyEmbedProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  useEffect(() => {
    const handleBookingComplete = () => {
      setTimeout(() => {
        onComplete()
      }, 1000)
    }

    window.addEventListener('message', (e) => {
      if (e.data.event && e.data.event === 'calendly.event_scheduled') {
        handleBookingComplete()
      }
    })

    return () => {
      window.removeEventListener('message', handleBookingComplete)
    }
  }, [onComplete])

  return (
    <div
      className="calendly-inline-widget bg-white rounded-lg overflow-hidden"
      data-url="https://calendly.com/ann-gavelspeaks/free-introductory-call"
      style={{ minWidth: '320px', height: '650px' }}
    ></div>
  )
}
