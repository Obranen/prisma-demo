import { Octicons } from '@expo/vector-icons'
import { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

export default function TodoScreen() {
  const [todoText, setTodoText] = useState('')

  // console.log('todoText', todoText)

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
      <View
        style={{ height: hp(6), width: wp(80) }}
        className='flex-row border-b-2 focus:border-red-600 mx-auto bg-white items-center rounded-md'
      >
        <Octicons
          style={{ paddingLeft: 8, paddingRight: 4,}}
          name='mail'
          size={hp(2.7)}
          color='grey'
        />
        <TextInput
          onChangeText={setTodoText}
          value={todoText}
          placeholder='Email'
          className='flex-1 text-gray-500 w-full font-medium h-full py-0'
          style={{ fontSize: wp(4) }}
          placeholderTextColor='#adadad'
        />
      </View>

      <FlatList
        data={dataTodo}
        renderItem={({ item }) => (
          <View
            style={{ width: wp(80) }}
            className='border-2 dark:border-white rounded-md mx-auto my-2 p-2'
          >
            <Text className='dark:text-white'>{item.title}</Text>
            <Text className='dark:text-white'>{item.description}</Text>
          </View>
        )}
      />
    </View>
  )
}
