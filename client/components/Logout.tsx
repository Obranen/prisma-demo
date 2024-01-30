import { DrawerActions } from '@react-navigation/native'
import { useNavigation } from 'expo-router/src/useNavigation'
import { Text, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function Logout() {
  const navigation = useNavigation()
  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer())
  }

  return (
    <TouchableOpacity
      onPress={closeDrawer}
      className='flex border-black items-center justify-center mx-auto rounded-md border-[2px] my-4 dark:border-white'
    >
      <Text
        style={{ fontSize: hp(2) }}
        className='text-black font-bold px-6 py-2 dark:text-white'
      >
        Logout
      </Text>
    </TouchableOpacity>
  )
}
