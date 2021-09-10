import React, { createContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

type ThemeContextTypes = [
  {
    themeName: Theme
    toggleTheme: () => void
  }
]

const ThemeContext = createContext<ThemeContextTypes>([
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  { themeName: 'light', toggleTheme: () => {} },
])

const ThemeProvider: React.FC = ({ children }) => {
  const [themeName, setThemeName] = useState<Theme>('light')

  useEffect(() => {
    const isDark = localStorage.getItem('themeName') === 'dark'
    if (isDark) setThemeName('dark')
  }, [])

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark'
    localStorage.setItem('themeName', name)
    setThemeName(name)
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
