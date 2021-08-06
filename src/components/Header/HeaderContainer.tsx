import { Component } from 'react'
import Header from './Header'
import { connect, ConnectedProps } from 'react-redux'
import { setAuthUserData } from '../../redux/auth-reducer'
import { RootStateType } from '../../redux'
import api from '../../api'

class HeaderContainer extends Component<AuthPropsType> {
  componentDidMount() {
    const { setAuthUserData } = this.props
    api.authMe().then(({ data, resultCode }) => {
      const { id, email, login } = data
      if (resultCode === 0) {
        setAuthUserData(id, email, login)
      }
    })
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

const connector = connect(mapStateToProps, { setAuthUserData })

type AuthPropsType = ConnectedProps<typeof connector>

export default connector(HeaderContainer)
