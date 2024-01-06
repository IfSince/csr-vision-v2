import { useReducedMotion } from 'framer-motion'
import { useIsMobile } from './use-is-mobile.js'

export const useShouldAnimate = (checkObject = {}) => {
  const checks = {
    isMobile: useIsMobile(),
    prefersReducedMotion: useReducedMotion(),
  }

  const shouldAnimate =
    Object.keys(checkObject).reduce((prev, curr) => prev && (checkObject[curr] ? !checks[curr] : true), true)

  return {
    shouldAnimate,
    checks,
  }
}