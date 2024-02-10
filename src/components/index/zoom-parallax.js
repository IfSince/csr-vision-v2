import { useRef } from 'react'
import { m, useScroll, useTransform } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'

export const ZoomParallax = () => {
  const container = useRef()

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

  // TODO use different images in here
  const pictures = [
    {
      image: <StaticImage src="../../images/background.png" alt="project" className="h-full w-full"/>,
      scale: scale4,
    },
    {
      image: <StaticImage src="../../images/background.png" alt="project" className="h-full w-full"/>,
      scale: scale5,
    },
    {
      image: <StaticImage src="../../images/background.png" alt="project" className="h-full w-full"/>,
      scale: scale6,
    },
    {
      image: <StaticImage src="../../images/background.png" alt="project" className="h-full w-full"/>,
      scale: scale5,
    },
    {
      image: <StaticImage src="../../images/background.png" alt="project" className="h-full w-full"/>,
      scale: scale6,
    },
    {
      image: <StaticImage src="../../images/background.png" alt="project" className="h-full w-full"/>,
      scale: scale8,
    },
    {
      image: <StaticImage src="../../images/background.png" alt="project" className="h-full w-full"/>,
      scale: scale9,
    },
  ]

  const imageClasses = {
    0: 'w-[25vw] h-[25vh]',
    1: 'top-[-30vh] left-[5vw] w-[35vw] h-[30vh]',
    2: 'top-[-10vh] left-[-25vw] w-[20vw] h-[45vh]',
    3: 'left-[25vw] w-[20vw] h-[25vh]',
    4: 'top-[27.5vh] left-[5vw] w-[20vw] h-[25vh]',
    5: 'top-[27.5vh] left-[-22.5vw] w-[30vw] h-[25vh]',
    6: 'top-[22.5vh] left-[25vw] w-[15vw] h-[15vh]',
  }

  return (
    <div ref={ container } className="relative h-[270vh] col-full-width">
      <div className="sticky top-0 overflow-hidden h-[100vh]">
        {
          pictures.map(({ image, scale }, index) =>
            <m.div key={ index } style={ { scale } } className="absolute top-0 flex h-full w-full items-center justify-center">
              <div className={ `relative ${ imageClasses[index] }` }>
                { image }
              </div>
            </m.div>,
          )
        }
      </div>
    </div>
  )
}