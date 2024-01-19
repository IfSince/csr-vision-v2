export const HeroLayout = ({ children }) =>
  <section className="flex overflow-hidden pt-[10vh] horizontal-spacing md:max-4xl:pt-0 md:min-h-hero">
    <h1 className="flex grow flex-col pt-hero-min space-y-[8vh] md:pt-hero-max">
      { children }
    </h1>
  </section>
  