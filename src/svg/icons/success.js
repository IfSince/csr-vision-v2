import { m } from 'framer-motion'

export const Success = ({ className }) =>
  <m.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
         className={ className }
         initial={ { scale: 0 } }
         animate={ { scale: 1 } }
         exit={ { scale: 0 } }>
    <path
      className="stroke-[4px]"
      d="m382-354 339-339q12-12 28.5-12t28.5 12q12 12 12 28.5T778-636L410-268q-12 12-28 12t-28-12L182-440q-12-12-11.5-28.5T183-497q12-12 28.5-12t28.5 12l142 143Z"/>
  </m.svg>