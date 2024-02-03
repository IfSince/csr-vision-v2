import { m } from 'framer-motion'
import { Link } from 'gatsby'
import { Curve } from './curve.js'
import { slugify } from '../../util/slugify.js'

export const menuSlide = {
  initial: { x: 'calc(-100% - 100px)' },
  enter: { x: '0', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: { x: 'calc(-100% - 100px)', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
}

export const slide = {
  initial: { x: '-50%' },
  enter: i => ({ x: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } }),
  exit: i => ({ x: '-50%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } }),
}

export const TableOfContents = ({ tableOfContents, toggleTableOfContents }) =>
  <m.div className="fixed top-0 left-0 h-screen z-[500] bg-primary text-secondary border-secondary/20"
         variants={ menuSlide }
         initial="initial"
         animate="enter"
         exit="exit">
    <Curve/>

    <div className="flex h-full flex-col justify-center pb-[max(5rem,2vw)] pl-[var(--horizontal-spacing)] pr-[min(2.5rem,_var(--horizontal-spacing))]">
      <div className="mt-20 flex flex-col gap-y-[clamp(2em,5vw,3em)] max-w-sm md:max-w-lg lg:max-w-2xl 2xl:max-w-2xl">
        {
          tableOfContents.map((title, index) =>
            <m.span className="relative flex w-fit items-center text-table-of-contents"
                   key={ title }
                   custom={ index }
                   variants={ slide }
                   initial="initial"
                   animate="enter"
                   exit="exit">
              <Link className="w-fit"
                    onClick={ toggleTableOfContents }
                    to={ `#${ slugify(title) }` }>{ title }</Link>
            </m.span>,
          )
        }
      </div>
    </div>
  </m.div>