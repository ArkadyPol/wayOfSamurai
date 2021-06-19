import { sendMessageAC, updateNewMessageTextAC } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext'

type PropsType = {}

function DialogsContainer(props: PropsType) {
  return (
    <StoreContext.Consumer>
      {store => {
        if (store) {
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
      }}
    </StoreContext.Consumer>
  )
}

export default DialogsContainer
