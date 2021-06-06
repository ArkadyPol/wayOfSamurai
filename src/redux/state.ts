import { v1 } from 'uuid'

export type PostType = {
  id: string
  message: string
  likesCount: number
}
export type DialogType = {
  id: string
  name: string
}
export type MessageType = {
  id: string
  message: string
}
export type ProfilePageType = {
  posts: Array<PostType>
  newPostText: string
}
export type DialogsPageType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  newMessageText: string
}
export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}

export const addPostAC = () => ({ type: 'ADD_POST' } as const)
export const updateNewPostTextAC = (newText: string) => ({
  type: 'UPDATE_NEW_POST_TEXT',
  newText
} as const)
export const sendMessageAC = () => ({ type: 'SEND_MESSAGE' } as const)
export const updateNewMessageTextAC = (newText: string) => ({
  type: 'UPDATE_NEW_MESSAGE_TEXT',
  newText
} as const)

export type ActionType =
  ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof sendMessageAC>
  | ReturnType<typeof updateNewMessageTextAC>

export type StoreType = {
  _state: RootStateType
  getState: () => RootStateType
  _callSubscriber: () => void
  subscribe: (observer: () => void) => void
  dispatch: (action: ActionType) => void
}

const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        { id: v1(), message: 'It\'s my third post', likesCount: 1 },
        { id: v1(), message: 'It\'s my second post', likesCount: 2 },
        { id: v1(), message: 'It\'s my first post', likesCount: 3 }
      ],
      newPostText: ''
    },
    dialogsPage: {
      dialogs: [
        { id: v1(), name: 'Dimych' },
        { id: v1(), name: 'Andrey' },
        { id: v1(), name: 'Sveta' },
        { id: v1(), name: 'Sasha' },
        { id: v1(), name: 'Viktor' },
        { id: v1(), name: 'Valera' }
      ],
      messages: [
        { id: v1(), message: 'Hi' },
        { id: v1(), message: 'How are you?' },
        { id: v1(), message: 'What are you doing?' }
      ],
      newMessageText: ''
    }
  },
  _callSubscriber() {
    console.log('state changed')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    switch (action.type) {
      case 'ADD_POST':
        const newPost: PostType = {
          id: v1(),
          message: this._state.profilePage.newPostText,
          likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
        break
      case 'UPDATE_NEW_POST_TEXT':
        this._state.profilePage.newPostText = action.newText
        this._callSubscriber()
        break
      case 'SEND_MESSAGE':
        const newMessage: MessageType = {
          id: v1(),
          message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber()
        break
      case 'UPDATE_NEW_MESSAGE_TEXT':
        this._state.dialogsPage.newMessageText = action.newText
        this._callSubscriber()
    }
  }
}

export default store
