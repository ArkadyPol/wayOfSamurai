import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { ActionType } from '../../redux'
import { ProfilePageType } from '../../redux/profile-reducer'
import { Dispatch } from 'redux'

type PropsType = {
  profilePage: ProfilePageType
  dispatch: Dispatch<ActionType>
}

function Profile(props: PropsType) {
  const { posts, newPostText } = props.profilePage
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} newPostText={newPostText}
               dispatch={props.dispatch} />
    </div>
  )
}

export default Profile
