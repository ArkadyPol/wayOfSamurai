import { v1 } from 'uuid'
import profileReducer, { ProfilePageType, ProfileReducerActionType } from './profile-reducer'
import dialogsReducer, { DialogsPageType, DialogsReducerActionType } from './dialogs-reducer'

export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}

export type ActionType = ProfileReducerActionType | DialogsReducerActionType

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
    this._state.profilePage = profileReducer(this._state.profilePage, action as ProfileReducerActionType)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action as DialogsReducerActionType)
    this._callSubscriber()
  }
}

export default store
