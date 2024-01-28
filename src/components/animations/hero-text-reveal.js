import { Reveal } from './reveal.js'

export const HeroTextReveal = ({ children, className, delay = 0 }) => {
  const words = children.split(' ')

  return (
    <span className={ className }>
      {
        words.map((word, index) =>
          <Reveal key={ `${ word }${ index }` }
                  custom={ [index * 0.075 + delay, index * 0.01] }
                  animate="enter">
            { word }
            {
              (index + 1 < words.length) && <>&nbsp;</>
            }
          </Reveal>,
        )
      }
    </span>
  )
}