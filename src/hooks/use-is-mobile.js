import { useBreakpoint } from 'gatsby-plugin-breakpoints'

export const useIsMobile = () => useBreakpoint().lg ?? false