import { List, ListItem } from '@mui/material'
import { NavLink } from 'react-router-dom'
import styles from './toggle.module.css'

const ToggleMenu = ({ changeVisible }) => {
  const closeMenu = () => changeVisible(false)
  const activeStyle = ({ isActive }) => {
    return isActive
      ? { color: '#dca061', fontSize: '20px' }
      : { color: 'white', fontSize: '20px' }
  }
  return (
    <aside className={styles.toggleWrap}>
      <List
        sx={{
          marginTop: '100px',
        }}
      >
        <ListItem onClick={closeMenu}>
          <NavLink style={activeStyle} to={'/'}>
            Bosh Sahifa
          </NavLink>
        </ListItem>
        <ListItem onClick={closeMenu}>
          <NavLink style={activeStyle} to={'/category'}>
            Katalog
          </NavLink>
        </ListItem>
        <ListItem onClick={closeMenu}>
          <NavLink style={activeStyle} to={'/delivery'}>
            Yetkazib berish
          </NavLink>
        </ListItem>
        <ListItem onClick={closeMenu}>
          <NavLink style={activeStyle} to={'/about'}>
            Biz Haqimizda
          </NavLink>
        </ListItem>
        <ListItem onClick={closeMenu}>
          <NavLink style={activeStyle} to={'/contact'}>
            Bog'lanish
          </NavLink>
        </ListItem>
      </List>
    </aside>
  )
}

export default ToggleMenu
