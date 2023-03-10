// https://nuxt.com/docs/api/configuration/nuxt-config
const baseUrl = process.env.NUXT_APP_BASE_URL || '/'

export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {lang: 'en'},
            title: 'The Culture',
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                {
                    name: 'description',
                    content: 'The Culture is a weekly conversation show focusing on film, music, TV, streaming, books and art.'
                },
                {property: 'og:type', content: 'website'},
                {property: 'og:title', content: 'The Culture'},
                {
                    property: 'og:description',
                    content: 'The Culture is a weekly conversation show focusing on film, music, TV, streaming, books and art.'
                },
                {property: 'og:image', content: '/the-culture.jpg'},
                {name: 'twitter:card', content: 'summary_large_image'},
                {name: 'twitter:title', content: 'The Culture'},
                {name: 'twitter:image', content: '/the-culture.jpg'}
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
                {rel: 'icon', type: 'image/png', href: '/favicon.png'}
            ],
        },
    },
    css: ['~/assets/styles/main.scss'],
    modules: [
        '@pinia/nuxt',
    ],
    // Non SSR is faster for Dev
    ssr: process.env.NODE_ENV !== 'development',
    nitro: {
        minify: process.env.NODE_ENV !== 'development',
    },
    postcss: {
        plugins: {
            autoprefixer: {},
        },
    },
})
