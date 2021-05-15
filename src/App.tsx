import {BrowserRouter, Route} from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs, {DialogItemType} from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {v1} from 'uuid';

function App() {
  const dialogsData: Array<DialogItemType> = [
    {id: v1(), name: 'Dimych'},
    {id: v1(), name: 'Andrey'},
    {id: v1(), name: 'Sveta'},
    {id: v1(), name: 'Sasha'},
    {id: v1(), name: 'Viktor'},
    {id: v1(), name: 'Valera'}
  ]

  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header/>
          <Navbar/>
          <div className="app-wrapper-content">
            <Route path="/dialogs" render={() => <Dialogs data={dialogsData}/>}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
          </div>
        </div>
      </BrowserRouter>
  )
}


export default App;
