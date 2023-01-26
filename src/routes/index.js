import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import About from '../pages/About'
import Category from '../pages/Category'
import Contact from '../pages/Contact'
import Delivery from '../pages/Delivery'
import Root from '../pages/Root'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Root />} />
      <Route path='category' element={<Category />} />
      <Route path='delivery' element={<Delivery />} />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
    </Route>
  )
)
const Routers = () => <RouterProvider router={router} />

export default Routers
