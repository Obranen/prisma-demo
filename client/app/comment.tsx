import { useQuery } from '@tanstack/react-query'
import { FlatList, Text, View } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { getUsers } from '../fetch/comment'

export default function TodoScreen() {
  const comments = useQuery({
    queryKey: ['comment'],
    queryFn: () => getUsers(),
  })

  if (comments.isLoading) {
    return (
      <View className='flex-1'>
        <Text>Loading...</Text>
      </View>
    )
  }

  if (comments.error) {
    return (
      <View className='flex-1'>
        <Text>Error... Пользователи не загружены</Text>
      </View>
    )
  }

  return (
    <View className='flex-1 dark:bg-gray-800'>
      <FlatList
        data={comments.data}
        renderItem={({ item }) => (
          <View
            style={{ width: wp(80) }}
            className='p-2 mx-auto my-2 border-2 rounded-md dark:border-white'
          >
            <Text className='dark:text-white'>{item.name}</Text>
            <Text className='dark:text-white'>{item.description}</Text>
          </View>
        )}
      />
    </View>
  )
}
