import {BrowserRouter, Route} from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs, {MessageType} from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {v1} from 'uuid';
import {DialogItemType} from './components/Dialogs/DialogItem/DialogItem';
import {PostType} from './components/Profile/MyPosts/MyPosts';


function App() {
  const dialogs: Array<DialogItemType> = [
    {id: v1(), name: 'Dimych'},
    {id: v1(), name: 'Andrey'},
    {id: v1(), name: 'Sveta'},
    {id: v1(), name: 'Sasha'},
    {id: v1(), name: 'Viktor'},
    {id: v1(), name: 'Valera'}
  ]

  const messages: Array<MessageType> = [
    {id: v1(), message: 'Hi'},
    {id: v1(), message: 'How are you?'},
    {id: v1(), message: 'What are you doing?'},
  ]

  const posts: Array<PostType> = [
    {id: v1(), message: 'It\'s my third post', likesCount: 1},
    {id: v1(), message: 'It\'s my second post', likesCount: 2},
    {id: v1(), message: 'It\'s my first post', likesCount: 3},
  ]

  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header/>
          <Navbar/>
          <div className="app-wrapper-content">
            <Route path="/dialogs" render={() => <Dialogs dialogs={dialogs} messages={messages}/>}/>
            <Route path="/profile" render={()=> <Profile posts={posts}/>}/>
            <Route path="/news" render={News}/>
            <Route path="/music" render={Music}/>
            <Route path="/settings" render={Settings}/>
          </div>
        </div>
      </BrowserRouter>
  )
}


export default App;
