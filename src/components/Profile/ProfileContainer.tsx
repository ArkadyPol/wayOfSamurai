import { Component } from 'react'
import Profile from './Profile'
import { connect, ConnectedProps } from 'react-redux'
import { ProfileType, setProfile } from '../../redux/profile-reducer'
import { RootStateType } from '../../redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'

type PathParamsType = {
  userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends Component<PropsType> {
  componentDidMount() {
    const { setProfile, match } = this.props
    const userId = match.params.userId
    if (userId) {
      setProfile(userId)
    } else {
      if (this.props.isAuth && this.props.userId) {
        setProfile(this.props.userId)
      }
    }
  }

  render() {
    return <Profile profile={this.props.profile} />
  }
}

const mapStateToProps = (state: RootStateType): { profile: ProfileType | null; isAuth: boolean; userId: number | null } => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  userId: state.auth.userId
})

const connector = connect(mapStateToProps, { setProfile })

type ProfilePropsType = ConnectedProps<typeof connector>

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connector(WithUrlDataContainerComponent)
