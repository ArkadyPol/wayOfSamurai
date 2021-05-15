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
    const messagesData: Array<MessageType> = [
    {id: v1(), message: 'Hi'},
    {id: v1(), message: 'How are you?'},
    {id: v1(), message: 'What are you doing?'},
  ]

  const dialogsItems = props.data.map(item => <DialogItem key={item.id} name={item.name} id={item.id}/>);
  const messages = messagesData.map(item => <Message key={item.id} message={item.message} id={item.id}/>);

  return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsItems}
        </div>
        <div className={s.messages}>
          {messages}
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

function Message(props: MessageType) {
  return <div className="messages">{props.message}</div>;
}


export default Dialogs;