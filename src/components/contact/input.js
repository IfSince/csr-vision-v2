import { m } from 'framer-motion'

export const Input = ({ placeholder, name, error = null, updateError }) => {
  return (
    <m.div className={ `relative border-b border-secondary/20 text-secondary/80 duration-300 transition-colors
                    has-[:focus-visible]:outline-none has-[:focus-visible]:border-secondary
                    has-[:focus]:outline-none has-[:focus-visible]:text-secondary
                    hover:text-secondary/90 hover:border-secondary/50 ${ error && '!border-error' }` }
           layout>
      <input
        className="w-full bg-transparent py-4 placeholder-secondary/20 pl-[var(--horizontal-spacing)] lg:pr-12 pr-4 md:pr-8 focus:outline-none focus-visible:outline-none"
        type="text"
        name={ name }
        placeholder={ placeholder }
        onBlur={ (e) => {
          updateError(name)
          e.target.value = e.target.value.trim()
        } }/>

      {
        error && <div className="py-2 text-sm lg:right-4 lg:text-base pl-[var(--horizontal-spacing)] text-error/80">{ error }</div>
      }
    </m.div>
  )
}