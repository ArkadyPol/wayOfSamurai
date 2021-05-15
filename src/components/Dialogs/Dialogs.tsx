import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.scss';
import {v1} from 'uuid';

export type DialogItemType = {
  id: string
  name: string
}

type MessageType = {
  id: string
  message: string
}

type DialogsPropsType = {
  data: Array<DialogItemType>
}

function Dialogs(props: DialogsPropsType) {
  const messages: Array<MessageType> = [
    {id: v1(), message: 'Hi'},
    {id: v1(), message: 'How are you?'},
    {id: v1(), message: 'What are you doing?'},
  ]

  const dialogsElements = props.data.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
  const messagesElements = messages.map(m => <Message key={m.id} message={m.message}/>);

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


function DialogItem(props: DialogItemType) {
  let path = `/dialogs/${props.id}`;
  return (
      <div className={s.dialog}>
        <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
      </div>
  );
}

type MessagePropsType = {
  message: string
}

function Message(props: MessagePropsType) {
  return <div className={s.message}>{props.message}</div>;
}


export default Dialogs;