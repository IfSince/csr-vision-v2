import { SeoHead } from '../../components/seo-head.js'
import { HeroTextReveal } from '../../components/animations/hero-text-reveal.js'
import { Section } from '../../components/layout/section/section.js'
import { Headline } from '../../components/layout/section/headline.js'
import { SectionHeading } from '../../components/layout/section/section-heading.js'
import { SectionTitle } from '../../components/layout/section/section-title.js'
import { SectionText } from '../../components/layout/section/section-text.js'

const ServicesPage = () => {
  return (
    <>
      <section className="pt-hero-min md:pt-hero-max">
        <h1 className="grid">
          <HeroTextReveal>services</HeroTextReveal>
        </h1>
      </section>

      <Section>
        <Headline/>
        <SectionHeading>TODO</SectionHeading>

        <SectionTitle align="center">
          Hier kommen unsere Services rein.
        </SectionTitle>

        <SectionText align="right">
          Our mission as a responsible and sustainable business is to positively impact our environment, our people,
          and the next generation. To ensure we are acting on this mission, we have developed a sustainability strategy
          that aligns with the UN's Sustainable Development Goals. We are commited to developing and uphoalding sustainable
          practices because we believe that the built environment Plays an important role in achieving these goals,
          and we want to encourage others within our industry to do the same.
        </SectionText>
      </Section>
    </>
  )
}

export default ServicesPage

export const Head = () => <SeoHead title="our services"/>