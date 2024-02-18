import { IconButton, MD3Colors } from 'react-native-paper'
import { useCommentStore } from '../../../../store/useCommentStore'

export default function CommentClose() {
  const setCommentClose = useCommentStore((state) => state.setCommentClose)

  return (
    <IconButton
      icon='close-box-outline'
      iconColor={MD3Colors.error50}
      size={20}
      onPress={setCommentClose}
      className='p-0 m-0'
    />
  )
}
