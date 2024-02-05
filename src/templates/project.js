import { SeoHead } from '../components/seo-head.js'
import { HeroTextReveal } from '../components/animations/hero-text-reveal.js'
import { graphql } from 'gatsby'
import { Section } from '../components/layout/section/section.js'
import { SectionTitle } from '../components/layout/section/section-title.js'
import { Headline } from '../components/layout/section/headline.js'
import { SectionDotTitle } from '../components/layout/section/section-dot-title.js'
import { SectionText } from '../components/layout/section/section-text.js'
import { LinkedSectionHeading } from '../components/layout/section/linked-section-heading.js'

const ProjectTemplate = ({ data }) => {
  const project = { ...data.mdx.frontmatter }
  const nextProjects = data.allMdx.nodes.map(({ id, frontmatter, fields }) => ({
    id,
    title: frontmatter.title,
    client: frontmatter.client,
    category: frontmatter.category,
    slug: fields.slug,
  }))

  return (
    <>
      <section className="pt-hero-min md:pt-hero-max">
        <h1 className="grid max-w-7xl">
          <HeroTextReveal>{ project.title }</HeroTextReveal>
        </h1>
      </section>

      <Section>
        <SectionTitle align="right">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem expedita inventore nesciunt quisquam reprehenderit!
        </SectionTitle>
        <Headline/>
        <SectionDotTitle>Durchführung</SectionDotTitle>
        <SectionText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur at beatae consequuntur eligendi excepturi incidunt minus natus officia
          totam? Accusantium ad autem blanditiis cumque, dolores doloribus eos ipsa itaque, iusto libero minima modi non nostrum, obcaecati officia quae quaerat
          quam quas reiciendis reprehenderit soluta tempore tenetur unde voluptatem voluptatibus.
        </SectionText>

        <SectionText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci est illo labore maiores modi mollitia numquam placeat quasi quis.
        </SectionText>
      </Section>

      {
        !!nextProjects.length &&
        <Section>
          <Headline/>
          <SectionDotTitle>some other projects</SectionDotTitle>
          {
            nextProjects.map(project =>
              <>
                <LinkedSectionHeading to={ `/projects${ project.slug }` }>{ project.client }</LinkedSectionHeading>
                <Headline/>
                <SectionTitle align="left">{ project.title }</SectionTitle>
              </>,
            )
          }
        </Section>
      }
    </>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        client
        date(formatString: "DD MMM. YYYY")
        category
      }
    }
    allMdx(
      sort: {frontmatter: {date: DESC}}
      filter: {
        fields: {sourceName: {eq: "projects"}}
        id:{ne:$id}
      }
      limit: 2
    ) {
      nodes {
        id
        frontmatter {
          title
          client
          date(formatString: "DD MMM. YYYY")
          category
        }
        fields {
          slug
        }
      }
    }
  }
`

export default ProjectTemplate

export const Head = ({ data }) =>
  <SeoHead title={ data.mdx.frontmatter.client.toLowerCase() }
           description={ data.mdx.frontmatter.title }/>