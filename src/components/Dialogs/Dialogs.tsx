import s from './Dialogs.module.scss';
import DialogItem, {DialogItemType} from './DialogItem/DialogItem';
import Message from './Message/Message';

export type MessageType = {
  id: string
  message: string
}

type DialogsPropsType = {
  dialogs: Array<DialogItemType>
  messages: Array<MessageType>
}

function Dialogs(props: DialogsPropsType) {


  const dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
  const messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>);

  return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
          {messagesElements}
        </div>
      </div>
  )
}


export default Dialogs;