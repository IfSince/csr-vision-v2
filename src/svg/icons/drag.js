import { m } from 'framer-motion'

export const Drag = ({ className }) =>
  <m.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
         className={ className }
         initial={ { scale: 0, rotate: 90 } }
         animate={ { scale: 1, rotate: 90 } }
         eit={ { scale: 0, rotate: 90 } }>
    <path
      d="m480-180.153 162.308-161.539q8.923-8.923 20.884-9.115 11.962-.192 21.269 9.115 9.308 9.308 9.308 21.384 0 12.077-9.308 21.384L523.153-137Q505.538-119.385 480-119.385T436.847-137L274.924-298.924q-8.923-8.922-8.808-21.191.115-12.269 9.423-21.577 9.307-9.307 21.384-9.115 12.077.192 21.384 9.115L480-180.153Zm0-599.694L318.307-618.924q-8.923 8.923-20.884 8.808-11.961-.115-21.269-8.808-9.307-9.307-9.615-21.384-.308-12.076 9-21.384L436.847-823q17.615-17.615 43.153-17.615T523.153-823l161.308 161.308q8.923 8.923 8.808 21.192-.116 12.269-9.423 21.576-9.308 8.693-21.077 8.808-11.769.115-21.076-8.808L480-779.847Z"/>
  </m.svg>