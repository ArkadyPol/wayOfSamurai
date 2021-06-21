import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'
import { AppDispatch, RootStateType } from '../../../redux'

const mapStateToProps = ({ profilePage }: RootStateType) => ({ ...profilePage })

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  updateNewPostText: (text: string) => dispatch(updateNewPostTextAC(text)),
  addPost: () => dispatch(addPostAC())
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
