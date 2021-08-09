import { RootStateType } from '../../redux'
import { connect, ConnectedProps } from 'react-redux'
import {
  UsersPageType,
  toggleFollow,
  setCurrentPage,
  getUsers
} from '../../redux/users-reducer'
import { Component } from 'react'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'

class UserContainer extends Component<UsersPropsType> {

  componentDidMount() {
    const { getUsers, currentPage, pageSize } = this.props
    getUsers(pageSize, currentPage)
  }

  onPageChanged = (pageNumber: number) => {
    const { setCurrentPage, getUsers, pageSize } = this.props
    setCurrentPage(pageNumber)
    getUsers(pageSize, pageNumber)
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

const connector = connect(mapStateToProps, { setCurrentPage, getUsers, toggleFollow })

type UsersPropsType = ConnectedProps<typeof connector>

export default connector(UserContainer)