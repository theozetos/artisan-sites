import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ['var(--font-fraunces)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        intertight: ['var(--font-inter-tight)', 'system-ui', 'sans-serif'],
        geist: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        geistmono: ['var(--font-geist-mono)', 'monospace'],
        lora: ['var(--font-lora)', 'Georgia', 'serif'],
      },
      colors: {
        // GS Climatech
        'gs-navy': '#0A1628',
        'gs-copper': '#B87333',
        'gs-cream': '#F5F1E8',
        // H2eau
        'h2-black': '#0A0A0A',
        'h2-cyan': '#00E5FF',
        'h2-magenta': '#FF006E',
        'h2-white': '#F4F4F5',
        // Ur Beroa
        'ur-red': '#BC1F26',
        'ur-cream': '#FAF7F2',
        'ur-wood': '#A0763C',
        'ur-olive': '#3A4A2F',
        // ÉcoChauff
        'eco-green': '#2D5A3F',
        'eco-green-dk': '#1F3F2C',
        'eco-cream': '#F8F6F0',
        'eco-yellow': '#F4C430',
        'eco-yellow-dk': '#E5B520',
        'eco-ink': '#1A2418',
        // MaisonPro Bati
        'mp-graphite': '#2A2D34',
        'mp-graphite-dk': '#1A1D24',
        'mp-orange': '#FF6B35',
        'mp-orange-dk': '#E05525',
        'mp-bone': '#F5F5F2',
        'mp-steel': '#697078',
        // AquaJeune
        'aj-blue': '#3A8DDE',
        'aj-blue-dk': '#2C6EB0',
        'aj-blue-pale': '#D6E9F8',
        'aj-coral': '#FF7F6E',
        'aj-coral-dk': '#E66355',
        'aj-bone': '#FBFCFE',
        'aj-ink': '#0F1B2C',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
