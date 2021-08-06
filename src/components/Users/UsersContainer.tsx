import { RootStateType } from '../../redux'
import { connect, ConnectedProps } from 'react-redux'
import {
  toggleFollow,
  toggleIsFetching,
  setUsers,
  UsersPageType,
  setCurrentPage,
  setTotalUsersCount, toggleFollowingProgress
} from '../../redux/users-reducer'
import { Component } from 'react'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import api from '../../api'

class UserContainer extends Component<UsersPropsType> {

  componentDidMount() {
    const { setUsers, currentPage, pageSize, setTotalUsersCount, toggleIsFetching } = this.props
    toggleIsFetching(true)
    api.getUsers(pageSize, currentPage).then(data => {
      setUsers(data.items)
      setTotalUsersCount(data.totalCount)
      toggleIsFetching(false)
    })
  }

  onPageChanged = (pageNumber: number) => {
    const { setCurrentPage, setUsers, pageSize, toggleIsFetching } = this.props
    toggleIsFetching(true)
    setCurrentPage(pageNumber)
    api.getUsers(pageSize, pageNumber).then(data => {
      setUsers(data.items)
      toggleIsFetching(false)
    })
  }

  render() {

    return (
      <>
        {this.props.isFetching && <Preloader />}
        <Users {...this.props} onPageChanged={this.onPageChanged} />
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
  toggleIsFetching,
  toggleFollowingProgress
})

type UsersPropsType = ConnectedProps<typeof connector>

export default connector(UserContainer)