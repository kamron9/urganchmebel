import { Box } from '@mui/system'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Box
          sx={{
            marginTop: {
              xs: '70px',
              md: '20px',
              lg: '0',
            },
            padding: {
              xs: '30px',
              md: '70px',
              lg: '100px',
            },
          }}
        >
          <Outlet />
        </Box>
      </main>
      <footer>footer</footer>
    </>
  )
}

export default MainLayout
