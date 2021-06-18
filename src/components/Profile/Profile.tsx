import ProfileInfo from './ProfileInfo/ProfileInfo'
import {StoreType } from '../../redux'
import MyPostsContainer from './MyPosts/MyPostsContainer'

type PropsType = {
  store: StoreType
}

function Profile(props: PropsType) {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  )
}

export default Profile
