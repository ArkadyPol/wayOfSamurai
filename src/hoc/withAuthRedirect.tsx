import { Redirect } from 'react-router-dom'
import { RootStateType } from '../redux'
import { connect } from 'react-redux'
import { ComponentType } from 'react'

type MapStatePropsType = {
  isAuth: boolean
}

const mapStateToProps = ({ auth }: RootStateType): { isAuth: boolean } => ({ isAuth: auth.isAuth })

export function withAuthRedirect<T>(Component: ComponentType<T>) {
  function RedirectComponent(props: MapStatePropsType) {
    const {isAuth, ...restProps} = props
    if (!isAuth) return <Redirect to='/login' />
    return <Component {...restProps as T} />
  }

  return connect(mapStateToProps)(RedirectComponent)
}