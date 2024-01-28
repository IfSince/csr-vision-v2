const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] }

export const background = {
  initial: { height: 0 },
  open: {
    height: '100vh',
    transition,
  },
  closed: {
    height: 0,
    transition: { delay: 0.1, ...transition },
  },
}

export const height = {
  initial: { height: 0 },
  enter: {
    height: 'auto',
    transition: { delay: 0.15, ...transition },
  },
  exit: {
    height: 0,
    transition: { delay: 0.1, ...transition },
  },
}

export const characterHover = {
  initial: {
    opacity: 1,
  },
  hovered: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  others: {
    opacity: 0.3,
    transition: { duration: 0.3 },
  },
}