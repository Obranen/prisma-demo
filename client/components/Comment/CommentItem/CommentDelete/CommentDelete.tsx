import { useMutation, useQueryClient } from '@tanstack/react-query'
import { commentDelete } from '../../../../fetch/comment'
import { IconButton, MD3Colors } from 'react-native-paper'

interface ICommentDelete {
  commentId: string | undefined
}

export default function CommentDelete({commentId}: ICommentDelete) {
  const queryClient = useQueryClient()
  
  const deleteCommentMutation = useMutation({
    mutationFn: commentDelete,
    onSuccess: async () => {
      await queryClient.invalidateQueries()
    }
  })
  return (
    <IconButton
            icon='delete'
            iconColor={MD3Colors.error50}
            size={20}
            onPress={() => deleteCommentMutation.mutate(commentId!)}
            className='p-0 m-0'
          />
  )
}