import { Component } from 'react'
import Profile from './Profile'
import { connect, ConnectedProps } from 'react-redux'
import { ProfileType, getUserProfile } from '../../redux/profile-reducer'
import { RootStateType } from '../../redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'

type PathParamsType = {
  userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends Component<PropsType> {
  componentDidMount() {
    const { getUserProfile, match } = this.props
    const {userId} = match.params
    if (userId) {
      getUserProfile(userId)
    } else {
      const {isAuth, userId} = this.props
      if (isAuth && userId) {
        getUserProfile(userId)
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

const connector = connect(mapStateToProps, { getUserProfile })

type ProfilePropsType = ConnectedProps<typeof connector>

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connector(WithUrlDataContainerComponent)
