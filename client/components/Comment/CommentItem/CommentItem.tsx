import { format } from 'date-fns'
import { View } from 'react-native'
import { Card, Text } from 'react-native-paper'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { useFirstLetterHook } from '../../../hook/useFirstLetter.hook'
import { IComment } from '../../../interface/comment.interface'
import CommentClose from './CommentClose/CommentClose'
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
  const commentDateUpdate = format(
    new Date(String(comment.updated_at)),
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
          <CommentClose />
          <CommentDelete commentId={comment.id} />
        </View>
        <Text className='font-bold text-gray-400'>{commentDate}</Text>
        {/* <Text className='block font-bold text-gray-400'>{commentDateUpdate}</Text> */}
      </View>
      <Card.Content className=''>
        <Text>{capitalizeFirstLetter(comment.description)}</Text>
      </Card.Content>
    </Card>
  )
}
