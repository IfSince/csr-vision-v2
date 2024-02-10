import { SeoHead } from '../components/seo-head.js'
import { SectionText } from '../components/layout/section/section-text.js'
import { SectionTitle } from '../components/layout/section/section-title.js'
import { SectionDotTitle } from '../components/layout/section/section-dot-title.js'
import { Headline } from '../components/layout/section/headline.js'
import { Section } from '../components/layout/section/section.js'
import { HeroTextReveal } from '../components/animations/hero-text-reveal.js'
import { LinkedSectionHeading } from '../components/layout/section/linked-section-heading.js'

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
        <SectionDotTitle>Work in progress</SectionDotTitle>

        <SectionTitle align="center">
          Diese Seite befindet sich aktuell noch in Arbeit. Bei dem bisherigen Inhalt handelt es sich im Platzhalter.
        </SectionTitle>

        <SectionText align="right">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam architecto culpa debitis delectus deserunt dolore dolores, ducimus, earum
          error ex facilis harum ipsa ipsam iusto libero magni maiores modi molestiae non nulla numquam odio porro quas qui quia quod recusandae reiciendis rem
          saepe sint totam unde ut veniam vero voluptas voluptatem. Aliquam, atque commodi cum eaque error est eveniet, excepturi fugit harum hic impedit iusto
          laudantium magnam nemo omnis optio quam quis quod repellat sunt, suscipit vero voluptate. Adipisci corporis laudantium natus nihil sed. Alias
          consequatur delectus, dolor doloremque eius iste libero maxime nisi, optio perferendis porro praesentium quia, quidem quos rerum sit voluptatibus.
          Aliquam beatae, dicta distinctio esse eveniet excepturi natus nesciunt nihil quidem sequi soluta temporibus voluptate.
        </SectionText>
      </Section>

      <Section>
        <LinkedSectionHeading to="/contact">get in touch</LinkedSectionHeading>
        <Headline/>
        <SectionTitle align="center">Mit deinem Report gestalten wir gemeinsam den Weg zur Nachhaltigkeit.</SectionTitle>
      </Section>
    </>
  )
}

export default PrivacyPage

export const Head = () => <SeoHead title="privacy"/>