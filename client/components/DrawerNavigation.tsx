import {
  AntDesign,
  Entypo,
  FontAwesome5,
  MaterialIcons,
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
        name='about'
        options={{
          drawerLabel: 'About',
          title: 'About',
          drawerIcon: ({ size, color }) => {
            return <FontAwesome5 name='info-circle' size={size} color={color} />
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
            return <MaterialIcons name='menu-book' size={size} color={color} />
          },
        }}
      />
    </Drawer>
  )
}
