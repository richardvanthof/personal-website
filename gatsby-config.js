module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'The Richard Space',
    description: 'Pesonal internet space Richard',
    author: "Richard van 't Hof",
    phone: '+31 6 41219554',
    email: 'hello@therichard.space',
    github: 'https://www.github.com/RichART-Official',
    linkedin: 'https://www.linkedin.com/in/richard-van-t-hof/',
    behance: 'https://www.behance.net/therichartspace',
    siteUrl: `https://www.therichard.space`,
    repo: 'https://www.github.com/RichART-Official/therichart.space',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/static/img`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'work',
        path: `${__dirname}/src/content/projects`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
      // Apply gatsby-mdx to both .mdx and .md files
        extensions: ['.mdx', '.md'],
        defaultQuality: 100,
        maxWidth: 4000,
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 4000,
              defaultQuality: 100,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-background-image',
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-transition-link',
    'gatsby-image',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/static/trademarks/favicon.svg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options here
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('node-sass'),
      },
    },
    {
      resolve: 'gatsby-plugin-hotjar',
      options: {
        id: 1501492,
        sv: 6
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};