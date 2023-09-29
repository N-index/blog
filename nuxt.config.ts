// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        // pageTransition: {name: 'page', mode: 'out-in'}
    },
    modules: [
        '@nuxt/content',
        '@unocss/nuxt',
        '@vueuse/nuxt',
        'dayjs-nuxt',
        '@formkit/auto-animate/nuxt',
        'nuxt-icon'
    ],
    dayjs: {
        locales: ['zh-cn', 'en',],
        plugins: ['relativeTime', 'utc', 'timezone'],
        defaultLocale: 'zh-cn',
    },
    content: {
        highlight: {
            // theme: 'synthwave-84',
            // theme: 'one-dark-pro',
            theme: 'material-theme-palenight',

        }
    }
})
