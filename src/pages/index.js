import { SeoHead } from '../components/seo-head.js'
import { HeroLayout } from '../components/layout/hero/hero-layout.js'
import { HeroTextReveal } from '../components/animations/hero-text-reveal.js'

const IndexPage = () => {
  return (
    <>
      <main>
        <HeroLayout>
          <span className="text-heading-1 *:block">
            <HeroTextReveal className="text-accent">csr test</HeroTextReveal>
            <HeroTextReveal className="pl-[1ch]">vision</HeroTextReveal>
          </span>

          <span className="text-heading-1 *:block *:text-right">
            <HeroTextReveal>designing</HeroTextReveal>
            <HeroTextReveal className="text-accent">responsibility</HeroTextReveal>
          </span>
        </HeroLayout>
      </main>
      <div className="flex h-screen items-center justify-center">Index</div>
    </>
  )
}

export default IndexPage

export const Head = () => <SeoHead title="designing responsibility"/>
