import React from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import NavBar from '../Nav';
import SubNavBar from '../SubNav';

interface IProps {
	type?: 'main' | 'sub';
	toggleCollapsed?: () => void;
	collapsed?: boolean;
}

const Header = (props: IProps) => {
	const { type = 'main', toggleCollapsed, collapsed } = props;
	const location = useLocation();

	// Kiểm tra nếu là trang sản phẩm chi tiết (/products/:slug)
	const isProductDetail = matchPath('/products/:sanPham', location.pathname);

	// Kiểm tra các path không muốn hiển thị banner
	const hideBanner =
		location.pathname === '/process' ||
		location.pathname === '/products' ||
		location.pathname === '/cart' ||
		location.pathname === '/check-out' ||
		location.pathname === '/check-out/order-success' ||
		isProductDetail;

	return (
		<div>
			<div>
				{type === 'main' && (
					<NavBar
						toggleCollapsed={toggleCollapsed}
						collapsed={collapsed}
					/>
				)}
				{type === 'sub' && (
					<SubNavBar
						toggleCollapsed={toggleCollapsed}
						collapsed={collapsed}
					/>
				)}
			</div>

			{/* Chỉ hiển thị banner nếu không nằm trong danh sách loại trừ */}
			{!hideBanner && (
				<div className="flex justify-center mt-16">
					<img
						src={'/banner.jpg'}
						className="w-full object-cover"
						alt="Banner"
					/>
				</div>
			)}
		</div>
	);
};

export default Header;
