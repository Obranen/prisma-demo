import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import { DrawerActions } from '@react-navigation/native'
import { useNavigation } from 'expo-router/src/useNavigation'
import { Text, TouchableOpacity, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import ToogleTheme from './ToggleTheme'

export default function DrawerContent(props: any) {
  const navigation = useNavigation()
  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer())
  }

  return (
    <View className='flex-1 dark:bg-black'>
      <DrawerContentScrollView {...props}>
        <ToogleTheme />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <TouchableOpacity
        onPress={closeDrawer}
        className='flex items-center justify-center mx-auto rounded-md border-[2px] border-neutral-200 my-4'
      >
        <Text
          style={{ fontSize: hp(2) }}
          className='font-bold px-6 py-2'
        >
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  )
}
