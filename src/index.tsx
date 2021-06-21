import store from './redux'
import './index.scss'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import App from './App'

const rerenderEntireTree = () => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>,
    document.getElementById('root')
  )
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)
