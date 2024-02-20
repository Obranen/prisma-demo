import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { ToggleButton } from 'react-native-paper'
import { useThemeHook } from '../../../../hook/useTheme.hook'

export default function ToggleTheme() {
  const { toggleColorScheme, colorScheme } = useThemeHook()

  return (
    <View className='items-center justify-center flex-1'>
      <StatusBar
        backgroundColor={colorScheme === 'dark' ? '#000' : '#fff'}
        style={colorScheme === 'dark' ? 'light' : 'dark'}
      />
      <ToggleButton
        icon={
          colorScheme === 'dark'
            ? 'moon-waxing-crescent'
            : 'white-balance-sunny'
        }
        onPress={toggleColorScheme}
      />
    </View>
  )
}
