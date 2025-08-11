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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Import CartProvider
import { CartProvider } from './context/CartContext';
import Policy from './Page/Policy';
import PolicyPayment from './Page/Policy-Payment';
import SecurityPolicy from './Page/SecurityPolicy';
const App: React.FC = () => {
	return (
		<div className="App">
			<ToastContainer position="top-right" autoClose={2000} />

			<CartProvider>
				<Router>
					<ScrollToTop />
					<Routes>
						<Route path="/" element={<HomePage />}>
							<Route index element={<Main />} />

							<Route
								path="san-pham"
								element={<ProductScreen />}
							/>

							<Route
								path="/san-pham/:san-pham"
								element={<ProductDetailPage />}
							/>
							<Route
								path="/nguoi-tao-nen-san-pham"
								element={<Process />}
							/>
							<Route path="/gio-hang" element={<CartPage />} />
							<Route
								path="/chinh-sach-mua-hang"
								element={<Policy />}
							/>
							<Route
								path="/chinh-sach-thanh-toan"
								element={<PolicyPayment />}
							/>
							<Route
								path="/chinh-sach-bao-mat"
								element={<SecurityPolicy />}
							/>
							<Route
								path="/thanh-toan"
								element={<CheckoutPage />}
							/>
							<Route
								path="/thanh-toan/thanh-cong"
								element={<OrderSuccessPage />}
							/>
						</Route>
					</Routes>
				</Router>
			</CartProvider>
		</div>
	);
};

export default App;
