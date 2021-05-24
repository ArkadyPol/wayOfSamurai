import { useRef } from 'react'
import s from './MyPosts.module.scss'
import Post from './Post/Post'
import { PostType } from '../../../redux/state'

type PropsType = {
  posts: Array<PostType>
  addPost: (postMessage: string) => void
}

function MyPosts(props: PropsType) {
  const postsElements = props.posts.map(p => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ))

  const newPostElement = useRef<HTMLTextAreaElement>(null)

  const addPost = () => {
    if (newPostElement.current) {
      const text = newPostElement.current.value
      props.addPost(text)
    }
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} />
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
