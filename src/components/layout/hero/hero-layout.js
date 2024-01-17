export const HeroLayout = ({ children }) =>
  <section className="flex overflow-hidden pt-[10vh] horizontal-spacing md:max-4xl:pt-0 md:min-h-hero">
    <h1 className="flex grow flex-col pt-20 space-y-[10vh] pb-[2vh] md:pt-40">
      { children }
    </h1>
  </section>
  