import { Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import ContentWrapper from './components/ContentWrapper'
import ProductDetail from './components/ProductDetail'
import ContentRowInfo from './components/ContentRowInfo'
import LastProductInDb from './components/LastProductInDb'
import SearchMovies from './components/SearchMovies'

import Users from './components/User'
import Products from './components/Products'
import UserDetail from './components/UserDetail'
// import Footer from './components/Footer'



import './App.css'

function App() {
	return (
		<div id="wrapper">

			{/* <!-- Sidebar --> */}
			<Sidebar />
			{/* <!-- End of Sidebar --> */}
			{/* <!-- Content Wrapper --> */}
			<Routes>
				<Route path="/" element={<ContentWrapper />} />

				<Route path="/product/:id" element={<ProductDetail />} />

				<Route path="/products" element={<Products />} />

				<Route path="/usuario/:id" element={<UserDetail />} />
				<Route path="/usuarios" element={<Users />} />
				
				<Route path="/movies" element={<ContentRowInfo />} />

				<Route path="/last-product" element={<LastProductInDb />} />

				<Route path="/search" element={<SearchMovies prueba="esta es una propiedad de prueba" />} />
				
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
			{/* <!-- End of Content Wrapper --> */}
		
		</div>
	)
}

export default App
