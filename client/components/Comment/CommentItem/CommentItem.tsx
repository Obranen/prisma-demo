import { format } from 'date-fns'
import { View } from 'react-native'
import { Card, Text } from 'react-native-paper'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { useFirstLetterHook } from '../../../hooks/useFirstLetterHook'
import { IComment } from '../../../interface/comment'
import CommentClear from './CommentClear/CommentClear'
import CommentDelete from './CommentDelete/CommentDelete'
import CommentEdit from './CommentEdit/CommentEdit'

interface ICommentItem {
  comment: IComment
}

export default function CommentItem({ comment }: ICommentItem) {
  const { capitalizeFirstLetter } = useFirstLetterHook()

  const commentDate = format(
    new Date(String(comment.created_at)),
    'dd-MM-yyyy HH-mm-ss'
  )

  return (
    <Card style={{ width: wp('90%') }} className='mx-auto mb-[10px]'>
      <View className='flex-row justify-between p-[8px]'>
        <Text className='font-bold' style={{ fontSize: hp(2) }}>
          {capitalizeFirstLetter(comment.name)}
        </Text>
        <View className='flex-row'>
          <CommentEdit comment={comment} />
          <CommentClear />
          <CommentDelete commentId={comment.id} />
        </View>
        <Text className='font-bold text-gray-400'>{commentDate}</Text>
      </View>
      <Card.Content className=''>
        <Text>{capitalizeFirstLetter(comment.description)}</Text>
      </Card.Content>
    </Card>
  )
}
