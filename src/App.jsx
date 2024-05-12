import './App.css'
import { Route, Routes } from 'react-router-dom'
import { orders } from './Conpanents/Pages'
import Doshboard from './Conpanents/Pages/Dashboard/Doshboard'
import Orders from './Conpanents/Pages/Orders/orders'

function App() {
	return (
		<Routes>
			<Route path={'/'} element={<Doshboard />} />
			<Route path={'/orders'} element={<Orders />} />
		</Routes>
	)
}

export default App
