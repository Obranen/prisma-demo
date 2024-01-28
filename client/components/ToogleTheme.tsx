import { useColorScheme } from 'nativewind'
import { Switch, View } from 'react-native'

export default function ToogleTheme() {
  const { colorScheme, setColorScheme } = useColorScheme()
  
  return (
    <View className='flex-1 justify-center items-center'>
      <Switch
        value={colorScheme === 'dark'}
        onChange={() =>
          colorScheme === 'dark'
            ? setColorScheme('light')
            : setColorScheme('dark')
        }
      />
    </View>
  )
}