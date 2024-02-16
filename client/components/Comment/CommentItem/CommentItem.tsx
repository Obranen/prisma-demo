import { Card, IconButton, MD3Colors, Text } from 'react-native-paper'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { IComment } from '../../../interface/comment'
import { View } from 'react-native'

interface ICommentItem {
  comment: IComment
}

export default function CommentItem({ comment }: ICommentItem) {
  var dateBeautiful = new Date(String(comment.created_at)).toLocaleString()

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <Card style={{ width: wp('90%') }} className='mx-auto mb-[10px]'>
      <View className='flex-row justify-between p-[8px]'>
        <Text className='font-bold' style={{ fontSize: hp(2) }}>
          {capitalizeFirstLetter(comment.name)}
        </Text>
        <View className='flex-row'>
          <IconButton
            icon='application-edit'
            iconColor={MD3Colors.error50}
            size={20}
            onPress={() => console.log('edit')}
            className='p-0 m-0'
          />
          <IconButton
            icon='delete'
            iconColor={MD3Colors.error50}
            size={20}
            onPress={() => console.log('delete')}
            className='p-0 m-0'
          />
        </View>
        <Text className='font-bold text-gray-400'>{dateBeautiful}</Text>
      </View>
      <Card.Content className=''>
        <Text>{capitalizeFirstLetter(comment.description)}</Text>
      </Card.Content>
    </Card>
  )
}
