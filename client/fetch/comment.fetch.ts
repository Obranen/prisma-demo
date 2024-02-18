import axios from 'axios'
import { IComment } from '../interface/comment.interface'
import { Platform } from 'react-native'

const baseUrl =
  Platform.OS === 'android'
    ? process.env.EXPO_PUBLIC_FETCH_MOBILE_URL
    : process.env.EXPO_PUBLIC_FETCH_WEB_URL

export const getCommentsFetch = async () => {
  try {
    const response = await axios.get<IComment[]>(`${baseUrl}/api/comment`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const createCommentFetch = async (data: IComment) => {
  try {
    await axios.post(`${baseUrl}/api/comment/create`, data)
  } catch (e) {
    console.log(e)
  }
}

export const deleteCommentFetch = async (id: string) => {
  try {
    await axios.delete(`${baseUrl}/api/comment/${id}`)
    return null
  } catch (e) {
    console.log(e)
  }
}

export const updateCommentFetch = async (data: IComment) => {
  try {
    await axios.put(`${baseUrl}/api/comment/update/`, data)
  } catch (e) {
    console.log(e)
  }
}
