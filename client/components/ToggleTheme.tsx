import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'
import { Switch, View } from 'react-native'

export default function ToggleTheme() {
  const { colorScheme, toggleColorScheme } = useColorScheme()

  return (
    <View className='flex-1 justify-center items-center'>
      <StatusBar
        backgroundColor={colorScheme === 'dark' ? '#000' : '#fff'}
        style={colorScheme === 'dark' ? 'light' : 'dark'}
      />
      <Switch
        value={colorScheme === 'dark'}
        onChange={toggleColorScheme}
        trackColor={{ false: '#818181', true: '#818181' }}
        thumbColor={colorScheme === 'dark' ? '#fff' : '#000'}
      />
    </View>
  )
}
