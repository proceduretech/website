const { siteMetaData } = require('./site-metadata')

module.exports = {
  siteMetadata: siteMetaData,
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    'gatsby-plugin-dark-mode',
    {
      resolve: 'gatsby-plugin-drift',
      options: {
        appId: 'h24e4kpuyms4'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-112638181-1',
        head: true,
        cookieDomain: 'procedure.tech'
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true
      }
    }
  ]
}
