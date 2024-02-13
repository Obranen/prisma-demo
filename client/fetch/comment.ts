import axios from 'axios'
import { IComment } from '../interface/comment'

export const getUsers = async () => {
  try {
    const response = await axios.get<IComment[]>(
      `${process.env.EXPO_PUBLIC_FETCH_MOBILE_URL}/api/comment`
    )
    return response.data
  } catch (error) {
    console.error(error)
  }
}
