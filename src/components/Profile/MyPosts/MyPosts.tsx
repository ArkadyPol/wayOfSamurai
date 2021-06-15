import { ChangeEvent } from 'react'
import s from './MyPosts.module.scss'
import Post from './Post/Post'
import { ActionType } from '../../../redux'
import { addPostAC, updateNewPostTextAC, PostType } from '../../../redux/profile-reducer'
import { Dispatch } from 'redux'

type PropsType = {
  posts: Array<PostType>
  newPostText: string
  dispatch: Dispatch<ActionType>
}

function MyPosts(props: PropsType) {
  const postsElements = props.posts.map(p => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ))
  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.currentTarget.value
    props.dispatch(updateNewPostTextAC(text))
  }

  const addPost = () => {
    props.dispatch(addPostAC())
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
