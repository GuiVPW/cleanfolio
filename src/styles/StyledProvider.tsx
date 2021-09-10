import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeContext } from '../contexts/theme'
import { theme as lightTheme, darkTheme } from './theme'

export const StylesProvider: React.FC = ({ children }) => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <ThemeProvider theme={themeName === 'light' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  )
}

export default StylesProvider
