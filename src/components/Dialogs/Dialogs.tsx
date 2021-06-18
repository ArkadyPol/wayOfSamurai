import { ChangeEvent } from 'react'
import s from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { DialogsPageType } from '../../redux/dialogs-reducer'

type PropsType = {
  dialogsPage: DialogsPageType
  updateNewMessageText: (text: string) => void
  sendMessage: () => void
}

function Dialogs(props: PropsType) {
  const { dialogs, messages, newMessageText } = props.dialogsPage

  const dialogsElements = dialogs.map(d => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ))
  const messagesElements = messages.map(m => (
    <Message key={m.id} message={m.message} />
  ))

  const sendMessage = () => {
    props.sendMessage()
  }
  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const message = e.currentTarget.value
    props.updateNewMessageText(message)
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
