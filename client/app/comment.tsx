import { useQuery } from '@tanstack/react-query'
import { FlatList, View } from 'react-native'
import { Button, Card, TextInput, Text } from 'react-native-paper'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
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
      <Text
        style={{ fontSize: hp(2.5) }}
        className='text-center mt-[20px] mb-[6px] font-medium text-fuchsia-600'
      >
        Создать комментарий
      </Text>
      <TextInput
        mode='outlined'
        label='Name'
        placeholder='Name...'
        right={<TextInput.Affix />}
        style={{ width: wp('80%') }}
        className='mx-auto'
      />
      <TextInput
        mode='outlined'
        label='Description'
        placeholder='Description...'
        right={<TextInput.Affix />}
        style={{ width: wp('80%') }}
        className='mx-auto'
      />
      <Button
        icon='camera'
        mode='contained'
        onPress={() => console.log('Pressed')}
        style={{ width: wp('80%') }}
        className='mx-auto mt-[10px]'
      >
        <Text style={{ fontSize: hp(2) }} className='font-bold text-white'>
          Добавить
        </Text>
      </Button>
      <Text
        style={{ fontSize: hp(2.2) }}
        className='text-center mt-[20px] mb-[6px] font-medium text-fuchsia-600'
      >
        Список комментариев:
      </Text>
      <FlatList
        data={comments.data}
        renderItem={({ item }) => (
          <Card style={{ width: wp('80%') }} className='mx-auto mb-[10px]'>
            <Card.Title title={item.name} />
            {/* <Text
              style={{ fontSize: hp(2.2) }}
              className='text-center mt-[20px] mb-[6px] font-medium text-fuchsia-600'
            >
              {item.createdDate}
            </Text> */}
            <Card.Content>
              <Text variant='bodyMedium'>{item.description}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  )
}
