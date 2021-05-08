import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.scss';

function Dialogs() {
  return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <div className={s.dialog}>
            <NavLink to="/dialogs/1">Dima</NavLink>
          </div>
          <div className={`${s.dialog} ${s.active}`}>
            <NavLink to="/dialogs/2">Andrey</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/3">Sveta</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/4">Sasha</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/5">Viktor</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/6">Valera</NavLink>
          </div>
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