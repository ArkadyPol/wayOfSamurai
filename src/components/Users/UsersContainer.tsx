import { RootStateType } from '../../redux'
import { connect, ConnectedProps } from 'react-redux'
import { toggleFollow, setUsers, UsersPageType, setCurrentPage, setTotalUsersCount } from '../../redux/users-reducer'
import Users from './Users'

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

export default connector(Users)