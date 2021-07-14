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
    const { setUsers, currentPage, pageSize, setTotalUsersCount } = this.props
    axios.get<ResponseDataType>(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`)
      .then(response => {
        setUsers(response.data.items)
        setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumber: number) => {
    const { setCurrentPage, setUsers, pageSize } = this.props
    setCurrentPage(pageNumber)
    axios.get<ResponseDataType>(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${pageNumber}`)
      .then(response => {
        setUsers(response.data.items)
      })
  }

  render() {
    const { totalUsersCount, pageSize, users, toggleFollow, currentPage } = this.props

    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = []

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
    const pagesElements = pages.map(p => (
      <span key={p}
            onClick={() => {
              this.onPageChanged(p)
            }}
            className={`${s.page} ${(p === currentPage) && s.selectedPage}`}>{p}
      </span>
    ))
    const usersElements = users.map(u => <User key={u.id} user={u} toggleFollow={toggleFollow} />)
    return (
      <>
        <div> {pagesElements} </div>
        <div className={s.users}> {usersElements} </div>
      </>
    )
  }
}

export default Users