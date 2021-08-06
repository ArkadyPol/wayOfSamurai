import axios from 'axios'
import { UserType } from '../redux/users-reducer'
import { ProfileType } from '../redux/profile-reducer'

const instance = axios.create({
  withCredentials: true,
  headers: {
    'api-key': process.env.REACT_APP_API_KEY
  },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


type ResponseGetUsersDataType = {
  items: UserType[]
  totalCount: number
  error: null | string
}

type ResponseDataType<T = {}> = {
  data: T
  fieldsErrors: string[]
  messages: string[]
  resultCode: number
}

const api = {
  async getUsers(pageSize = 15, pageNumber = 1) {
    const { data } = await instance.get<ResponseGetUsersDataType>(`users?count=${pageSize}&page=${pageNumber}`)
    return data
  },
  async followUser(userId: number) {
    const { data } = await instance.post<ResponseDataType>(`follow/${userId}`)
    return data
  },
  async unfollowUser(userId: number) {
    const { data } = await instance.delete<ResponseDataType>(`follow/${userId}`)
    return data
  },
  async authMe() {
    const { data } = await instance.get<ResponseDataType<{ id: number, login: string, email: string }>>(`auth/me`)
    return data
  },
  async getProfile(userId: number | string) {
    const { data } = await instance.get<ProfileType>(`profile/${userId}`)
    return data
  }
}

export default api


