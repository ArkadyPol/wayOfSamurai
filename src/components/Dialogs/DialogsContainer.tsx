import { DialogsPageType, sendMessage, updateNewMessageText } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect, ConnectedProps } from 'react-redux'
import { RootStateType } from '../../redux'

type MapStatePropsType = {
  dialogsPage: DialogsPageType
  isAuth: boolean
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
  dialogsPage: state.dialogsPage,
  isAuth: state.auth.isAuth
})

const connector = connect(mapStateToProps, { sendMessage, updateNewMessageText })

export type DialogsPropsType = ConnectedProps<typeof connector>

export default connector(Dialogs)
