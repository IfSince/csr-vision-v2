import { graphql } from 'gatsby'
import { SeoHead } from '../components/seo-head.js'

const BlogTemplate = ({ data, children }) => {
  const blog = { ...data.mdx.frontmatter }

  return (
    <>
      <section className="pt-hero-min md:pt-hero-max">
        <h1 className="grid">
          <span className="max-w-7xl mb-[10vh] hyphens-auto lg:mb-[14vh]">{ blog.title }</span>
        </h1>
      </section>

      <div className="mb-14 flex flex-wrap-reverse items-center justify-between gap-x-24 gap-y-[8vh] sm:mb-16 md:mb-20">
        <div className="flex grow font-medium lg:justify-evenly lg:text-lg">
          <div>
            <div className="text-secondary/50">von { blog.author }</div>
            <div>{ blog.publicationDate } | { blog.readingTime } min</div>
          </div>
          <div></div>
        </div>

        <p className="max-w-sm text-2xl hyphens-auto xs:hyphens-none md:max-w-lg lg:max-w-2xl 2xl:max-w-4xl">
          { blog.subTitle }
        </p>
      </div>

      { children }
    </>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        subTitle
        description
        author
        publicationDate(formatString: "DD MMM. YYYY")
        readingTime
        tableOfContents
      }
    }
  }
`

export default BlogTemplate

export const Head = ({ data }) => <SeoHead title={ `${ data.mdx.frontmatter.title.toLowerCase() }` }
                                           description={ `${ data.mdx.frontmatter.description }` }/>