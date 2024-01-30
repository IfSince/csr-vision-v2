import { SeoHead } from '../../components/seo-head.js'
import { HeroTextReveal } from '../../components/animations/hero-text-reveal.js'
import { Section } from '../../components/layout/section/section.js'
import { SectionTitle } from '../../components/layout/section/section-title.js'
import { SectionText } from '../../components/layout/section/section-text.js'
import { Headline } from '../../components/layout/section/headline.js'
import { SectionDotTitle } from '../../components/layout/section/section-dot-title.js'

const PrivacyPage = () => {
  return (
    <>
      <section className="pt-hero-min md:pt-hero-max">
        <h1 className="grid">
          <HeroTextReveal>privacy</HeroTextReveal>
        </h1>
      </section>

      <Section>
        <Headline/>
        <SectionDotTitle>TODO</SectionDotTitle>

        <SectionTitle align="center">
          Hier kommt unsere Datenschutzerklärung rein.
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

export default PrivacyPage

export const Head = () => <SeoHead title="privacy"/>