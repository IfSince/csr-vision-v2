import { ContentScrollReveal } from './content-scroll-reveal.js'

export const DefaultImage = ({ parallax = true, className, children }) => {
  const parallaxAttributes = {
    ...(parallax && {
      'data-scroll': true,
      'data-scroll-speed': '-0.05',
    }),
  }

  return (
    <ContentScrollReveal className={ className }>
      <div className="h-full w-full group" { ...parallaxAttributes }>
        <div className="w-full h-full scale-[112%] transition-transform duration-500 group-hover:scale-[118%] ease-[cubic-bezier(.29, .41, .33, 1)]">
          { children }
        </div>
      </div>
    </ContentScrollReveal>
  )
}