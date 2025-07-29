import React, { useState } from 'react';
import RelatedProducts from '../../Components/RelatedProducts';
import CustomerFeedbackSlider from '../../Components/CustomerFeedbackSlider';
import { products } from '../../productData';
import { useLocation } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import ProductInfo from './ProductInfo';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-toastify';

export default function ProductDetailPage() {
	const [quantity, setQuantity] = useState(1);
	const [showSuccess, setShowSuccess] = useState(false);
	const { addToCart } = useCart();

	const location = useLocation();
	const path = location.pathname.replace(/^\//, '');

	const product = products.find((item) => item.slug === path);
	if (!product)
		return <div className="mt-40 text-center">Sản phẩm không tồn tại</div>;

	const handleAddToCart = () => {
		addToCart({
			id: product.id,
			name: product.name,
			price: product.price,
			image: product.image,
			quantity,
		});

		toast.success(`Đã thêm vào giỏ hàng!`);
	};

	return (
		<div className="min-h-screen bg-[#FEFAF5] relative">
			<div className="max-w-6xl mx-auto bg-[#F2E6D4] rounded-lg overflow-hidden mt-40 px-4 py-10">
				<div className="flex flex-col lg:flex-row">
					{/* Hình ảnh sản phẩm */}
					<div className="lg:w-1/2 px-5 py-6 relative">
						<img
							src={`.${product.image}`}
							alt={product.name}
							className="w-full object-contain"
						/>
					</div>

					{/* Thông tin chi tiết */}
					<div className="lg:w-1/2 p-6 space-y-6">
						<h2 className="text-xl font-semibold text-gray-800">
							{product.name}
						</h2>
						<p className="text-gray-500 text-sm mt-1">
							Cải thiện tình trạng căng thẳng, mất ngủ
						</p>

						{/* Rating */}
						<div className="flex items-center mt-2 gap-1 text-yellow-400">
							{Array.from({ length: 5 }).map((_, i) => (
								<FaStar key={i} />
							))}
							<span className="ml-2 text-blue-500 underline text-sm cursor-pointer">
								Xem 764 đánh giá từ khách đã mua hàng
							</span>
						</div>

						{/* Price */}
						<div className="text-2xl font-bold text-red-500 mt-2">
							{product.price.toLocaleString('vi-VN', {
								style: 'currency',
								currency: 'VND',
							})}
						</div>

						{/* Quantity and Add to Cart */}
						<div className="mt-4 flex items-center gap-3">
							<div className="flex items-center border rounded-lg">
								<button
									className="px-3 py-1 text-lg"
									onClick={() =>
										setQuantity((q) => Math.max(1, q - 1))
									}
								>
									-
								</button>
								<span className="px-4">{quantity}</span>
								<button
									className="px-3 py-1 text-lg"
									onClick={() => setQuantity((q) => q + 1)}
								>
									+
								</button>
							</div>
							<button
								className="flex-1 bg-green-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium"
								onClick={handleAddToCart}
							>
								Thêm vào giỏ hàng
							</button>
						</div>

						{/* Hotline */}
						<p className="text-sxs text-gray-600 mt-3">
							Nếu bạn muốn mua hàng với số lượng lớn, xin vui lòng
							liên hệ Hotline:{' '}
							<span className="text-green-600 font-semibold">
								+84 918 755 632
							</span>{' '}
							hoặc Zalo:{' '}
							<span className="text-green-600 font-semibold">
								0968622511
							</span>
							. Kháng Tinh An chân thành cảm ơn bạn!
						</p>

						{/* Commitments */}
						<div className="mt-4 space-y-1 text-sm">
							<p className="text-green-600">
								✅ CAM KẾT Không hương liệu hóa học độc hại
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Các section khác */}
			<ProductInfo productId={product.id} />
			<RelatedProducts productId={product.id} />
			<CustomerFeedbackSlider />
		</div>
	);
}
