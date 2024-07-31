import { GlobalStyles } from '../src/styles/global-styles'
import { theme } from '../src/styles/theme'
import { BlogThemeProvider } from '../src/contexts/BlogThemeContext'

export const parameters = {
 actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <BlogThemeProvider>
      <Story />
      <GlobalStyles />
    </BlogThemeProvider>
  )
];