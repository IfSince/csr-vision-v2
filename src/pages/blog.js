import { graphql } from 'gatsby'
import { HeroTextReveal } from '../components/animations/hero-text-reveal.js'
import { Section } from '../components/layout/section/section.js'
import { SectionTitle } from '../components/layout/section/section-title.js'
import { SeoHead } from '../components/seo-head.js'
import { LinkedSectionHeading } from '../components/layout/section/linked-section-heading.js'
import { Headline } from '../components/layout/section/headline.js'
import { TableRow } from '../components/common/table/table-row.js'

const BlogPage = ({ data }) => {
  const blogs = data.allMdx.nodes.map(({ id, frontmatter, fields }) => ({
    id,
    title: frontmatter.title,
    publicationDate: frontmatter.publicationDate,
    slug: fields.slug,
  }))

  return (
    <>
      <section className="pt-hero-min md:pt-hero-max">
        <h1 className="grid">
          <HeroTextReveal>our blog</HeroTextReveal>
        </h1>
      </section>

      <Section>
        <SectionTitle>
          Wir liefern inspirirende Einblicke in alle Themen rundum Nachhaltigkeit und CSR.
        </SectionTitle>

        <ul className="grid grid-cols-layout col-full-width">
          {
            blogs.map(({ slug, title, publicationDate, id }) =>
              <TableRow to={ `/blog${ slug }` }
                        title={ title }
                        addition={ publicationDate }
                        key={ id }/>,
            )
          }
        </ul>
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
    allMdx(
      filter: {fields: {sourceName: {eq: "blogs"}}}
      sort: {frontmatter: {publicationDate: DESC}}
    ) {
      nodes {
        id
        frontmatter {
          title
          publicationDate(formatString: "DD.MM.YYYY")
        }
        fields {
          slug
        }
      }
    }
  }
`

export default BlogPage

export const Head = () => <SeoHead title="blog"
                                   description="Wir teilen nicht nur Neuigkeiten und Trends, sondern auch Geschichten und Erfahrungen aus der Welt der Nachhaltigkeit, die zum Nachdenken anregen und inspirieren."/>