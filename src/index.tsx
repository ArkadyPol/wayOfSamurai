import state, { addPost, subscribe, updateNewPostText } from './redux/state'
import './index.scss'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './App'

const rerenderEntireTree = () => {
  ReactDOM.render(
    <HashRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </HashRouter>,
    document.getElementById('root')
  )
}

rerenderEntireTree()

subscribe(rerenderEntireTree)
