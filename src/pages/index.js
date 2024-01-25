import { SeoHead } from '../components/seo-head.js'
import { HeroTextReveal } from '../components/animations/hero-text-reveal.js'

const IndexPage = () => {
  return (
    <>
      <section className="pt-hero-min md:pt-hero-max lg:min-h-hero">
        <h1 className="grid">
          <HeroTextReveal>csr</HeroTextReveal>
          <HeroTextReveal className="pl-[2ch] mb-[12vh] lg:mb-[8vh]">vision</HeroTextReveal>

          <HeroTextReveal className="justify-self-end">designing</HeroTextReveal>
          <HeroTextReveal className="justify-self-end text-accent">responsibility</HeroTextReveal>
        </h1>
      </section>
      <div className="flex h-screen items-center justify-center">Index</div>
    </>
  )
}

export default IndexPage

export const Head = () => <SeoHead title="designing responsibility"/>
