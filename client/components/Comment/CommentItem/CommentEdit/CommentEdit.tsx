import { IconButton, MD3Colors } from 'react-native-paper'
import { IComment } from '../../../../interface/comment'
import { useCommentStore } from '../../../../store/useCommentStore'

interface ICommentUpdate {
  comment: IComment
}

export default function CommentEdit({ comment }: ICommentUpdate) {
  const commentEdit = useCommentStore((state) => state.commentEdit)
  
  return (
    <IconButton
      icon='application-edit'
      iconColor={MD3Colors.error50}
      size={20}
      onPress={commentEdit}
      className='p-0 m-0'
    />
  )
}
