import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

export default function TodoScreen() {
  const dataTodo = [
    {
      id: 1,
      title: 'Купить',
      description: 'Нужно что-то купить',
    },
    {
      id: 2,
      title: 'Нанять',
      description: 'Нужно что-то нанять',
    },
  ]

  return (
    <View className='flex-1 dark:bg-gray-800'>
      <Text
        style={{ fontSize: hp(3) }}
        className='text-center font-bold dark:text-white p-2'
      >
        Todo List
      </Text>
      <FlatList
        data={dataTodo}
        renderItem={({ item }) => (
          <View style={{width: wp(90)}} className='border-2 dark:border-white rounded-md mx-auto my-2 p-2'>
            <Text className='dark:text-white'>{item.title}</Text>
            <Text className='dark:text-white'>{item.description}</Text>
          </View>
        )}
      />
    </View>
  )
}
