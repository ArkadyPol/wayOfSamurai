import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {PostType} from './components/Profile/MyPosts/MyPosts';
import {v1} from 'uuid';
import {DialogItemType} from './components/Dialogs/DialogItem/DialogItem';
import {MessageType} from './components/Dialogs/Dialogs';

const posts: Array<PostType> = [
  {id: v1(), message: 'It\'s my third post', likesCount: 1},
  {id: v1(), message: 'It\'s my second post', likesCount: 2},
  {id: v1(), message: 'It\'s my first post', likesCount: 3},
]

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


ReactDOM.render(
    <React.StrictMode>
      <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
