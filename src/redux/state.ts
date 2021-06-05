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
}
export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}
export type StoreType = {
  _state: RootStateType
  getState: () => RootStateType
  _callSubscriber: () => void
  addPost: () => void
  updateNewPostText: (newText: string) => void
  subscribe: (observer: () => void) => void
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
      ]
    }
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log('state changed')
  },
  addPost() {
    const newPost: PostType = {
      id: v1(),
      message: this._state.profilePage.newPostText,
      likesCount: 0
    }

    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    this._callSubscriber()
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber()
  },
  subscribe(observer) {
    this._callSubscriber = observer
  }
}

export default store
