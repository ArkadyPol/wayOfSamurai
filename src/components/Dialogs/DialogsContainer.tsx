import { StoreType } from '../../redux'
import { sendMessageAC, updateNewMessageTextAC } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'


type PropsType = {
  store: StoreType
}

function DialogsContainer({ store }: PropsType) {
  const { dialogsPage } = store.getState()

  const sendMessage = () => {
    store.dispatch(sendMessageAC())
  }
  const onMessageChange = (message: string) => {
    store.dispatch(updateNewMessageTextAC(message))
  }

  return <Dialogs dialogsPage={dialogsPage} sendMessage={sendMessage}
                  updateNewMessageText={onMessageChange} />

}

export default DialogsContainer
