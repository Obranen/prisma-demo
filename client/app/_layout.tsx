import { SafeAreaView, Text, View } from 'react-native'
import { useFontsHook } from '../hooks/useFontsHook'
import DrawerNavigation from '../components/DrawerNavigation'
// import { Provider } from '../lib/provider'
import { ReactNode } from 'react'
import { PaperProvider } from 'react-native-paper'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function RootLayout() {
  let { fontsLoaded, fontError, onLayoutRootView } = useFontsHook()

  if (!fontsLoaded && !fontError) {
    return (
      <View className='items-center justify-center flex-1'>
        <Text className='text-red-600'>Download...</Text>
      </View>
    )
  }
  return (
    // <Provider>
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <SafeAreaView className='flex-1' onLayout={onLayoutRootView}>
          <DrawerNavigation />
        </SafeAreaView>
      </PaperProvider>
    </QueryClientProvider>

    // </Provider>
  )
}
