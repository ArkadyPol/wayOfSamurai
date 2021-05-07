import s from './Dialogs.module.scss';

function Dialogs() {
  return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <div className={s.dialog}>Dima</div>
          <div className={`${s.dialog} ${s.active}`}>Andrey</div>
          <div className={s.dialog}>Sveta</div>
          <div className={s.dialog}>Sasha</div>
          <div className={s.dialog}>Viktor</div>
          <div className={s.dialog}>Valera</div>
        </div>
        <div className={s.messages}>
          <div className="messages">Hi</div>
          <div className="messages">How are you?</div>
          <div className="messages">What are you doing?</div>
        </div>
      </div>
  )

}


export default Dialogs;