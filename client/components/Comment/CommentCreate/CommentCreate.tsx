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
import { commentCreate } from '../../../fetch/comment'
import { IComment } from '../../../interface/comment'

export default function CommentCreate() {
  const queryClient = useQueryClient()
  const createCommentMutation = useMutation({
    mutationFn: commentCreate,
    onSuccess: async () => {
      await queryClient.invalidateQueries()
    },
  })

  const { handleSubmit, control, resetField } = useForm<IComment>({
    defaultValues: { name: '', description: '' },
  })
  const { errors } = useFormState({ control })
  const onSubmit: SubmitHandler<IComment> = (data) => {
    createCommentMutation.mutate({
      id: data.id,
      name: data.name,
      description: data.description
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
      <Button
        icon='camera'
        mode='contained'
        onPress={handleSubmit(onSubmit)}
        style={{ width: wp('50%') }}
        className='mx-auto mt-[10px]'
      >
        <Text style={{ fontSize: hp(2) }} className='font-bold text-white'>
          Добавить
        </Text>
      </Button>
      <Text
        style={{ fontSize: hp(2.2) }}
        className='text-center mt-[20px] mb-[6px] font-medium text-fuchsia-600'
      >
        Список комментариев:
      </Text>
    </>
  )
}
