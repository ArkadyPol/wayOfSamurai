import { UserType } from '../../../redux/users-reducer'
import s from './User.module.scss'
import userPhoto from '../../../assets/images/user.jpg'

type PropsType = {
  user: UserType
  toggleFollow: (userId: number) => void
}

function User(props: PropsType) {
  const { user } = props

  return (
    <div className={s.user}>
      <div className={s.avatar}>
        <img src={user.photos.small || userPhoto} alt='avatar' className={s.userPhoto} />
        <div className={s.toggleBtn}>
          <button onClick={() => props.toggleFollow(user.id)}> {user.followed ? 'Unfollow' : 'Follow'}</button>
        </div>
      </div>
      <div className={s.userInfo}>
        <div className={s.about}>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </div>
      </div>
    </div>
  )
}

export default User