import { NavLink } from 'react-router-dom'
import s from './Navbar.module.scss'

function Navbar() {
  const links = ['profile', 'dialogs', 'news', 'music', 'settings']
  const linksElements = links.map((l, i) => <NavItem key={i} name={l} />)

  return <nav className={s.nav}>{linksElements}</nav>
}

type NavItemPropsType = {
  name: string
}

function NavItem({ name }: NavItemPropsType) {
  const text = name[0].toUpperCase() + name.slice(1)
  return (
    <div className={s.item}>
      <NavLink to={`/${name}`} activeClassName={s.active}>
        {text}
      </NavLink>
    </div>
  )
}

export default Navbar
