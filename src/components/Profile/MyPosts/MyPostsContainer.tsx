import { addPost, ProfilePageType, updateNewPostText } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect, ConnectedProps } from 'react-redux'
import { RootStateType } from '../../../redux'

const mapStateToProps = ({ profilePage }: RootStateType): ProfilePageType => ({ ...profilePage })

const connector = connect(mapStateToProps, { addPost, updateNewPostText })

export type MyPostPropsType = ConnectedProps<typeof connector>

export default connector(MyPosts)
