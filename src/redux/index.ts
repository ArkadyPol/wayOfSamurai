import { combineReducers, createStore, Store } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import profileReducer, { ProfileReducerActionType } from './profile-reducer'
import dialogsReducer, { DialogsReducerActionType } from './dialogs-reducer'

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export type ActionType = ProfileReducerActionType | DialogsReducerActionType

const store: Store<RootStateType, ActionType> = createStore(rootReducer, devToolsEnhancer({}))

export type StoreType = typeof store

export default store