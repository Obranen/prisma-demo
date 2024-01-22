import { Text, View } from 'react-native'
import { useFontsHook } from '../hooks/useFontsHook'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { LinearGradient } from 'expo-linear-gradient'

export default function Index() {
  const { fontsLoaded, fontError, onLayoutRootView } = useFontsHook()

  if (!fontsLoaded && !fontError) {
    return null
  }
  return (
    <View className='flex-1 justify-end' onLayout={onLayoutRootView}>
      <LinearGradient
        colors={['transparent', '#18181b']}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className='flex justify-end pb-12 space-y-8'
      >
        <View className='flex items-center'>
          <Text style={{ fontSize: hp(5) }} className='text-white font-bold'>
            Street{' '}
            <Text
              style={{ fontSize: hp(5) }}
              className='text-pink-700  font-bold'
            >
              Workout
            </Text>
          </Text>
        </View>
      </LinearGradient>
    </View>
  )
}
