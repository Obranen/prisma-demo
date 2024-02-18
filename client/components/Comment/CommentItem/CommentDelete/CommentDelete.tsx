import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCommentFetch } from '../../../../fetch/comment.fetch'
import { IconButton, MD3Colors } from 'react-native-paper'

interface ICommentDelete {
  commentId: string | undefined
}

export default function CommentDelete({commentId}: ICommentDelete) {
  const queryClient = useQueryClient()
  
  const deleteCommentMutation = useMutation({
    mutationFn: deleteCommentFetch,
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: ['comment']})
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