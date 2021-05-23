import s from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { DialogsPageType } from '../../redux/state'

type DialogsPropsType = {
  state: DialogsPageType
}

function Dialogs(props: DialogsPropsType) {
  const { dialogs, messages } = props.state
  const dialogsElements = dialogs.map(d => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ))
  const messagesElements = messages.map(m => (
    <Message key={m.id} message={m.message} />
  ))

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  )
}

export default Dialogs
