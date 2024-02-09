import { graphql } from 'gatsby'
import { HeroTextReveal } from '../components/animations/hero-text-reveal.js'
import { Section } from '../components/layout/section/section.js'
import { SectionTitle } from '../components/layout/section/section-title.js'
import { BlogList } from '../components/blog/blog-list.js'
import { SeoHead } from '../components/seo-head.js'
import { LinkedSectionHeading } from '../components/layout/section/linked-section-heading.js'
import { Headline } from '../components/layout/section/headline.js'

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

        <BlogList blogs={ blogs }/>
      </Section>

      <Section>
        <LinkedSectionHeading to="/contact" Type="h2">get in touch</LinkedSectionHeading>
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