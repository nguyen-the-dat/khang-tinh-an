import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaShoppingCart } from 'react-icons/fa';
import 'swiper/css';

function ProductScreen() {
	const categories = [
		'25 Green Nutri',
		'25 Beta Glucare',
		'Organic Avocado',
		'Combo / Bộ sản phẩm',
		'Khuyến mãi',
	];

	const sortOptions = ['Mặc định', 'Giá tăng dần', 'Giá giảm dần'];

	const products = [
		{
			id: 1,
			name: 'Sữa Hạt Ngũ Cốc 25 Green Nutri',
			weight: 'Lon 750g',
			price: '620.000 ₫',
			image: '/p2.png',
			href: '/products/green-nutri-750g',
		},
		{
			id: 2,
			name: 'Sữa Ngũ Cốc Dinh Dưỡng 25 Green Nutri',
			weight: 'Hộp 625g',
			price: '620.000 ₫',
			image: '/p2.png',
			href: '/products/green-nutri-625g',
		},
		{
			id: 3,
			name: 'Sữa Ngũ Cốc Hạt 25 Green Nutri',
			weight: 'Hộp 300g',
			price: '315.000 ₫',
			image: '/p2.png',
			href: '/products/green-nutri-300g',
		},
		{
			id: 4,
			name: 'Sữa Cho Người Tiểu Đường 25 Beta Glucare',
			weight: 'Lon 750g',
			price: '790.000 ₫',
			image: '/p2.png',
			href: '/products/beta-glucare-750g',
		},
		{
			id: 5,
			name: 'Sữa Bột Ngũ Cốc 25 Beta Glucare',
			weight: 'Hộp 625g',
			price: '790.000 ₫',
			image: '/p2.png',
			href: '/products/beta-glucare-625g',
		},
		{
			id: 6,
			name: 'Sữa Ngũ Cốc Không Đường 25 Beta Glucare',
			weight: 'Hộp 300g',
			price: '400.000 ₫',
			image: '/p2.png',
			href: '/products/beta-glucare-300g',
		},
	];

	const customerReviews = [
		{
			review: `Cảm giác nhẹ bụng, dễ tiêu hơn hẳn sau vài ngày dùng đều đặn...`,
		},
		{
			review: `Giúp kiểm soát đường huyết tốt hơn. Tôi là người tiền tiểu đường...`,
		},
		{
			review: `Vị thanh mát, dễ chịu, và rất thơm...`,
		},
	];

	return (
		<div className="bg-[#FEFAF5] min-h-screen pt-20">
			<div className="max-w-7xl mx-auto px-4 py-8">
				<h1 className="text-3xl font-bold text-green-700 mb-10">SẢN PHẨM</h1>

				{/* Main layout grid */}
				<div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10">
					{/* Sidebar */}
					<aside className="space-y-10">
						<div>
							<h2 className="text-lg font-bold text-green-800 mb-4">DANH MỤC SẢN PHẨM</h2>
							<ul className="space-y-2 text-gray-700">
								{categories.map((cat, i) => (
									<li key={i} className="hover:text-green-600 cursor-pointer">
										{cat}
									</li>
								))}
							</ul>
						</div>

						<div>
							<h2 className="text-lg font-bold text-green-800 mb-4">SẮP XẾP</h2>
							<select className="w-full border border-gray-300 rounded-lg p-2">
								{sortOptions.map((opt, i) => (
									<option key={i} value={opt}>
										{opt}
									</option>
								))}
							</select>
						</div>
					</aside>

					{/* Product grid */}
					<section>
					
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
							{products.map((product) => (
								<div
									key={product.id}
									className="bg-[#F2E6D4] rounded-lg shadow-lg overflow-hidden flex flex-col"
								>
									<div className="p-4 text-center flex flex-col flex-1">
										<img
											src={product.image}
											alt={product.name}
											className="w-full h-[180px] object-contain mb-6"
										/>
										<h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
											{product.name}
										</h3>
										<p className="text-sm text-gray-600 mb-1">{product.weight}</p>
										<p className="text-xl font-bold text-gray-800 mb-4">
											{product.price}
										</p>
										<Link
											to={product.href}
											className="mt-auto bg-[#5A9F51] hover:bg-green-700 text-white px-4 py-2 rounded-full font-medium transition duration-200 inline-block"
										>
											Xem thêm
										</Link>
									</div>
								</div>
							))}
						</div>
	{/* Pagination indicator */}
						<div className="mt-10 flex justify-end text-sm text-gray-600">
							Showing 1–9 of 21 results
						</div>
						
					</section>
				</div>

				
			</div>
		</div>
	);
}

export default ProductScreen;
