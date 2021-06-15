import { ChangeEvent } from 'react'
import s from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { ActionType } from '../../redux'
import { DialogsPageType, sendMessageAC, updateNewMessageTextAC } from '../../redux/dialogs-reducer'
import { Dispatch } from 'redux'


type DialogsPropsType = {
  state: DialogsPageType
  dispatch: Dispatch<ActionType>
}

function Dialogs(props: DialogsPropsType) {
  const { dialogs, messages, newMessageText } = props.state

  const dialogsElements = dialogs.map(d => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ))
  const messagesElements = messages.map(m => (
    <Message key={m.id} message={m.message} />
  ))

  const sendMessage = () => {
    props.dispatch(sendMessageAC())
  }
  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const message = e.currentTarget.value
    props.dispatch(updateNewMessageTextAC(message))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div className={s.newMessage}>
          <textarea value={newMessageText} onChange={onMessageChange} placeholder='Enter your message' />
        </div>
        <div>
          <button onClick={sendMessage}>Send Message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
