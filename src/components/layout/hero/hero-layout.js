import { Children } from 'react'

export const HeroLayout = ({ children }) => {
  const asArray = Children.toArray(children)
  const isTwoPartHeading = asArray.length > 1

  return (
    <section className={ `flex pt-hero-min horizontal-spacing md:pt-hero-max ${ isTwoPartHeading && 'lg:min-h-hero' }` }>
      <h1 className="flex grow flex-col space-y-[12vh] lg:space-y-[8vh]">
        { children }
      </h1>
    </section>
  )
}
  