import type { Config } from 'tailwindcss'

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#131313',
          dim: '#131313',
          bright: '#393939',
          container: {
            lowest: '#0e0e0e',
            low: '#1c1b1b',
            DEFAULT: '#20201f',
            high: '#2a2a2a',
            highest: '#353535',
          },
          elevated: '#262626',
          variant: '#353535',
          tint: '#adc6ff',
        },
        primary: {
          DEFAULT: '#adc6ff',
          container: '#4d8eff',
          fixed: {
            DEFAULT: '#d8e2ff',
            dim: '#adc6ff',
            variant: '#004395',
          }
        },
        secondary: {
          DEFAULT: '#d0bcff',
          container: '#571bc1',
          fixed: {
            DEFAULT: '#e9ddff',
            dim: '#d0bcff',
            variant: '#5516be',
          }
        },
        tertiary: {
          DEFAULT: '#ffb786',
          container: '#df7412',
          fixed: {
            DEFAULT: '#ffdcc6',
            dim: '#ffb786',
            variant: '#723600',
          }
        },
        error: {
          DEFAULT: '#ffb4ab',
          container: '#93000a',
        },
        on: {
          surface: {
            DEFAULT: '#e5e2e1',
            variant: '#c2c6d6',
          },
          primary: {
            DEFAULT: '#002e6a',
            container: '#00285d',
            fixed: '#001a42',
          },
          secondary: {
            DEFAULT: '#3c0091',
            container: '#c4abff',
            fixed: '#23005c',
          },
          tertiary: {
            DEFAULT: '#502400',
            container: '#461f00',
            fixed: '#311400',
          },
          error: {
            DEFAULT: '#690005',
            container: '#ffdad6',
          },
          background: '#e5e2e1',
        },
        inverse: {
          surface: '#e5e2e1',
          onSurface: '#313030',
          primary: '#005ac2',
        },
        outline: {
          DEFAULT: '#8c909f',
          variant: '#424754',
        },
        background: '#131313',
        slate: {
          text: '#94A3B8',
        },
        glass: {
          fill: 'rgba(26, 26, 26, 0.6)',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        unit: '8px',
        gutter: '24px',
        'margin-mobile': '16px',
        'margin-desktop': '48px',
      },
      maxWidth: {
        'container-max': '1200px',
      },
      borderRadius: {
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      }
    },
  },
  plugins: [],
} satisfies Config
