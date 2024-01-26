import { Link, Stack } from 'expo-router'
import { View, Text } from 'react-native'

export default function ContactScreen() {
  return (
    <View className='py-10'>
      <Stack.Screen
        options={{
          title: 'contact',
          headerShown: true,
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Text>Contact screen</Text>
      <Link className='text-red-500' href='/'>
        Home
      </Link>
      <Link className='text-red-500' href='/about'>
        About
      </Link>
    </View>
  )
}
