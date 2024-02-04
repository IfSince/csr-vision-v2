import { SeoHead } from '../components/seo-head.js'
import { Section } from '../components/layout/section/section.js'
import { SectionTitle } from '../components/layout/section/section-title.js'
import { Headline } from '../components/layout/section/headline.js'
import { SectionDotTitle } from '../components/layout/section/section-dot-title.js'
import { SectionText } from '../components/layout/section/section-text.js'
import { ImageIntro } from '../components/layout/hero/image-intro.js'
import { HeroTextReveal } from '../components/animations/hero-text-reveal.js'

const IndexPage = () => {
  return (
    <>
      <ImageIntro>
        <section className="pt-hero-min md:pt-hero-max">
          <h1 className="grid" data-scroll data-scroll-speed="0.7">
            <HeroTextReveal className="mb-[12vh] lg:mb-[8vh]">csr vision</HeroTextReveal>

            <HeroTextReveal className="justify-self-end text-accent">designing</HeroTextReveal>
            <HeroTextReveal className="justify-self-end">responsibility</HeroTextReveal>
          </h1>
        </section>
      </ImageIntro>

      <div className="grid grid-cols-layout col-full-width bg-primary">
        <Section>
          <SectionTitle>
            Wir sind davon überzeugt, dass nachhaltiges Handeln nicht nur eine Verantwortung, sondern auch eine einzigartige Chance für Unternehmen ist.
          </SectionTitle>

          <Headline/>
          <SectionDotTitle>our mission</SectionDotTitle>

          <SectionText align="right">
            Bei uns steht im Mittelpunkt, Ihnen zu helfen, Ihre Nachhaltigkeitsziele zu definieren und wirkungsvoll zu kommunizieren. Tauchen Sie ein in unsere
            Vision, in der wir gemeinsam mit Ihnen eine Brücke zwischen Ihrem Unternehmen und einer nachhaltigen Zukunft schlagen. Erfahren Sie, wie wir Ihr
            Unternehmen dabei unterstützen, nicht nur nachhaltig zu handeln, sondern auch dies auf authentische und wirkungsvolle Weise zu präsentieren.
          </SectionText>
        </Section>
      </div>
    </>
  )
}

export default IndexPage

export const Head = () => <SeoHead title="designing responsibility"
                                   description="csr vision hilft Unternehmen dabei, CSR als Chance zu begreifen. Durch Reduzierung der Komplexität, Kuratieren
                                   und crossmediale Aufbereitung verwandeln wir CSR-Berichte, die sonst nur von Analysten und Stakeholdern gelesen werden, in
                                   echtes Storytelling, das auch ihre Community und Kunden begeistern wird."/>
