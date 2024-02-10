import { Octicons } from '@expo/vector-icons'
import { useState } from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { TextInput } from 'react-native-paper'

export default function TodoScreen() {
  // const [todoText, setTodoText] = useState('')
  const [text, setText] = useState('')

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
        className='p-2 font-bold text-center dark:text-white'
      >
        Todo List
      </Text>
      <View
        style={{ height: hp(6), width: wp(80) }}
        className='flex-row items-center mx-auto bg-white border-b-2 rounded-md focus:border-red-600'
      >
        <Octicons
          style={{ paddingLeft: 8, paddingRight: 4 }}
          name='mail'
          size={hp(2.7)}
          color='grey'
        />

        <TextInput
          mode='outlined'
          label='Email'
          value={text}
          onChangeText={(text) => setText(text)}
          outlineColor='red'
          activeOutlineColor='blue'
          className='text-red-500 placeholder:bg-slate-100 placeholder:text-red-400'
          underlineColor='green'
          selectionColor='yellow'
          textColor='green'
          // cursorColor='grey'
          activeUnderlineColor='red'
          
        />
        
        {/* <TextInput
          onChangeText={setTodoText}
          value={todoText}
          placeholder='Email'
          className='flex-1 w-full h-full py-0 font-medium text-gray-500'
          style={{ fontSize: wp(4) }}
          placeholderTextColor='#adadad'
        /> */}
      </View>

      <FlatList
        data={dataTodo}
        renderItem={({ item }) => (
          <View
            style={{ width: wp(80) }}
            className='p-2 mx-auto my-2 border-2 rounded-md dark:border-white'
          >
            <Text className='dark:text-white'>{item.title}</Text>
            <Text className='dark:text-white'>{item.description}</Text>
          </View>
        )}
      />
    </View>
  )
}
