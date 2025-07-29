import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CartPage = () => {
	const [quantity, setQuantity] = useState(1);

	const price = 391000;
	const vat = Math.round(price * 0.0741); // ví dụ VAT ~7.41%
	const total = price * quantity;

	return (
		<div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10  min-h-screen">
			{/* LEFT - Product Info */}
			<div className="lg:col-span-2">
				<h2 className="text-3xl font-bold mb-8">GIỎ HÀNG</h2>

				<div className="flex flex-col sm:flex-row gap-6 border-b pb-6">
					<img
						src="/P1.png"
						alt="Áo Thun"
						className="w-40 h-40 object-cover border"
					/>

					<div className="flex-1">
						<div className="flex justify-between">
							<h3 className="font-bold text-lg">
								Áo Thun Vải Waffle Dry Cổ Henley
							</h3>
							<button className="text-xl font-bold">
								&times;
							</button>
						</div>

						<div className="text-sm text-gray-700 mt-2 space-y-1">
							<p>Màu sắc: 31 BEIGE</p>
							<p>Kích cỡ: Unisex XS</p>
							<p>New Color</p>
						</div>

						<div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
							<div>
								<label className="font-bold mr-2">
									SỐ LƯỢNG
								</label>
								<select
									value={quantity}
									onChange={(e) =>
										setQuantity(+e.target.value)
									}
									className="border px-4 py-2 rounded"
								>
									{[1, 2, 3, 4, 5].map((num) => (
										<option key={num} value={num}>
											{num}
										</option>
									))}
								</select>
							</div>

							<div className="font-bold ml-auto sm:ml-0">
								TỔNG: {total.toLocaleString()} VND
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* RIGHT - Summary */}
			<div className="bg-[#F2E6D4] p-6 rounded space-y-4 h-fit">
				<h4 className="font-bold text-lg">
					TỔNG ĐƠN HÀNG | 1 SẢN PHẨM
				</h4>

				<div className="flex justify-between text-sm text-gray-800">
					<p>Tổng cộng</p>
					<p>{total.toLocaleString()} VND</p>
				</div>

				<div className="flex justify-between font-bold text-base">
					<p>TỔNG</p>
					<p>{total.toLocaleString()} VND</p>
				</div>

				<p className="text-xs text-gray-500">
					Đã bao gồm thuế giá trị gia tăng {vat.toLocaleString()} VND
				</p>

				<div className="font-bold text-base border-t pt-2">
					TỔNG ĐƠN ĐẶT HÀNG: {total.toLocaleString()} VND
				</div>

				<hr />

				<div className="text-sm flex justify-between items-center cursor-pointer">
					<span>🪙 Phiếu giảm giá</span>
					<span>➔</span>
				</div>

				<div className="text-sm flex justify-between items-center cursor-pointer">
					<span>🎁 Tùy chọn quà tặng</span>
					<span>➔</span>
				</div>

				<p className="text-xs text-gray-500 mt-2">
					Miễn phí giao hàng áp dụng cho đơn hàng giao tận nơi từ
					<b> 500.000VND </b>
					và tất cả các đơn nhận tại cửa hàng (Click & Collect).
				</p>

				
									<Link to="/check-out">
									
									<button className="w-full bg-green-600 text-white py-3 rounded font-semibold  transition">
					THANH TOÁN
				</button>
									</Link>

				
			</div>
		</div>
	);
};

export default CartPage;
