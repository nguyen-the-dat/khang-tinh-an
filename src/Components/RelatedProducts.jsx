import React from 'react';

const relatedProducts = [
	{
		id: 1,
		name: 'Sữa Bột Ngũ Cốc 25 Green Nutri',
		unit: 'Thùng 6 Lon',
		image: '/P1.png',
		oldPrice: 3720000,
		newPrice: 3480000,
		pricePerUnit: 580000,
	},
	{
		id: 2,
		name: 'Sữa Bột Ngũ Cốc 25 Green Nutri',
		unit: 'Thùng 6 Hộp',
		image: '/P1.png',
		oldPrice: 3720000,
		newPrice: 3480000,
		pricePerUnit: 580000,
	},
	{
		id: 3,
		name: 'Sữa Ngũ Cốc Dinh Dưỡng 25 Green Nutri',
		unit: '2 Thùng 12 Lon',
		image: '/P1.png',
		oldPrice: 7080000,
		newPrice: 6480000,
		pricePerUnit: 540000,
	},
];

export default function RelatedProducts() {
	return (
		<div className="py-10 px-4 sm:px-6 md:px-20 bg-[#FFF8F2]">
			<div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-10">
				{/* Phần mô tả */}
				<div className="p-4 md:p-8 w-full md:w-1/3">
					<p className="text-green-800 italic text-xl sm:text-2xl md:text-3xl font-[DancingScript] mb-2">
						Green Nutri
					</p>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-4">
						Các sản phẩm tương tự
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
						Tự hào là nguồn dinh dưỡng từ thiên nhiên giúp bảo vệ sức khỏe cho mỗi gia đình Việt.
					</p>
				</div>

				{/* Danh sách sản phẩm */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-2/3">
					{relatedProducts.map((product) => (
						<div
							key={product.id}
							className="bg-[#FAEFE0] rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
						>
							<img
								src={product.image}
								alt={product.name}
								className="w-full h-auto object-cover"
							/>
							<div className="p-4 sm:p-5 space-y-1">
								<h3 className="text-green-700 font-bold text-base sm:text-lg truncate">
									{product.name}
								</h3>
								<p className="text-sm sm:text-base text-gray-600">
									{product.unit}
								</p>
								<p className="text-sm text-gray-400 line-through">
									Giá gốc: {product.oldPrice.toLocaleString()}đ
								</p>
								<p className="text-sm sm:text-base text-gray-800 font-semibold">
									Khuyến mãi: {product.newPrice.toLocaleString()}đ
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
