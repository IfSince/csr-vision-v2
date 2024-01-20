import { Reveal } from '../../animations/reveal.js'
import { m } from 'framer-motion'

export const renderTitle = (text) => {
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

export const TitledSection = ({ title, children }) => {
  return (
    <section className="mt-32 sm:mt-40 md:mt-48">
      <div className="mb-14 max-w-[350px] horizontal-spacing sm:mb-16 sm:max-w-lg md:mb-20 md:max-w-xl lg:max-w-3xl xl:max-w-6xl">
        <p className="text-heading-3">
          {
            renderTitle(title)
          }
        </p>
      </div>
      { children }
    </section>
  )
}