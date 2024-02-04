export const viewport = { once: true, margin: '-50px 0px -50px 0px' }

/* ---------- Scroll Reveal ---------- */
const scrollRevealVariants = {
  initial: ({ delay, duration }) => ({
    opacity: 0,
    y: 50,
    transition: { duration, delay, ease: [.3, .67, .32, .96] },
  }),
  inView: ({ delay, duration }) => ({
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: [.3, .67, .32, .96] },
  }),
}

export const scrollRevealAnimation = (delay = 0, duration = 1) => ({
  variants: scrollRevealVariants,
  custom: { delay, duration },
  initial: 'initial',
  whileInView: 'inView',
  viewport,
})