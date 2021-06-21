import { sendMessageAC, updateNewMessageTextAC } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { AppDispatch, RootStateType } from '../../redux'

const mapStateToProps = ({ dialogsPage }: RootStateType) => ({ dialogsPage })

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  updateNewMessageText: (message: string) => dispatch(updateNewMessageTextAC(message)),
  sendMessage: () => dispatch(sendMessageAC())
})

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
