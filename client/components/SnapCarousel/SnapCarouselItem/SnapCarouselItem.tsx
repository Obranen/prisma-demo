import { View } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { ParallaxImage } from 'react-native-snap-carousel'

export default function SnapCarouselItem({item}: any, paralaxProps: any) {
  return (
    <View style={{width: wp(100)-70, height: hp(25)}}>
      <ParallaxImage
        source={item}
        containerStyle={{borderRadius: 30, flex: 1}}
        style={{resizeMode: 'contain'}}
        parallaxFactor={1}
        {...paralaxProps}
      />
    </View>
  )
}