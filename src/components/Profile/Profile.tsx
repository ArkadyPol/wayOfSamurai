import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type PropsType = {
  state: ProfilePageType
}

function Profile(props: PropsType) {
  return (
      <div>
        <ProfileInfo/>
        <MyPosts posts={props.state.posts}/>
      </div>
  );
}

export default Profile;