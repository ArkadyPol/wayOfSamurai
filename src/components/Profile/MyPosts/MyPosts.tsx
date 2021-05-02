import s from './MyPosts.module.scss';
import Post from './Post/Post';

function MyPosts() {
  return <div>
    My Posts
    <div>
      <textarea/>
      <button>Add Post</button>
    </div>
    <div className={s.posts}>
      <Post/>
      <Post/>
      <Post/>
    </div>
  </div>;
}

export default MyPosts;