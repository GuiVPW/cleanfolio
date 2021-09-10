import { render } from 'react-dom'
import { ThemeProvider } from './contexts/theme'
import { GlobalStyle, StylesProvider } from './styles'
import App from './App'

render(
  <ThemeProvider>
    <StylesProvider>
      <GlobalStyle />
      <App />
    </StylesProvider>
  </ThemeProvider>,
  document.getElementById('root')
)
