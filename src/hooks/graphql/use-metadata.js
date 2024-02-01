import { graphql, useStaticQuery } from 'gatsby'

export const useMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          image
          keywords
        }
      }
    }
  `)

  return site.siteMetadata
}