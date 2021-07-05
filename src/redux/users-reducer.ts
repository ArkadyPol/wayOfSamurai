export type PhotosType = {
  small: null | string
  large: null | string
}
export type UserType = {
  id: number
  name: string
  status: string
  photos: PhotosType
  followed: boolean
}

export const toggleFollow = (userId: number) => ({ type: 'TOGGLE_FOLLOW', userId } as const)
export const setUsers = (users: UserType[]) => ({ type: 'SET_USERS', users } as const)

export type UsersReducerAT = ReturnType<typeof toggleFollow> | ReturnType<typeof setUsers>

const initialState = {
  users: [] as UserType[]
}
export type UsersPageType = typeof initialState

const usersReducer = (state: UsersPageType = initialState, action: UsersReducerAT): UsersPageType => {
  switch (action.type) {
    case 'TOGGLE_FOLLOW':
      return { ...state, users: state.users.map(u => u.id === action.userId ? { ...u, followed: !u.followed } : u) }
    case 'SET_USERS':
      return { ...state, users: [...state.users, ...action.users] }
    default:
      return state
  }
}

export default usersReducer