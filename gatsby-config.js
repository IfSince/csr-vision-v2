const { theme } = require('./tailwind.config.js')

const metadata = {
  title: 'csr vision',
  description: 'csr vision hilft Unternehmen dabei, CSR als Chance zu begreifen. Durch Reduzierung der Komplexität, Kuratieren und crossmediale Aufbereitung verwandeln wir CSR-Berichte, die sonst nur von Analysten und Stakeholdern gelesen werden, in echtes Storytelling, das auch ihre Community und Kunden begeistern wird.',
  url: 'https://csr.vision/',
  icon: 'src/images/icon.svg',
}

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = metadata.url,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env

const siteUrl = NETLIFY_ENV === 'production' ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

const DATA_FOLDER = `${ __dirname }/data`

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: metadata.title,
    description: metadata.description,
    author: 'Leon Laade',
    siteUrl: siteUrl,
    image: metadata.icon,
    keywords: 'Design, Nachhaltigkeit, Komplexitätsreduktion',
  },
  flags: {
    DEV_SSR: true,
  },
  jsxRuntime: 'automatic',
  plugins: [
    'gatsby-adapter-netlify',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: {
          lg: '(max-width: 1024px)',
        },
      },
    },
    /* ---------- File System ---------- */
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${ DATA_FOLDER }/projects`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'benefits',
        path: `${ DATA_FOLDER }/benefits`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'services',
        path: `${ DATA_FOLDER }/services`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'team-members',
        path: `${ DATA_FOLDER }/team-members`,
      },
    },

    /* ---------- PWA ---------- */
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: metadata.title,
        short_name: metadata.title,
        description: metadata.description,
        start_url: '/',
        background_color: theme.colors.green['800'],
        theme_color: theme.colors.green['800'],
        display: 'standalone',
        icon: metadata.icon,
      },
    },

    /* ---------- SEO ---------- */
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
  ],
}