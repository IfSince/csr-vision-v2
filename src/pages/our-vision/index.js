import { SeoHead } from '../../components/seo-head.js'
import { HeroTextReveal } from '../../components/animations/hero-text-reveal.js'
import { Section } from '../../components/layout/section/section.js'
import { SectionTitle } from '../../components/layout/section/section-title.js'
import { SectionText } from '../../components/layout/section/section-text.js'

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
        <p className="w-fit lg:col-[content-start/span_2]">Section 2</p>

        <SectionTitle align="center">
          Lorem ipsum dolor sit amet, conset sadipscing elitr, sed diam non eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </SectionTitle>

        <SectionText align="right">
          Our mission as a responsible and sustainable business is to positively impact our environment, our people, and the next generation.
          To ensure we are acting on this mission, we have developed a sustainability strategy that aligns with the UN's Sustainable Development Goals.
          We are committed to developing and upholding sustainable practices.
        </SectionText>
      </Section>
    </>
  )
}

export default OurVisionPage

export const Head = () => <SeoHead title="our vision"/>