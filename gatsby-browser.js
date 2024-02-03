import './src/styles/global.css'

export { wrapPageElement } from './gatsby-shared.js'
export { wrapRootElement } from './gatsby-shared.js'

export const shouldUpdateScroll = ({ routerProps: { location }, }) => {
  // If there is a selected id always go there
  if (location.action ==='PUSH' && location.hash !== '') return true

  // remove default behavior for scrolling with chrome actions (forward, backward)
  window.history.scrollRestoration = 'manual'
  // exit duration in page transition
  const TRANSITION_DELAY = 0.5 * 1000
  window.setTimeout(() => window.scrollTo(0, 0), TRANSITION_DELAY)

  return false
}

export const onInitialClientRender = () => window.scrollTo(0, 0)