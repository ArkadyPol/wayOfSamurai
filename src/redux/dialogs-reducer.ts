import { v1 } from 'uuid'

export type DialogType = {
  id: string
  name: string
}
export type MessageType = {
  id: string
  message: string
}
export type DialogsPageType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  newMessageText: string
}

export const sendMessageAC = () => ({ type: 'SEND_MESSAGE' } as const)
export const updateNewMessageTextAC = (newText: string) => ({
  type: 'UPDATE_NEW_MESSAGE_TEXT',
  newText
} as const)
export type DialogsReducerActionType = ReturnType<typeof sendMessageAC> | ReturnType<typeof updateNewMessageTextAC>

const dialogsReducer = (state: DialogsPageType, action: DialogsReducerActionType): DialogsPageType => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      const newMessage: MessageType = {
        id: v1(),
        message: state.newMessageText
      }
      return { ...state, messages: [...state.messages, newMessage], newMessageText: '' }
    case 'UPDATE_NEW_MESSAGE_TEXT':
      return { ...state, newMessageText: action.newText }
    default:
      return state
  }
}

export default dialogsReducer