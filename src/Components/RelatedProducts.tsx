import React from 'react';
import { products } from '../productData';
interface ProductInfoProps {
	productId: number;
}

export default function RelatedProducts({ productId }: ProductInfoProps) {
	// Lọc bỏ sản phẩm hiện tại
	const filteredProducts = products.filter((p) => p.id !== productId);

	// Trộn ngẫu nhiên và lấy 3 sản phẩm
	const randomProducts = [...filteredProducts]
		.sort(() => Math.random() - 0.5)
		.slice(0, 3);

	console.log('Related Products:', randomProducts);
	return (
		<div className="py-10 px-4 sm:px-6 md:px-20 bg-[#FFF8F2]">
			<div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-10">
				{/* Phần mô tả */}
				<div className="p-4 md:p-8 w-full md:w-1/3">
					<p className="text-green-800 italic text-xl sm:text-2xl md:text-3xl font-[DancingScript] mb-2">
						KhangTinhAn
					</p>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-4">
						Các sản phẩm tương tự
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
						Tự hào là nguồn dinh dưỡng từ thiên nhiên giúp bảo vệ
						sức khỏe cho mỗi gia đình Việt
					</p>
				</div>

				{/* Danh sách sản phẩm */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-2/3">
					{randomProducts.map((product) => {
						const oldPrice = Math.round(product.price * 1.2); // 120%
						return (
							<div
								key={product.id}
								className="bg-[#FAEFE0] rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
							>
								<img
									src={`.${product.image}`}
									alt={product.name}
									className="w-full h-auto object-cover"
								/>
								<div className="p-4 sm:p-5 space-y-2">
									<h3 className="text-green-700 font-bold text-base sm:text-lg leading-snug line-clamp-2">
										{product.name}
									</h3>

									<p className="text-sm text-gray-400 line-through">
										Giá gốc {oldPrice.toLocaleString()}đ
									</p>
									<p className="text-sm sm:text-base text-gray-800 font-semibold">
										Khuyến mãi{' '}
										{product.price.toLocaleString()}đ
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
