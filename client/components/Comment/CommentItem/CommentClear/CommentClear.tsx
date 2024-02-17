import { IconButton, MD3Colors } from 'react-native-paper'
import { useCommentStore } from '../../../../store/useCommentStore'

export default function CommentClear() {
  const commentClear = useCommentStore((state) => state.commentClear)

  return (
    <IconButton
      icon='close-box-outline'
      iconColor={MD3Colors.error50}
      size={20}
      onPress={commentClear}
      className='p-0 m-0'
    />
  )
}
