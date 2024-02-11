import { Reveal } from './reveal.js'

export const HeroTextReveal = ({ children, className }) => {
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