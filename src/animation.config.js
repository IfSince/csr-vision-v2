export const viewport = { once: true, margin: '0px 0px -50px 0px' }

const variants = {
  initial: delay => ({
    opacity: 0,
    y: 50,
    transition: { duration: 1, delay, ease: [.3, .67, .32, .96] },
  }),
  inView: delay => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay, ease: [.3, .67, .32, .96] },
  }),
}

export const scrollRevealConfig = (delay = 0) => ({
  variants,
  custom: delay,
  initial: 'initial',
  whileInView: 'inView',
  viewport,
})