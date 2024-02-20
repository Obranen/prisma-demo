import { useColorScheme } from 'nativewind'
import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper'
import darkTheme from '../theme/dark.theme.json'
import lightTheme from '../theme/light.theme.json'

export const useThemeHook = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme()

  const lightThemePaper = {
    ...MD3LightTheme,
    colors: lightTheme.colors,
  }

  const darkThemePaper = {
    ...MD3DarkTheme,
    colors: darkTheme.colors,
  }

  const currentThemePaper =
    colorScheme === 'dark' ? darkThemePaper : lightThemePaper

  return {
    darkThemePaper,
    lightThemePaper,
    currentThemePaper,
    toggleColorScheme,
    colorScheme,
  }
}
