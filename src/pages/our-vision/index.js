import { HeroLayout } from '../../components/layout/hero/hero-layout.js'
import { HeroTextReveal } from '../../components/animations/hero-text-reveal.js'
import { SeoHead } from '../../components/seo-head.js'
import { SectionReversed } from '../../components/layout/titled-section/section-reversed.js'
import { Section } from '../../components/layout/titled-section/section.js'

const OurVisionPage = () => {
  return (
    <>
      <HeroLayout>
        <span className="text-heading-1">
          <HeroTextReveal>our vision</HeroTextReveal>
          <HeroTextReveal className="pl-[1ch]">is to inspire</HeroTextReveal>
        </span>
      </HeroLayout>

      <SectionReversed
        title="Lorem ipsum dolor sit amet, conset sadipscing elitr, sed diam non eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.">
      </SectionReversed>

      <Section
        title="Lorem ipsum dolor sit amet, conset sadipscing elitr, sed diam non eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.">
      </Section>

      <Section
        title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.">
      </Section>

    </>
  )
}

export default OurVisionPage

export const Head = () => <SeoHead title="our vision"/>