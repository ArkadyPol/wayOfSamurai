import { RootStateType } from '../../redux'
import { connect, ConnectedProps } from 'react-redux'
import { toggleFollow, setUsers, UsersPageType } from '../../redux/users-reducer'
import Users from './Users'

const mapStateToProps = ({ usersPage: { users } }: RootStateType): UsersPageType => ({ users })

const connector = connect(mapStateToProps, { toggleFollow, setUsers })

export type UsersPropsType = ConnectedProps<typeof connector>

export default connector(Users)