import { UserType } from '../../../redux/users-reducer'
import s from './User.module.scss'
import userPhoto from '../../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom'
import api from '../../../api'

type PropsType = {
  user: UserType
  toggleFollow: (userId: number) => void
}

function User(props: PropsType) {
  const { user } = props

  const onToggleFollowClick = () => {
    const promise = user.followed ? api.unfollowUser(user.id) : api.followUser(user.id)
    promise.then(data => {
      if (data.resultCode === 0) {
        props.toggleFollow(user.id)
      }
    })
  }

  return (
    <div className={s.user}>
      <div className={s.avatar}>
        <NavLink to={`/profile/${user.id}`}>
          <img src={user.photos.small || userPhoto} alt='avatar' className={s.userPhoto} />
        </NavLink>
        <div className={s.toggleBtn}>
          <button onClick={onToggleFollowClick}> {user.followed ? 'Unfollow' : 'Follow'}</button>
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