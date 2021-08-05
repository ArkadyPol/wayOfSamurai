import { UserType } from '../../../redux/users-reducer'
import s from './User.module.scss'
import userPhoto from '../../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

type PropsType = {
  user: UserType
  toggleFollow: (userId: number) => void
}

type ResponseDataType = {
  data: {}
  fieldsErrors: string[]
  messages: string[]
  resultCode: number
}

function User(props: PropsType) {
  const { user } = props

  return (
    <div className={s.user}>
      <div className={s.avatar}>
        <NavLink to={`/profile/${user.id}`}>
          <img src={user.photos.small || userPhoto} alt='avatar' className={s.userPhoto} />
        </NavLink>
        <div className={s.toggleBtn}>
          <button onClick={
            () => {
              user.followed ?
                axios.delete<ResponseDataType>(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                  withCredentials: true,
                  headers: {
                    'api-key': process.env.REACT_APP_API_KEY
                  }
                })
                  .then(({ data }) => {
                    if (data.resultCode === 0) {
                      props.toggleFollow(user.id)
                    }
                  })
                :
                axios.post<ResponseDataType>(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                  withCredentials: true,
                  headers: {
                    'api-key': process.env.REACT_APP_API_KEY
                  }
                })
                  .then(({ data }) => {
                    if (data.resultCode === 0) {
                      props.toggleFollow(user.id)
                    }

                  })
            }
          }> {user.followed ? 'Unfollow' : 'Follow'}</button>
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