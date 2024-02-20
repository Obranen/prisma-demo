import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from 'react-hook-form'
import { Button, HelperText, Text, TextInput } from 'react-native-paper'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { createCommentFetch, updateCommentFetch } from '../../../fetch/comment.fetch'
import { IComment } from '../../../interface/comment.interface'
import { useCommentStore } from '../../../store/useComment.store'
import { useEffect, useState } from 'react'

export default function CommentCreate() {
  const isCommentEdit = useCommentStore((state) => state.isCommentEdit)
  const setCommentClose = useCommentStore((state) => state.setCommentClose)
  const dataCommentEdit = useCommentStore((state) => state.dataCommentEdit)
  const [valueComment, setValueComment] = useState<IComment>({
    id: '',
    name: '',
    description: '',
  })
  const queryClient = useQueryClient()

  const commentCreateMutation = useMutation({
    mutationFn: createCommentFetch,
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: ['comment']})
    },
  })

  const commentUpdateMutation = useMutation({
    mutationFn: updateCommentFetch,
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: ['comment']})
    },
  })

  useEffect(() => {
    if (isCommentEdit) {
      setValueComment({ id: dataCommentEdit.id, name: dataCommentEdit.name, description: dataCommentEdit.description })
    } else {
      setValueComment({ id: '', name: '', description: '' })
    }
  }, [isCommentEdit])

  const { handleSubmit, control, resetField } = useForm<IComment>({
    defaultValues: { name: '', description: '' },
    values: valueComment,
  })
  const { errors } = useFormState({ control })
  const createPress: SubmitHandler<IComment> = (data) => {
    commentCreateMutation.mutate({
      name: data.name,
      description: data.description,
    })

    resetField('name')
    resetField('description')
  }

  const updatePress: SubmitHandler<IComment> = (data) => {
    commentUpdateMutation.mutate({
      id: data.id,
      name: data.name,
      description: data.description,
    })

    setCommentClose()
    resetField('name')
    resetField('description')
  }

  return (
    <>
      <Text
        style={{ fontSize: hp(2.5) }}
        className='text-center mt-[20px] mb-[6px] font-medium text-fuchsia-600'
      >
        Создать комментарий
      </Text>
      <Controller
        control={control}
        name='name'
        rules={{ required: 'Заполните поле' }}
        render={({ field: { value, onChange, onBlur } }) => (
          <>
            <TextInput
              mode='outlined'
              label='Name'
              placeholder='Name...'
              right={<TextInput.Affix />}
              style={{ width: wp('90%') }}
              className='mx-auto'
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={!!errors.name?.message}
            />
            <HelperText type='error' visible={!!errors.name?.message}>
              Email address is invalid!
            </HelperText>
          </>
        )}
      />
      <Controller
        control={control}
        name='description'
        rules={{ required: 'Заполните поле' }}
        render={({ field: { value, onChange, onBlur } }) => (
          <>
            <TextInput
              mode='outlined'
              label='Description'
              placeholder='Description...'
              right={<TextInput.Affix />}
              style={{ width: wp('90%') }}
              className='mx-auto'
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={!!errors.description?.message}
            />
            <HelperText type='error' visible={!!errors.description?.message}>
              Email address is invalid!
            </HelperText>
          </>
        )}
      />
      {isCommentEdit ? (
        <Button
          icon='content-save'
          mode='contained'
          onPress={handleSubmit(updatePress)}
          style={{ width: wp('60%') }}
          className='mx-auto mt-[10px]'
        >
          <Text style={{ fontSize: hp(2) }} className='font-bold text-white'>
            Сохранить
          </Text>
        </Button>
      ) : (
        <Button
          icon='message-plus-outline'
          mode='contained'
          onPress={handleSubmit(createPress)}
          style={{ width: wp('60%') }}
          className='mx-auto mt-[10px]'
        >
          <Text style={{ fontSize: hp(2) }} className='font-bold text-yellow-300 dark:text-red-500'>
            Добавить
          </Text>
        </Button>
      )}
      <Text
        style={{ fontSize: hp(2.2) }}
        className='text-center mt-[20px] mb-[6px] font-medium text-fuchsia-600'
      >
        Список комментариев:
      </Text>
      
    </>
  )
}
