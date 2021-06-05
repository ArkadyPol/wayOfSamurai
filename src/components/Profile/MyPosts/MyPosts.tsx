import { ChangeEvent } from 'react'
import s from './MyPosts.module.scss'
import Post from './Post/Post'
import { ActionType, PostType } from '../../../redux/state'

type PropsType = {
  posts: Array<PostType>
  newPostText: string
  dispatch: (action: ActionType) => void
}

function MyPosts(props: PropsType) {
  const postsElements = props.posts.map(p => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ))
  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.currentTarget.value
    props.dispatch({ type: 'UPDATE_NEW_POST_TEXT', newText: text })
  }

  const addPost = () => {
    props.dispatch({ type: 'ADD_POST' })
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea value={props.newPostText} onChange={onPostChange} />
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}

export default MyPosts
