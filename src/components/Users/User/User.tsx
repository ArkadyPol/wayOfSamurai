import { UserType } from '../../../redux/users-reducer'
import s from './User.module.scss'

type PropsType = {
  user: UserType
  toggleFollow: (userId: string) => void
}

function User(props: PropsType) {
  const { user } = props

  return (
    <div className={s.user}>
      <div className={s.avatar}>
        <img src={user.photoUrl} alt='avatar' className={s.userPhoto} />
        <div className={s.toggleBtn}>
          <button onClick={() => props.toggleFollow(user.id)}> {user.followed ? 'Unfollow' : 'Follow'}</button>
        </div>
      </div>
      <div className={s.userInfo}>
        <div className={s.about}>
          <div>{user.fullName}</div>
          <div>{user.status}</div>
        </div>
        <div className={s.address}>
          <div>{user.location.country}</div>
          <div>{user.location.city}</div>
        </div>
      </div>
    </div>
  )
}

export default User