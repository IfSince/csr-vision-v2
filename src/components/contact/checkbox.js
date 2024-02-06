import { m } from 'framer-motion'

export const Checkbox = ({ id, children }) => {
  return (
    <m.div className="grow" layout>
      <input id={ id } name={ id } type="checkbox" className="sr-only peer"/>
      <label className="block py-4 px-[min(3rem,var(--horizontal-spacing))] text-secondary/20 border-r border-b border-secondary/20 transition-colors duration-300
                        hover:text-secondary/80
                        peer-checked:bg-secondary peer-checked:text-primary peer-checked:border-primary/20
                        peer-focus-visible:text-secondary/90 peer-checked:peer-focus-visible:text-primary/50
                        "
             htmlFor={ id }>
        { children }
      </label>
    </m.div>
  )
}