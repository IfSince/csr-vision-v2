import { Layout } from './src/components/layout/layout.js'
import { ThemeProvider } from './src/providers/theme-provider.js'

export const wrapPageElement = ({ element }) => <Layout>{ element }</Layout>

export const wrapRootElement = ({ element }) =>
  <ThemeProvider>
    { element }
  </ThemeProvider>