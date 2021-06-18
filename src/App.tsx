import { Route } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { StoreType } from './redux'
import DialogsContainer from './components/Dialogs/DialogsContainer'

type AppPropsType = {
  store: StoreType
}

function App({ store }: AppPropsType) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route
          path='/dialogs'
          render={() => <DialogsContainer store={store} />}
        />
        <Route
          path='/profile'
          render={() => <Profile store={store} />}
        />
        <Route path='/news' render={News} />
        <Route path='/music' render={Music} />
        <Route path='/settings' render={Settings} />
      </div>
    </div>
  )
}

export default App
