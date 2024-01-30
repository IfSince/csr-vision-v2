import { SeoHead } from '../../components/seo-head.js'
import { HeroTextReveal } from '../../components/animations/hero-text-reveal.js'
import { Section } from '../../components/layout/section/section.js'
import { SectionTitle } from '../../components/layout/section/section-title.js'
import { SectionText } from '../../components/layout/section/section-text.js'
import { Headline } from '../../components/layout/section/headline.js'
import { SectionHeading } from '../../components/layout/section/section-heading.js'

const OurVisionPage = () => {
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
        <SectionHeading>our mission</SectionHeading>

        <SectionTitle align="center">
          Nachhaltiges Handeln ist nicht nur eine Verantwortung, sondern eine einzigartige Chance für Unternehmen.
        </SectionTitle>

        <SectionText align="right">
          Unsere Vision bei csr vision liegt darin, Unternehmen dabei zu unterstützen, ihre Nachhaltigkeitsbemühungen durch hochwertiges Marketing und
          Kommunikation effektiv zu präsentieren. Unser Ziel ist es, Unternehmen zu ermächtigen, ihre nachhaltigen Praktiken und Werte auf authentische Weise
          hervorzuheben und ihre Botschaften mit einer breiten Zielgruppe zu teilen.
          Indem wir die Kraft von Marketing und Kommunikation nutzen, streben wir danach, eine Welt zu schaffen, in der Nachhaltigkeit nicht nur eine Handlung,
          sondern auch eine Geschichte ist, die erzählt werden muss.
        </SectionText>

        <SectionText align="right">
          Indem wir die Kraft von Marketing und Kommunikation nutzen, streben wir danach, eine Welt zu schaffen, in der Nachhaltigkeit nicht nur eine Handlung,
          sondern auch eine Geschichte ist, die erzählt werden muss.
        </SectionText>
      </Section>
    </>
  )
}

export default OurVisionPage

export const Head = () => <SeoHead title="our vision"/>