// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
        '@vueuse/motion/nuxt',
        '@nuxtjs/google-fonts'
    ],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    googleFonts: {
        families: {
            'Newsreader': [400, 500, 600, 700],
            'Plus Jakarta Sans': [400, 500, 600, 700]
        },
        display: 'swap',
        download: true
    },
    css: ['~/assets/css/main.css'],
    app: {
        head: {
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ]
        },
        pageTransition: { name: 'fade', mode: 'out-in' }
    },
    runtimeConfig: {
        public: {
            email: process.env.EMAIL || ''
        }
    }
})