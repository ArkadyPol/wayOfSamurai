import { ThunkAction } from 'redux-thunk'
import { RootStateType } from './index'
import api from '../api'
import { setProfile } from './profile-reducer'

export const setAuthUserData = (userId: number, email: string, login: string) => (
  {
    type: 'SET_USER_DATA',
    data: { userId, email, login }
  } as const)

export type AuthReducerAT = ReturnType<typeof setAuthUserData>

const initialState = {
  userId: null as null | number,
  email: null as null | string,
  login: null as null | string,
  isAuth: false
}

export type AuthType = typeof initialState

const authReducer = (state: AuthType = initialState, action: AuthReducerAT): AuthType => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return { ...state, ...action.data, isAuth: true }
    default:
      return state

  }
}

export default authReducer

type ThunkType = ThunkAction<void, RootStateType, unknown, AuthReducerAT>

export const setAuth = (): ThunkType => async dispatch => {
  const { data, resultCode } = await api.authMe()
  const { id, email, login } = data
  if (resultCode === 0) {
    dispatch(setAuthUserData(id, email, login))
    dispatch(setProfile(id))
  }
}