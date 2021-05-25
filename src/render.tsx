import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { RootStateType } from './redux/state'

export const rerenderEntireTree = (state: RootStateType, addPost: (postMessage: string) => void) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} />
    </BrowserRouter>,
    document.getElementById('root')
  )
}

