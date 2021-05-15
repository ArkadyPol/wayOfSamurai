import MyPosts, {PostType} from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type PropsType = {
  posts: Array<PostType>
}

function Profile(props: PropsType) {
  return (
      <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts}/>
      </div>
  );
}

export default Profile;