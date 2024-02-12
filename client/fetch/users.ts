import axios from 'axios'
import { IUsers } from '../interface/users'

export const getUsers = async () => {
  try {
    const response = await axios.get<IUsers[]>('http://10.0.2.2:7000/api/user')
    return response.data
  } catch (error) {
    console.error(error)
  }
}
