export const SectionHeading = ({ children }) =>
  <div className="mb-8 flex h-fit items-center gap-4 md:mb-10 lg:col-[content-start/span_2] xl:mb-12">
    <div className="rounded-full h-3.5 w-3.5 mb-0.5 bg-secondary"></div>
    <h3 className="font-medium lg:text-lg">{ children }</h3>
  </div>