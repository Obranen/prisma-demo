import { IconButton, MD3Colors } from 'react-native-paper'

interface ICommentUpdate {}

export default function CommentUpdate({}: ICommentUpdate) {
  return (
    <IconButton
      icon='application-edit'
      iconColor={MD3Colors.error50}
      size={20}
      onPress={() => console.log('edit')}
      className='p-0 m-0'
    />
  )
}
