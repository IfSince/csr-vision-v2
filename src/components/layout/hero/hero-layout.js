export const HeroLayout = ({ children }) =>
  <section className="flex pt-hero-min horizontal-spacing md:pt-hero-max lg:min-h-hero">
    <h1 className="flex grow flex-col space-y-[12vh] lg:space-y-[8vh]">
      { children }
    </h1>
  </section>
  