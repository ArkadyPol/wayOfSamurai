import { v1 } from 'uuid'
import { PhotosType } from './users-reducer'
import { ThunkAction } from 'redux-thunk'
import { RootStateType } from './index'
import api from '../api'

export type PostType = {
  id: string
  message: string
  likesCount: number
}

export type ContactsType = {
  facebook: string | null
  website: string | null
  vk: string | null
  twitter: string | null
  instagram: string | null
  youtube: string | null
  github: string | null
  mainLink: string | null
}

export type ProfileType = {
  aboutMe: string | null
  contacts: ContactsType
  lookingForAJob: boolean
  lookingForAJobDescription: string | null
  fullName: string
  userId: number
  photos: PhotosType
}

export const addPost = () => ({ type: 'ADD_POST' } as const)
export const updateNewPostText = (newText: string) => ({
  type: 'UPDATE_NEW_POST_TEXT',
  newText
} as const)
export const setUserProfile = (profile: ProfileType) => ({ type: 'SET_USER_PROFILE', profile } as const)

const actions = [addPost, updateNewPostText, setUserProfile]

export type ProfileReducerAT = ReturnType<typeof actions[number]>

const initialState = {
  posts: [
    { id: v1(), message: 'It\'s my third post', likesCount: 1 },
    { id: v1(), message: 'It\'s my second post', likesCount: 2 },
    { id: v1(), message: 'It\'s my first post', likesCount: 3 }
  ] as PostType[],
  newPostText: '',
  profile: null as ProfileType | null
}

export type ProfilePageType = typeof initialState

const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerAT): ProfilePageType => {
  switch (action.type) {
    case 'ADD_POST':
      const newPost: PostType = {
        id: v1(),
        message: state.newPostText,
        likesCount: 0
      }
      return { ...state, posts: [newPost, ...state.posts], newPostText: '' }
    case 'UPDATE_NEW_POST_TEXT':
      return { ...state, newPostText: action.newText }
    case 'SET_USER_PROFILE':
      return { ...state, profile: action.profile }
    default:
      return state
  }
}

export default profileReducer

type ThunkType = ThunkAction<void, RootStateType, unknown, ProfileReducerAT>

export const setProfile = (userId: string | number): ThunkType => async dispatch => {
  const data = await api.getProfile(userId)
  dispatch(setUserProfile(data))
}