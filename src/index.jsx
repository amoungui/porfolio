import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { DataProvider } from "./contexts/DataContext";
import Home from './Pages/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Error from './components/Error/Error'


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<DataProvider>
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
	</DataProvider>
);

if ('serviceWorker' in navigator) {
	// Register a service worker hosted at the root of the
	// site using the default scope.
	navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/service-worker.js`).then(
	  registration => {
		console.log('Service worker registration succeeded:', registration);
	  },
	  /*catch*/ error => {
		console.error(`Service worker registration failed: ${error}`);
	  }
	);
  } else {
	console.error('Service workers are not supported.');
  }