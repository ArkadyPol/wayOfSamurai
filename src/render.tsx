import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { RootStateType } from './redux/state'

export const rerenderEntireTree = (state: RootStateType, addPost: (postMessage: string) => void) => {
  ReactDOM.render(
    <HashRouter>
      <App state={state} addPost={addPost} />
    </HashRouter>,
    document.getElementById('root')
  )
}

