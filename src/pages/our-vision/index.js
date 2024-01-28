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
          <HeroTextReveal className="pl-[1ch]">is to inspire</HeroTextReveal>
        </h1>
      </section>

      <Section>
        <Headline/>
        <SectionHeading>our mission</SectionHeading>

        <SectionTitle align="center">
          Lorem ipsum dolor sit amet, conset sadipscing elitr, sed diam nonumy eirmod tempor.
        </SectionTitle>

        <SectionText align="right">
          Our mission as a responsible and sustainable business is to positively impact our environment, our people,
          and the next generation. To ensure we are acting on this mission, we have developed a sustainability strategy
          that aligns with the UN's Sustainable Development Goals. We are commited to developing and uphoalding sustainable
          practices because we believe that the built environment Plays an important role in achieving these goals,
          and we want to encourage others within our industry to do the same.
        </SectionText>

        <SectionText align="right">
          The Autex Sustainability report details our mission and vision, our sustainability strategy, and our five sustainability pillars.
        </SectionText>
      </Section>


      <Section>
        <Headline/>
        <SectionHeading>our mission</SectionHeading>

        <SectionTitle align="left">
          Lorem ipsum dolor sit amet, conset sadipscing elitr, sed diam nonumy eirmod tempor.
        </SectionTitle>

        <SectionText align="right">
          Our mission as a responsible and sustainable business is to positively impact our environment, our people,
          and the next generation. To ensure we are acting on this mission, we have developed a sustainability strategy
          that aligns with the UN's Sustainable Development Goals. We are commited to developing and uphoalding sustainable
          practices because we believe that the built environment Plays an important role in achieving these goals,
          and we want to encourage others within our industry to do the same.
        </SectionText>

        <SectionText align="right">
          The Autex Sustainability report details our mission and vision, our sustainability strategy, and our five sustainability pillars.
        </SectionText>
      </Section>
    </>
  )
}

export default OurVisionPage

export const Head = () => <SeoHead title="our vision"/>