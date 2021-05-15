import {BrowserRouter, Route} from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs, {MessageType} from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {DialogItemType} from './components/Dialogs/DialogItem/DialogItem';
import {PostType} from './components/Profile/MyPosts/MyPosts';


type AppPropsType = {
  posts: Array<PostType>
  dialogs: Array<DialogItemType>
  messages: Array<MessageType>
}

function App(props: AppPropsType) {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header/>
          <Navbar/>
          <div className="app-wrapper-content">
            <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
            <Route path="/profile" render={() => <Profile posts={props.posts}/>}/>
            <Route path="/news" render={News}/>
            <Route path="/music" render={Music}/>
            <Route path="/settings" render={Settings}/>
          </div>
        </div>
      </BrowserRouter>
  )
}


export default App;
