import { UsersPropsType } from './UsersContainer'
import User from './User/User'
import { useEffect } from 'react'
import axios from 'axios'
import { UserType } from '../../redux/users-reducer'
import s from './Users.module.scss'

type ResponseDataType = {
  items: UserType[]
  totalCount: number
  error: null | string
}


function Users(props: UsersPropsType) {
  const { setUsers } = props

  useEffect(() => {
    axios.get<ResponseDataType>('https://social-network.samuraijs.com/api/1.0/users?count=12')
      .then(response => {
        setUsers(response.data.items)
      })
  }, [setUsers])

  const users = props.users.map(u => <User key={u.id} user={u} toggleFollow={props.toggleFollow} />)

  return <div className={s.users}>{users}</div>
}

export default Users