import { Text, View } from 'react-native'

export default function AboutScreen() {
  return (
    <View className='flex-1 bg-blue-200 dark:bg-myDefaultLight'>
      <Text className='dark:bg-myDefaultDark text-black'>About screen</Text>
      <Text className='text-white dark:bg-red-500 dark:text-myDefaultDark'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi velit error amet temporibus odit enim eos blanditiis consequuntur? Eligendi, esse accusamus. Qui blanditiis voluptas quam similique nobis hic non distinctio!</Text>
    </View>
  )
}
