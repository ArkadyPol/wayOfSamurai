import { StoreType } from '../../../redux'
import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

type PropsType = {
  store: StoreType
}

function MyPostsContainer({ store }: PropsType) {
  const { posts, newPostText } = store.getState().profilePage

  const onPostChange = (text: string) => {
    store.dispatch(updateNewPostTextAC(text))
  }

  const addPost = () => {
    store.dispatch(addPostAC())
  }

  return <MyPosts posts={posts} newPostText={newPostText} updateNewPostText={onPostChange}
                  addPost={addPost} />
}

export default MyPostsContainer
