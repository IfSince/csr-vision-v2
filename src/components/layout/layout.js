import { AnimatePresence, domMax, LazyMotion } from 'framer-motion'
import { Header } from './header/header.js'
import { PageTransition } from '../common/page-transition/page-transition.js'
import { CursorProvider } from '../../providers/cursor-provider.js'
import { Footer } from './footer/footer.js'

export const Layout = ({ children, path, uri, ...data }) => {
  console.log(data)
  return (
    <LazyMotion features={ domMax } strict>
      <CursorProvider>
        <Header path={ path }/>
        <AnimatePresence mode="wait">
          <PageTransition key={ path }>
            <main className="grid grid-cols-layout">
              { children }
            </main>
            <Footer currentUrl={ uri }/>
          </PageTransition>
        </AnimatePresence>
      </CursorProvider>
    </LazyMotion>
  )
}