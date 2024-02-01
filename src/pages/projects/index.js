import { SeoHead } from '../../components/seo-head.js'
import { HeroTextReveal } from '../../components/animations/hero-text-reveal.js'
import { ProjectList } from '../../components/projects/project-list.js'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { Section } from '../../components/layout/section/section.js'
import { SectionTitle } from '../../components/layout/section/section-title.js'

const ProjectsPage = ({ data }) => {
  const projects = data.allMdx.nodes.map(({ id, frontmatter, fields }) => ({
    id,
    slug: fields.slug,
    title: frontmatter.title,
    category: frontmatter.category,
    image_alt: frontmatter.image_alt,
    image: getImage(frontmatter.image),
  }))

  return (
    <>
      <section className="pt-hero-min md:pt-hero-max">
        <h1 className="grid">
          <HeroTextReveal>take a look</HeroTextReveal>
          <HeroTextReveal className="pl-[2ch] mb-[12vh] lg:mb-[8vh]">at our</HeroTextReveal>

          <span className="justify-self-end *:block">
            <HeroTextReveal className="text-accent">sustainable</HeroTextReveal>
            <HeroTextReveal className="pl-[1ch]">projects</HeroTextReveal>
          </span>
        </h1>
      </section>

      <Section>
        <SectionTitle>
          Tauchen Sie ein in unsere Welt des Designs die unsere Expertise in den Bereichen Grafikdesign, Webdesign, Branding und mehr demonstrieren.
        </SectionTitle>
        <ProjectList projects={ projects }/>
      </Section>
    </>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}} filter: {fields: {sourceName: {eq: "projects"}}}) {
      nodes {
        id
        frontmatter {
          title
          category
          image_alt
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`

export default ProjectsPage

export const Head = () => <SeoHead title="our projects"/>