import { RowHover } from '../animations/row-hover.js'
import { Add } from '../../svg/icons/add.js'
import { AnimatePresence, m, useCycle } from 'framer-motion'
import { useIsMobile } from '../../hooks/use-is-mobile.js'


export const Service = ({ title, description }) => {
  const isMobile = useIsMobile()
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <RowHover className="border-b col-full-width border-secondary/20 bg-primary first:border-t hover:cursor-pointer lg:hover:cursor-default"
              disableOnMobile={ true }
              onClick={ toggleOpen }>
      <div className="my-10 grid items-center gap-x-32 text-3-extra-large horizontal-spacing lg:my-[0.35em] lg:grid-cols-2">
        <div className="flex items-center justify-between">
          <p className="text-3xl lg:text-nowrap">{ title }</p>
          <Add className={ `fill-secondary h-[1em] aspect-square lg:hidden transition-transform duration-[400ms] ease-[cubic-bezier(.16, .99, .41, .99)]
                            ${ isOpen ? 'rotate-[135deg]' : '' }` }/>
        </div>

        {
          !isMobile
            ? <p className="text-base font-medium sm:max-w-lg lg:max-w-xl lg:justify-self-end lg:text-lg duration-[300ms]
                           [clip-path:inset(50%_0_50%)] transition-[clip-path] group-hover/row-hover:[clip-path:inset(0_0_0)]">{ description }</p>
            : <AnimatePresence initial={ false } mode="wait">
              {
                isOpen &&
                <m.p className="text-base font-medium sm:max-w-lg lg:max-w-xl lg:justify-self-end lg:text-lg"
                     initial={ { height: 0, opacity: 0 } }
                     animate={ { height: 'auto', opacity: 1 } }
                     exit={ { height: 0, opacity: 0 } }
                     transition={ { duration: 0.8, ease: [.16, .99, .41, .99] } }>
                  <span className="block pt-10">{ description }</span>
                </m.p>
              }
            </AnimatePresence>
        }
      </div>
    </RowHover>
  )
}