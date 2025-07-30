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
		location.pathname === '/nguoi-tao-nen-san-pham' ||
		location.pathname === '/gio-hang' ||
		location.pathname === '/chinh-sach-mua-hang' ||
		location.pathname === '/thanh-toan' ||
		location.pathname === '/thanh-toan/thanh-cong' ||
		location.pathname.startsWith('/san-pham') ||
		isProductDetail;

	return (
		<>
			{/* Phần Navigation fixed */}
			<div className="fixed top-0 left-0 w-full z-50 bg-[#FEFAF5] shadow-md">
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

			{/* Thêm padding-top để nội dung không bị che */}
			<div className="pt-[80px]">
				{/* Chỉ hiển thị banner nếu không nằm trong danh sách loại trừ */}
				{!hideBanner && (
					<div className="flex justify-center">
						<img
							src={'/banner.jpg'}
							className="w-full object-cover"
							alt="Banner"
						/>
					</div>
				)}
			</div>
		</>
	);
};

export default Header;
