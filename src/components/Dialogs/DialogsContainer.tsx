import { DialogsPageType, sendMessage, updateNewMessageText } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect, ConnectedProps } from 'react-redux'
import { RootStateType } from '../../redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { ComponentType } from 'react'

type MapStatePropsType = {
  dialogsPage: DialogsPageType
}

const mapStateToProps = ({ dialogsPage }: RootStateType): MapStatePropsType => ({ dialogsPage })

const connector = connect(mapStateToProps, { sendMessage, updateNewMessageText })

export type DialogsPropsType = ConnectedProps<typeof connector>

export default compose<ComponentType>(connector, withAuthRedirect)(Dialogs)
