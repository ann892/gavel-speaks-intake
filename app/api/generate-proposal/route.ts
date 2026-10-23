import { Anthropic } from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { matterType, timeline, priorConsultation, represented, name, email, phone } = body

    const matterTypeLabel = {
      'personal-injury': 'Personal Injury',
      'family-law': 'Family Law',
      'estate-planning': 'Estate Planning',
      'business': 'Business/Corporate',
      'employment': 'Employment',
      'criminal': 'Criminal Defense',
      'immigration': 'Immigration',
      'other': 'Legal Services',
    }[matterType] || 'Legal Services'

    const prompt = `Generate a professional, concise legal consultation proposal for Gavel Speaks, a law firm. Use the following client information:

Client Name: ${name}
Client Email: ${email}
Client Phone: ${phone}
Legal Matter Type: ${matterTypeLabel}
Timeline: ${timeline}
Prior Consultation: ${priorConsultation}
Currently Represented: ${represented}

The proposal should include:
1. A brief professional greeting addressing the client by name
2. Summary of the proposed legal matter (based on their selections, 2-3 sentences)
3. Scope of Services (3-4 bullet points of what Gavel Speaks will do)
4. Engagement Terms:
   - Initial consultation fee: $350 (fully credited toward any retained engagement)
   - Representation retainer: Starting at $5,000 for an initial matter review and strategy session
   - Additional fees: Billed hourly at $300/hour for work beyond retainer scope
5. Timeline: Initial consultation within 7 days of booking
6. Next Steps: A call to action about the next steps in the process

Format the response as clean HTML with proper semantic tags (h2, h3, p, ul, li, etc). Use professional but warm tone. Make it personalized to their specific matter type and timeline. Do not include any markdown formatting - only HTML.`

    const message = await anthropic.messages.create({
      model: 'claude-opus-4-1-20250805',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    })

    const proposalContent = message.content[0]
    if (proposalContent.type !== 'text') {
      throw new Error('Unexpected response type from Claude')
    }

    return NextResponse.json({
      success: true,
      proposal: proposalContent.text,
    })
  } catch (error) {
    console.error('Error generating proposal:', error)
    return NextResponse.json(
      { error: 'Failed to generate proposal' },
      { status: 500 }
    )
  }
}
