const GridTest = () => {
  return (
    <>
      <div className="grid grid-cols-layout pt-hero-min text-heading-1 md:pt-hero-max">
        <p className="col-[content-start/span_10]">
          take a look
        </p>
        <p className="col-[content-start/span_10]">at our</p>

        <div className="justify-self-end col-[content">
          <p>sustainable</p>
          <p className="pl-[1ch]">projects</p>
        </div>

        <p className="mt-80 col-[full-width]">
          This is full-width lsefsaef sdf sdf s
        </p>
      </div>
    </>
  )
}

export default GridTest