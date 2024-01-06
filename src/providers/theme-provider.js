import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(undefined)

  useEffect(() => {
    const initialTheme = window.document.documentElement.classList.contains('light') ? 'light' : 'dark'
    setTheme(initialTheme)
  }, [])

  const updateTheme = value => {
    const root = window.document.documentElement

    setTheme(value)
    localStorage.setItem('theme', value)
    root.classList.remove('light', 'dark')
    root.classList.add(value)
  }

  const toggleTheme = () => updateTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <ThemeContext.Provider value={ { theme, toggleTheme } }>
      { children }
    </ThemeContext.Provider>
  )
}