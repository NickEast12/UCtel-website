require('dotenv').config({ path: '.env' });

const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `UCtel`,
    siteUrl: `https://uctel.co.uk/`,
    description: `UCtel`,
    twitter: `@UCtel_Ltd`,
    image: `/icon.png`,
  },
  plugins: [
    `gatsby-plugin-preload-fonts`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, 'images'),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Unified Communications Solutions | UCtel`,
        short_name: `UCtel`,
        description: `UCtel is a market-leading provider of unified communications and contact centre solutions to businesses across the world`,
        start_url: `/`,
        lang: `en`,
        background_color: `#2D3C41`,
        theme_color: `#278A9C`,
        display: `minimal-ui`,
        icon: `src/assets/images/UCtel-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: 'cvd7buc8',
        dataset: `production`,
        watchMode: true,
        token: process.env.SANITY_KEY,
      },
    },
    {
      resolve: `gatsby-transform-portable-text`,
      options: {
        extendTypes: [{ typeName: `SanityPost`, contentFieldName: 'body' }],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#F39118`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-36305332-1',
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-36305332-1',
          cookieName: 'gatsby-gdpr-google-analytics',
          anonymize: true,
        },
        googleTagManager: {
          trackingId: '',
          cookieName: 'gatsby-gdpr-google-tagmanager',
          dataLayerName: 'dataLayer',
        },
        facebookPixel: {
          pixelId: '',
          cookieName: 'gatsby-gdpr-facebook-pixel',
        },
        environments: ['production', 'development'],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://uctel.co.uk/',
        sitemap: 'https://uctel.co.uk/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        exclude: [
          `/dev-404-page/`,
          `/404/`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback/`,
        ],
        trailingSlashes: false,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: [
            'Gellix-Regular',
            'Gellix-Medium',
            'Gellix-Bold',
            'Gellix-SemiBold',
          ],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
  ],
};
