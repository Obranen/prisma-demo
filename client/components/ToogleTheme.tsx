import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'
import { Switch, View, Text } from 'react-native'

export default function ToogleTheme() {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  
  return (
    <View className='flex-1 justify-center items-center'>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Switch
        value={colorScheme === 'dark'}
        onChange={toggleColorScheme}
      />
    </View>
  )
}