import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { ProfilePageType } from '../../redux/state'

type PropsType = {
  profilePage: ProfilePageType
  addPost: () => void
  updateNewPostText: (newText: string) => void
}

function Profile(props: PropsType) {
  const { posts, newPostText } = props.profilePage
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} newPostText={newPostText}
               addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
    </div>
  )
}

export default Profile
