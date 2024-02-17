import { Button, HelperText, Text, TextInput } from 'react-native-paper'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from 'react-hook-form'
import { commentCreate, commentUpdate } from '../../../fetch/comment'
import { IComment } from '../../../interface/comment'
import { useCommentStore } from '../../../store/useCommentStore'

export default function CommentCreate() {
  const isCommentEdit = useCommentStore((state) => state.isCommentEdit)
  const queryClient = useQueryClient()

  const commentCreateMutation = useMutation({
    mutationFn: commentCreate,
    onSuccess: async () => {
      await queryClient.invalidateQueries()
    },
  })

  const commentUpdateMutation = useMutation({
    mutationFn: commentUpdate,
    onSuccess: async () => {
      await queryClient.invalidateQueries()
    },
  })

  const { handleSubmit, control, resetField } = useForm<IComment>({
    defaultValues: { name: '', description: '' },
  })
  const { errors } = useFormState({ control })
  const createPress: SubmitHandler<IComment> = (data) => {
    commentCreateMutation.mutate({
      id: data.id,
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
          <Text style={{ fontSize: hp(2) }} className='font-bold text-white'>
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
