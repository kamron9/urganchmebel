import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom'
import Mebel from '../components/gds/Mebel'
import MainLayout from '../layout/MainLayout'
import AboutPage from '../pages/AboutPage'
import CategoryPage from '../pages/CategoryPage'
import ContactPage from '../pages/ContactPage'
import DeliveryPage from '../pages/DeliveryPage'
import MainPage from '../pages/MainPage'
import ModalProvider from '../context/ModalContext'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<MainLayout />}>
			<Route path='/*' element={<MainPage />}>
				<Route path='mebel' element={<h1>hello</h1>} />
			</Route>
			<Route path='category' element={<CategoryPage />} />
			<Route path='delivery' element={<DeliveryPage />} />
			<Route path='contact' element={<ContactPage />} />
			<Route path='about' element={<AboutPage />} />
		</Route>
	)
)
const Routers = () => (
	<ModalProvider>
		<RouterProvider router={router} />
	</ModalProvider>
)

export default Routers
