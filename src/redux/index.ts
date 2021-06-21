import { combineReducers, createStore, Dispatch, Store } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import profileReducer, { ProfileReducerActionType } from './profile-reducer'
import dialogsReducer, { DialogsReducerActionType } from './dialogs-reducer'

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

type ActionType = ProfileReducerActionType | DialogsReducerActionType

export type AppDispatch = Dispatch<ActionType>

const store: Store<RootStateType, ActionType> = createStore(rootReducer, devToolsEnhancer({}))

export default store