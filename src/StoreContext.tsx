import React from 'react'
import { StoreType } from './redux'

const StoreContext = React.createContext<null | StoreType>(null)

type PropsType = {
  store: StoreType
}

export const Provider: React.FC<PropsType> = (props) => {
  return <StoreContext.Provider value={props.store}>
    {props.children}
  </StoreContext.Provider>
}

export default StoreContext