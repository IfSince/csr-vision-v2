import { m } from 'framer-motion'

export const Menu = ({ className }) =>
  <m.svg id="menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 17.5"
         className={ className }
         initial={ { scale: 0 } }
         animate={ { scale: 1 } }
         exit={ { scale: 0 } }>
    <line className="stroke-primary stroke-[3] [stroke-linecap:round] [stroke-linejoin:round]" x1="1.8" y1="1.7" x2="28.2" y2="1.7"/>
    <line className="stroke-primary stroke-[3] [stroke-linecap:round] [stroke-linejoin:round]" x1="1.7" y1="8.7" x2="22.2" y2="8.7"/>
    <path className="stroke-green-500 stroke-[3] [stroke-linecap:round] [stroke-linejoin:round]" d="M1.7,15.7h14.4"/>
  </m.svg>
