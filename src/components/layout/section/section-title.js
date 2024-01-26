import { m } from 'framer-motion'
import { Reveal } from '../../animations/reveal.js'

const renderTitle = text => {
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

export const SectionTitle = ({ align = 'left', children }) => {
  const alignmentClasses = {
    left: '',
    center: 'md:col-start-5',
    right: 'justify-self-end lg:col-start-4',
  }
  return (
    <p className={ `mb-14 max-w-sm text-heading-3 sm:mb-16 md:mb-20 md:max-w-lg lg:max-w-2xl 2xl:max-w-4xl ${ alignmentClasses[align] }` }>
      {
        renderTitle(children)
      }
    </p>
  )
}