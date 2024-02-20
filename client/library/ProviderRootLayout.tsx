import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useColorScheme } from 'nativewind'
import { ReactNode } from 'react'
import { MD3DarkTheme, PaperProvider } from 'react-native-paper'

const queryClient = new QueryClient()

export function ProviderRootLayout({ children }: { children: ReactNode }) {
  const { colorScheme } = useColorScheme()

  const DarkScheme = {
    ...MD3DarkTheme,
    colors: {
      primary: '#00a17e'
    },
  }

  const LightScheme = {
    ...MD3DarkTheme,
    colors: {
      primary: '#cad800'
    },
  }

  const themeCurrent = colorScheme === 'light' ? DarkScheme : LightScheme

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={themeCurrent}>
        {children}
      </PaperProvider>
    </QueryClientProvider>
  )
}
