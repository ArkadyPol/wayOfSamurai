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
      <Post message={'It\'s my third post'} likesCount={1}/>
      <Post message={'It\'s my second post'} likesCount={2}/>
      <Post message={'It\'s my first post'} likesCount={3}/>
    </div>
  </div>;
}

export default MyPosts;