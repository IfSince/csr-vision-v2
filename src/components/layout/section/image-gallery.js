import { DefaultImage } from '../../animations/default-image.js'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const ImageGallery = ({ align = 'left', images = [] }) => {
  const imageSizeClasses = {
    'sm': 'grow basis-1/3 md:max-w-[calc(33.33vw-(var(--horizontal-spacing)))]',
    'md': 'grow basis-1/2 md:max-w-[calc(50vw-(var(--horizontal-spacing)))]',
    'lg': 'grow basis-2/3 md:max-w-[calc(66.66vw-(var(--horizontal-spacing)))]',
  }

  const alignClasses = {
    'left': '',
    'center': 'justify-self-end md:col-start-5',
  }

  return (
    <div className={ `flex flex-wrap ${ alignClasses[align] }` }>
      {
        images?.map(({ src, size }, index) => {
            const image = getImage(src)
            return <div className={ `pl-4 first:pl-0 md:h-[25vw] first:block hidden md:block rounded-sm ${ imageSizeClasses[size] }` } key={ index }>
              <DefaultImage className="h-full w-full">
                <GatsbyImage alt="project reference" image={ image } className="h-full w-full"/>
              </DefaultImage>
            </div>
          },
        )
      }
    </div>
  )
}