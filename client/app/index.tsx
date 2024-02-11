import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

export default function IndexScreen() {
  const router = useRouter()

  return (
    <View className='justify-end flex-1'>
      <Image
        className='absolute w-full h-full'
        source={require('../assets/images/workout-mobile.webp')}
      />
      <LinearGradient
        colors={['transparent', '#3f3f46']}
        style={{ width: wp(100), height: hp(60) }}
        start={{ x: 0, y: 0.2 }}
        end={{ x: 0, y: 0.8 }}
        className='flex justify-end pb-6 space-y-4'
      >
        <Animated.View
          entering={FadeInDown.delay(400).springify()}
          className='flex items-center'
        >
          <Text style={{ fontSize: hp(5) }} className='font-bold text-white'>
            Street{' '}
            <Text style={{ fontSize: hp(5) }} className='text-pink-700'>
              Workout
            </Text>
          </Text>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(600).springify()}>
          <TouchableOpacity
            onPress={() => router.push('/carousel')}
            style={{ height: hp(5.5), width: wp(70) }}
            className='bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200'
          >
            <Text
              style={{ fontSize: hp(2.7) }}
              className='font-bold text-white'
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  )
}
