import s from './Header.module.scss'

function Header() {
  return (
    <header className={s.header}>
      <img
        src="https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg"
        alt="logo"
      />
    </header>
  )
}

export default Header
