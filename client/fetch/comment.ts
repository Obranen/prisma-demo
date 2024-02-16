import axios from 'axios'
import { IComment } from '../interface/comment'
import { Platform } from 'react-native'

const baseUrl =
  Platform.OS === 'android'
    ? process.env.EXPO_PUBLIC_FETCH_MOBILE_URL
    : process.env.EXPO_PUBLIC_FETCH_WEB_URL

export const getComments = async () => {
  try {
    const response = await axios.get<IComment[]>(`${baseUrl}/api/comment`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const createComment = async (data: IComment) => {
  try {
    await axios.post(`${baseUrl}/api/comment/create`, data)
  } catch (e) {
    console.log(e)
  }
}

export const deleteComment = async (id: string) => {
  try {
    await axios.delete(`${baseUrl}/api/comment/${id}`)
    return null
  } catch (e) {
    console.log(e)
  }
}

export const updateComment = async (data: IComment) => {
  try {
    await axios.put(`${baseUrl}/api/comment/update/${data.id}`, data)
  } catch (e) {
    console.log(e)
  }
}
