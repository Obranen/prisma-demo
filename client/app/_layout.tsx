import { SafeAreaView, Text, View } from 'react-native'
import { useFontsHook } from '../hooks/useFontsHook'
import DrawerNavigation from '../components/DrawerNavigation'
import { PaperProvider } from 'react-native-paper'

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
    <PaperProvider>
      <SafeAreaView className='flex-1' onLayout={onLayoutRootView}>
        <DrawerNavigation />
      </SafeAreaView>
    </PaperProvider>
  )
}
