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
export const setCurrentPage = (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage } as const)
export const setTotalUsersCount = (totalCount: number) => ({
  type: 'SET_TOTAL_USERS_COUNT',
  totalCount
} as const)

export type UsersReducerAT =
  ReturnType<typeof toggleFollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>

const initialState = {
  users: [] as UserType[],
  pageSize: 15,
  totalUsersCount: 0,
  currentPage: 1
}
export type UsersPageType = typeof initialState

const usersReducer = (state: UsersPageType = initialState, action: UsersReducerAT): UsersPageType => {
  switch (action.type) {
    case 'TOGGLE_FOLLOW':
      return { ...state, users: state.users.map(u => u.id === action.userId ? { ...u, followed: !u.followed } : u) }
    case 'SET_USERS':
      return { ...state, users: action.users }
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.currentPage }
    case 'SET_TOTAL_USERS_COUNT':
      return { ...state, totalUsersCount: action.totalCount }
    default:
      return state
  }
}

export default usersReducer