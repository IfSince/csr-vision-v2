import { SeoHead } from '../components/seo-head.js'
import { Section } from '../components/layout/section/section.js'
import { SectionText } from '../components/layout/section/section-text.js'
import { ImageIntro } from '../components/layout/hero/image-intro.js'
import { HeroTextReveal } from '../components/animations/hero-text-reveal.js'
import { ZoomParallax } from '../components/index/zoom-parallax.js'
import { Headline } from '../components/layout/section/headline.js'
import { SectionDotTitle } from '../components/layout/section/section-dot-title.js'
import { SectionTitle } from '../components/layout/section/section-title.js'
import { LinkedSectionHeading } from '../components/layout/section/linked-section-heading.js'
import { StaticImage } from 'gatsby-plugin-image'
import { ImageGallery } from '../components/layout/section/image-gallery.js'
import { useIsMobile } from '../hooks/use-is-mobile.js'

const IndexPage = () => {
  const isMobile = useIsMobile()

  // TODO load last x projects and their first two (?) images instead of dummy images
  const images = [
    {
      src: '',
      image: <StaticImage src="../images/background.png" alt="test" className="h-full w-full"/>,
      size: 'sm',
    },
    {
      src: '',
      image: <StaticImage src="../images/background.png" alt="test" className="h-full w-full"/>,
      size: 'lg',
    },
  ]

  const images2 = [
    {
      src: '',
      image: <StaticImage src="../images/background.png" alt="test" className="h-full w-full"/>,
      size: 'md',
    },
    {
      src: '',
      image: <StaticImage src="../images/background.png" alt="test" className="h-full w-full"/>,
      size: 'sm',
    },
  ]

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
          <SectionText align="left">
            csr vision hilft Unternehmen dabei, CSR als Chance zu begreifen. Durch Reduzierung der Komplexität, Kuratieren und crossmediale Aufbereitung
            verwandeln wir CSR-Berichte, die sonst nur von Analysten und Stakeholdern gelesen werden, in echtes Storytelling, das auch ihre Community und Kunden
            begeistern wird.
          </SectionText>
        </Section>

        <Section>
          <Headline/>
          <SectionDotTitle>our vision</SectionDotTitle>
          <SectionTitle align="center">CSR als Chance begreifen und in die DNA ihrer Kommunikation integrieren</SectionTitle>
          <SectionText align="right">
            Our mission as a responsible and sustainable business is to positively impact our environment, our people, and the next generation. To ensure we are
            acting on this mission, we have developed a sustainability strategy that aligns with the UN's Sustainable Development Goals. We are commited to
            developing and uphoalding sustainable practices because we believe that the built environment Plays an important role in achieving these goals, and
            we want to encourage others within our Industry to do the same.
          </SectionText>

          <SectionText align="right">
            The Autex Sustainability report details our mission and vision, our sustainability strategy, and our five sustainability pillars.
          </SectionText>
        </Section>

        <Section>
          <Headline/>
          <SectionDotTitle>recent work</SectionDotTitle>
          { !isMobile && <ZoomParallax/> }

          <LinkedSectionHeading to="/projects">Port International</LinkedSectionHeading>
          <Headline/>
          <ImageGallery images={ images } align="center"/>
        </Section>

        <Section>
          <LinkedSectionHeading to="/projects">other project</LinkedSectionHeading>
          <Headline/>
          <ImageGallery images={ images2 } align="center"/>
        </Section>

        <Section>
          <LinkedSectionHeading to="/our-team">who we are</LinkedSectionHeading>
          <Headline/>
          <SectionTitle align="center">
            Ein interdisziplinäres Team von Medienprofis aus den Generationen X bis Z.
          </SectionTitle>
          <SectionText align="right">
            Our mission as a responsible and sustainable business is to positively impact our environment, our people, and the next generation. To ensure we are
            acting on this mission, we have developed a sustainability strategy that aligns with the UN's Sustainable Development Goals. We are commited to
            developing and uphoalding sustainable practices because we believe that the built environment Plays an important role in achieving these goals, and
            we want to encourage others within our Industry to do the same.
          </SectionText>
          <video className="w-full text-heading-1 mt-[1em] col-full-width bg-accent mt-15vw"></video>
        </Section>

        <Section>
          <LinkedSectionHeading to="/contact">contact</LinkedSectionHeading>
          <Headline/>
          <SectionTitle align="center">Mit deinem Report gestalten wir gemeinsam den Weg zur Nachhaltigkeit.</SectionTitle>
        </Section>
      </div>
    </>
  )
}

export default IndexPage

export const Head = () =>
  <SeoHead title="designing responsibility"
           description="csr vision hilft Unternehmen dabei, CSR als Chance zu begreifen. Durch Reduzierung der Komplexität, Kuratieren
                                   und crossmediale Aufbereitung verwandeln wir CSR-Berichte, die sonst nur von Analysten und Stakeholdern gelesen werden, in
                                   echtes Storytelling, das auch ihre Community und Kunden begeistern wird."/>
