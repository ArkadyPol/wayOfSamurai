import s from '../Dialogs.module.scss';
import {NavLink} from 'react-router-dom';
import {DialogType} from '../../../redux/state';


function DialogItem(props: DialogType) {
  let path = `/dialogs/${props.id}`;
  return (
      <div className={s.dialog}>
        <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
      </div>
  );
}

export default DialogItem;