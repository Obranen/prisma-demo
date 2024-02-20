import { format } from 'date-fns'
import { View } from 'react-native'
import { Card, Divider, Text } from 'react-native-paper'
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

  const commentCreateDate = format(
    new Date(String(comment.created_at)),
    'dd-MM-yyyy HH-mm-ss'
  )
  const commentUpdateDate = format(
    new Date(String(comment.updated_at)),
    'dd-MM-yyyy HH-mm-ss'
  )

  return (
    <Card style={{ width: wp('90%') }} className='mx-auto mb-[10px] p-[6px]'>
      <View className='flex-row justify-between mx-[4px]'>
        <Text className='font-bold' style={{ fontSize: hp(2) }}>
          {capitalizeFirstLetter(comment.name)}
        </Text>
        <Text className='font-bold text-gray-400'>
          Создано: {commentCreateDate}
        </Text>
      </View>
      <Card.Content className='mt-[10px] mb-[6px]'>
        <Text>{'\t' + capitalizeFirstLetter(comment.description)}</Text>
      </Card.Content>
      <Divider />
      <View className='flex-row items-center justify-between'>
        <View className='flex-row ml-[-3px]'>
          <CommentEdit comment={comment} />
          <CommentClose />
          <CommentDelete commentId={comment.id} />
        </View>
        <Text className='font-bold text-gray-400 mr-[3px]'>
          Обновлено: {commentUpdateDate}
        </Text>
      </View>
    </Card>
  )
}
