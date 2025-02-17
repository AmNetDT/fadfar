import { withUt } from 'uploadthing/tw'
import type { Config } from 'tailwindcss'

const colors = {
  background: '#ffffff',
  foreground: '#141414',
  card: '#ffffff',
  'card-foreground': '#141414',
  popover: '#ffffff',
  'popover-foreground': '#141414',
  primary: '#15803d',
  'primary-foreground': '#ffffff',
  secondary: '#333333',
  'secondary-foreground': '#ffffff',
  muted: '#666666',
  'muted-foreground': '#ffffff',
  accent: '#0096c7',
  'accent-foreground': '#ffffff',
  destructive: '#ff3737',
  'destructive-foreground': '#ffffff',
  border: '#eaeaea',
  input: '#eaeaea',
  ring: '#141414',
  chart: {
    '1': '#12c896',
    '2': '#2196f3',
    '3': '#ff9800',
    '4': '#673ab7',
    '5': '#8bc34a',
  },
}

const config = withUt({
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Ubuntu', 'Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        ...colors,
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sectionLayout: {
          100: '#d1c8e0',
          200: '#8f83a3',
          300: '#6b5e82',
          400: '#271c38',
        },
      },
      borderRadius: {
        // Remove or set radius to 0
        lg: '0',
        md: '0',
        sm: '0',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}) satisfies Config

export default config
