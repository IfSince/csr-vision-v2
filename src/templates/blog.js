import { graphql } from 'gatsby'
import { SeoHead } from '../components/seo-head.js'
import { IconButton } from '../components/common/button/icon-button.js'
import { List } from '../svg/icons/list.js'
import { AnimatePresence, useCycle } from 'framer-motion'
import { Close } from '../svg/icons/menu/close.js'
import { TableOfContents } from '../components/blog/table-of-contents.js'

const BlogTemplate = ({ data, children }) => {
  const blog = { ...data.mdx.frontmatter }

  const [tableOfContentsVisible, toggleTableOfContents] = useCycle(false, true)

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

      <div className="z-[1000] fixed bottom-10 4xl:bottom-16 left-[var(--horizontal-spacing)]">
        <IconButton onClick={ toggleTableOfContents }>
          { !tableOfContentsVisible ? <List className="h-8 fill-primary"/> : <Close className="h-4 4xl:h-[1.125rem]"/> }
        </IconButton>
      </div>
      <AnimatePresence mode="wait">
        { tableOfContentsVisible && <TableOfContents tableOfContents={ blog.tableOfContents }
                                                     toggleTableOfContents={ toggleTableOfContents }/> }
      </AnimatePresence>

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