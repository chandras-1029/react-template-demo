const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
    i18n: {
        locales: ['en', 'ar'],
        defaultLocale: 'en',
    },
    env: {
        PUBLIC_URL: "https://chandras-1029.github.io/react-template-demo",
        assetPrefix: './'
      }
}