import { Text, View } from 'react-native'
import {useFontsHook} from '../hooks/useFontsHook'

export default function Index() {
  const {fontsLoaded, fontError, onLayoutRootView} = useFontsHook()

  if (!fontsLoaded && !fontError) {
    return null
  }
  return (
    <View className='flex-1 justify-center items-center' onLayout={onLayoutRootView}>
      <Text className='text-3xl font-SpaceMonoRegular'>SpaceMono-Regular</Text>
      <Text className='text-green-700 text-lg '>Index screen</Text>
    </View>
  )
}
