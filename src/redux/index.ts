import { combineReducers, createStore} from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, devToolsEnhancer({}))

export default store