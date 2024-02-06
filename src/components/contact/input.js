export const Input = ({ placeholder, name }) => {
  return (
    <input className="w-full border-b bg-transparent py-4 placeholder-secondary/20 pl-[var(--horizontal-spacing)] lg:pr-12 pr-4 md:pr-8 border-secondary/20 text-secondary/80
                      duration-300 transition-colors
                      focus:outline-none focus-visible:outline-none focus-visible:border-secondary
                      hover:text-secondary/90 focus:text-secondary hover:border-secondary/50"
           type="text"
           name={ name }
           placeholder={ placeholder }/>
  )
}