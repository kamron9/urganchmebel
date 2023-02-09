import { Box } from '@mui/system'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from "../components/Footer/Footer";


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
     <Footer/>
    </>
  )
}

export default MainLayout
