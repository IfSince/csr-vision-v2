import { SeoHead } from '../components/seo-head.js'

const NotFoundPage = () => {
  return (
    <div>This is the not found page</div>
  )
}

export default NotFoundPage

export const Head = () => <SeoHead title="not found"
                                   description="The site you tried to access could not be found."
                                   pathname="404"/>
