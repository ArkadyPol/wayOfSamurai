import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import StoreContext from '../../../StoreContext'

type PropsType = {}

function MyPostsContainer(props: PropsType) {
  return (
    <StoreContext.Consumer>
      {store => {
        if (store) {
          const { posts, newPostText } = store.getState().profilePage

          const onPostChange = (text: string) => {
            store.dispatch(updateNewPostTextAC(text))
          }

          const addPost = () => {
            store.dispatch(addPostAC())
          }

          return <MyPosts posts={posts}
                          newPostText={newPostText}
                          updateNewPostText={onPostChange}
                          addPost={addPost} />
        }
      }}
    </StoreContext.Consumer>
  )
}


export default MyPostsContainer
