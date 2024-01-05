/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'csr-vision-v2',
    description: 'csr vision hilft Unternehmen dabei, CSR als Chance zu begreifen. Durch Reduzierung der Komplexität, Kuratieren und crossmediale Aufbereitung verwandeln wir CSR-Berichte, die sonst nur von Analysten und Stakeholdern gelesen werden, in echtes Storytelling, das auch ihre Community und Kunden begeistern wird.',
    author: 'Leon Laade',
    siteUrl: `https://csr.vision`,
    keywords: 'Design, Nachhaltigkeit, Komplexitätsreduktion',
  },
  jsxRuntime: 'automatic',
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
  ],
}