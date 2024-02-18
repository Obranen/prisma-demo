import { IconButton, MD3Colors } from 'react-native-paper'
import { IComment } from '../../../../interface/comment.interface'
import { useCommentStore } from '../../../../store/useComment.store'

interface ICommentUpdate {
  comment: IComment
}

export default function CommentEdit({ comment }: ICommentUpdate) {
  const setCommentEdit = useCommentStore((state) => state.setCommentEdit)
  const setDataCommentEdit = useCommentStore(
    (state) => state.setDataCommentEdit
  )

  const editPress = () => {
    setCommentEdit()
    setDataCommentEdit(comment)
  }

  return (
    <IconButton
      icon='application-edit'
      iconColor={MD3Colors.error50}
      size={20}
      onPress={editPress}
      className='p-0 m-0'
    />
  )
}
