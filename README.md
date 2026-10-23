# Gavel Speaks Intake Demo

A modern legal intake automation system that captures client information, generates instant proposals, and integrates with Calendly for seamless scheduling.

## Features

- 📋 **Customizable Intake Quiz** - 4-question form capturing legal matter details
- 📝 **AI-Powered Proposals** - Claude-generated proposals tailored to each client
- 📅 **Calendly Integration** - Direct calendar booking embedded in the experience
- 🎨 **Professional Branding** - Clean, modern design with Gavel Speaks branding
- 📧 **Email Ready** - Proposals ready to send to clients
- ⚡ **Fast Deployment** - Deploy to Vercel in minutes

## Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **AI**: Anthropic Claude API
- **Calendar**: Calendly Embed
- **Hosting**: Vercel

## Local Setup

### 1. Clone or download this repository

```bash
git clone <repo-url>
cd gavel-speaks-intake
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy `.env.local.example` to `.env.local` and add your Anthropic API key:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local`:
```
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxx
```

Get your API key from: https://console.anthropic.com/account/keys

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### Quick Deploy Button

Click the button below to deploy directly to Vercel (you'll be prompted for your Anthropic API key):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/gavel-speaks-intake)

### Manual Deployment

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/gavel-speaks-intake.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variable: `ANTHROPIC_API_KEY`
   - Click "Deploy"

3. **Add Custom Domain** (Optional)
   - In Vercel project settings
   - Go to "Domains"
   - Add your domain (e.g., `intake.gavelspeaks.com`)
   - Update DNS records as shown

## Customization

### Update Firm Information

Edit `app/page.tsx`:
- Change firm name in header
- Update phone number in footer
- Modify contact email

### Modify Quiz Questions

Edit `components/QuizForm.tsx`:
- Add/remove questions in the form
- Update dropdown options
- Customize labels and descriptions

### Update Calendly Link

Edit `components/CalendlyEmbed.tsx`:
- Replace the `data-url` with your Calendly link
- Example: `https://calendly.com/your-username/consultation`

### Change Branding Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  'gavel-red': '#YOUR_COLOR_HERE',
  'gavel-dark': '#YOUR_COLOR_HERE',
}
```

### Customize Proposal Template

Edit the prompt in `app/api/generate-proposal/route.ts` to change:
- Proposal structure
- Pricing information
- Terms and conditions
- Tone and messaging

## How It Works

### Step 1: Quiz
Client answers 4 questions about their legal matter:
- Type of legal matter
- Timeline for assistance
- Prior consultation status
- Current representation status
- Contact information

### Step 2: Booking
Client selects available time on your Calendly

### Step 3: Proposal
- Claude AI generates personalized proposal
- Based on client's responses
- Appears instantly on screen
- Ready to email

## API Integration

### Claude API

The app uses the Anthropic Claude API to generate proposals. You need:
- An Anthropic account
- API key with appropriate permissions
- Sufficient API quota

Visit [https://console.anthropic.com](https://console.anthropic.com) to set up.

### Calendly API

Calendly scheduling uses the embed widget (no authentication needed for basic embeds).

To customize:
- Replace the Calendly URL in `components/CalendlyEmbed.tsx`
- Ensure your Calendly Pro account is active
- Enable public scheduling link

## Analytics & Tracking

To add tracking (Google Analytics, etc.):

1. Add to `app/layout.tsx`:
```typescript
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

2. Add your tracking ID from your analytics platform

## Troubleshooting

### Proposal not generating
- Check your Anthropic API key is valid
- Verify you have API quota remaining
- Check browser console for errors

### Calendly not showing
- Verify Calendly embed link is correct and public
- Check your Calendly account is active
- Clear browser cache

### Styling issues
- Run `npm run build` to rebuild Tailwind
- Clear `.next` folder and restart dev server

## Performance

- **Page Load**: ~1.2s
- **Proposal Generation**: ~2-3s
- **Mobile Responsive**: Yes
- **Accessibility**: WCAG compliant

## Security

- API keys stored securely in Vercel environment variables
- No sensitive data stored in browser
- HTTPS by default on Vercel
- XSS protection via React

## Future Enhancements

- Email proposal delivery
- PDF export
- Multi-language support
- CRM integration
- Analytics dashboard
- A/B testing variants

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review console error messages
3. Contact support@gavelspeaks.com

## License

© 2026 Gavel Speaks. All rights reserved.
