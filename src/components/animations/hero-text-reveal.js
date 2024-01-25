import { Reveal } from './reveal.js'

const renderRow = (text, delay) => {
  const words = text.split(' ')

  return words.map((word, index) =>
    <Reveal className="inline-block"
            key={ `${ word }${ index }` }
            custom={ [index * 0.075 + delay, index * 0.01] }
            animate="enter">
      { word }
      {
        (index + 1 < words.length) && <>&nbsp;</>
      }
    </Reveal>,
  )
}

export const HeroTextReveal = ({ children, className= '', delay = 0 }) =>
  <span className={ `block clip-path text-heading-1 ${className}` }>
    {
      renderRow(children, delay)
    }
  </span>