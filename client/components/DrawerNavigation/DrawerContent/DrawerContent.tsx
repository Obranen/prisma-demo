import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import { View } from 'react-native'
import ToggleTheme from './ToggleTheme/ToggleTheme'
import Logout from './Logout/Logout'

export default function DrawerContent(props: any) {
  return (
    <View className='flex-1'>
      <DrawerContentScrollView {...props}>
        <ToggleTheme />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Logout/>
    </View>
  )
}
