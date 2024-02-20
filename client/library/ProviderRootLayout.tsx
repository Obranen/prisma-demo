import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ReactNode } from 'react'
import { PaperProvider } from 'react-native-paper'
import { useThemeHook } from '../hook/useTheme.hook'

const queryClient = new QueryClient()

export function ProviderRootLayout({ children }: { children: ReactNode }) {
  const {currentThemePaper} = useThemeHook()

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={currentThemePaper}>
        {children}
      </PaperProvider>
    </QueryClientProvider>
  )
}
