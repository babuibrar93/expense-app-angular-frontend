/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts,css,component.html,component.ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1', // Indigo
        secondary: '#4F46E5', // Deep Indigo
        accent: '#F59E0B', // Amber
        success: '#10B981', // Green
        error: '#EF4444', // Red
        warning: '#FBBF24', // Yellow
        dark: '#1E1E2E',
        light: '#F8FAFC',
        muted: '#9CA3AF',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 6px rgba(0, 0, 0, 0.1)',
        strong: '0 6px 12px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  darkMode: 'class', // Enables dark mode
  plugins: [],
};
