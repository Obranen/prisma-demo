import { View } from 'react-native'
import {
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import Carousel from 'react-native-snap-carousel'
import CarouselImagesItem from './SnapCarouselItem'

export default function SnapCarousel() {
  const images = [
    require('../assets/images/slides/slide-1-mobile.webp'),
    require('../assets/images/slides/slide-2-mobile.webp'),
    require('../assets/images/slides/slide-3-mobile.webp'),
    require('../assets/images/slides/slide-4-mobile.webp'),
    require('../assets/images/slides/slide-5-mobile.webp'),
  ]
  
  return (
    <View>
      <Carousel 
        data={images}
        loop={true}
        autoplay={true}
        renderItem={CarouselImagesItem}
        hasParallaxImages={true}
        sliderWidth={wp(100)}
        firstItem={1}
        autoplayInterval={4000}
        itemWidth={wp(100)-70}
        slideStyle={{display: 'flex', alignItems: 'center'}}
      />
    </View>
  )
}