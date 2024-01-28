export const viewport = { once: true, margin: '0px 0px -50px 0px' }

/* ---------- Scroll Reveal ---------- */
const scrollRevealVariants = {
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

export const scrollRevealAnimation = (delay = 0) => ({
  variants: scrollRevealVariants,
  custom: delay,
  initial: 'initial',
  whileInView: 'inView',
  viewport,
})