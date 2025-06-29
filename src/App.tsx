import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';
import HomePage from './Page/HomePage';
import Main from './Components/base/Main';
import ScrollToTop from './Components/ScrollToTop';
import ProductScreen from './Page/ProductScreen';
import ProductDetailPage from './Page/ProductDetailScreen';
import Process from './Page/Process';
import ProductDetailPage1 from './Page/ProductDetailScreen/index1';

const App: React.FC = () => {
	return (
		<div className="App">
			<Router>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<HomePage />}>
						<Route index element={<Main />} />
						<Route path="products" element={<ProductScreen />} />
						<Route
							path="/products/id"
							element={<ProductDetailPage />}
						/>
						<Route
							path="/products/id1"
							element={<ProductDetailPage1 />}
						/>
						<Route path="process" element={<Process />} />

						<Route
							path="micro-market-solutions/:id"
							element={<ProductDetailPage />}
						/>
					</Route>
				</Routes>
			</Router>
		</div>
	);
};

export default App;
