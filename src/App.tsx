import { Route } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { StoreType } from './redux/state'

type AppPropsType = {
  store: StoreType
}

function App({ store }: AppPropsType) {
  const state = store.getState()

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route
          path='/dialogs'
          render={() => <Dialogs state={state.dialogsPage} />}
        />
        <Route
          path='/profile'
          render={() => <Profile
            profilePage={state.profilePage}
            addPost={store.addPost.bind(store)}
            updateNewPostText={store.updateNewPostText.bind(store)}
          />}
        />
        <Route path='/news' render={News} />
        <Route path='/music' render={Music} />
        <Route path='/settings' render={Settings} />
      </div>
    </div>
  )
}

export default App
