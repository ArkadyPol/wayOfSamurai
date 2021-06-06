import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { ActionType } from '../../redux/state'
import { ProfilePageType } from '../../redux/profile-reducer'

type PropsType = {
  profilePage: ProfilePageType
  dispatch: (action: ActionType) => void
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
