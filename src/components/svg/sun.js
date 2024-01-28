import { m } from 'framer-motion'

export const Sun = ({ className }) =>
  <m.svg id="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.02 32"
         className={ className }
         initial={ { scale: 0 } }
         animate={ { scale: 1 } }
         exit={ { scale: 0 } }>
    <path className="stroke-0"
          d="M15.95 12c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4m0-4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8Z"/>
    <circle className="stroke-0" cx="15.95" cy="2" r="2"/>
    <circle className="stroke-0" cx="5.95" cy="6" r="2"/>
    <path className="stroke-0"
          d="M1.95 14c1.1-.02 2.02.85 2.04 1.95.02 1.1-.85 2.02-1.95 2.04h-.09c-1.1-.02-1.97-.93-1.95-2.04.02-1.07.88-1.93 1.95-1.96Z"/>
    <circle className="stroke-0" cx="5.95" cy="26" r="2"/>
    <path className="stroke-0"
          d="M13.95 30c0-1.11.9-2 2-2s2 .89 2 2-.9 2-2 2-2-.9-2-2Zm10.6-2.59c-.79-.77-.82-2.03-.05-2.83s2.03-.82 2.83-.05l.05.05c.77.79.75 2.06-.05 2.83-.78.75-2 .75-2.78 0Zm5.4-9.41a2 2 0 1 1 0-4 2 2 0 1 1 .12 4h-.13ZM27.38 7.42c-.78.78-2.05.78-2.83 0-.78-.78-.78-2.05 0-2.83.78-.78 2.05-.78 2.83 0s.78 2.05 0 2.83Z"/>
  </m.svg>