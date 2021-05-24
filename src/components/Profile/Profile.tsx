import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { addPost, ProfilePageType } from '../../redux/state'

type PropsType = {
  state: ProfilePageType
  addPost: (postMessage: string) => void
}

function Profile(props: PropsType) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} addPost={addPost} />
    </div>
  )
}

export default Profile
