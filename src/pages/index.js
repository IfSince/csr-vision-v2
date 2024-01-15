import { SeoHead } from '../components/seo-head.js'
import { HeroLayout } from '../components/layout/hero/hero-layout.js'

const IndexPage = () => {
  return (
    <>
      <main>
        <HeroLayout>
          <span className="text-heading-1 *:block">
            <span className="text-accent">csr</span>
            <span className="pl-[1ch]">vision</span>
          </span>

          <span className="text-heading-1 *:block *:text-right">
            <span>designing</span>
            <span className="text-accent">responsibility</span>
          </span>
        </HeroLayout>
      </main>
      <div className="flex h-screen items-center justify-center">Index</div>
    </>
  )
}

export default IndexPage

export const Head = () => <SeoHead title="designing responsibility"/>
