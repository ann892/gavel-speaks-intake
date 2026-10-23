import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gavel-red': '#C41E3A',
        'gavel-dark': '#1a1a1a',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
export default config
