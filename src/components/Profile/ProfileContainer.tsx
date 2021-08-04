import { Component } from 'react'
import Profile from './Profile'
import axios from 'axios'
import { connect, ConnectedProps } from 'react-redux'
import { ProfileType, setUserProfile } from '../../redux/profile-reducer'
import { RootStateType } from '../../redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'

type PathParamsType = {
  userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends Component<PropsType> {
  componentDidMount() {
    const { setUserProfile, match } = this.props
    const userId = match.params.userId || 2
    axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        setUserProfile(response.data)
      })
  }

  render() {
    return <Profile profile={this.props.profile} />
  }
}

const mapStateToProps = ({ profilePage: { profile } }: RootStateType): { profile: ProfileType | null } => ({ profile })

const connector = connect(mapStateToProps, { setUserProfile })

type ProfilePropsType = ConnectedProps<typeof connector>

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connector(WithUrlDataContainerComponent)
