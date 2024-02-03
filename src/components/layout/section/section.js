export const Section = ({ children, id }) =>
  <section className="mt-32 grid col-full-width grid-cols-layout sm:mt-40 md:mt-48" id={ id }>
    { children }
  </section>