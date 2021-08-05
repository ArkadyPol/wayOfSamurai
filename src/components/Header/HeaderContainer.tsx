import { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import { connect, ConnectedProps } from 'react-redux'
import { setAuthUserData } from '../../redux/auth-reducer'
import { RootStateType } from '../../redux'

type ResponseDataType = {
  data: { id: number, login: string, email: string }
  fieldsErrors: string[]
  messages: string[]
  resultCode: number
}

class HeaderContainer extends Component<AuthPropsType> {
  componentDidMount() {
    const { setAuthUserData } = this.props
    axios.get<ResponseDataType>('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true })
      .then(({ data: { data, resultCode } }) => {
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
