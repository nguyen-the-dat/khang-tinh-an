import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Page/HomePage';
import Main from './Components/base/Main';
import ScrollToTop from './Components/ScrollToTop';
import ProductScreen from './Page/ProductScreen';
import ProductDetailPage from './Page/ProductDetailScreen';
import Process from './Page/Process';
import ProductDetailPage1 from './Page/ProductDetailScreen/index1';
import CartPage from './Page/CartPage';
import CheckoutPage from './Page/CheckoutPage';
import OrderSuccessPage from './Page/OrderSuccessPage';

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
							path="/products/:san-pham"
							element={<ProductDetailPage />}
						/>
						<Route path="process" element={<Process />} />
						<Route path="/cart" element={<CartPage />} />
						<Route path="/check-out" element={<CheckoutPage />} />
						<Route
							path="/check-out/order-success"
							element={<OrderSuccessPage />}
						/>
					</Route>
				</Routes>
			</Router>
		</div>
	);
};

export default App;
