import { Layout } from './src/components/layout/layout.js'
import { ThemeProvider } from './src/providers/theme-provider.js'

export const wrapPageElement = ({ element, props }) => <Layout { ...props }>{ element }</Layout>

export const wrapRootElement = ({ element }) =>
  <ThemeProvider>
    { element }
  </ThemeProvider>

export const shouldUpdateScroll = () => {
  // remove default behavior for scrolling with chrome actions (forward, backward)
  window.history.scrollRestoration = 'manual'

  // exit duration in page transition
  const TRANSITION_DELAY = 0.5 * 1000

  window.setTimeout(() => window.scrollTo(0, 0), TRANSITION_DELAY)

  return false
}

export const onInitialClientRender = () => window.scrollTo(0, 0)