import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.scss';

type DialogItemType = {
  name: string
  id: number
}

function DialogItem(props: DialogItemType) {
  let path = `/dialogs/${props.id}`;
  return (
      <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
  );
}

type MessageType = {
  message: string
}


function Message(props: MessageType) {
  return <div className="messages">{props.message}</div>;
}

function Dialogs() {
  return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <DialogItem name="Dimych" id={1}/>
          <DialogItem name="Andrey" id={2}/>
          <DialogItem name="Sveta" id={3}/>
          <DialogItem name="Sasha" id={4}/>
          <DialogItem name="Viktor" id={5}/>
          <DialogItem name="Valera" id={6}/>
        </div>
        <div className={s.messages}>
          <Message message="Hi"/>
          <Message message="How are you?"/>
          <Message message="What are you doing?"/>
        </div>
      </div>
  )

}


export default Dialogs;