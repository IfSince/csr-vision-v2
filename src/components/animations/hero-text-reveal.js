import { m } from 'framer-motion'

const variants = {
  initial: {
    opacity: 0,
    y: 1100,
    rotate: 45,
    scale: 6,
  },
  revealed: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
  },
}

const renderCharacter = (letter, index) =>
  <m.span key={ `${ letter }${ index }` }
          className="inline-block hero-origin"
          initial="initial"
          animate="revealed"
          variants={ variants }
          transition={ {
            delay: 0.5,
            duration: 0.75,
            type: 'tween',
            ease: [.14, .65, .13, .99],
            rotate: { delay: 0.6, duration: 0.65, ease: [.14, .65, .13, .99] },
          } }
  >{ letter }</m.span>

export const HeroTextReveal = ({ children, className }) => {
  const words = children.split(' ')

  return (
    <span className={ className }>
      {
        words.map((word, index) =>
          <span key={ `${ word }${ index }` }>
            {
              word.split('').map(renderCharacter)
            }
            {
              (index + 1 < words.length) && <>&nbsp;</>
            }
          </span>,
        )
      }
    </span>
  )
}