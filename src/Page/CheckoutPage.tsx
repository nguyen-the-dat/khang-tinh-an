import React from 'react';
import { Link } from 'react-router-dom';

export default function CheckoutPage() {
	return (
		<div className="max-w-[1280px] min-h-screen mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-[17px]">
			{/* Form thông tin nhận hàng */}
			<div className="md:col-span-2 space-y-6">
				<h2 className="text-2xl font-semibold">Thông tin nhận hàng</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<input
						type="text"
						placeholder="Họ tên"
						className="border rounded p-3 w-full"
					/>
					<input
						type="text"
						placeholder="Số điện thoại"
						className="border rounded p-3 w-full"
					/>
					<input
						type="email"
						placeholder="Email"
						className="border rounded p-3 w-full md:col-span-2"
					/>
					<input
						type="text"
						placeholder="Địa chỉ (VD: 123 Hoàng Cầu)"
						className="border rounded p-3 w-full md:col-span-2"
					/>
					<select className="border rounded p-3 w-full">
						<option>Chọn Tỉnh/thành phố</option>
					</select>
					<select className="border rounded p-3 w-full">
						<option>Chọn Quận/huyện</option>
					</select>
					<select className="border rounded p-3 w-full md:col-span-2">
						<option>Chọn Phường/xã</option>
					</select>
					<textarea
						placeholder="Ghi chú thêm (VD: Giao giờ hành chính)"
						className="border rounded p-3 w-full md:col-span-2 h-24"
					/>
				</div>

				<h2 className="text-2xl font-semibold mt-10">
					Chọn Hình thức thanh toán
				</h2>
				<div className="space-y-4">
					<label className="flex items-center gap-3">
						<input type="radio" name="payment" defaultChecked />
						<span>Thanh toán khi nhận hàng (COD)</span>
					</label>
					<label className="flex items-center gap-3">
						<input type="radio" name="payment" />
						<span>Thẻ ATM / Credit / Debit Card (VNPAY)</span>
					</label>
					<label className="flex items-center gap-3">
						<input type="radio" name="payment" />
						<span>Ví điện tử ZaloPay</span>
					</label>
					<label className="flex items-center gap-3">
						<input type="radio" name="payment" />
						<span>Ví MOMO</span>
					</label>
				</div>

				<div className="mt-6 flex items-start gap-2">
					<input type="checkbox" className="mt-1" />
					<p>
						Bằng việc nhấn vào nút thanh toán tức bạn đã đồng ý với
						các{' '}
						<a href="#" className="text-green-600 underline">
							chính sách mua hàng
						</a>
						,{' '}
						<a href="#" className="text-green-600 underline">
							thanh toán
						</a>{' '}
						và{' '}
						<a href="#" className="text-green-600 underline">
							bảo mật thông tin
						</a>
						.
					</p>
				</div>

				<Link to="order-success">
					<button className="mt-6 w-full bg-green-600 text-white font-semibold py-4 rounded hover:bg-green-700 transition duration-200">
						Xác nhận đặt hàng
					</button>
				</Link>
			</div>

			{/* Tổng đơn hàng và khuyến mãi */}
			<div className="space-y-6">
				<h2 className="text-xl font-semibold">
					Chương trình khuyến mãi
				</h2>
				<div className="border rounded p-4 space-y-2 bg-gray-50">
					<p>
						<strong>MUATANG1:</strong> Mua 2 sản phẩm bất kỳ tặng 1
						bộ vitamin C
					</p>
					<p>
						<strong>TANGTAYTRANG:</strong> Tặng 1 tẩy trang to
					</p>
				</div>
				<div className="flex gap-2">
					<input
						type="text"
						placeholder="Mã giảm giá"
						className="border rounded p-2 flex-1"
					/>
					<button className="bg-orange-400 text-white px-4 rounded">
						Áp dụng
					</button>
				</div>

				<div className="border rounded p-4 space-y-2 bg-gray-50 text-right">
					<p>
						Tổng giá trị đơn:{' '}
						<strong className="text-black">600.000đ</strong>
					</p>
					<p>
						Phí giao hàng:{' '}
						<strong className="text-black">25.000đ</strong>
					</p>
					<p>
						Giảm giá: <strong className="text-black">0đ</strong>
					</p>
					<hr />
					<p className="text-lg font-bold">
						Tổng thanh toán:{' '}
						<span className="text-red-600">625.000đ</span>
					</p>
					<p className="text-sm text-green-600">Tiết kiệm</p>
				</div>
			</div>
		</div>
	);
}
