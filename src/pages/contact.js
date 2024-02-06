import { HeroTextReveal } from '../components/animations/hero-text-reveal.js'
import { SeoHead } from '../components/seo-head.js'
import { Section } from '../components/layout/section/section.js'
import { ContactForm } from '../components/contact/contact-form.js'

const ContactPage = () => {

  return (
    <>
      <section className="pt-hero-min md:pt-hero-max">
        <h1 className="grid">
          <HeroTextReveal>contact</HeroTextReveal>
        </h1>
      </section>

      <Section>
        <ContactForm/>
      </Section>
    </>
  )
}

export default ContactPage

export const Head = () => <SeoHead title="contact"/>