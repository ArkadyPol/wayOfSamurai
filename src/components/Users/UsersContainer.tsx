import { RootStateType } from '../../redux'
import { connect, ConnectedProps } from 'react-redux'
import {
  toggleFollow,
  setUsers,
  UsersPageType,
  setCurrentPage,
  setTotalUsersCount,
  UserType
} from '../../redux/users-reducer'
import { Component } from 'react'
import axios from 'axios'
import Users from './Users'

type ResponseDataType = {
  items: UserType[]
  totalCount: number
  error: null | string
}

class UserContainer extends Component<UsersPropsType> {

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

    return <Users users={users} toggleFollow={toggleFollow} totalUsersCount={totalUsersCount}
                  pageSize={pageSize} currentPage={currentPage} onPageChanged={this.onPageChanged} />
  }
}

const mapStateToProps = (
  {
    usersPage: {
      users,
      pageSize,
      totalUsersCount,
      currentPage
    }
  }: RootStateType): UsersPageType => ({
  users,
  pageSize,
  totalUsersCount,
  currentPage
})

const connector = connect(mapStateToProps, { toggleFollow, setUsers, setCurrentPage, setTotalUsersCount })

export type UsersPropsType = ConnectedProps<typeof connector>

export default connector(UserContainer)