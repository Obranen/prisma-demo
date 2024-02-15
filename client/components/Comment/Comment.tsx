import { useQuery } from '@tanstack/react-query'
import { FlatList, View } from 'react-native'
import { Text } from 'react-native-paper'
import { getComments } from '../../fetch/comment'
import CommentCreate from './CommentCreate/CommentCreate'
import CommentItem from './CommentItem/CommentItem'

export default function Comment() {
  const comments = useQuery({
    queryKey: ['comment'],
    queryFn: () => getComments(),
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
      <CommentCreate />
      <FlatList
        data={comments.data}
        renderItem={({ item }) => (
          <CommentItem comment={item} />
        )}
      />
    </View>
  )
}
