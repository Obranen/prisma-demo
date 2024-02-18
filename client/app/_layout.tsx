import { SafeAreaView, Text, View } from 'react-native'
import DrawerNavigation from '../components/DrawerNavigation/DrawerNavigation'
import { useFontsHook } from '../hook/useFonts.hook'
import { ProviderRootLayout } from '../library/ProviderRootLayout'

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
    <ProviderRootLayout>
      <SafeAreaView className='flex-1' onLayout={onLayoutRootView}>
        <DrawerNavigation />
      </SafeAreaView>
    </ProviderRootLayout>
  )
}
