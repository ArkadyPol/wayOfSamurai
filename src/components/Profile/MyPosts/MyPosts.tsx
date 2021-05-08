import s from './MyPosts.module.scss';
import Post from './Post/Post';

function MyPosts() {
  return <div className={s.postsBlock}>
    <h3>My Posts</h3>
    <div>
      <div><textarea/></div>
      <div>
        <button>Add Post</button>
      </div>
    </div>
    <div className={s.posts}>
      <Post message={'It\'s my third post'} likesCount={1}/>
      <Post message={'It\'s my second post'} likesCount={2}/>
      <Post message={'It\'s my first post'} likesCount={3}/>
    </div>
  </div>;
}

export default MyPosts;