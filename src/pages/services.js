import { graphql } from 'gatsby'
import { SeoHead } from '../components/seo-head.js'
import { Service } from '../components/services/service.js'
import { Section } from '../components/layout/section/section.js'
import { SectionText } from '../components/layout/section/section-text.js'
import { SectionTitle } from '../components/layout/section/section-title.js'
import { SectionDotTitle } from '../components/layout/section/section-dot-title.js'
import { Headline } from '../components/layout/section/headline.js'
import { HeroTextReveal } from '../components/animations/hero-text-reveal.js'

const ServicesPage = ({ data }) => {
  const services = data.allMdx.nodes.map(({ id, frontmatter, fields }) => ({
    id,
    title: frontmatter.title,
    icon: fields.slug.replace(/\//g, ''),
    description: frontmatter.description,
    slug: fields.slug,
  }))

  return (
    <>
      <section className="pt-hero-min md:pt-hero-max">
        <h1 className="grid">
          <HeroTextReveal>we <span className="text-accent">excel</span> in</HeroTextReveal>
          <HeroTextReveal className="pl-[2ch] mb-[12vh] lg:mb-[8vh]">what</HeroTextReveal>

          <span className="justify-self-end *:block">
            <HeroTextReveal>we do</HeroTextReveal>
            <HeroTextReveal className="pl-[1ch]">the <span className="text-accent">best</span></HeroTextReveal>
          </span>
        </h1>
      </section>

      <Section>
        <Headline/>
        <SectionDotTitle>our services</SectionDotTitle>

        <SectionTitle align="center">
          Entdecken Sie unsere Dienstleistungen im Bereich Nachhaltigkeit und CSR-Beratung.
          Unsere Expertise umfasst Lösungen, die auf Ihre individuellen Bedürfnisse zugeschnitten sind.
        </SectionTitle>

        <SectionText align="right">
          Von der Entwicklung umfassender Nachhaltigkeitsstrategien bis hin zur Implementierung konkreter Maßnahmen unterstützen wir Unternehmen dabei, ihre
          Verantwortung gegenüber der Umwelt und der Gesellschaft zu erfüllen.
        </SectionText>

        <SectionText align="right">
          Unsere Dienstleistungen umfassen unter anderem die Analyse und Bewertung von CSR-Risiken und -Chancen, die Entwicklung von Nachhaltigkeitsberichten
          und die Integration von Nachhaltigkeitsaspekten in das Kerngeschäft. Mit einem ganzheitlichen Ansatz wir unseren Kunden, langfristigen Wert zu
          schaffen und sich als verantwortungsbewusste und zukunftsorientierte Unternehmen zu positionieren.
        </SectionText>
      </Section>

      <Section>
        {
          services.map(service => <Service { ...service } key={ service.id }/>)
        }
      </Section>
    </>
  )
}

export const query = graphql`
  query {
    allMdx(filter: {fields: {sourceName: {eq: "services"}}}) {
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

export default ServicesPage

export const Head = () => <SeoHead title="our services"
                                   description="Entdecken Sie unsere Dienstleistungen im Bereich Nachhaltigkeit und CSR-Beratung. Unsere Expertise umfasst
                                   Lösungen, die auf Ihre individuellen Bedürfnisse zugeschnitten sind."/>