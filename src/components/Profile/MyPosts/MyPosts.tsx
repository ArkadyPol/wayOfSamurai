import s from './MyPosts.module.scss';
import Post from './Post/Post';

export type PostType = {
  id: string
  message: string
  likesCount: number
}

type PropsType = {
  posts: Array<PostType>
}

function MyPosts(props: PropsType) {
  const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

  return (
      <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
          <div><textarea/></div>
          <div>
            <button>Add Post</button>
          </div>
        </div>
        <div className={s.posts}>
          {postsElements}
        </div>
      </div>
  );
}

export default MyPosts;