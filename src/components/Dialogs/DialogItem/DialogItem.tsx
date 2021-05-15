import s from '../Dialogs.module.scss';
import {NavLink} from 'react-router-dom';

export type DialogItemType = {
  id: string
  name: string
}

function DialogItem(props: DialogItemType) {
  let path = `/dialogs/${props.id}`;
  return (
      <div className={s.dialog}>
        <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
      </div>
  );
}

export default DialogItem;