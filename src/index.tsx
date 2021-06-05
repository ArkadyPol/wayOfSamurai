import store from './redux/state'
import './index.scss'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './App'

const rerenderEntireTree = () => {
  ReactDOM.render(
    <HashRouter>
      <App store={store} />
    </HashRouter>,
    document.getElementById('root')
  )
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)
