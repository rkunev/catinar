module.exports = {
    head: {
        title: 'Catinar',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Android Nougat 7 Easter Egg Clone' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        htmlAttrs: {
            lang: 'en-US',
        }
    },

    loading: { color: '#16274a' },
    transition: 'page',

    plugins: [
        { src: '~/plugins/waves.js', ssr: false },
    ],
};
