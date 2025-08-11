import { Link } from 'react-router-dom';
import { products } from '../../productData';

function ProductScreen() {
	const categories = ['Tinh bột kháng', 'Trà giải nhiệt', 'Set quà tặng'];
	const sortOptions = ['Mặc định', 'Giá tăng dần', 'Giá giảm dần'];

	return (
		<div className="bg-[#FEFAF5] min-h-screen pt-20">
			<div className="max-w-7xl mx-auto px-4 py-8">
				<h1 className="text-3xl font-bold text-green-700 mb-10">
					SẢN PHẨM
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10">
					{/* Sidebar */}
					<aside className="space-y-10">
						<div>
							<h2 className="text-lg font-bold text-green-800 mb-4">
								DANH MỤC SẢN PHẨM
							</h2>
							<ul className="space-y-2 text-gray-700">
								{categories.map((cat, i) => (
									<li
										key={i}
										className="hover:text-green-600 cursor-pointer"
									>
										{cat}
									</li>
								))}
							</ul>
						</div>

						<div>
							<h2 className="text-lg font-bold text-green-800 mb-4">
								SẮP XẾP
							</h2>
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
									className="bg-[#F2E6D4] rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
								>
									{/* Product Image (full width, no padding) */}
									{/* <img
										src={product.image}
										alt={product.name}
										className="w-full h-[220px] object-cover"
									/> */}

									<img
										src={product.image}
										alt={product.name}
										className="
    w-full object-cover object-center
    h-[220px]
    max-sm:h-[300px]         
    max-sm:object-[50%_10%]  
  "
									/>

									{/* Product Content */}
									<div className="flex flex-col flex-1 p-4">
										<h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
											{product.name}
										</h3>
										<p className="text-sm text-gray-600 mb-1">
											{product.weight}
										</p>
										<p className="text-xl font-bold text-gray-800 mb-4">
											{product?.price &&
												formatCurrencyVND(
													product.price
												)}
										</p>

										{/* Button at bottom */}
										<div className="mt-auto">
											{product.id === 1 ||
											product.id === 2 ? (
												<Link
													to={product.href}
													className="w-full block text-center bg-[#5A9F51] hover:bg-green-700 text-white px-4 py-2 rounded-full font-medium transition duration-200"
												>
													Xem thêm
												</Link>
											) : (
												<button className="w-full bg-[#5A9F51] hover:bg-green-700 text-white px-4 py-2 rounded-full font-medium">
													Liên hệ
												</button>
											)}
										</div>
									</div>
								</div>
							))}
						</div>

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

function formatCurrencyVND(amount) {
	return new Intl.NumberFormat('vi-VN', {
		style: 'currency',
		currency: 'VND',
	}).format(amount);
}
