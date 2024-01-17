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
    filter: 'blur(0px)',
    opacity: 1,
  },
  hovered: {
    filter: 'blur(0px)',
    opacity: 1,
    transition: { duration: 0.3 },
  },
  others: {
    filter: 'blur(4px)',
    opacity: 0.6,
    transition: { duration: 0.3 },
  },
}