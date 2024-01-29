import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'
import { Switch, View, Text } from 'react-native'

export default function ToggleTheme() {
  const { colorScheme, toggleColorScheme } = useColorScheme()

  return (
    <View className='flex-1 justify-center items-center bg-blend-lighten'>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Switch
        value={colorScheme === 'dark'}
        onChange={toggleColorScheme}
      />
      <Text className='dark: text-blue'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum est esse neque sunt dolorem minus reprehenderit quasi saepe, deserunt nisi et quos laborum voluptate ad repellendus aperiam, accusantium quod?</Text>
    </View>
  )
}