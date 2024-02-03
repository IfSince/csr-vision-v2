import { SeoHead } from '../components/seo-head.js'
import { SectionText } from '../components/layout/section/section-text.js'
import { SectionTitle } from '../components/layout/section/section-title.js'
import { SectionDotTitle } from '../components/layout/section/section-dot-title.js'
import { Headline } from '../components/layout/section/headline.js'
import { Section } from '../components/layout/section/section.js'
import { HeroTextReveal } from '../components/animations/hero-text-reveal.js'

const PressPage = () => {
  return (
    <>
      <section className="pt-hero-min md:pt-hero-max">
        <h1 className="grid">
          <HeroTextReveal>press</HeroTextReveal>
        </h1>
      </section>

      <Section>
        <Headline/>
        <SectionDotTitle>TODO</SectionDotTitle>

        <SectionTitle align="center">
          Hier kommt der ganze Presse-Stuff rein, noch zu diskutieren was genau da dazu gehört.
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

export default PressPage

export const Head = () => <SeoHead title="press"/>