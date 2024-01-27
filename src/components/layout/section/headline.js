import { m } from 'framer-motion'
import { viewport } from '../../../animation.config.js'

export const Headline = () => <m.hr className="mb-4 w-0 col-full-width border-secondary/20 md:mb-6 xl:mb-8"
                                    initial={ { width: 0 } }
                                    whileInView={ { width: '100%' } }
                                    viewport={ viewport }
                                    transition={ { duration: 1, ease: [0.76, 0, 0.24, 1] } }/>