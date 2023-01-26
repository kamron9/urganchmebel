import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './navbar.module.css'
import ToggleMenu from './Toggle/ToggleMenu'
const Navbar = () => {
  const [show, setShow] = useState(false)
  const activeStyle = ({ isActive }) => {
    return isActive ? { color: '#dca061' } : null
  }
  return (
    <header className={styles.header}>
      <Link className={styles.header__logo} to={'/'}>
        Urganch Mebel
      </Link>
      <nav>
        <NavLink
          style={activeStyle}
          className={styles.nav__item}
          to={'/category'}
        >
          Katalog
        </NavLink>
        <NavLink
          style={activeStyle}
          className={styles.nav__item}
          to={'/delivery'}
        >
          Yetkazib Berish
        </NavLink>
        <NavLink style={activeStyle} className={styles.nav__item} to={'/about'}>
          Biz Haqimizda
        </NavLink>
      </nav>
      <Link className={styles.header__btn} to={'/contact'}>
        Bog'lanish
      </Link>
      {!show ? (
        <div onClick={() => setShow(!show)} className={styles.header__toggle}>
          <div className={styles.header__toggle_item}></div>
        </div>
      ) : (
        <ToggleMenu changeVisible={setShow} />
      )}
    </header>
  )
}
export default Navbar
