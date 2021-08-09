import { Component } from 'react'
import Header from './Header'
import { connect, ConnectedProps } from 'react-redux'
import { setAuth } from '../../redux/auth-reducer'
import { RootStateType } from '../../redux'

class HeaderContainer extends Component<AuthPropsType> {
  componentDidMount() {
    this.props.setAuth()
  }

  render() {
    const { isAuth, login } = this.props
    return <Header isAuth={isAuth} login={login} />
  }
}

const mapStateToProps = ({ auth }: RootStateType): { isAuth: boolean; login: string | null } => ({
  isAuth: auth.isAuth,
  login: auth.login
})

const connector = connect(mapStateToProps, { setAuth })

type AuthPropsType = ConnectedProps<typeof connector>

export default connector(HeaderContainer)
