import { Component } from 'react'
import Profile from './Profile'
import axios from 'axios'
import { connect, ConnectedProps } from 'react-redux'
import { ProfileType, setUserProfile } from '../../redux/profile-reducer'
import { RootStateType } from '../../redux'

class ProfileContainer extends Component<ProfilePropsType> {
  componentDidMount() {
    const { setUserProfile } = this.props
    axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        setUserProfile(response.data)
      })
  }

  render() {
    return <Profile profile={this.props.profile}/>
  }
}

const mapStateToProps = ({ profilePage: { profile } }: RootStateType): { profile: ProfileType | null } => ({ profile })

const connector = connect(mapStateToProps, { setUserProfile })

type ProfilePropsType = ConnectedProps<typeof connector>

export default connector(ProfileContainer)
