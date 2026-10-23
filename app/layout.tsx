import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Free Legal Consultation | Gavel Speaks',
  description: 'Get a personalized legal consultation proposal from Gavel Speaks. Answer a few questions and book your free introductory call today.',
  keywords: 'legal consultation, law firm, legal services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  )
}
