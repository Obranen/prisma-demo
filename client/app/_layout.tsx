import { Drawer } from 'expo-router/drawer'
import { Text, View } from 'react-native'
import { useFontsHook } from '../hooks/useFontsHook'
import {
  AntDesign,
  Entypo,
  FontAwesome5,
  MaterialIcons,
} from '@expo/vector-icons'
import DrawerContent from '../components/DrawerContent'

export default function RootLayout() {
  let { fontsLoaded, fontError, onLayoutRootView } = useFontsHook()

  if (!fontsLoaded && !fontError) {
    return (
      <View className='flex-1 justify-center items-center'>
        <Text className='text-red-200'>Download...</Text>
      </View>
    )
  }
  return (
    <View className='flex-1' onLayout={onLayoutRootView}>
      <Drawer
        screenOptions={{
          drawerActiveBackgroundColor: '#4b4b4b',
          drawerActiveTintColor: 'white',
          drawerInactiveBackgroundColor: 'white',
        }}
        drawerContent={DrawerContent}
      >
        <Drawer.Screen
          name='index'
          options={{
            drawerLabel: 'Home',
            title: 'Home',
            drawerIcon: ({ size, color }) => {
              return <Entypo name='home' size={size} color={color} />
            },
          }}
        />
        <Drawer.Screen
          name='about'
          options={{
            drawerLabel: 'About',
            title: 'About',
            drawerIcon: ({ size, color }) => {
              return (
                <FontAwesome5 name='info-circle' size={size} color={color} />
              )
            },
          }}
        />
        <Drawer.Screen
          name='contact'
          options={{
            drawerLabel: 'Contact',
            title: 'Contact',
            drawerIcon: ({ size, color }) => {
              return <AntDesign name='contacts' size={size} color={color} />
            },
          }}
        />
        <Drawer.Screen
          name='product'
          options={{
            drawerLabel: 'Product',
            title: 'Product',
            drawerIcon: ({ size, color }) => {
              return (
                <MaterialIcons name='menu-book' size={size} color={color} />
              )
            },
          }}
        />
      </Drawer>
    </View>
  )
}
