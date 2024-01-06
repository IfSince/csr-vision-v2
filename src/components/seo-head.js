import { useMetadata } from '../hooks/use-metadata.js'

export const SeoHead = ({ title, description, pathname }) => {
  const metadata = useMetadata()

  const seo = {
    title: title ? `${ metadata.title } - ${ title }` : metadata.title,
    description: description ?? metadata.description,
    url: `${ metadata.siteUrl }${ pathname || '' }`,
  }

  return (
    <>
      <html lang="de"/>
      <meta charSet="UTF-8"/>
      <title>{ seo.title }</title>
      <meta name="description" content={ seo.description }/>
      <meta name="keywords" content={ metadata.keywords }/>
      <meta name="image" content={ metadata.image }/>
      <link rel="canonical" href={ seo.url }/>

      <meta property="og:title" content={ seo.title }/>
      <meta property="og:description" content={ seo.description }/>
      <meta property="og:image" content={ metadata.image }/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={ seo.url }/>
      <meta property="og:site_name" content={ metadata.title }/>

      <meta name="twitter:title" content={ seo.title }/>
      <meta name="twitter:url" content={ seo.url }/>
      <meta name="twitter:description" content={ seo.description }/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:image" content={ metadata.image }/>
    </>
  )
}