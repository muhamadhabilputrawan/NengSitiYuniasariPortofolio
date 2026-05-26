/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        premium: {
          dark: "#0F172A",      // Primary heading text
          slate: "#334155",     // Body text
          muted: "#64748B",     // Secondary text
          light: "#94A3B8",     // Subtle border / text
          border: "#E2E8F0",    // Soft lines
          bg: "#F8FAFC",        // Muted gray-blue background
          card: "#FFFFFF",      // Pure white card background
          accent: "#3B82F6",    // Calm blue
          accentLight: "#60A5FA", // Soft blue
          navy: "#1E293B",      // Soft navy blue
          navyDark: "#0F172A",  // Deep elegant navy
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-15px) scale(1.02)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.35' },
        }
      }
    },
  },
  plugins: [],
}
