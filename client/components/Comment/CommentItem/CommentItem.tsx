import { Card, Text } from 'react-native-paper'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { IComment } from '../../../interface/comment'

interface ICommentItem {
  comment: IComment
}

export default function CommentItem({comment}: ICommentItem) {
  return (
    <Card style={{ width: wp('80%') }} className='mx-auto mb-[10px]'>
      <Card.Title title={comment.name} />
      <Card.Content>
        <Text variant='bodyMedium'>{comment.description}</Text>
      </Card.Content>
    </Card>
  )
}
