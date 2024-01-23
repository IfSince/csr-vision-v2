import { m } from 'framer-motion'
import { Reveal } from '../../animations/reveal.js'

const renderTitle = (text) => {
  const words = text.split(' ')

  return (
    <m.span className="flex flex-wrap"
            initial="initial"
            whileInView="enter"
            viewport={ { once: true, margin: '0px 0px -100px 0px' } }>
      {
        words.map((word, index) =>
          <span className="clip-path" key={ index }>
            <Reveal className="inline-block"
                    initial={ undefined }>
              { word }
              { (index + 1 < words.length) && <>&nbsp;</> }
            </Reveal>
          </span>,
        )
      }
    </m.span>
  )
}

export const Section = ({ title, children }) => {
  return (
    <section className="mt-32 sm:mt-40 md:mt-48">
      <div className="mb-14 grid grid-cols-12 horizontal-spacing sm:mb-16 md:mb-20">
        <p className="col-span-11 col-start-1 text-heading-3 xs:col-span-8 xl:col-span-7 2xl:col-span-6 4xl:col-span-5">
          {
            renderTitle(title)
          }
        </p>
      </div>
      { children }
    </section>
  )
}