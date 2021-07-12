import { UsersPropsType } from './UsersContainer'
import User from './User/User'
import axios from 'axios'
import { UserType } from '../../redux/users-reducer'
import s from './Users.module.scss'
import { Component } from 'react'

type ResponseDataType = {
  items: UserType[]
  totalCount: number
  error: null | string
}

class Users extends Component<UsersPropsType> {

  componentDidMount() {
    axios.get<ResponseDataType>('https://social-network.samuraijs.com/api/1.0/users?count=12')
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    const users = this.props.users.map(u => <User key={u.id} user={u} toggleFollow={this.props.toggleFollow} />)
    return <div className={s.users}> {users}</div>
  }
}

export default Users