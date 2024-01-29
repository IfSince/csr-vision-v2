import { m } from 'framer-motion'

export const Close = ({ className }) =>
  <m.svg id="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.04 28.05"
         className={ className }
         initial={ { scale: 0 } }
         animate={ { scale: 1 } }
         exit={ { scale: 0 } }>
    <path className="stroke-primary stroke-[4] [stroke-linecap:round] [stroke-linejoin:round]"
          d="M14.02 14.03 1.75 1.75M1.75 26.3l12.27-12.27M26.29 26.3 14.02 14.03"/>
    <path className="stroke-green-500 stroke-[4] [stroke-linecap:round] [stroke-linejoin:round]"
          d="M14.02 14.03 26.29 1.75"/>
  </m.svg>