import s from '../Dialogs.module.scss';

type MessagePropsType = {
  message: string
}

function Message(props: MessagePropsType) {
  return <div className={s.message}>{props.message}</div>;
}

export default Message;