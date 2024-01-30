import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function AboutScreen() {
  return (
    <View className='flex-1 bg-blue-200'>
      <Text className=''>About screen</Text>
      <Text className='text-blue-900 font-SingleDayRegular text-2xl dark:bg-cyan-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi velit error amet temporibus odit enim eos blanditiis consequuntur? Eligendi, esse accusamus. Qui blanditiis voluptas quam similique nobis hic non distinctio!</Text>
    </View>
  )
} 
