import { SeoHead } from '../../components/seo-head.js'
import { HeroTextReveal } from '../../components/animations/hero-text-reveal.js'
import { Section } from '../../components/layout/section/section.js'
import { SectionTitle } from '../../components/layout/section/section-title.js'
import { SectionText } from '../../components/layout/section/section-text.js'
import { Headline } from '../../components/layout/section/headline.js'
import { SectionDotTitle } from '../../components/layout/section/section-dot-title.js'
import { SectionHeading } from '../../components/layout/section/section-heading.js'
import { BenefitsList } from '../../components/our-vision/benefits-list.js'
import { graphql } from 'gatsby'
import { FeaturedInternalLinkSection } from '../../components/layout/section/featured-internal-link-section.js'

const OurVisionPage = ({ data }) => {
  const benefits = data.allMdx.nodes.map(({ id, frontmatter, fields }) => ({
    id,
    title: frontmatter.title,
    icon: fields.slug.replace(/\//g, ''),
    description: frontmatter.description,
  }))

  return (
    <>
      <section className="pt-hero-min md:pt-hero-max">
        <h1 className="grid">
          <HeroTextReveal>our vision</HeroTextReveal>
          <HeroTextReveal className="pl-[1ch]">is to <span className="text-accent">inspire</span></HeroTextReveal>
        </h1>
      </section>

      <Section>
        <Headline/>
        <SectionDotTitle>our mission</SectionDotTitle>

        <SectionTitle align="center">
          Nachhaltiges Handeln ist nicht nur eine Verantwortung, sondern eine einzigartige Chance für Unternehmen.
        </SectionTitle>

        <SectionText align="right">
          Unsere Vision liegt darin, Unternehmen dabei zu unterstützen, ihre Nachhaltigkeitsbemühungen durch hochwertiges Marketing und
          Kommunikation effektiv zu präsentieren. Unser Ziel ist es, Unternehmen zu ermächtigen, ihre nachhaltigen Praktiken und Werte auf authentische Weise
          hervorzuheben und ihre Botschaften mit einer breiten Zielgruppe zu teilen.
        </SectionText>

        <SectionText align="right">
          Indem wir die Kraft von Marketing und Kommunikation nutzen, streben wir danach, eine Welt zu schaffen, in der Nachhaltigkeit nicht nur eine Handlung,
          sondern auch eine Geschichte ist, die erzählt werden muss.
        </SectionText>
      </Section>

      <Section>
        <SectionHeading>benefits of csr</SectionHeading>
        <Headline/>
        <SectionTitle align="right">
          Durch die Integration von CSR in die DNA ihrer Kommunikation eröffnen sich diverse neue Möglichkeiten.
        </SectionTitle>
        <BenefitsList benefits={ benefits }/>
      </Section>

      <FeaturedInternalLinkSection>
        our services
      </FeaturedInternalLinkSection>
    </>
  )
}

export const query = graphql`
  query {
    allMdx(filter: {fields: {sourceName: {eq: "benefits"}}}) {
      nodes {
        id
        frontmatter {
          title
          description
        }
        fields {
          slug
        }
      }
    }
  }
`

export default OurVisionPage

export const Head = () => <SeoHead title="our vision"/>