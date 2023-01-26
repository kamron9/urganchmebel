import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '100px' }}>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  )
}

export default MainLayout
