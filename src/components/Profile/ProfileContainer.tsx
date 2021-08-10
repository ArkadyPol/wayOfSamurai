import { Component } from 'react'
import Profile from './Profile'
import { connect, ConnectedProps } from 'react-redux'
import { ProfileType, getUserProfile } from '../../redux/profile-reducer'
import { RootStateType } from '../../redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

type PathParamsType = {
  userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends Component<PropsType> {
  componentDidMount() {
    const { getUserProfile, match } = this.props
    const { userId } = match.params
    if (userId) {
      getUserProfile(userId)
    } else {
      const { userId } = this.props
      if (userId) {
        getUserProfile(userId)
      }
    }
  }

  render() {
    return <Profile profile={this.props.profile} />
  }
}

type MapStatePropsType = {
  profile: ProfileType | null
  userId: number | null
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
  profile: state.profilePage.profile,
  userId: state.auth.userId
})

const connector = connect(mapStateToProps, { getUserProfile })

type ProfilePropsType = ConnectedProps<typeof connector>

const AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connector(WithUrlDataContainerComponent)
