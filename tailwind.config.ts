import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      fontFamily: {
        oswald: ['var(--font-oswald)', 'sans-serif'],
        barlow: ['var(--font-barlow)', 'sans-serif'],
      },
      
      
      colors: {
        
        'summit': {
          'charcoal': '#1C1C1A',
          'stone': '#2A2A28',
          'ash': '#3D3D3D',
          'mist': '#8B8B7A',
          'cream': '#E8E4DD',
        },
        'ember': {
          DEFAULT: '#D2691E',
          '50': '#FDF4ED',
          '100': '#FAE5D4',
          '200': '#F5C9A8',
          '300': '#EEA76D',
          '400': '#E67F32',
          '500': '#D2691E',  
          '600': '#B85A1A',
          '700': '#8F4615',
          '800': '#6B3512',
          '900': '#4A250D',
          '950': '#2D1608',
        },
        'forest': {
          DEFAULT: '#2D5016',
          '50': '#F0F5EB',
          '100': '#DEEBD0',
          '200': '#BDD7A1',
          '300': '#96BE6B',
          '400': '#6E9E3E',
          '500': '#4E7B25',
          '600': '#2D5016',  
          '700': '#234010',
          '800': '#1A300C',
          '900': '#112008',
          '950': '#091004',
        },
      },
      
      
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      
      
      letterSpacing: {
        'tactical': '0.2em',
        'wide-tactical': '0.3em',
      },
      
      
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
      },
      
      
      backdropBlur: {
        xs: '2px',
      },
      
      
      borderRadius: {
        'sm': '2px',  
      },
    },
  },
  plugins: [],
};

export default config