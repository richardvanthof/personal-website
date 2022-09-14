module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'The Richard Space',
    description: 'Pesonal internet space Richard',
    author: "Richard van 't Hof",
    phone: '+31 6 41219554',
    email: 'hello@therichard.space',
    adress: {
      street: 'Weg en Bos',
      number: '9e',
      zipCode: '2661DG',
      city: 'Bergschenhoek',
      country: 'Netherlands',
    },
    pgp: 'https://pgp.key-server.io/download/0x1817B960BB405C71',
    github: 'https://www.github.com/RichART-Official',
    linkedin: 'https://www.linkedin.com/in/richard-van-t-hof/',
    behance: 'https://www.behance.net/therichartspace',
    bno: 'https://www.bno.nl/partners/richard-van-t-hof-19691',
    siteUrl: 'https://www.therichard.space',
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
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/static/icons`,
        },
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
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/draft/*'],
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        quality: 90,
        webpQuality: 90,
        pngQuality: 90,
        jpegQuality: 90,
        maxWidth: 2500,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.therichard.space',
        sitemap: 'https://www.therichard.space/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
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
              withWebp: true,

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
        name: 'The Richard Space',
        short_name: 'Richard Space',
        start_url: '/',
        background_color: '#F6F6F6',
        theme_color: '#D2D7EA',
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
        sv: 6,
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