import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

const orderedItems = [
	{
		name: 'Tinh dầu nguyên chất (Lọ to 20ml)',
		qty: 2,
		type: 'Gói hương - Phong lữ',
		price: 400000,
	},
	{
		name: 'Tinh dầu nguyên chất (Lọ to 20ml)',
		qty: 1,
		type: 'Hương thảo - Bạc hà',
		price: 200000,
	},
];

const suggestedProducts = [
	{
		name: 'Nước tẩy trang Rau Má - 150ml',
		price: 120000,
		image: '/rau-ma-150ml.png',
	},
	{
		name: 'Nước tẩy trang Rau Má - 350ml',
		price: 250000,
		image: '/rau-ma-350ml.png',
	},
	{
		name: 'Lip Scrub Môi Hồng',
		price: 120000,
		image: '/lip-scrub.png',
	},
	{
		name: 'Dầu gội thảo dược Tóc Mây',
		price: 325000,
		image: '/toc-may.png',
		tag: 'Best Seller',
		rating: 4.9,
		reviews: 3228,
	},
	{
		name: 'Xà bông Hữu cơ (Tặng túi tạo bọt) - Mây (Hoa hồng)',
		price: 130000,
		image: '/xa-bong-may.png',
		rating: 5.0,
		reviews: 295,
	},
	{
		name: 'Xà bông Hữu cơ (Tặng túi tạo bọt) - Đêm (Mộc tê)',
		price: 130000,
		image: '/xa-bong-dem.png',
		rating: 5.0,
		reviews: 295,
	},
];
export default function OrderSuccessPage() {
	const [order, setOrder] = useState<any>(null);

	useEffect(() => {
		const savedOrder = localStorage.getItem('orderInfo');
		if (savedOrder) {
			setOrder(JSON.parse(savedOrder));
		}
	}, []);

	if (!order) {
		return (
			<p className="text-center mt-10">
				Không tìm thấy thông tin đơn hàng.
			</p>
		);
	}

	// Đảm bảo có giá trị mặc định
	const shippingFee = order.shippingFee || 0;
	const discount = order.discount || 0;
	const finalPrice = order.totalPrice + shippingFee - discount;

	return (
		<div className="max-w-[1200px] mx-auto px-4 py-10 text-[17px] text-gray-800">
			<h1 className="text-3xl font-bold text-center text-green-800 mb-2">
				Đặt hàng thành công!
			</h1>
			<p className="text-center mb-6">
				Cảm ơn anh/chị đã đặt mua hàng tại{' '}
				<span className="text-green-700 font-semibold">
					KhangTinhAn
				</span>
			</p>
			<p className="text-center mb-10">
				Đơn hàng của anh/chị đang được xử lý, KhangTinhAn sẽ sớm liên hệ
				lại để giao hàng.
			</p>

			{/* Order Info */}
			<div className="bg-white border rounded-xl p-6 shadow mb-8">
				<h2 className="font-bold text-lg mb-4">Thông tin đơn hàng</h2>
				<div className="space-y-4 border-b pb-4">
					{order.cart.map((item: any, idx: number) => (
						<div key={idx} className="flex justify-between">
							<div>
								<p>{item.name}</p>
								<p className="text-sm text-gray-500">
									x {item.quantity}{' '}
									{item.type && `| Loại: ${item.type}`}
								</p>
							</div>
							<p className="text-green-700 font-semibold">
								{(item.price * item.quantity).toLocaleString()}đ
							</p>
						</div>
					))}
				</div>

				<div className="pt-4 space-y-1">
					<div className="flex justify-between">
						<span className="font-medium">
							Tổng giá trị sản phẩm:
						</span>
						<span className="font-medium">
							{order.totalPrice.toLocaleString()}đ
						</span>
					</div>
					<div className="flex justify-between">
						<span>Phí vận chuyển:</span>
						<span className="text-green-700">
							+{shippingFee.toLocaleString()}đ
						</span>
					</div>
					<div className="flex justify-between">
						<span>Khuyến mãi:</span>
						<span>-{discount.toLocaleString()}đ</span>
					</div>
					<div className="flex justify-between font-semibold border-t pt-2 mt-2">
						<span>Tổng giá trị đơn hàng:</span>
						<span className="text-green-700">
							{finalPrice.toLocaleString()}đ
						</span>
					</div>
				</div>
			</div>

			{/* Shipping Info */}
			<div className="bg-white border rounded-xl p-6 shadow mb-8">
				<h2 className="font-bold text-lg mb-4">Thông tin nhận hàng</h2>
				<p>
					Tên người nhận:{' '}
					<span className="font-medium">{order.fullName}</span>
				</p>
				<p>
					Số điện thoại:{' '}
					<span className="font-medium">{order.phone}</span>
				</p>
				<p>
					Địa chỉ giao hàng:{' '}
					<span className="font-medium">{order.address}</span>
				</p>
				<p>
					Ghi chú:{' '}
					<span className="italic text-gray-500">
						{order.note || '(trống)'}
					</span>
				</p>
			</div>
		</div>
	);
}

// export default function OrderSuccessPage() {
//   return (
//     <div className="max-w-[1200px] mx-auto px-4 py-10 text-[17px] text-gray-800">
//       <h1 className="text-3xl font-bold text-center text-green-800 mb-2">Đặt hàng thành công!</h1>
//       <p className="text-center mb-6">
//         Cảm ơn anh/chị đã đặt mua hàng tại <span className="text-green-700 font-semibold">KhangTinhAn</span>
//       </p>
//       <p className="text-center mb-10">
//         Đơn hàng của anh/chị đang được xử lý, KhangTinhAn sẽ sớm liên hệ lại để giao hàng.
//       </p>

//       {/* Order Info */}
//       <div className="bg-white border rounded-xl p-6 shadow mb-8">
//         <h2 className="font-bold text-lg mb-4">Thông tin đơn hàng của anh/chị</h2>
//         <div className="space-y-4 border-b pb-4">
//           {orderedItems.map((item, idx) => (
//             <div key={idx} className="flex justify-between">
//               <div>
//                 <p>{item.name}</p>
//                 <p className="text-sm text-gray-500">x {item.qty}   |   Loại: {item.type}</p>
//               </div>
//               <p className="text-green-700 font-semibold">{item.price.toLocaleString()}đ</p>
//             </div>
//           ))}
//         </div>

//         <div className="pt-4 space-y-1">
//           <div className="flex justify-between">
//             <span className="font-medium">Tổng giá trị sản phẩm:</span>
//             <span className="font-medium">600.000đ</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Phí vận chuyển:</span>
//             <span className="text-green-700">+25.000đ</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Khuyến mãi:</span>
//             <span>0đ</span>
//           </div>
//           <div className="flex justify-between font-semibold border-t pt-2 mt-2">
//             <span>Tổng giá trị đơn hàng:</span>
//             <span className="text-green-700">625.000đ</span>
//           </div>
//         </div>
//       </div>

//       {/* Shipping Info */}
//       <div className="bg-white border rounded-xl p-6 shadow mb-8">
//         <h2 className="font-bold text-lg mb-4">Thông tin nhận hàng</h2>
//         <p>Tên người nhận: <span className="font-medium">dtgf</span></p>
//         <p>Số điện thoại: <span className="font-medium">0934646065</span></p>
//         <p>Địa chỉ giao hàng: <span className="font-medium">czczx</span></p>
//         <p>Ghi chú: <span className="italic text-gray-500">(trống)</span></p>
//       </div>

//       {/* Suggested Products */}
//       <h2 className="text-xl font-bold mb-4">Đừng bỏ lỡ</h2>
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//         {suggestedProducts.map((item, idx) => (
//           <div key={idx} className="bg-[#FDF9F4] rounded-xl p-4 shadow-sm relative">
//             {item.tag && (
//               <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
//                 {item.tag}
//               </span>
//             )}
//             <img src={item.image} alt={item.name} className="w-full h-[140px] object-contain mb-3" />
//             <h3 className="font-medium text-sm mb-1 min-h-[40px]">{item.name}</h3>
//             <p className="text-red-600 font-semibold mb-1">{item.price.toLocaleString()}đ</p>
//             {item.rating && (
//               <p className="text-sm text-gray-500">⭐ {item.rating} / {item.reviews.toLocaleString()} đánh giá</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
