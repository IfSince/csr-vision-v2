import { SeoHead } from '../components/seo-head.js'

const IndexPage = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-black text-white">Test</div>
      <div className="flex h-screen items-center justify-center bg-green-500">Test</div>
      <div className="flex h-screen items-center justify-center bg-black text-white">Test</div>
    </>
  )
}

export default IndexPage

export const Head = () => <SeoHead title="designing responsibility"/>
