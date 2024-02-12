import axios from 'axios'
import { IUsers } from '../interface/users'

export const getUsers = async () => {
  try {
    const response = await axios.get<IUsers[]>(`${process.env.EXPO_PUBLIC_FETCH_URL}/api/user`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
