import { SafeAreaView, Text, View } from 'react-native'
import DrawerNavigation from '../components/DrawerNavigation/DrawerNavigation'
import { useFontsHook } from '../hooks/useFontsHook'
import { Provider } from '../lib/Provider'

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
    <Provider>
      <SafeAreaView className='flex-1' onLayout={onLayoutRootView}>
        <DrawerNavigation />
      </SafeAreaView>
    </Provider>
  )
}
