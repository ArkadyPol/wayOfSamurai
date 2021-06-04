import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { RootStateType } from './redux/state'

export const rerenderEntireTree = (
  state: RootStateType,
  addPost: () => void,
  updateNewPostText: (newText: string) => void) => {
  ReactDOM.render(
    <HashRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </HashRouter>,
    document.getElementById('root')
  )
}

