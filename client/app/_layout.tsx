import { Text, View } from 'react-native'
import { useFontsHook } from '../hooks/useFontsHook'
import DrawerNavigation from '../components/DrawerNavigation'

export default function RootLayout() {
  let { fontsLoaded, fontError, onLayoutRootView } = useFontsHook()

  if (!fontsLoaded && !fontError) {
    return (
      <View className='flex-1 justify-center items-center'>
        <Text className='text-red-200'>Download...</Text>
      </View>
    )
  }
  return (
    <View className='flex-1' onLayout={onLayoutRootView}>
      <DrawerNavigation />
    </View>
  )
}
