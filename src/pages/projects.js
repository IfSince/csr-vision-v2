import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { SeoHead } from '../components/seo-head.js'
import { ProjectList } from '../components/projects/project-list.js'
import { SectionTitle } from '../components/layout/section/section-title.js'
import { Section } from '../components/layout/section/section.js'
import { HeroTextReveal } from '../components/animations/hero-text-reveal.js'
import { LinkedSectionHeading } from '../components/layout/section/linked-section-heading.js'
import { Headline } from '../components/layout/section/headline.js'

const ProjectsPage = ({ data }) => {
  const projects = data.allMdx.nodes.map(({ id, frontmatter, fields }) => ({
    id,
    slug: fields.slug,
    title: frontmatter.title,
    category: frontmatter.category,
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

      <Section>
        <LinkedSectionHeading to="/contact" Type="h2" mobileDescription="Kontakt aufnehmen">get in touch</LinkedSectionHeading>
        <Headline/>
        <SectionTitle align="center">Mit deinem Report gestalten wir gemeinsam den Weg zur Nachhaltigkeit.</SectionTitle>
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

export const Head = () => <SeoHead title="our projects"
                                   description="Tauchen Sie ein in unsere Welt des Designs die unsere Expertise in den Bereichen Grafikdesign, Webdesign,
                                   Branding und mehr demonstrieren."/>