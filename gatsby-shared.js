import { Layout } from './src/components/layout/layout.js'
import { ThemeProvider } from './src/providers/theme-provider.js'

export const wrapPageElement = ({ element, props }) => <Layout { ...props }>{ element }</Layout>

export const wrapRootElement = ({ element }) =>
  <ThemeProvider>
    { element }
  </ThemeProvider>