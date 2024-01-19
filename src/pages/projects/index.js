import { SeoHead } from '../../components/seo-head.js'
import { HeroLayout } from '../../components/layout/hero/hero-layout.js'
import { HeroTextReveal } from '../../components/animations/hero-text-reveal.js'

const ProjectsPage = () => {
  return (
    <>
      <main>
        <HeroLayout>
          <span className="text-heading-1">
            <HeroTextReveal delay={ 0.75 }>take a look</HeroTextReveal>
            <HeroTextReveal delay={ 1 } className="pl-[2ch]">at our</HeroTextReveal>
          </span>

          <span className="flex justify-end text-heading-1">
            <span>
              <HeroTextReveal delay={ 1.5 } className="text-accent">sustainable</HeroTextReveal>
              <HeroTextReveal delay={ 1.65 } className="pl-[1ch]">projects</HeroTextReveal>
            </span>
        </span>
        </HeroLayout>
      </main>

      <div className="flex h-screen items-center justify-center">Projects</div>
      <div className="flex h-screen items-center justify-center">Projects</div>
      <div className="flex h-screen items-center justify-center">Projects</div>
    </>
  )
}

export default ProjectsPage

export const Head = () => <SeoHead title="our projects"/>