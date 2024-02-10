import { m } from 'framer-motion'

export const Pause = ({ className }) =>
  <m.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
         className={ className }
         initial={ { scale: 0 } }
         animate={ { scale: 1 } }
         eit={ { scale: 0 } }>
    <path
      d="M600-200q-33 0-56.5-23.5T520-280v-400q0-33 23.5-56.5T600-760h80q33 0 56.5 23.5T760-680v400q0 33-23.5 56.5T680-200h-80Zm-320 0q-33 0-56.5-23.5T200-280v-400q0-33 23.5-56.5T280-760h80q33 0 56.5 23.5T440-680v400q0 33-23.5 56.5T360-200h-80Zm320-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"/>
  </m.svg>