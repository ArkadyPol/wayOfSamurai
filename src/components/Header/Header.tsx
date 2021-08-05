import s from './Header.module.scss'
import { NavLink } from 'react-router-dom'

type PropsType = {
  isAuth: boolean
  login: string | null
}

function Header(props: PropsType) {
  return (
    <header className={s.header}>
      <img
        src='https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg'
        alt='logo'
      />
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>}
      </div>
    </header>
  )
}

export default Header
