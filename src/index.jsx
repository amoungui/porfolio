import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Error from './components/Error/Error'


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>
);