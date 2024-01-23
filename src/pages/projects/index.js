import { SeoHead } from '../../components/seo-head.js'
import { HeroLayout } from '../../components/layout/hero/hero-layout.js'
import { HeroTextReveal } from '../../components/animations/hero-text-reveal.js'
import { ProjectList } from '../../components/projects/project-list.js'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { Section } from '../../components/layout/titled-section/section.js'

const ProjectsPage = ({ data }) => {
  const projects = data.allMdx.nodes.map(({ id, frontmatter }) => ({
    id,
    slug: frontmatter.slug,
    title: frontmatter.title,
    category: frontmatter.category,
    image_alt: frontmatter.image_alt,
    image: getImage(frontmatter.image),
  }))

  return (
    <>
      <HeroLayout>
          <span className="text-heading-1">
            <HeroTextReveal>take a look</HeroTextReveal>
            <HeroTextReveal className="pl-[2ch]">at our</HeroTextReveal>
          </span>

        <span className="flex justify-end text-heading-1">
          <span>
            <HeroTextReveal className="text-accent">sustainable</HeroTextReveal>
            <HeroTextReveal className="pl-[1ch]">projects</HeroTextReveal>
          </span>
        </span>
      </HeroLayout>

      <Section
        title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.">
        <ProjectList projects={ projects }/>
      </Section>
    </>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        id
        frontmatter {
          slug
          title
          category
          image_alt
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage

export const Head = () => <SeoHead title="our projects"/>