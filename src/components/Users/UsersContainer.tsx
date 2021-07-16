import { RootStateType } from '../../redux'
import { connect, ConnectedProps } from 'react-redux'
import {
  toggleFollow,
  toggleIsFetching,
  setUsers,
  UsersPageType,
  setCurrentPage,
  setTotalUsersCount,
  UserType
} from '../../redux/users-reducer'
import { Component } from 'react'
import axios from 'axios'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'

type ResponseDataType = {
  items: UserType[]
  totalCount: number
  error: null | string
}

class UserContainer extends Component<UsersPropsType> {

  componentDidMount() {
    const { setUsers, currentPage, pageSize, setTotalUsersCount, toggleIsFetching } = this.props
    toggleIsFetching(true)
    axios.get<ResponseDataType>(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`)
      .then(response => {
        setUsers(response.data.items)
        setTotalUsersCount(response.data.totalCount)
        toggleIsFetching(false)
      })
  }

  onPageChanged = (pageNumber: number) => {
    const { setCurrentPage, setUsers, pageSize, toggleIsFetching } = this.props
    toggleIsFetching(true)
    setCurrentPage(pageNumber)
    axios.get<ResponseDataType>(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${pageNumber}`)
      .then(response => {
        setUsers(response.data.items)
        toggleIsFetching(false)
      })
  }

  render() {
    const { totalUsersCount, pageSize, users, toggleFollow, currentPage } = this.props

    return (
      <>
        {this.props.isFetching && <Preloader />}
        <Users users={users} toggleFollow={toggleFollow} totalUsersCount={totalUsersCount}
               pageSize={pageSize} currentPage={currentPage} onPageChanged={this.onPageChanged} />
      </>
    )
  }

}

const mapStateToProps = ({ usersPage }: RootStateType): UsersPageType => ({ ...usersPage })

const connector = connect(mapStateToProps, {
  toggleFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
})

export type UsersPropsType = ConnectedProps<typeof connector>

export default connector(UserContainer)