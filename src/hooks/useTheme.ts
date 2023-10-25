import { useContext } from 'react'
import { ThemeContext } from 'providers'

export const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return {
    theme,
    toggleTheme
  }
}
