import { graphql } from 'gatsby'
import { HeroTextReveal } from '../components/animations/hero-text-reveal.js'
import { Section } from '../components/layout/section/section.js'
import { Headline } from '../components/layout/section/headline.js'
import { SectionDotTitle } from '../components/layout/section/section-dot-title.js'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { SeoHead } from '../components/seo-head.js'

const TeamMemberTemplate = ({ data, children }) => {
  const teamMember = { ...data.mdx.frontmatter, image: getImage(data.mdx.frontmatter.image) }

  return (
    <>
      <section className="pt-hero-min md:pt-hero-max">
        <h1 className="grid">
          {/* <HeroTextReveal className="mb-[12vh] lg:mb-[8vh]">{ teamMember.role }</HeroTextReveal> */ }
          <HeroTextReveal>{ teamMember.role }</HeroTextReveal>
          <span className="mb-[12vh] lg:mb-[8vh]"></span>

          <div className="flex items-end justify-between">
            <GatsbyImage className="rounded-md h-[2.5em] w-[2.5em] ml-[1ch] mb-[0.5em]"
                         alt={ teamMember.name }
                         image={ teamMember.image }/>

            <span className="*:block">
              <HeroTextReveal>{ teamMember.firstName }</HeroTextReveal>
              <HeroTextReveal>{ teamMember.lastName }</HeroTextReveal>
            </span>
          </div>

          {/* <span className="justify-self-end *:block"> */ }
          {/*    */ }
          {/* </span> */ }
        </h1>
      </section>

      <Section>
        <Headline/>
        <SectionDotTitle>Biografie</SectionDotTitle>

        { children }
      </Section>

    </>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        name
        firstName
        lastName
        role
        skills
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default TeamMemberTemplate

export const Head = ({ data }) => <SeoHead title={ `${ data.mdx.frontmatter.name.toLowerCase() }` }/>