import { v1 } from 'uuid'

export type PostType = {
  id: string
  message: string
  likesCount: number
}
export type ProfilePageType = {
  posts: Array<PostType>
  newPostText: string
}

export const addPostAC = () => ({ type: 'ADD_POST' } as const)
export const updateNewPostTextAC = (newText: string) => ({
  type: 'UPDATE_NEW_POST_TEXT',
  newText
} as const)
export type ProfileReducerActionType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>

const profileReducer = (state: ProfilePageType, action: ProfileReducerActionType): ProfilePageType => {
  switch (action.type) {
    case 'ADD_POST':
      const newPost: PostType = {
        id: v1(),
        message: state.newPostText,
        likesCount: 0
      }
      return { ...state, posts: [...state.posts, newPost], newPostText: '' }
    case 'UPDATE_NEW_POST_TEXT':
      return { ...state, newPostText: action.newText }
    default:
      return state
  }
}

export default profileReducer