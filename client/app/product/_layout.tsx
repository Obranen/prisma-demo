import { Entypo, FontAwesome5 } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function ProductLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='drink'
        options={{
          tabBarLabel: 'Drink',
          tabBarIcon: ({ size, color }) => {
            return <Entypo name='drink' size={size} color={color} />
          },
        }}
      />
      <Tabs.Screen
        name='pizza'
        options={{
          tabBarLabel: 'Pizza',
          tabBarIcon: ({ size, color }) => {
            return <FontAwesome5 name='pizza-slice' size={size} color={color} />
          },
        }}
      />
    </Tabs>
  )
}
