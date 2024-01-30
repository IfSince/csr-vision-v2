import { Reveal } from './reveal.js'

export const HeroTextReveal = ({ children, className, delay = 0 }) => {
  // map child string and elements to array
  const words = (
    Array.isArray(children)
      ? children.map(child => typeof child === 'string' ? child.trim().split(' ') : child)
      : children.split(' ')
  ).flat()

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