import {
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons
} from '@expo/vector-icons'
import { Drawer } from 'expo-router/drawer'
import { useColorScheme } from 'nativewind'
import DrawerContent from '../components/DrawerContent'

export default function DrawerNavigation() {
  const { colorScheme } = useColorScheme()

  return (
    <Drawer
      screenOptions={{
        drawerActiveBackgroundColor:
          colorScheme === 'dark' ? '#b4005a' : '#ff7dbeff',
        drawerInactiveBackgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
        drawerActiveTintColor: colorScheme === 'dark' ? '#fff' : '#000',
        drawerInactiveTintColor: colorScheme === 'dark' ? '#fff' : '#000',
        drawerLabelStyle: {
          color: colorScheme === 'dark' ? '#fff' : '#000',
        },
        drawerStyle: {
          backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
        },
        headerStyle: {
          backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
        },
        headerTitleStyle: {
          color: colorScheme === 'dark' ? '#fff' : '#000',
        },
        headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
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
        name='carousel'
        options={{
          drawerLabel: 'Carousel',
          title: 'Carousel',
          drawerIcon: ({ size, color }) => {
            return <MaterialCommunityIcons name='view-carousel-outline' size={size} color={color} />
          },
        }}
      />
      <Drawer.Screen
        name='todo'
        options={{
          drawerLabel: 'Todo',
          title: 'Todo',
          drawerIcon: ({ size, color }) => {
            return <FontAwesome name='list-alt' size={size} color={color} />
          },
        }}
      />
      <Drawer.Screen
        name='product'
        options={{
          drawerLabel: 'Product',
          title: 'Product',
          drawerIcon: ({ size, color }) => {
            return <MaterialIcons name='menu-book' size={size} color={color} />
          },
        }}
      />
    </Drawer>
  )
}
