import { List, ListItem } from '@mui/material'
import { NavLink } from 'react-router-dom'
import styles from './toggle.module.css'
import { ReactComponent as Close } from '../../../assets/icons/close.svg'
import { Box } from '@mui/system'

const ToggleMenu = ({ changeVisible }) => {
  const activeStyle = ({ isActive }) => {
    return isActive
      ? { color: '#dca061', fontSize: '20px' }
      : { color: 'white', fontSize: '20px' }
  }
  return (
    <aside className={styles.toggleWrap}>
      <Box
        sx={{
          padding: '0 20px',
          width: '100%',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
        onClick={() => changeVisible(false)}
      >
        <Close />
      </Box>
      <List
        sx={{
          marginTop: '100px',
        }}
      >
        <ListItem>
          <NavLink style={activeStyle} to={'/'}>
            Bosh Sahifa
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink style={activeStyle} to={'/category'}>
            Katalog
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink style={activeStyle} to={'/delivery'}>
            Yetkazib berish
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink style={activeStyle} to={'/about'}>
            Biz Haqimizda
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink style={activeStyle} to={'/contact'}>
            Bog'lanish
          </NavLink>
        </ListItem>
      </List>
    </aside>
  )
}

export default ToggleMenu
