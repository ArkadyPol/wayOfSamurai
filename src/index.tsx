import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import state, { addPost } from './redux/state'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App state={state} addPost={addPost} />
  </BrowserRouter>,
  document.getElementById('root')
)
