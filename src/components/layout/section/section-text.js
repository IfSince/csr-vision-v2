import { m } from 'framer-motion'
import { Reveal } from '../../animations/reveal.js'

const renderText = text => {
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

export const SectionText = ({ align = 'left', children }) => {
  const alignmentClasses = {
    left: '',
    right: 'justify-self-end',
  }

  return (
    <p className={ `mb-6 sm:my-6 lg:my-8 w-full max-w-sm text-heading-4 md:max-w-lg lg:max-w-2xl 2xl:max-w-3xl ${ alignmentClasses[align] }` }>
      {
        renderText(children)
      }
    </p>
  )

}