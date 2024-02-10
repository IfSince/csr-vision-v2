import { graphql } from 'gatsby'
import { SeoHead } from '../components/seo-head.js'
import { IconButton } from '../components/common/button/icon-button.js'
import { List } from '../svg/icons/list.js'
import { AnimatePresence, m, useCycle } from 'framer-motion'
import { Close } from '../svg/icons/menu/close.js'
import { TableOfContents } from '../components/blog/table-of-contents.js'
import { HeroTextRevealHyphens } from '../components/animations/hero-text-reveal-hyphens.js'
import { scrollRevealAnimation } from '../animation.config.js'
import { Section } from '../components/layout/section/section.js'
import { Headline } from '../components/layout/section/headline.js'
import { getImage } from 'gatsby-plugin-image'
import { AuthorBox } from '../components/blog/author-box.js'
import { LinkedSectionHeading } from '../components/layout/section/linked-section-heading.js'
import { SectionTitle } from '../components/layout/section/section-title.js'

const BlogTemplate = ({ data, children }) => {
  const blog = { ...data.mdx.frontmatter }

  const author = {
    ...{ ...data.allMdx.nodes[0].frontmatter },
    ...{ ...data.allMdx.nodes[0].fields },
    image: getImage(data.allMdx.nodes[0].frontmatter.image),
  }

  const [tableOfContentsVisible, toggleTableOfContents] = useCycle(false, true)

  return (
    <>
      <section className="pt-hero-min md:pt-hero-max">
        <h1 className="max-w-7xl">
          <HeroTextRevealHyphens className="mb-[10vh] hyphens-auto lg:mb-[14vh]">
            { blog.title }
          </HeroTextRevealHyphens>
        </h1>
      </section>

      <div className="mb-14 flex flex-wrap-reverse items-center justify-between gap-x-24 gap-y-[8vh] sm:mb-16 md:mb-20">
        <div className="flex grow font-medium lg:justify-evenly lg:text-lg">
          <m.div { ...scrollRevealAnimation(0.3) }>
            <div className="text-secondary/50">von { blog.author }</div>
            <div>{ blog.publicationDate } | { blog.readingTime } min</div>
          </m.div>
          <div></div>
        </div>

        <m.h2 className="max-w-sm text-2xl hyphens-auto xs:hyphens-none md:max-w-lg lg:max-w-2xl 2xl:max-w-4xl"
              { ...scrollRevealAnimation(0.3) }>
          { blog.subTitle }
        </m.h2>
      </div>

      <div className="z-[1000] fixed bottom-10 4xl:bottom-16 left-[var(--horizontal-spacing)]">
        <IconButton onClick={ toggleTableOfContents } description={ !tableOfContentsVisible ? 'Inhaltsverzeichnis anzeigen' : 'Inhaltsverzeichnis ausblenden' }>
          { !tableOfContentsVisible ? <List className="h-8 fill-primary"/> : <Close className="h-4 4xl:h-[1.125rem]"/> }
        </IconButton>
      </div>
      <AnimatePresence mode="wait">
        { tableOfContentsVisible && <TableOfContents tableOfContents={ blog.tableOfContents }
                                                     toggleTableOfContents={ toggleTableOfContents }/> }
      </AnimatePresence>

      { children }

      <Section>
        <LinkedSectionHeading Type="h2" to={ `/our-team${ author.slug }` }>the author</LinkedSectionHeading>
        <Headline/>
        <AuthorBox { ...author }/>
      </Section>

      <Section>
        <LinkedSectionHeading to="/contact" Type="h2" mobileDescription="Kontakt aufnehmen">get in touch</LinkedSectionHeading>
        <Headline/>
        <SectionTitle align="center">Mit deinem Report gestalten wir gemeinsam den Weg zur Nachhaltigkeit.</SectionTitle>
      </Section>
    </>
  )
}

export const query = graphql`
  query ($id: String, $author: String) {
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
    allMdx(
      filter: {
        fields: {sourceName: {eq: "team-members"}}
        frontmatter:{name:{eq:$author}}
      },
      limit: 1
    ) {
      nodes {
        id
        frontmatter {
          name
          role
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          metaDescription
        }
        excerpt
        fields {
          slug
        }
      }
    }
  }
`

export default BlogTemplate

export const Head = ({ data }) => <SeoHead title={ data.mdx.frontmatter.title.toLowerCase() }
                                           description={ data.mdx.frontmatter.description }/>