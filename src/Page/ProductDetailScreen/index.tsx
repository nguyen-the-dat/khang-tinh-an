import React, { useState } from 'react';
import RelatedProducts from '../../Components/RelatedProducts';
import CustomerFeedbackSlider from '../../Components/CustomerFeedbackSlider';

export default function ProductDetailPage() {
	const [quantity, setQuantity] = useState(1);

	const handleDecrease = () => {
		if (quantity > 1) setQuantity(quantity - 1);
	};

	const handleIncrease = () => {
		setQuantity(quantity + 1);
	};

	const handleAddToCart = () => {
		// Gắn logic thực tế vào đây (gửi Redux, Context, API...)
		console.log('Đã thêm vào giỏ hàng:', {
			product: 'Trà Bí Thơm Baka',
			quantity,
		});
	};

	return (
		<div className="min-h-screen bg-[#FEFAF5]">
			<div className="max-w-6xl mx-auto bg-[#F2E6D4] rounded-lg overflow-hidden mt-40 px-4 py-10">
				<div className="flex flex-col lg:flex-row">
					{/* Hình ảnh sản phẩm */}
					<div className="lg:w-1/2 px-5 py-6 relative">
						<img
							src="/P1.png"
							alt="Trà Bí Thom Kháng Tinh An Product"
							className="w-full object-contain"
						/>
					</div>

					{/* Thông tin chi tiết */}
					<div className="lg:w-1/2 p-6 space-y-6">
						<h1 className="text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
							Trà Bí Thơm Baka - Bồi Bổ, Tăng Cường Sức Khỏe
						</h1>

						<p className="text-gray-700 leading-relaxed">
							Thức uống giải nhiệt, mát gan, giảm stress, cải
							thiện giấc ngủ, làm đẹp da, hỗ trợ tiêu hóa và giữ
							dáng.
						</p>

						<div className="space-y-2">
							<h3 className="font-semibold text-gray-800">
								Đối tượng
							</h3>
							<p className="text-gray-700">
								Phù hợp cho mọi đối tượng
							</p>
							<p className="text-gray-700">Trẻ em trên 1 tuổi</p>
						</div>

						<div className="space-y-2">
							<h3 className="font-semibold text-gray-800">
								Thành phần
							</h3>
							<p className="text-gray-700">
								Bí thơm, Táo đỏ, Ký tử, Đông trùng, Long nhãn,
								Lá nhàn, Lá dứa.
							</p>
						</div>

						<div className="space-y-2">
							<h3 className="font-semibold text-gray-800">
								Cách dùng
							</h3>
							<p className="text-gray-700">
								Pha 1 túi trà với 1,2 – 1,5L nước sôi, ủ 5-10
								phút. Uống nóng hoặc lạnh.
							</p>
							<p className="text-gray-700">
								Bảo quản: Nơi khô ráo, tránh ánh nắng trực tiếp.
							</p>
							<p className="text-gray-700">
								Khối lượng: 200g (20 gói x 10g)
							</p>
						</div>

						{/* Số lượng + Thêm giỏ hàng */}
						<div className="pt-4 flex items-center gap-4 flex-wrap">
							<div className="flex items-center border border-green-600 rounded-lg overflow-hidden">
								<button
									onClick={handleDecrease}
									className="px-3 py-2 text-green-700 hover:bg-green-100"
								>
									−
								</button>
								<span className="px-4 py-2  text-green-800 font-medium">
									{quantity}
								</span>
								<button
									onClick={handleIncrease}
									className="px-3 py-2 text-green-700 hover:bg-green-100"
								>
									+
								</button>
							</div>

							<button
								onClick={handleAddToCart}
								className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
							>
								Thêm vào giỏ hàng
							</button>
						</div>
					</div>
				</div>
			</div>

			<RelatedProducts />
			<CustomerFeedbackSlider />
		</div>
	);
}
