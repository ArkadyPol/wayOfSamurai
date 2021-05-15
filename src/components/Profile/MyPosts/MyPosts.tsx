import s from './MyPosts.module.scss';
import Post from './Post/Post';
import {v1} from 'uuid';

type PostsDataType = {
  id: string
  message: string
  likesCount: number
}

function MyPosts() {
  const postsData: Array<PostsDataType> = [
    {id: v1(), message: 'It\'s my third post', likesCount: 1},
    {id: v1(), message: 'It\'s my second post', likesCount: 2},
    {id: v1(), message: 'It\'s my first post', likesCount: 3},
  ]

  const postsElements = postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

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