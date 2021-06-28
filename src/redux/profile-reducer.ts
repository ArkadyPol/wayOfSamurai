import { v1 } from 'uuid'

export type PostType = {
  id: string
  message: string
  likesCount: number
}

export const addPost = () => ({ type: 'ADD_POST' } as const)
export const updateNewPostText = (newText: string) => ({
  type: 'UPDATE_NEW_POST_TEXT',
  newText
} as const)
export type ProfileReducerAT = ReturnType<typeof addPost> | ReturnType<typeof updateNewPostText>

const initialState = {
  posts: [
    { id: v1(), message: 'It\'s my third post', likesCount: 1 },
    { id: v1(), message: 'It\'s my second post', likesCount: 2 },
    { id: v1(), message: 'It\'s my first post', likesCount: 3 }
  ] as PostType[],
  newPostText: ''
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
    default:
      return state
  }
}

export default profileReducer