import { Component } from 'react'
import Profile from './Profile'
import { connect, ConnectedProps } from 'react-redux'
import { ProfileType, setUserProfile } from '../../redux/profile-reducer'
import { RootStateType } from '../../redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import api from '../../api'

type PathParamsType = {
  userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends Component<PropsType> {
  componentDidMount() {
    const { setUserProfile, match } = this.props
    let userId: number | string
    userId = match.params.userId
    if (!userId) {
      if (this.props.isAuth && this.props.userId) {
        userId = this.props.userId
      } else {
        userId = 2
      }
    }
    api.getProfile(userId).then(data => setUserProfile(data))
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

const connector = connect(mapStateToProps, { setUserProfile })

type ProfilePropsType = ConnectedProps<typeof connector>

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connector(WithUrlDataContainerComponent)
