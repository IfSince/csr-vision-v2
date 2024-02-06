export const TextArea = ({ placeholder, name }) => {
  return (
    <textarea className="resize-none min-h-52 w-full bg-transparent py-4 placeholder-secondary/20 pl-[var(--horizontal-spacing)] lg:pr-12 pr-4 md:pr-8 border-secondary/20 text-secondary/80
                         duration-300 transition-colors
                         focus:outline-none focus-visible:outline-none focus-visible:border-secondary
                         hover:text-secondary/90 focus-visible:text-secondary"
              name={ name }
              placeholder={ placeholder }
              maxLength={ 160 }
    />
  )
}