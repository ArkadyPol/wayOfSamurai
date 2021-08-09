import { applyMiddleware, combineReducers, createStore } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

const composeEnhancers = composeWithDevTools({})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store