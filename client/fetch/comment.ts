import axios from 'axios'
import { IComment } from '../interface/comment'
import { Platform } from 'react-native'

const baseUrl =
  Platform.OS === 'android'
    ? process.env.EXPO_PUBLIC_FETCH_MOBILE_URL
    : process.env.EXPO_PUBLIC_FETCH_WEB_URL

export const getUsers = async () => {
  try {
    const response = await axios.get<IComment[]>(`${baseUrl}/api/comment`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
